'use client'

import { useState, useRef, useEffect } from 'react'
import { useContainerDimensions } from '../../../hooks/useContainerDimensions'

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: -9999, y: -9999 })
  const dimensions = useContainerDimensions(containerRef)
  const [isInBounds, setIsInBounds] = useState(false)

  // Constants
  const MAX_OFFSET = 160
  const OFFSCREEN_COORD = -9999

  // Constants for transition duration
  const QUICK_TRANSITION = '0.1s'
  const SLOW_TRANSITION = '0.5s'

  useEffect(() => {
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
      } else {
        setIsInBounds(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const offsetX =
    isInBounds && coords.x !== OFFSCREEN_COORD && dimensions.width
      ? (coords.x / dimensions.width - 0.5) * MAX_OFFSET
      : 0
  const offsetY =
    isInBounds && coords.y !== OFFSCREEN_COORD && dimensions.height
      ? (coords.y / dimensions.height - 0.5) * MAX_OFFSET
      : 0

  const blurredStyle = {
    transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
    transition: isInBounds
      ? `transform ${QUICK_TRANSITION} ease-out`
      : `transform ${SLOW_TRANSITION} ease-out`,
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] object-cover blur-xl"
        style={blurredStyle}
        src="/flower.png"
        alt="Hero Image Blurred"
      />
    </div>
  )
}
