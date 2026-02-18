import LogoLoop from '../ReactProject/ElectronicLogo';

const imageLogos = [
  { src: "/Company/Electronic/electronic (1).png", alt: "Electronics Brand 1" },
  { src: "/Company/Electronic/electronic (2).png", alt: "Electronics Brand 2" },
  { src: "/Company/Electronic/electronic (3).png", alt: "Electronics Brand 3" },
  { src: "/Company/Electronic/electronic (4).png", alt: "Electronics Brand 4" },
  { src: "/Company/Electronic/electronic (5).png", alt: "Electronics Brand 5" },
  { src: "/Company/Electronic/electronic (6).png", alt: "Electronics Brand 6" },
  { src: "/Company/Electronic/electronic (7).png", alt: "Electronics Brand 7" },
  { src: "/Company/Electronic/electronic (8).png", alt: "Electronics Brand 8" },
  { src: "/Company/Electronic/electronic (9).png", alt: "Electronics Brand 9" },
  { src: "/Company/Electronic/electronic (10).png", alt: "Electronics Brand 10" },
  { src: "/Company/Electronic/electronic (11).png", alt: "Electronics Brand 11" }
];


export default function App() {
  return (
    <div className="w-full relative overflow-hidden mt-20">
      <section className="py-8 sm:py-10 px-4 sm:px-6 
                          max-w-screen-2xl w-full mx-auto">

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
        <div className="flex justify-center items-center grayscale">
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
