import HeroBackground from '../components/ui/HeroBackground/HeroBackground'

export default function Page() {
  return (
    <div className="flex h-[100svh] w-[100svw] flex-col bg-white md:h-[100lvh] md:w-[100lvw]">
      <section className="h-full w-full bg-black">
        <div className="relative flex h-full w-full flex-col items-center overflow-hidden pt-2">
          <HeroBackground />

          <nav className="relative z-10 inline-flex h-11 items-center bg-[#00000035] backdrop-blur-[16.5px]">
            <a
              href="https://psc.logos.co/"
              target="_blank"
              className="inline-flex h-[34px] items-center border-r border-[#ffffff1a] px-6 py-2"
              data-umami-event="past-events"
              data-umami-event-section="navbar"
              data-umami-event-element="button"
            >
              <div className="font-label-4 whitespace-nowrap text-white">PAST EVENTS</div>
            </a>

            <a
              href="https://x.com/Logos_network"
              target="_blank"
              className="inline-flex h-[34px] items-center border-r border-[#ffffff1a] px-6 py-2"
              data-umami-event="x"
              data-umami-event-section="navbar"
              data-umami-event-element="button"
            >
              <img
                className="h-3 w-3 min-w-[12px]"
                alt="X logo original"
                src="/x-logo-2023-original-1.svg"
              />
            </a>

            <a
              href="#form"
              className="inline-flex h-[34px] items-center px-6 py-2"
              data-umami-event="co-organise"
              data-umami-event-section="navbar"
              data-umami-event-element="button"
            >
              <div className="font-label-4 whitespace-nowrap text-white">CO-ORGANISE</div>
            </a>
          </nav>

          <div className="z-10 flex flex-1 flex-col items-center justify-between">
            <div className="flex flex-1 flex-col items-center justify-center gap-8 sm:gap-10">
              <div className="relative mt-0 flex flex-col items-center gap-[24px] px-6 sm:gap-10">
                <img
                  className="h-[51.45px] w-[49.65px] sm:h-[75.45px] sm:w-[72.81px]"
                  alt="Subtract"
                  src="/subtract.svg"
                />

                <img
                  className="h-auto w-[706.82px]"
                  alt="Parallel society"
                  src="/parallel-society-festival.svg"
                />

                <div className="w-fit text-center text-base leading-[19px] tracking-[-0.84px] text-white sm:text-xl sm:leading-[24.0px]">
                  THE FLAGSHIP EVENT <br />
                  OF THE NETWORK STATE MOVEMENT
                </div>
              </div>

              <div className="relative mt-0">
                <a
                  href="http://lu.ma/psf?utm_source=website"
                  target="_blank"
                  data-umami-event="rsvp"
                  data-umami-event-section="hero"
                  data-umami-event-element="button"
                >
                  <button className="cursor-pointer bg-[#FFF] px-6 py-4 hover:bg-[#F2F2F2]">
                    <span className="inline-block text-[18px] leading-[21.6px] tracking-[-0.76px] text-black">
                      CLAIM YOUR SPOT
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className="relative mt-[32px] mb-6 sm:mt-0">
              <div className="h-[17px] text-center text-[16px] leading-[19.2px] tracking-[-0.672px] whitespace-nowrap text-white sm:text-[18px] sm:leading-[21.6px] sm:tracking-[-0.756px]">
                LISBON, MARCH 2026
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
