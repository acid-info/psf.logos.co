'use client'

import { useState, useRef, useEffect } from 'react'
import { useContainerDimensions } from '../../../hooks/useContainerDimensions'

interface HeroBackgroundProps {
  isMobile?: boolean
}

export default function HeroBackground({ isMobile = true }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: -9999, y: -9999 })
  const dimensions = useContainerDimensions(containerRef)
  const [isInBounds, setIsInBounds] = useState(false)

  const MAX_OFFSET = 160
  const OFFSCREEN_COORD = -9999
  const QUICK_TRANSITION = '0.1s'
  const SLOW_TRANSITION = '0.5s'

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()

      const isMouseInBounds =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      if (isMouseInBounds) {
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
  }, [isMobile])

  const getOffsetX = () => {
    if (isMobile) return 0
    if (!isInBounds || coords.x === OFFSCREEN_COORD || !dimensions.width) return 0
    return (coords.x / dimensions.width - 0.5) * MAX_OFFSET
  }

  const getOffsetY = () => {
    if (isMobile) return 0
    if (!isInBounds || coords.y === OFFSCREEN_COORD || !dimensions.height) return 0
    return (coords.y / dimensions.height - 0.5) * MAX_OFFSET
  }

  const getBlurredStyle = () => {
    const baseTransform = 'translate(-50%, -50%)'

    if (isMobile) {
      return { transform: baseTransform }
    }

    return {
      transform: `${baseTransform} translate(${getOffsetX()}px, ${getOffsetY()}px)`,
      transition: `transform ${isInBounds ? QUICK_TRANSITION : SLOW_TRANSITION} ease-out`,
    }
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full object-cover blur-xl md:h-[120%] md:w-[120%]"
        style={getBlurredStyle()}
        src="/flower.png"
        alt="Hero Image Blurred"
      />
    </div>
  )
}
