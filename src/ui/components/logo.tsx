import { useColorModeToggle } from "@rqbazan/set-initial-color-mode";
import { cn } from "~/utils/cn";

export interface LogoProps {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  const { onToggle } = useColorModeToggle();

  return (
    <button
      {...props}
      type="button"
      onClick={onToggle}
      className={cn(
        "animate-rainbow p-2 relative lg:scale-[1.45] inline-flex",
        className
      )}
    >
      <svg
        width="66"
        height="68"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>colorful background</title>
        <path d="M51.441 9.524c6.116 3.686 12.393 7.898 13.527 13.284 1.134 5.427-2.875 12.069-5.184 19.237-2.308 7.21-2.916 14.986-7.047 19.846-4.09 4.86-11.664 6.844-18.346 5.629-6.683-1.255-12.474-5.67-18.225-10.003C10.415 53.183 4.664 48.97 2.315 43.26c-2.309-5.67-1.256-12.797.567-20.087 1.863-7.25 4.495-14.661 9.72-18.63 5.224-3.97 13.04-4.577 19.926-3.24 6.885 1.296 12.838 4.495 18.913 8.221Z" />
      </svg>
      <span className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-black opacity-40">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>brand isotype</title>
          <path d="M6 28V3H21V8H26V13H21V23H26V28H21V23H16V18H11V28H6ZM11 13H20.8V8H11V13Z" />
        </svg>
      </span>
    </button>
  );
}
