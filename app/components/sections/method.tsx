"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Method = () => {
  const t = useTranslations("home.section_method");

  return (
    <section
      className="flex flex-col gap-5 mx-auto py-10 md:py-20 w-full"
      id="section-method"
    >
      <div className="flex flex-col items-center gap-5 m-auto px-5 w-full lg:w-2/3 text-white">
        {/* Como trabajamos  */}
        <h1 className="text-center">{t("title-prologue")}</h1>
        {/* ASI ESTRUCTURAMOS...  */}
        <h2 className="mx-auto w-3/4 lg:w-full text-center">
          <span className="">{t("title.0")}</span>{" "}
          <span className="text-primary2-500">{t("title.1")}</span>
        </h2>
        <p className="flex flex-col text-lg">
          <span className="w-full text-center">{t("intro1")}</span>
          <span className="w-full text-center">{t("intro2")}</span>
        </p>
      </div>

      {/* Carousel  */}
      <Carousel />
    </section>
  );
};

import { useEffect, useRef } from "react";

const Carousel = () => {
  const t = useTranslations("home.section_method");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track manual interaction
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSteps = 4;

  useEffect(() => {
    // 1. Intersection Observer Setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isPaused) {
          startAutoPlay();
        } else {
          stopAutoPlay();
        }
      },
      { threshold: 0.5 }, // Trigger when 50% visible
    );

    let intervalId: NodeJS.Timeout;

    const startAutoPlay = () => {
      stopAutoPlay(); // Clear any existing intervals
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSteps);
      }, 3000);
    };

    const stopAutoPlay = () => {
      if (intervalId) clearInterval(intervalId);
    };

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      stopAutoPlay();
    };
  }, [isPaused]); // Re-run if user pauses the carousel

  const handleManualChange = (index: number) => {
    setIsPaused(true); // Stop the auto-rotation forever
    setCurrentSlide(index);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col px-5 md:px-10 lg:px-0"
    >
      <div className="relative flex flex-row justify-between w-full">
        {new Array(totalSteps).fill(null).map((_, index) => (
          <CarouselStep
            key={`method-carousel-${index}`}
            index={index}
            step={currentSlide}
            setStep={handleManualChange} // Pass the wrapper function here
            title={t(`step_titles.${index}`)}
          />
        ))}
      </div>
      <div className="relative w-full h-40 lg:h-30">
        {new Array(totalSteps).fill(null).map((_, index) => (
          <CarouselCard
            key={`method-card-${index}`}
            index={index}
            step={currentSlide}
            title={t(`step_paragraphs.${index}`)}
          />
        ))}
      </div>
    </div>
  );
};

const CarouselStep = ({
  index,
  step,
  setStep,
  title,
}: {
  index: number;
  step: number;
  setStep: any;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center w-1/4">
      {/* Circle  */}

      <div className="relative w-full h-auto">
        <svg className="z-0 absolute w-full h-full overflow-visible duration-1000 pointer-events-none">
          <defs>
            <linearGradient
              id="method-step-horizontal-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset={`0%`} stopColor="#fff" stopOpacity="0" />
              <stop offset={`50%`} stopColor="var(--color-primary2-500)" />
              <stop offset={`100%`} stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="method-step-vertical-gradient"
              x1="0%"
              y1="0%"
              y2="100%"
              x2="0%"
            >
              <stop offset={`0%`} stopColor="#fff" stopOpacity="0" />
              <stop offset={`90%`} stopColor="var(--color-primary2-500)" />
            </linearGradient>

            <mask id={`mask-method-step-1`}>
              <rect x={"50%"} y="0" width="100%" height="100%" fill="white" />
            </mask>
            <mask id={`mask-method-step-4`}>
              <rect x={"-75%"} y="0" width="125%" height="100%" fill="white" />
            </mask>
          </defs>
          <g>
            <rect
              x="-50%"
              y="45%"
              width="200%"
              height="10%"
              fill="url(#method-step-horizontal-gradient)"
              opacity={step == index ? 1 : 0}
              className="duration-1000"
              mask={
                index == 0
                  ? `url(#mask-method-step-1)`
                  : index == 3
                    ? `url(#mask-method-step-4)`
                    : ""
              }
            />
          </g>
        </svg>
        <div
          className={`z-10 flex relative p-1 cursor-pointer mx-auto  duration-500 bg-black shadow-primary2-500 rounded-full h-12 outline-2 w-12 md:h-15 md:w-15 
          ${step == index ? "text-primary2-500 outline-primary2-500 shadow-lg " : "text-neutral1-700  outline-neutral1-700"}`}
          onClick={() => {
            setStep(index);
          }}
        >
          <p className="m-auto w-min h-min font-semibold text-2xl md:text-3xl 2xl:text-3xl">
            {index + 1}
          </p>
        </div>
      </div>

      {/* Text  */}
      <p
        className={`duration-500 scale-90 md:scale-100 text-xs md:text-xl lg:text-2xl ${step == index ? "font-bold" : ""}`}
      >
        {title}
      </p>
    </div>
  );
};

const CarouselCard = ({
  index,
  step,
  title,
}: {
  index: number;
  step: number;
  title: string;
}) => {
  return (
    <div
      className={`absolute mt-7 md:mt-7 lg:mt-7 2xl:mt-10 xl:mt-7  w-full h-fit  duration-500 ${step == index ? "opacity-100" : "opacity-0"}`}
    >
      {/* Vertical line  */}
      <div
        className="top-0 left-0 z-20 absolute w-1/4 h-7 md:h-7 2xl:h-10 overflow-visible"
        style={{
          transform: `translate(${index * 100}%,0%)`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-auto w-1 h-full  overflow-visible `}
        >
          <defs>
            <linearGradient
              id="method-card-vertical-gradient"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="10%" stopColor="white" stopOpacity="0" />
              <stop
                offset="75%"
                stopColor="var(--color-primary2-500)"
                stopOpacity=".6"
              />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="-100%"
            width="100%"
            height="100%"
            fill="url(#method-card-vertical-gradient)"
          />
        </svg>
      </div>
      {/* Background and border gradient  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="top-0 left-0 z-0 absolute w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient
            id="method-card-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="white" stopOpacity=".5" />
            <stop offset="25%" stopColor="var(--color-primary2-500)" />
            <stop offset="75%" stopColor="var(--color-primary2-500)" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>

        <rect
          x="0.25%"
          y=".5%"
          width="99.5%"
          height="99%"
          rx="3vh"
          ry="3vh"
          stroke="url(#method-card-gradient)"
          strokeWidth="2"
          fill="#000D"
          style={{
            filter: "drop-shadow( 0px 0px 10px rgba(255, 255, 255, .25))",
          }}
        />
      </svg>
      <div className="relative p-5 2xl:p-7 rounded-xl w-full h-fit text-white align-middle">
        <p className="flex flex-col gap-2 w-full text-xl md:text-2xl lg:text-2xl">
          <span>{title}</span>
        </p>
      </div>
    </div>
  );
};
