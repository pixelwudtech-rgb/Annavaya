import LogoLoop from '../ReactProject/LogoLoop';

const imageLogos = [
  { src: "/Company/Plumb/Plumb (1).png", alt: "Company 1" },
  { src: "/Company/Plumb/Plumb (2).png", alt: "Company 2" },
  { src: "/Company/Plumb/Plumb (3).png", alt: "Company 3" },
  { src: "/Company/Plumb/Plumb (4).png", alt: "Company 4" },
  { src: "/Company/Plumb/Plumb (5).png", alt: "Company 5" },
  { src: "/Company/Plumb/Plumb (6).png", alt: "Company 6" },
  { src: "/Company/Plumb/Plumb (7).png", alt: "Company 7" },
  { src: "/Company/Plumb/Plumb (8).png", alt: "Company 8" },
  { src: "/Company/Plumb/Plumb (9).png", alt: "Company 9" }
];

export default function App() {
  return (
    <div className="w-full relative overflow-hidden ">
      <section className="py-8 sm:py-10 px-4 sm:px-6 
                          max-w-screen-2xl w-full mx-auto ">

        {/* Heading */}
        <h4 className="text-center text-white font-semibold tracking-wide
                       text-base sm:text-lg md:text-2xl mb-3 sm:mb-4">
          Trusted Plumbing Brands We Work With
        </h4>

        {/* Paragraph */}
        <p className="text-center text-gray-300 tracking-wide
                      text-sm sm:text-base md:text-lg
                      max-w-3xl mx-auto mb-6 sm:mb-8">
          We work with trusted plumbing brands to supply reliable pipes,
          fittings, valves, and accessories that meet quality standards for
          residential, commercial, and industrial plumbing systems.
        </p>

        {/* Logo Loop */}
        <div className="flex justify-center items-center">
          <LogoLoop
            logos={imageLogos}
            speed={20}
            direction="left"

            /* 📱 Mobile-first logo size */
            logoHeight={70}
            gap={24}

            /* 🖥 Desktop unchanged */
            className="md:[--logoloop-logoHeight:100px] md:[--logoloop-gap:40px]"

            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="rgb(0, 0, 0)"
            ariaLabel="Brand partners"
          />
        </div>

      </section>
    </div>
  );
}
