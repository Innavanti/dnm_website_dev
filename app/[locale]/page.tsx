import { Hero } from "../components/sections/hero";
import { SectionSeparator } from "../components/sectionSeparator";
import { Introduction } from "../components/sections/introduction";
import { Solutions } from "../components/sections/solutions";
import { Branding } from "../components/sections/branding";
import { Method } from "../components/sections/method";
import { AboutUs } from "../components/sections/aboutUs";
import { StrategicCases } from "../components/sections/strategicCases";
import { ContactForm } from "../components/sections/contactForm";
import { FooterGlow } from "../components/sections/footerGlow";
import { MediaQueryIndicator } from "../components/mediaQueryIndicator";
import { Footer } from "../components/sections/footer";

export default function Home() {
  return (
    <main className="relative justify-center items-center bg-black dark:bg-black font-sans">
      {/* <MediaQueryIndicator /> */}
      <Hero />

      <div className="relative flex flex-col gap-10 bg-black overflow-x-hidden overflow-y-visible">
        <div className="px-2 lg:px-0">
          <SectionSeparator />
        </div>
        {/* ----- Section 02 - Bullet Points ----- */}
        <div className="px-2 lg:px-0 w-full snap-center">
          <div className="lg:mx-auto lg:w-3/4">
            <Introduction />
          </div>
        </div>
        {/* ----- Section 03 ----- */}
        <div className="px-2 lg:px-0">
          <div className="lg:mx-auto lg:w-3/4">
            <Solutions />
            <Branding />
          </div>
        </div>
        {/* ----- Section 04 - Steps ----- */}
        <div className="relative px-2 lg:px-0">
          {/* ---------- Corner Glow ----------   */}
          <svg
            className="top-0 left-0 absolute w-[40vw] h-[40vw] overflow-visible ratio-square"
            stroke="white"
            strokeWidth={0}
          >
            <defs>
              <radialGradient
                id="steps-corner-glow-gradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#f9f0ea" stopOpacity=".7" />
                <stop
                  offset="40%"
                  stopColor="var(--color-primary2-500)"
                  stopOpacity="0.5"
                />
                <stop offset="100%" stopColor="transparent" stopOpacity="0.5" />
              </radialGradient>
            </defs>
            <ellipse
              cx="0"
              cy="40%"
              rx="200%"
              ry="50%"
              fill="url(#heroGlow)"
              opacity={0.5}
              stroke="white"
            ></ellipse>
          </svg>
          <div className="lg:mx-auto lg:w-3/4">
            <Method />
          </div>
        </div>
        {/* ----- Section 05 - Banner ----- */}
        <div className="px-2 lg:px-0">
          <div className="xl:px-[100px]">
            <AboutUs />
          </div>
        </div>
        {/* ----- Section 06 - Carousel ----- */}
        <div className="px-2 lg:px-0">
          <div className="xl:px-[100px]">
            <StrategicCases />
          </div>
        </div>

        {/* ----- Section 07 - Banner2 ----- */}
        <div className="px-2 lg:px-0">
          <div className="lg:mx-auto lg:w-3/4">
            <FooterGlow />
          </div>
        </div>

        {/* ----- Section 08 - Form ----- */}
        {/* <div className="px-2 lg:px-0">
          <div className="lg:mx-auto lg:w-3/4">
            <ContactForm />
          </div>
        </div> */}

        <div className="px-2 lg:px-0">
          <div className="lg:mx-auto lg:w-3/4 h-30"></div>
        </div>

        {/* ----- Section 09 - Footer ----- */}
        <Footer />
      </div>
    </main>
  );
}
