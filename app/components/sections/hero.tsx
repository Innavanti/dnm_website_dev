"use client";
import Image from "next/image";
import { ArrowRightDown } from "../icons/icons";
import { Modal } from "../modal";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation"; // Use 'next/navigation' for App Router
import Link from "next/link";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("home.section_hero");
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if the specific query param exists
    const conferenceId = searchParams.get("conference-id");

    if (conferenceId) {
      setShowModal(true);
    }
  }, [searchParams]);

  return (
    <>
      <Modal isVisible={showModal} setIsVisible={setShowModal} />
      <div className="relative">
        {/* ACTUAL CONTENT  */}
        <div className="top-0 left-0 fixed lg:px-0 w-screen h-[98svh]">
          <section
            className={`top-0 w-3/4  relative flex flex-col justify-around  items-center py-10 md:py-20 lg:pt-40 lg:pb-10 xl:pb-5 mx-auto h-full `}
          >
            {/* ---------- Noise Background ----------   */}
            <svg
              className="top-0 absolute w-screen h-screen object-fill"
              stroke="white"
              strokeWidth={0}
            >
              <defs>
                <filter
                  id="noise-filter"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="linearRGB"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.2"
                    numOctaves="4"
                    seed="15"
                    stitchTiles="stitch"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    result="turbulence"
                  />
                  <feSpecularLighting
                    surfaceScale="11"
                    specularConstant="3"
                    specularExponent="5"
                    lightingColor="#FFF"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="turbulence"
                    result="specularLighting"
                  >
                    <feDistantLight azimuth="3" elevation="123" />
                  </feSpecularLighting>
                </filter>
              </defs>
              {/* Mobile  */}
              <rect
                width="100%"
                height="100%"
                fill="#FFF0"
                opacity={0.0}
                filter="url(#noise-filter)"
                className="lg:hidden"
              >
                <animate
                  attributeName="opacity"
                  from="0"
                  to=".040"
                  dur="2s"
                  repeatCount="1"
                  fill="freeze"
                />
              </rect>
              {/* Desktop  */}
              <rect
                width="100%"
                height="100%"
                fill="#FFFf"
                opacity={0.0}
                filter="url(#noise-filter)"
                className="hidden lg:block"
              >
                <animate
                  attributeName="opacity"
                  from="0"
                  to=".05"
                  dur="2s"
                  repeatCount="1"
                  fill="freeze"
                />
              </rect>
            </svg>

            {/* ---------- Glow Background ----------   */}
            <svg
              className="top-0 left-0 absolute w-screen h-screen object-fill"
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
                  <stop
                    offset="100%"
                    stopColor="transparent"
                    stopOpacity="0.5"
                  />
                </radialGradient>
              </defs>
              <circle
                cx="100%"
                cy="35%"
                r="0%"
                fill="url(#heroGlow)"
                opacity={0.5}
                stroke="white"
              >
                <animate
                  attributeName="r"
                  from="0%"
                  to="50%"
                  dur="1.5s"
                  repeatCount="1"
                  fill="freeze"
                />
              </circle>
              <ellipse
                cx="100%"
                cy="35%"
                rx="0%"
                ry="0%"
                fill="url(#heroGlow)"
                opacity={0.5}
                stroke="white"
              >
                <animate
                  attributeName="rx"
                  from="0%"
                  to="120%"
                  dur="1s"
                  repeatCount="1"
                  fill="freeze"
                />
                <animate
                  attributeName="ry"
                  from="0%"
                  to="60%"
                  dur="2.5s"
                  fill="freeze"
                  repeatCount="1"
                />
              </ellipse>
            </svg>

            <div className="flex flex-col justify-between h-full">
              {/* ---------- Hero Title ----------   */}
              <div className="flex flex-col gap-10 w-full">
                <p
                  className="flex flex-row gap-5 w-full items center"
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
                    className="opacity-20 w-2/5 lg:w-1/4 h-auto object-contain duration-1000"
                    priority
                  />
                  <Image
                    src="/branding/name_logo2.svg"
                    alt="isotipo.svg"
                    height={300}
                    width={300}
                    className="opacity-20 my-auto w-2/5 lg:w-1/4 h-auto object-contain"
                    priority
                  />
                </p>
                <p
                  className="lg:font-semibold text-white text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase 2xl:leading-18 xl:leading-15"
                  style={{
                    transformOrigin: "50% 60%",
                    animation: "OpacityFrames linear",
                    animationDuration: "2s",
                    animationIterationCount: "1",
                    animationDelay: "3s",
                    animationFillMode: "backwards",
                  }}
                >
                  {t("subtitle")}
                </p>
              </div>

              {/* ----------  Introduction ----------   */}
              <div
                className="flex lg:flex-row flex-col gap-10 w-full h-fit md:h-1/3 lg:h-fit text-white"
                style={{
                  transformOrigin: "50% 60%",
                  animation: "OpacityFrames linear",
                  animationDuration: "2s",
                  animationIterationCount: "1",
                  animationDelay: "3.5s",
                  animationFillMode: "backwards",
                }}
              >
                {/* PERSONAL  */}
                <Link
                  href="#section-branding"
                  className="flex flex-col gap-2 md:gap-6 w-full"
                >
                  <p className="flex flex-col w-full">
                    <span className="w-full font-semibold text-xl">
                      {t("sections_title.0")}
                    </span>
                    <span className="opacity-80 w-full text-lg">
                      {t("sections_subtitle.0")}
                    </span>
                  </p>
                  <div className="flex flex-row gap-3 w-full">
                    <p className="text-md md:text-lg">
                      <span className="font-semibold text-primary2-500">
                        {t("sections_description1.0")}{" "}
                      </span>
                      <span className="opacity-80 w-full">
                        {t("sections_description2.0")}
                      </span>
                    </p>
                    {/* <ArrowRightDown
                    color="#9f6637"
                    size={20}
                    className="my-auto"
                    strokeWidth={6}
                  /> */}
                  </div>
                </Link>
                {/* BUSINESS  */}
                <Link
                  href="#section-branding"
                  className="flex flex-col gap-2 md:gap-6 w-full"
                >
                  <p className="flex flex-col w-full">
                    <span className="w-full font-semibold text-xl">
                      {t("sections_title.1")}
                    </span>
                    <span className="opacity-80 w-full text-lg">
                      {t("sections_subtitle.1")}
                    </span>
                  </p>
                  <div className="flex flex-row gap-3 w-full">
                    <p className="text-md md:text-lg">
                      <span className="font-semibold text-primary2-500">
                        {t("sections_description1.1")}{" "}
                      </span>
                      <span className="opacity-80 w-full">
                        {t("sections_description2.1")}
                      </span>
                    </p>
                    {/* <ArrowRightDown
                    color="#9f6637"
                    className="my-auto"
                    strokeWidth={6}
                  /> */}
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* FILLER  */}
        <div className="relative h-[98svh]"></div>
      </div>
    </>
  );
};
