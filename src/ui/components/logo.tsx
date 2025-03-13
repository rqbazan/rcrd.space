import { useColorModeToggle } from "@rqbazan/set-initial-color-mode";
import { cn } from "~/utils/cn";

export interface LogoProps {
  className?: string;
}

function AnimatedRLogo() {
  return (
    <svg
      className="w-full h-full"
      viewBox="11 9 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Animated R logo</title>
      <defs>
        <filter id="glitch1" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset in="SourceGraphic" dx="1.5" dy="-1" result="red">
            <animate
              attributeName="dx"
              values="0;1.5;-1.5;0"
              dur="3s"
              repeatCount="indefinite"
              keyTimes="0;0.3;0.6;1"
              calcMode="discrete"
            />
            <animate
              attributeName="dy"
              values="0;-1;1;0"
              dur="2.7s"
              repeatCount="indefinite"
              keyTimes="0;0.4;0.7;1"
              calcMode="discrete"
            />
          </feOffset>
          <feColorMatrix
            in="red"
            type="matrix"
            values="1 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.7 0"
            result="red-channel"
          />
        </filter>
        <filter id="glitch2" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset in="SourceGraphic" dx="-1.5" dy="1" result="cyan">
            <animate
              attributeName="dx"
              values="0;-1.5;1.5;0"
              dur="3.5s"
              repeatCount="indefinite"
              keyTimes="0;0.2;0.5;1"
              calcMode="discrete"
            />
            <animate
              attributeName="dy"
              values="0;1;-1;0"
              dur="2.3s"
              repeatCount="indefinite"
              keyTimes="0;0.3;0.8;1"
              calcMode="discrete"
            />
          </feOffset>
          <feColorMatrix
            in="cyan"
            type="matrix"
            values="0 0 0 0 0   0 1 0 0 0   0 0 1 0 0  0 0 0 0.7 0"
            result="cyan-channel"
          />
        </filter>
      </defs>

      {/* Original white path */}
      <path
        d="M11 31V9H24.5V13.4H29V17.8H24.5V26.6H29V31H24.5V26.6H20V22.2H15.5V31H11ZM15.5 17.8H24.32V13.4H15.5V17.8Z"
        fill="white"
      >
        <animate
          attributeName="opacity"
          values="1;0.8;1"
          dur="2.5s"
          repeatCount="indefinite"
          keyTimes="0;0.1;1"
          calcMode="discrete"
        />
      </path>

      {/* Red channel (offset) */}
      <g filter="url(#glitch1)">
        <path
          d="M11 31V9H24.5V13.4H29V17.8H24.5V26.6H29V31H24.5V26.6H20V22.2H15.5V31H11ZM15.5 17.8H24.32V13.4H15.5V17.8Z"
          fill="#FF0000"
          style={{ mixBlendMode: "screen" }}
        >
          <animate
            attributeName="opacity"
            values="0.7;0.5;0.7"
            dur="3.2s"
            repeatCount="indefinite"
            keyTimes="0;0.2;1"
            calcMode="discrete"
          />
        </path>
      </g>

      {/* Cyan channel (offset) */}
      <g filter="url(#glitch2)">
        <path
          d="M11 31V9H24.5V13.4H29V17.8H24.5V26.6H29V31H24.5V26.6H20V22.2H15.5V31H11ZM15.5 17.8H24.32V13.4H15.5V17.8Z"
          fill="#00FFFF"
          style={{ mixBlendMode: "screen" }}
        >
          <animate
            attributeName="opacity"
            values="0.7;0.5;0.7"
            dur="2.8s"
            repeatCount="indefinite"
            keyTimes="0;0.3;1"
            calcMode="discrete"
          />
        </path>
      </g>
    </svg>
  );
}
export function Logo({ className, ...props }: LogoProps) {
  const { onToggle } = useColorModeToggle();

  return (
    <button
      {...props}
      type="button"
      onClick={onToggle}
      className={cn("flex justify-center items-center p-0 size-16 lg:size-20", className)}
    >
      <AnimatedRLogo />
    </button>
  );
}
