import { Hero } from "../components/sections/hero";
import { SectionSeparator } from "../components/sectionSeparator";
import { Introduction } from "../components/sections/introduction";
import { Solutions } from "../components/sections/solutions";
import { Branding } from "../components/sections/branding";
import { Method } from "../components/sections/method";
import { AboutUs } from "../components/sections/aboutUs";
import { StrategicCases } from "../components/sections/strategicCases";
import { Footer } from "../components/sections/footer";
import { ContactForm } from "../components/sections/contactForm";
import { FooterGlow } from "../components/sections/footerGlow";
import { MouseTrail } from "../components/sections/MouseTrailConcept";
import { MouseStalker } from "../components/sections/MouseStalkerConcept";

export default function Home() {
  return (
    <main className="relative justify-center items-center bg-black dark:bg-black font-sans">
      <Hero />

      <div className="relative bg-black overflow-hidden">
        {/* <MouseTrail /> */}
        {/* <MouseStalker /> */}

        <div className="px-2 lg:px-40">
          <SectionSeparator />
        </div>
        <div className="px-2 lg:px-40">
          <Introduction />
        </div>
        <div className="px-2 lg:px-40">
          <Solutions />
        </div>
        <div className="px-2 lg:px-40">
          <Branding />
        </div>
        <div className="px-2 lg:px-40">
          <Method />
        </div>
        <div className="px-2 lg:px-40">
          <AboutUs />
        </div>
        <div className="px-2 lg:px-40">
          <StrategicCases />
        </div>
        <div className="px-2 lg:px-40">
          <ContactForm />
        </div>
        <div className="px-2 lg:px-40">
          <Footer />
        </div>
        <FooterGlow />
      </div>
    </main>
  );
}
