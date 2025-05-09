'use client'

import { useState, useRef, useEffect } from 'react'

export default function SpotlightBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: -9999, y: -9999 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isInBounds, setIsInBounds] = useState(false)

  const [radius, setRadius] = useState(120)
  const shrinkTimeout = useRef<NodeJS.Timeout | undefined>(undefined)
  const animFrame = useRef<number | undefined>(undefined)

  const INNER_RADIUS = 120
  const OUTER_RADIUS = 150
  const MAX_FADE = OUTER_RADIUS - INNER_RADIUS
  const MAX_OFFSET = 30

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }

    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setCoords({ x, y })
        setIsInBounds(true)

        setRadius(INNER_RADIUS)
        scheduleShrink()
      } else {
        setIsInBounds(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)

      if (shrinkTimeout.current) clearTimeout(shrinkTimeout.current)
      if (animFrame.current) cancelAnimationFrame(animFrame.current)
    }
  }, [])

  const scheduleShrink = () => {
    if (shrinkTimeout.current) clearTimeout(shrinkTimeout.current)
    if (animFrame.current) cancelAnimationFrame(animFrame.current)

    shrinkTimeout.current = setTimeout(() => {
      const startR = radius
      const startTime = performance.now()
      animateRadiusShrink(startTime, startR)
    }, 300)
  }

  const animateRadiusShrink = (startTime: number, startR: number) => {
    const now = performance.now()
    const elapsed = now - startTime
    const duration = 150
    const progress = Math.min(elapsed / duration, 1)

    const easedProgress = progress * progress * progress

    setRadius(startR * (1 - easedProgress))

    if (progress < 1) {
      animFrame.current = requestAnimationFrame(() => animateRadiusShrink(startTime, startR))
    }
  }

  const offsetX =
    isInBounds && coords.x !== -9999 && dimensions.width
      ? (coords.x / dimensions.width - 0.5) * MAX_OFFSET
      : 0
  const offsetY =
    isInBounds && coords.y !== -9999 && dimensions.height
      ? (coords.y / dimensions.height - 0.5) * MAX_OFFSET
      : 0

  const maskX = isInBounds ? coords.x : dimensions.width / 2
  const maskY = isInBounds ? coords.y : dimensions.height / 2

  const blurredStyle = {
    transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
    transition: isInBounds ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
  }

  const sharpStyle = {
    transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
    transition: isInBounds ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
  }

  const maskStyle = {
    WebkitMaskImage: `radial-gradient(circle at ${maskX}px ${maskY}px, 
      black 0px, black ${radius}px, transparent ${radius + (MAX_FADE * radius) / INNER_RADIUS}px)`,
    maskImage: `radial-gradient(circle at ${maskX}px ${maskY}px, 
      black 0px, black ${radius}px, transparent ${radius + (MAX_FADE * radius) / INNER_RADIUS}px)`,
    opacity: isInBounds ? 1 : 0,
    transition: isInBounds ? 'opacity 0.1s ease-in' : 'opacity 0.5s ease-out',
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        className="pointer-events-none absolute top-1/2 left-1/2 object-cover blur-lg"
        style={blurredStyle}
        src="/flower.png"
        alt="Hero Image Blurred"
      />

      <div className="pointer-events-none absolute inset-0" style={maskStyle}>
        <img
          className="pointer-events-none absolute top-1/2 left-1/2 object-cover"
          style={sharpStyle}
          src="/flower.png"
          alt="Hero Image Sharp"
        />
      </div>
    </div>
  )
}
