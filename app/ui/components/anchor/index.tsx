import React from "react";
import { getExternalLinkProps } from "~/ui/utils/get-external-link-props";

export interface AnchorProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  function Anchor({ children, href, ...props }, ref) {
    return (
      <a
        ref={ref}
        href={href}
        className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-700 hover:text-blue-600 transition-colors"
        {...getExternalLinkProps(href)}
        {...props}
      >
        {children}
      </a>
    );
  },
);
