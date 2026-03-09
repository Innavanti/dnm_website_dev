"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { useWindowScroll } from "@uidotdev/usehooks";

export const Eclipse = () => {
  // const [{ x: scrollX, y: scrollY }, scrollTo] = useWindowScroll();
  const [{ y: scrollY }] = useWindowScroll();
  const WindowSize = useWindowSize();

  const scrollValue = scrollY! / WindowSize.height! || 0;

  return (
    <section className="relative place-self-center w-screen h-0 overflow-visible">
      {/* ---------- Eclipse Background ----------   */}
      <svg className="top-0 z-50 w-full h-1 object-fill overflow-visible">
        <defs>
          <radialGradient
            id="heroEclipse"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="black" stopOpacity=".5" />
            <stop offset="78.5%" stopColor="black" stopOpacity=".5" />
            <stop offset="80%" stopColor="var(--color-primary2-500)" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0.5">
              <animate
                attributeName="offset"
                from="100%"
                to="81%"
                dur=".1s"
                repeatCount="1000000"
              />
            </stop>
          </radialGradient>
          <linearGradient id="heroEclipse2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="30%" stopColor="white" stopOpacity=".0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <circle
          cx="100%"
          cy="0%"
          r="50%"
          fill="url(#heroEclipse)"
          opacity={0.8}
        />
        <circle
          cx="100%"
          cy="0%"
          r="39.9%"
          stroke="url(#heroEclipse2)"
          fill="none"
          strokeWidth={5}
          transform={`rotate(-${scrollValue * 90 + 45})`}
          origin="center"
          style={{ transformOrigin: "100% 0%" }}
          opacity={0.25 + scrollValue / 2}
        />
      </svg>
    </section>
  );
};
