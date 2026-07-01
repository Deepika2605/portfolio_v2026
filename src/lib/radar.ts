// @ts-nocheck
// The MIT License (MIT) — Copyright (c) 2017-2024 Zalando SE
// Adapted for React: imports d3 as a module and exports radar_visualization.

import * as d3 from 'd3'
import { trackEvent } from './analytics'

export function radar_visualization(config) {
  config.svg_id = config.svg || 'radar'
  config.width = config.width || 1450
  config.height = config.height || 1000
  config.colors =
    'colors' in config
      ? config.colors
      : {
          background: '#fff',
          grid: '#dddde0',
          inactive: '#ddd',
        }
  config.print_layout = 'print_layout' in config ? config.print_layout : true
  config.links_in_new_tabs =
    'links_in_new_tabs' in config ? config.links_in_new_tabs : true
  config.repo_url = config.repo_url || '#'
  config.print_ring_descriptions_table =
    'print_ring_descriptions_table' in config
      ? config.print_ring_descriptions_table
      : false
  config.legend_offset = config.legend_offset || [
    { x: 450, y: 90 },
    { x: -675, y: 90 },
    { x: -675, y: -310 },
    { x: 450, y: -310 },
  ]
  config.title_offset = config.title_offset || { x: -675, y: -420 }
  config.footer_offset = config.footer_offset || { x: -155, y: 450 }
  config.legend_column_width = config.legend_column_width || 140
  config.legend_line_height = config.legend_line_height || 10

  let seed = 42
  function random() {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  function random_between(min, max) {
    return min + random() * (max - min)
  }

  function normal_between(min, max) {
    return min + (random() + random()) * 0.5 * (max - min)
  }

  const quadrants = [
    { radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1 },
    { radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1 },
    { radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1 },
    { radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1 },
  ]

  // Increased radii to make the radar bigger (three rings)
  const rings = [
    { radius: 160 },
    { radius: 280 },
    { radius: 400 },
  ]

  function polar(cartesian) {
    const x = cartesian.x
    const y = cartesian.y
    return {
      t: Math.atan2(y, x),
      r: Math.sqrt(x * x + y * y),
    }
  }

  function cartesian(polar) {
    return {
      x: polar.r * Math.cos(polar.t),
      y: polar.r * Math.sin(polar.t),
    }
  }

  function bounded_interval(value, min, max) {
    const low = Math.min(min, max)
    const high = Math.max(min, max)
    return Math.min(Math.max(value, low), high)
  }

  function bounded_ring(polar, r_min, r_max) {
    return {
      t: polar.t,
      r: bounded_interval(polar.r, r_min, r_max),
    }
  }

  function bounded_box(point, min, max) {
    return {
      x: bounded_interval(point.x, min.x, max.x),
      y: bounded_interval(point.y, min.y, max.y),
    }
  }

  function segment(quadrant, ring) {
    const polar_min = {
      t: quadrants[quadrant].radial_min * Math.PI,
      r: ring === 0 ? 30 : rings[ring - 1].radius,
    }
    const polar_max = {
      t: quadrants[quadrant].radial_max * Math.PI,
      r: rings[ring].radius,
    }
    const cartesian_min = {
      x: 15 * quadrants[quadrant].factor_x,
      y: 15 * quadrants[quadrant].factor_y,
    }
    const cartesian_max = {
      x: rings[rings.length - 1].radius * quadrants[quadrant].factor_x,
      y: rings[rings.length - 1].radius * quadrants[quadrant].factor_y,
    }
    return {
      clipx(d) {
        const c = bounded_box(d, cartesian_min, cartesian_max)
        const p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15)
        d.x = cartesian(p).x
        return d.x
      },
      clipy(d) {
        const c = bounded_box(d, cartesian_min, cartesian_max)
        const p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15)
        d.y = cartesian(p).y
        return d.y
      },
      random() {
        return cartesian({
          t: random_between(polar_min.t, polar_max.t),
          r: normal_between(polar_min.r, polar_max.r),
        })
      },
    }
  }

  for (let i = 0; i < config.entries.length; i++) {
    const entry = config.entries[i]
    entry.segment = segment(entry.quadrant, entry.ring)
    const point = entry.segment.random()
    entry.x = point.x
    entry.y = point.y
    entry.color =
      entry.active || config.print_layout
        ? config.rings[entry.ring].color
        : config.colors.inactive
  }

  const segmented = new Array(4)
  for (let quadrant = 0; quadrant < 4; quadrant++) {
    segmented[quadrant] = new Array(rings.length)
    for (let ring = 0; ring < rings.length; ring++) {
      segmented[quadrant][ring] = []
    }
  }
  for (let i = 0; i < config.entries.length; i++) {
    const entry = config.entries[i]
    segmented[entry.quadrant][entry.ring].push(entry)
  }

  let id = 1
  for (const quadrant of [2, 3, 1, 0]) {
    for (let ring = 0; ring < rings.length; ring++) {
      const entries = segmented[quadrant][ring]
      entries.sort((a, b) => a.label.localeCompare(b.label))
      for (let i = 0; i < entries.length; i++) {
        entries[i].id = '' + id++
      }
    }
  }

  function translate(x, y) {
    return 'translate(' + x + ',' + y + ')'
  }

  function viewbox(quadrant) {
    // compute viewbox dynamically from outer ring radius so the
    // larger radar does not get clipped
    const outer = rings[rings.length - 1].radius + 120
    const pad = 20
    const x = Math.max(0, quadrants[quadrant].factor_x * outer) - (outer + pad)
    const y = Math.max(0, quadrants[quadrant].factor_y * outer) - (outer + pad)
    const w = outer * 2 + pad * 2
    const h = outer * 2 + pad * 2
    return [x, y, w, h].join(' ')
  }

  config.scale = config.scale || 1
  const scaled_width = config.width * config.scale
  const scaled_height = config.height * config.scale

  // Ensure quadrants array exists and has at least 4 elements to avoid runtime errors
  if (!config.quadrants || !Array.isArray(config.quadrants)) {
    config.quadrants = []
  }
  for (let i = 0; i < 4; i++) {
    if (!config.quadrants[i]) config.quadrants[i] = { name: 'Quadrant ' + (i + 1) }
  }

  // Ensure config.rings has entries for each internal ring definition
  if (!config.rings || !Array.isArray(config.rings)) {
    config.rings = []
  }
  for (let i = 0; i < rings.length; i++) {
    if (!config.rings[i]) {
      config.rings[i] = { name: 'Ring ' + (i + 1), color: config.colors?.inactive || '#999' }
    }
  }

  const svg = d3
    .select('svg#' + config.svg_id)
    .style('background-color', config.colors.background)
    .attr('width', scaled_width)
    .attr('height', scaled_height)

  const radar = svg.append('g')
  // apply a default text fill color so labels remain visible on dark backgrounds
  radar.attr('fill', config.text_color || '#fff')
  if ('zoomed_quadrant' in config) {
    svg.attr('viewBox', viewbox(config.zoomed_quadrant))
  } else {
    radar.attr(
      'transform',
      translate(scaled_width / 2, scaled_height / 2).concat(
        `scale(${config.scale})`,
      ),
    )
  }

  const grid = radar.append('g')
  config.font_family = config.font_family || 'Arial, Helvetica'

  grid
    .append('line')
    .attr('x1', 0)
    .attr('y1', -400)
    .attr('x2', 0)
    .attr('y2', 400)
    .style('stroke', config.colors.grid)
    .style('stroke-width', 1)
  grid
    .append('line')
    .attr('x1', -400)
    .attr('y1', 0)
    .attr('x2', 400)
    .attr('y2', 0)
    .style('stroke', config.colors.grid)
    .style('stroke-width', 1)

  const defs = grid.append('defs')
  const filter = defs
    .append('filter')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 1)
    .attr('height', 1)
    .attr('id', 'solid')
  filter.append('feFlood').attr('flood-color', 'rgb(0, 0, 0, 0.8)')
  filter.append('feComposite').attr('in', 'SourceGraphic')

  for (let i = 0; i < rings.length; i++) {
    grid
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', rings[i].radius)
      .style('fill', 'none')
      .style('stroke', config.colors.grid)
      .style('stroke-width', 1)
    if (config.print_layout) {
      grid
        .append('text')
        .text(config.rings[i].name)
        .attr('y', -rings[i].radius + 62)
        .attr('text-anchor', 'middle')
        .style('fill', config.rings[i].color)
        .style('opacity', 0.35)
        .style('font-family', config.font_family)
        .style('font-size', '42px')
        .style('font-weight', 'bold')
        .style('pointer-events', 'none')
        .style('user-select', 'none')
    }
  }

  function legend_transform(
    quadrant,
    ring,
    legendColumnWidth,
    index = null,
    previousHeight = null,
  ) {
    const dx = ring < 2 ? 0 : legendColumnWidth
    let dy = index == null ? -16 : index * config.legend_line_height

    if (ring % 2 === 1) {
      dy = dy + 36 + previousHeight
    }

    return translate(
      config.legend_offset[quadrant].x + dx,
      config.legend_offset[quadrant].y + dy,
    )
  }

  if (config.print_layout) {
    radar
      .append('a')
      .attr('href', config.repo_url)
      .attr('transform', translate(config.title_offset.x, config.title_offset.y))
      .append('text')
      .attr('class', 'hover-underline')
      .text(config.title)
      .style('font-family', config.font_family)
      .style('font-size', '30')
      .style('font-weight', 'bold')

    radar
      .append('text')
      .attr(
        'transform',
        translate(config.title_offset.x, config.title_offset.y + 20),
      )
      .text(config.date || '')
      .style('font-family', config.font_family)
      .style('font-size', '16')
      .style('fill', '#999')

    radar
      .append('text')
      .attr('transform', translate(config.footer_offset.x, config.footer_offset.y))
      .text('▲ moved up ▼ moved down ★ new ⬤ no change')
      .attr('xml:space', 'preserve')
      .style('font-family', config.font_family)
      .style('font-size', '15px')

    const legend = radar.append('g')
    for (let quadrant = 0; quadrant < 4; quadrant++) {
      legend
        .append('text')
        .attr(
          'transform',
          translate(
            config.legend_offset[quadrant].x,
            config.legend_offset[quadrant].y - 45,
          ),
        )
        .text(config.quadrants[quadrant].name)
        .style('font-family', config.font_family)
        .style('font-size', '20px')
        .style('font-weight', 'bold')
      let previousLegendHeight = 0
      for (let ring = 0; ring < config.rings.length; ring++) {
        if (ring % 2 === 0) {
          previousLegendHeight = 0
        }
        legend
          .append('text')
          .attr(
            'transform',
            legend_transform(
              quadrant,
              ring,
              config.legend_column_width,
              null,
              previousLegendHeight,
            ),
          )
          .text(config.rings[ring].name)
          .style('font-family', config.font_family)
          .style('font-size', '15px')
          .style('font-weight', 'bold')
          .style('fill', config.rings[ring].color)
        legend
          .selectAll('.legend' + quadrant + ring)
          .data(segmented[quadrant][ring])
          .enter()
          .append('a')
          .attr('href', function (d) {
            return d.link ? d.link : '#'
          })
          .attr('target', function (d) {
            return d.link && config.links_in_new_tabs ? '_blank' : null
          })
          .append('text')
          .attr('transform', function (d, i) {
            return legend_transform(
              quadrant,
              ring,
              config.legend_column_width,
              i,
              previousLegendHeight,
            )
          })
          .attr('class', 'legend' + quadrant + ring)
          .attr('id', function (d) {
            return 'legendItem' + d.id
          })
          .text(function (d) {
            return d.id + '. ' + d.label
          })
          .style('font-family', config.font_family)
          .style('font-size', '15px')
          .on('mouseover', function (event, d) {
            showBubble(d)
            highlightLegendItem(d)
          })
          .on('mouseout', function (event, d) {
            hideBubble(d)
            unhighlightLegendItem(d)
          })
          .call(wrap_text)
          .each(function () {
            previousLegendHeight += d3.select(this).node().getBBox().height
          })
      }
    }
  }

  function wrap_text(text) {
    let heightForNextElement = 0

    text.each(function () {
      const textElement = d3.select(this)
      const words = textElement.text().split(' ')
      const line = []

      const number = `${textElement.text().split('.')[0]}. |`
      const legendNumberText = textElement.append('tspan').text(number)
      const legendBar = textElement.append('tspan').text('|')
      const numberWidth =
        legendNumberText.node().getComputedTextLength() -
        legendBar.node().getComputedTextLength()

      textElement.text(null)

      let tspan = textElement
        .append('tspan')
        .attr('x', 0)
        .attr('y', heightForNextElement)
        .attr('dy', 0)

      for (let position = 0; position < words.length; position++) {
        line.push(words[position])
        tspan.text(line.join(' '))

        if (
          tspan.node().getComputedTextLength() > config.legend_column_width &&
          position !== 1
        ) {
          line.pop()
          tspan.text(line.join(' '))
          line.length = 0
          line.push(words[position])

          tspan = textElement
            .append('tspan')
            .attr('x', numberWidth)
            .attr('dy', config.legend_line_height)
            .text(words[position])
        }
      }

      const textBoundingBox = textElement.node().getBBox()
      heightForNextElement = textBoundingBox.y + textBoundingBox.height
    })
  }

  const rink = radar.append('g').attr('id', 'rink')

  const bubble = radar
    .append('g')
    .attr('id', 'bubble')
    .attr('x', 0)
    .attr('y', 0)
    .style('opacity', 0)
    .style('pointer-events', 'none')
    .style('user-select', 'none')
  bubble.append('rect').attr('rx', 4).attr('ry', 4).style('fill', '#333')
  bubble
    .append('text')
    .style('font-family', config.font_family)
    .style('font-size', '12px')
    .style('fill', '#fff')
  bubble
    .append('path')
    .attr('d', 'M 0,0 10,0 5,8 z')
    .style('fill', '#333')

  function showBubble(d) {
    if (d.active || config.print_layout) {
      const tooltip = d3.select('#bubble text').text(d.label)
      const bbox = tooltip.node().getBBox()
      d3.select('#bubble')
        .attr('transform', translate(d.x - bbox.width / 2, d.y - 16))
        .style('opacity', 0.8)
      d3.select('#bubble rect')
        .attr('x', -5)
        .attr('y', -bbox.height)
        .attr('width', bbox.width + 10)
        .attr('height', bbox.height + 4)
      d3.select('#bubble path').attr(
        'transform',
        translate(bbox.width / 2 - 5, 3),
      )
    }
  }

  function hideBubble() {
    d3.select('#bubble')
      .attr('transform', translate(0, 0))
      .style('opacity', 0)
  }

  function highlightLegendItem(d) {
    const legendItem = document.getElementById('legendItem' + d.id)
    if (legendItem) {
      legendItem.setAttribute('filter', 'url(#solid)')
      legendItem.setAttribute('fill', 'white')
    }
  }

  function unhighlightLegendItem(d) {
    const legendItem = document.getElementById('legendItem' + d.id)
    if (legendItem) {
      legendItem.removeAttribute('filter')
      legendItem.removeAttribute('fill')
    }
  }

  const blips = rink
    .selectAll('.blip')
    .data(config.entries)
    .enter()
    .append('g')
    .on('click', function (event, d) {
      trackEvent('radar_blip_click', {
        label: d.label,
        quadrant: config.quadrants[d.quadrant]?.name || d.quadrant,
        ring: config.rings[d.ring]?.name || d.ring,
        link: d.link || null,
        transport_type: 'beacon',
      })
    })
    .attr('class', 'blip')
    .attr('transform', function (d, i) {
      return legend_transform(
        d.quadrant,
        d.ring,
        config.legend_column_width,
        i,
      )
    })
    .on('mouseover', function (event, d) {
      showBubble(d)
      highlightLegendItem(d)
    })
    .on('mouseout', function (event, d) {
      hideBubble()
      unhighlightLegendItem(d)
    })

  blips.each(function (d) {
    let blip = d3.select(this)

    if (d.active && Object.prototype.hasOwnProperty.call(d, 'link') && d.link) {
      blip = blip.append('a').attr('xlink:href', d.link)
      if (config.links_in_new_tabs) {
        blip.attr('target', '_blank')
      }
    }

    if (d.moved == 1) {
      blip
        .append('path')
        .attr('d', 'M -11,5 11,5 0,-13 z')
        .style('fill', d.color)
    } else if (d.moved == -1) {
      blip
        .append('path')
        .attr('d', 'M -11,-5 11,-5 0,13 z')
        .style('fill', d.color)
    } else if (d.moved == 2) {
      blip
        .append('path')
        .attr('d', d3.symbol().type(d3.symbolStar).size(400))
        .style('fill', d.color)
    } else {
      blip.append('circle').attr('r', 12).attr('fill', d.color)
    }

    if (d.active || config.print_layout) {
      const blip_text = config.print_layout ? d.id : d.label.match(/[a-z]/i)
      blip
        .append('text')
        .text(blip_text)
        .attr('y', 3)
        .attr('text-anchor', 'middle')
        .style('fill', '#fff')
        .style('font-family', config.font_family)
        .style('font-size', function () {
          return blip_text.length > 2 ? '11px' : '12px'
        })
        .style('pointer-events', 'none')
        .style('user-select', 'none')
    }
  })

  function ticked() {
    blips.attr('transform', function (d) {
      return translate(d.segment.clipx(d), d.segment.clipy(d))
    })
  }

  d3.forceSimulation()
    .nodes(config.entries)
    .velocityDecay(0.19)
    // bump collision radius so larger blips don't overlap as much
    .force('collision', d3.forceCollide().radius(18).strength(0.85))
    .on('tick', ticked)
}
