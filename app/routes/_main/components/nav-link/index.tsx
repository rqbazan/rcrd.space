import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";
import { getExternalLinkProps } from "~/ui/utils/get-external-link-props";

export interface NavLinkProps {
  to: string;
  children: React.ReactElement;
  className?: string;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink({ children, to, className, ...props }, ref) {
    const location = useLocation();

    const isSelected = location.pathname === to;

    return (
      <Link
        ref={ref}
        to={to}
        className={clsx(
          "text-muted",
          { "text-wording": isSelected },
          className,
        )}
        {...getExternalLinkProps(to)}
        {...props}
      >
        <span
          className={clsx("h5", {
            "dark:hover:text-gray-300 hover:text-gray-400 transition-colors ease-in-out duration-300":
              !isSelected,
          })}
        >
          {React.cloneElement(children, { className: "h-6 w-6" })}
        </span>
        {isSelected && (
          <motion.div
            animate
            transition={{ duration: 0.3 }}
            className="h-1 bg-wording w-full rounded-lg mt-1.5"
            layoutId="nav-link__underline"
          />
        )}
      </Link>
    );
  },
);
