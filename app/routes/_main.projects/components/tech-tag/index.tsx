/* eslint no-bitwise: 0 */
import React from "react";
import { cn } from "~/ui/utils/cn";

export interface TechTagProps {
  children: string;
  className?: string;
}

// reference: https://stackoverflow.com/q/3426404
function getHashCode(string: string) {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 2) - hash);
    hash &= hash;
  }

  return hash;
}

export const TechTag = React.memo(function TechTag({
  children,
  className,
}: TechTagProps) {
  const hash = getHashCode(children) % 360;

  return (
    <span
      style={{
        // @ts-expect-error `--hash` is a css variable
        "--hash": hash,
      }}
      className={cn(
        "tech-tag small rounded-full px-2 py-1 select-none border h-5",
        className
      )}
    >
      {children}
    </span>
  );
});
