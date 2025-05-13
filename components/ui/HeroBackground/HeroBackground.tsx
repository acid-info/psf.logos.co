export default function HeroBackground() {
  return (
    <img
      className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full object-cover md:object-none"
      style={{
        transform: 'translate(-50%, -50%)',
      }}
      src="/flower.png"
      alt="Hero Image Blurred"
    />
  )
}
