"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState, RefObject, useRef } from "react";

export const FooterGlow = () => {
  const t = useTranslations("home.section_target");
  const containerRef = useRef<HTMLDivElement>(null);

  // Pass the ref to the hook to get relative coordinates
  const { element } = useMousePosition(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-around lg:justify-between items-center w-full h-full min-h-100"
    >
      {/* ---------- Glow Background ----------   */}
      <svg
        className="z-0 absolute inset-0 opacity-50 w-full h-full overflow-visible pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="footerGlow">
            <stop offset="0%" stopColor="#f9f0ea" stopOpacity="0.7" />
            <stop
              offset="40%"
              stopColor="var(--color-primary2-500, #3b82f6)"
              stopOpacity="0.3"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx={`0`}
          cy={`0`}
          r="25%"
          fill="url(#footerGlow)"
          className="transition-all ease-out"
          style={{
            transform: `translateX(${element.xPct.toFixed(1)}%) translateY(${element.yPct.toFixed(
              1,
            )}%)`,
          }}
        />
      </svg>

      {/* ---------- Hero Title ----------   */}
      <div className="z-10 flex flex-col gap-3 md:gap-5 px-2 lg:px-40 py-20 md:py-40 w-full uppercase">
        <Image
          src="/branding/isotipo.svg"
          alt="isotipo.svg"
          height={200}
          width={200}
          className="mx-auto w-15 h-auto object-contain"
        />
        <p className="mx-auto w-full md:w-2/3 font-bold text-white text-xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center">
          <span className="">{t("title.0")}</span>
          <span className="text-primary2-500">{t("title.1")}</span>
        </p>
        <p className="mx-auto w-full md:w-2/3 text-md text-slate-300 md:text-xl xl:text-2xl 2xl:text-3xl text-center">
          <span className="">{t("subtitle")}</span>
        </p>
      </div>
      {/* ---------- Debug Info ----------   */}
      {false && (
        <div className="bg-black/40 mx-auto mt-10 p-4 rounded font-mono text-green-400 text-xs">
          <p>
            Relative to Element: {element.x.toFixed(0)}px (
            {element.xPct.toFixed(1)}%)
          </p>
        </div>
      )}
    </section>
  );
};

interface MousePosition {
  screen: { x: number; y: number };
  document: { x: number; y: number };
  element: { x: number; y: number; xPct: number; yPct: number };
}

export const useMousePosition = (ref: RefObject<HTMLElement | null>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    screen: { x: 0, y: 0 },
    document: { x: 0, y: 0 },
    element: { x: 0, y: 0, xPct: 0, yPct: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Relative to Screen (Viewport)
      const screenX = event.clientX;
      const screenY = event.clientY;

      // Relative to Document (includes scroll)
      const docX = event.pageX;
      const docY = event.pageY;

      // Relative to Component
      let elemX = 0;
      let elemY = 0;
      let xPct = 0;
      let yPct = 0;

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        elemX = event.clientX - rect.left;
        elemY = event.clientY - rect.top;

        // Calculate percentages (clamped between 0-100)
        xPct = Math.max(0, Math.min(100, (elemX / rect.width) * 100));
        yPct = Math.max(0, Math.min(100, (elemY / rect.height) * 100));
      }

      setMousePosition({
        screen: { x: screenX, y: screenY },
        document: { x: docX, y: docY },
        element: { x: elemX, y: elemY, xPct, yPct },
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [ref]);

  return mousePosition;
};
