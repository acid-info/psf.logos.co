'use client'

import { useState, useRef, useEffect } from 'react'

export default function MobileHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSharp, setIsSharp] = useState(false)

  useEffect(() => {
    const handleTouch = () => {
      if (!isSharp) {
        setIsSharp(true)
      }
    }

    window.addEventListener('touchstart', handleTouch)
    window.addEventListener('touchmove', handleTouch)

    return () => {
      window.removeEventListener('touchstart', handleTouch)
      window.removeEventListener('touchmove', handleTouch)
    }
  }, [isSharp])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {isSharp ? (
        <img
          className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] object-cover"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          src="/flower.png"
          alt="Hero Image Sharp"
        />
      ) : (
        <img
          className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] object-cover blur-lg"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          src="/flower.png"
          alt="Hero Image Blurred"
        />
      )}
    </div>
  )
}
