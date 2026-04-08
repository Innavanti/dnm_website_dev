"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState, RefObject, useRef } from "react";

export const FooterGlow = () => {
  const t = useTranslations("home.section_target");
  const containerRef = useRef<HTMLDivElement>(null);

  // Pass the ref to the hook to get relative coordinates
  const { screen, document: doc, element } = useMousePosition(containerRef);
  const outOfBoundsOpacity = 1 + element.y * 0.01;

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-around lg:justify-between items-center w-full h-full min-h-100"
    >
      {/* ---------- Glow Background ----------   */}
      <svg
        className="z-0 absolute inset-0 w-full h-full overflow-visible pointer-events-none"
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
          cx={element.x}
          cy={element.y}
          r="25%"
          fill="url(#footerGlow)"
          className="transition-all duration-500 ease-out"
          opacity={
            outOfBoundsOpacity > 1 // Clamp the value between 0 and 1
              ? 1
              : outOfBoundsOpacity < 0
                ? 0
                : outOfBoundsOpacity // while within 0<y<1 range, reduce the opacity as the mouse goes into negative Y
          }
        />

        <g opacity={0.6}>
          <circle
            cx={element.x}
            cy={element.y}
            r="25%"
            fill="url(#footerGlow)"
            className="transition-all duration-250 ease-out"
            opacity={
              1 + element.y * 0.01 > 1 // Clamp the value between 0 and 1
                ? 1
                : 1 + element.y * 0.01 < 0
                  ? 0
                  : 1 + element.y * 0.01 // while within 0<y<1 range, reduce the opacity as the mouse goes into negative Y
            }
          />
        </g>

        <g opacity={0.3}>
          <circle
            cx={element.x}
            cy={element.y}
            r="25%"
            fill="url(#footerGlow)"
            className="transition-all duration-0 ease-out"
            opacity={
              1 + element.y * 0.01 > 1 // Clamp the value between 0 and 1
                ? 1
                : 1 + element.y * 0.01 < 0
                  ? 0
                  : 1 + element.y * 0.01 // while within 0<y<1 range, reduce the opacity as the mouse goes into negative Y
            }
          />
        </g>
      </svg>

      {/* ---------- Hero Title ----------   */}
      <div className="z-10 flex flex-col gap-3 md:gap-5 px-2 lg:px-40 py-20 md:py-40 w-full">
        <Image
          src="/branding/isotipo.svg"
          alt="isotipo.svg"
          height={200}
          width={200}
          className="mx-auto w-15 md:w-20 h-auto object-contain"
        />
        <p className="mx-auto w-full md:w-2/3 text-white text-lg md:text-3xl xl:text-4xl 2xl:text-5xl text-center">
          {t("title")}
        </p>
      </div>
      {/* Debug Info */}
      {false && (
        <div className="bg-black/40 mx-auto mt-10 p-4 rounded font-mono text-green-400 text-xs">
          <p>
            Relative to Element: {element.x.toFixed(0)}px (
            {element.xPct.toFixed(1)}%)
          </p>
          <p>
            Relative to Screen: {screen.x}px, {screen.y}px
          </p>
          <p>
            Relative to Document: {doc.x}px, {doc.y}px
          </p>
          <p></p>
          <p>Opacity Formula: = </p>
          <p>{outOfBoundsOpacity}</p>
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
