import Image from "next/image";
import { ArrowRightDown } from "../icons/icons";

export const Hero = () => {
  return (
    <div className="relative">
      {/* ACTUAL CONTENT  */}
      <div
        className="top-0 fixed px-5 lg:px-40 xl:px-80 w-screen"
        style={{ height: "98vh" }}
      >
        <section className="top-0 relative flex flex-col justify-around lg:justify-between items-center py-10 md:py-20 lg:pt-30 lg:pb-20 2xl:pb-20 xl:pb-14 w-full h-full">
          {/* ---------- Glow Background ----------   */}
          <svg
            className="top-0 absolute w-screen h-screen object-fill"
            stroke="white"
            strokeWidth={0}
          >
            <defs>
              <radialGradient
                id="heroGlow"
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

            <circle
              cx="100%"
              cy="35%"
              r="50%"
              fill="url(#heroGlow)"
              opacity={0.5}
              stroke="white"
            >
              <animate
                attributeName="r"
                from="0%"
                to="50%"
                dur="2s"
                repeatCount="1"
              />
            </circle>
            <ellipse
              cx="100%"
              cy="35%"
              rx="120%"
              ry="60%"
              fill="url(#heroGlow)"
              opacity={0.5}
              stroke="white"
            >
              <animate
                attributeName="rx"
                from="0%"
                to="120%"
                dur="2s"
                repeatCount="1"
              />
              <animate
                attributeName="ry"
                from="0%"
                to="60%"
                dur="2.5s"
                repeatCount="1"
              />
            </ellipse>
          </svg>

          {/* Noise test  */}
          <svg viewBox="0 0 100 100" className="hidden z-50 w-screen h-screen">
            <defs>
              <circle id="shape" cx="50" cy="50" r="50" />
              <filter id="noise">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="2"
                  numOctaves="1"
                  result="turbulence"
                />

                <feColorMatrix in="composite" type="luminanceToAlpha" />
                <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
              </filter>
              <mask id="gradient">
                <linearGradient id="fade">
                  <stop offset="0%" stopColor="black" stopOpacity="0.6" />
                  <stop offset="65%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="white" stopOpacity="1" />
                </linearGradient>
                <use href="#shape" fill="url('#fade')" />
              </mask>
            </defs>
            <use
              href="#shape"
              fill="hsl(337, 92%, 69%)"
              mask="url(#gradient)"
              filter="url('#noise')"
            />
          </svg>

          {/* ---------- Hero Title ----------   */}
          <div className="flex flex-col gap-10 w-full">
            <p
              className="flex flex-row gap-5 w-full align-middle >h-5"
              style={{
                transformOrigin: "50% 60%",
                animation: "OpacityFrames linear",
                animationDuration: "2s",
                animationIterationCount: "1",
                animationDelay: "1s",
                animationFillMode: "backwards",
              }}
            >
              <Image
                src="/branding/isotipo.svg"
                alt="isotipo.svg"
                height={200}
                width={200}
                className="opacity-20 w-2/5 lg:w-1/3 object-contain duration-1000"
              />
              <Image
                src="/branding/name_logo2.svg"
                alt="isotipo.svg"
                height={300}
                width={300}
                className="opacity-20 my-auto w-2/5 lg:w-1/3 object-contain"
              />
            </p>
            <p className="text-white text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              CONSULTORÍA & ESTRATEGIA PARA MARCAS PERSONALES & EMPRESARIALES
            </p>
          </div>

          {/* ----------  Introduction ----------   */}
          <div className="flex lg:flex-row flex-col gap-10 w-full h-fit md:h-1/3 lg:h-fit text-white">
            {/* PERSONAL  */}
            <div className="flex flex-col gap-2 md:gap-6">
              <p className="flex flex-col w-full">
                <span className="w-full font-semibold text-xl">
                  Tu nombre ya tiene peso
                </span>
                <span className="opacity-80 w-full text-lg">
                  Ahora necesitas dirección
                </span>
              </p>
              <div className="flex flex-row gap-3 w-full">
                <p className="text-md md:text-lg">
                  <span className="font-semibold text-primary2-500">
                    MARCA PERSONAL
                  </span>
                  <span className="opacity-80 w-full"> para lideres</span>
                </p>
                <ArrowRightDown
                  color="#9f6637"
                  size={20}
                  className="my-auto"
                  strokeWidth={6}
                />
              </div>
            </div>
            {/* BUSINESS  */}
            <div className="flex flex-col gap-2 md:gap-6">
              <p className="flex flex-col w-full">
                <span className="w-full font-semibold text-xl">
                  Tu empresa está creciendo
                </span>
                <span className="opacity-80 w-full text-lg">
                  Tu empresa debe sostenerlo
                </span>
              </p>
              <div className="flex flex-row gap-3 w-full">
                <p className="text-md md:text-lg">
                  <span className="font-semibold text-primary2-500">
                    MARCA EMPRESARIAL
                  </span>
                  <span className="opacity-80 w-full"> para empresas</span>
                </p>
                <ArrowRightDown
                  color="#9f6637"
                  className="my-auto"
                  strokeWidth={6}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* FILLER  */}
      <div className="relative" style={{ height: "98vh" }}></div>
    </div>
  );
};
