import Image from "next/image";
import { ArrowRightDown } from "./components/icons/icons";
import { ArrowRightUp } from "./components/icons/icons";
import { Crates } from "./components/icons/icons";
import { Bullseye } from "./components/icons/icons";
import { TripleConnection } from "./components/icons/icons";
import Link from "next/link";
import { Hero } from "./components/sections/hero";
import { SectionSeparator } from "./components/sectionSeparator";
import { Eclipse } from "./components/eclipse";
import { Modal } from "./components/modal";

export default function Home() {
  return (
    <main className="relative justify-center items-center bg-zinc-50 dark:bg-black font-sans">
      <Hero />

      <Modal />
      <div className="relative bg-black px-2 lg:px-40">
        <SectionSeparator />
        <Introduction />
        <Info />
        <Branding />
      </div>
    </main>
  );
}

const Introduction = () => {
  const bulletPoints = [
    {
      icon: <Crates strokeWidth={3} />,
      title: "Diseño sin estrategia",
    },
    {
      icon: <Bullseye strokeWidth={3} />,
      title: "Marketing sin posicionamiento",
    },
    {
      icon: <TripleConnection strokeWidth={3} />,
      title: "Crecimiento sin estructura",
    },
  ];
  return (
    <>
      <section className="relative flex flex-col justify-around items-center bg-black px-5 py-20 w-full h-full">
        {/* ---------- Title ----------   */}
        <div className="flex flex-col gap-7 lg:mr-auto w-full lg:w-1/2 text-white">
          <p className="font-semibold text-5xl"> El problema no es el diseño</p>
          <p className="text-xl">
            Muchas marcas invierten en identidad, marketing y contenido sin una
            decisión estratégica clara.
          </p>
        </div>

        {/* ---------- Decorative divisor ----------   */}
        <div className="bg-primary2-500/30 mr-auto w-1/2 h-0.5"></div>

        {/* ----------  Bullet Points ----------   */}
        <div className="flex lg:flex-row flex-col gap-10 w-full h-1/3 text-white">
          {bulletPoints.map(({ title, icon }, index) => (
            <p
              key={`bulletPoint-${index}`}
              className="flex flex-row lg:flex-col gap-6 w-full lg:h-fit"
            >
              <span className="bg-primary1-500 p-2 border-2 border-primary2-500 rounded w-fit h-fit">
                {icon}
              </span>
              <span className="my-auto w-full lg:h-fit text-xl lg:text-2xl">
                {title}
              </span>
            </p>
          ))}
        </div>

        {/* ----------  Quote ----------   */}
        <div className="flex flex-col gap-5 w-full font-bold text-2xl lg:text-4xl">
          <p className="bg-clip-text bg-linear-to-r from-white to-white/10 w-fit text-transparent">
            La dirección no se diseña.
          </p>
          <p className="bg-clip-text bg-linear-to-l from-white to-white/10 ml-auto w-fit text-transparent text-right">
            Se define.
          </p>
        </div>
      </section>
    </>
  );
};

const Info = () => {
  return (
    <section className="relative flex flex-col justify-around items-center gap-10 lg:mr-auto px-5 py-20 w-full lg:w-1/2 text-white">
      <p className="opacity-60 w-full text-xl text-left">
        SOLUCIONES ESTRATÉGICAS
      </p>
      <p className="font-semibold text-5xl"> ¿Quién necesita este orden? </p>
      <p className="opacity-60 text-xl">
        La estrategia no es igual para todos. Definimos rutas según el tipo de
        decisión que tu marca debe tomar.
      </p>
    </section>
  );
};

const Branding = ({}: {}) => {
  return (
    <section className="flex lg:flex-row flex-col lg:gap-5 py-10 lg:h-auto">
      <div className="bg-white/20 mx-auto lg:mx-0 my-10 lg:my-0 w-3/4 lg:w-0.5 h-0.5 lg:h-auto" />
      <BrandingSection
        title="MARCA PERSONAL"
        subtitle="Para líderes que necesitan dirección, no exposición"
        text="La estrategia no es igual para todos. Definimos rutas según el tipo de decisión que tu marca debe tomar."
        graphic="home/graphic1.svg"
        link="/"
      />
      <div className="bg-white/20 mx-auto lg:mx-0 my-10 lg:my-0 w-3/4 lg:w-0.5 h-0.5 lg:h-auto" />

      <BrandingSection
        title="MARCA EMPRESARIAL"
        subtitle="Para empresas que necesitan estructura, no improvisación."
        text="Negocios en crecimiento que requieren coherencia, alineación interna y dirección estratégica."
        graphic="home/graphic2.svg"
        link="/"
      />
      <div className="bg-white/20 mx-auto lg:mx-0 my-10 lg:my-0 w-3/4 lg:w-0.5 h-0 lg:h-auto" />
    </section>
  );
};

const BrandingSection = ({
  title,
  subtitle,
  text,
  graphic,
  link,
}: {
  title: string;
  subtitle: string;
  text: string;
  graphic: string;
  link: string;
}) => {
  return (
    <div className="relative flex flex-col justify-around items-center gap-14 px-5 py-10 w-full text-white">
      <p className="lg:px-10 w-full text-primary2-500 text-3xl text-left">
        {title}
      </p>
      <p className="flex flex-col gap-6 lg:px-10">
        <span className="font-semibold text-lg">{subtitle}</span>
        <span className="opacity-60 text-xl">{text}</span>
      </p>
      <Image
        src={graphic}
        alt="isotipo.svg"
        height={200}
        width={200}
        className="my-auto w-full h-auto object-cover"
      />

      {/* Black Gradient  */}
      <div className="bottom-10 absolute bg-linear-to-b from-transparent to-black w-full h-1/2 to"></div>

      <div className="bottom-10 z-10 absolute flex">
        <Link
          href={link}
          className="flex flex-row gap-3 bg-black mt-auto px-10 py-5 border-2 border-primary2-500 rounded-xl"
        >
          <span className="my-auto">EXPLORAR RUTA</span>
          <ArrowRightUp strokeWidth={4} className="my-auto" size={15} />
        </Link>
      </div>
    </div>
  );
};
