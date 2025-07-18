import { SVGProps } from 'react'

export function ArrowRight(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <rect width="16" height="16" rx="8" fill="black" />
      <path d="M6 4L10 8L6 12" stroke="white" />
    </svg>
  )
}
