import { Button } from '@/components/ui/button'

export default async function Page() {
  return (
    <div className="relative flex flex-col items-start bg-white">
      <section className="relative h-screen w-full bg-black">
        <div className="relative h-screen w-screen overflow-hidden">
          <video
            className="absolute z-0 h-full w-full scale-[1.1] object-cover blur-[22px] filter"
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-image.png"
          />

          <nav className="absolute top-2 left-1/2 z-10 inline-flex h-11 -translate-x-1/2 items-center bg-[#00000033] backdrop-blur-[16.5px]">
            <a
              href="https://psc.logos.co/"
              target="_blank"
              className="inline-flex h-[34px] items-center border-r border-[#ffffff1a] px-6 py-2"
            >
              <div className="font-label-4 whitespace-nowrap text-white">PAST EVENTS</div>
            </a>

            <a
              href="https://x.com/Logos_network"
              target="_blank"
              className="inline-flex h-[34px] items-center border-r border-[#ffffff1a] px-6 py-2"
            >
              <img
                className="h-3 w-3 min-w-[12px]"
                alt="X logo original"
                src="/x-logo-2023-original-1.svg"
              />
            </a>

            <a href="#form" className="inline-flex h-[34px] items-center px-6 py-2">
              <div className="font-label-4 whitespace-nowrap text-white">CO-ORGANISE</div>
            </a>
          </nav>

          <div className="absolute bottom-[25px] left-1/2 h-[17px] -translate-x-1/2 text-center text-sm leading-[16.8px] tracking-[-0.59px] whitespace-nowrap text-white">
            COMING Q1 2026
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 p-4">
            <img className="h-[75.45px] w-[72.81px]" alt="Subtract" src="/subtract.svg" />

            <img
              className="h-[125.48px] w-[706.82px]"
              alt="Parallel society"
              src="/parallel-society-festival.svg"
            />

            <div className="w-fit text-center text-xl leading-[24.0px] tracking-[-0.84px] text-white">
              THE FLAGSHIP EVENT <br />
              OF THE NETWORK STATE MOVEMENT
            </div>

            <a href="https://lu.ma/psf" target="_blank">
              <Button className="cursor-pointer bg-transparent p-0 hover:bg-transparent">
                <span className="inline-block bg-[#0000003d] px-6 py-4 text-[18px] leading-[21.6px] tracking-[-0.76px] text-white backdrop-blur-md hover:bg-[#00000060]">
                  RSVP
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
