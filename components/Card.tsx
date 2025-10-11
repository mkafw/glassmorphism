import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "rounded-2xl relative z-0 overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl",
        "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:border before:border-purple-400/40 before:opacity-60 before:blur-[2px]",
        "after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:border after:border-fuchsia-400/10 after:opacity-30 after:blur-sm",
        className
      )}
      style={{
        boxShadow:
          "0 8px 32px 0 rgba(120,86,255,0.25), 0 1.5px 8px 0 rgba(221,74,255,0.18) inset, 0 0 24px 2px rgba(120,86,255,0.18)",
      }}
      {...other}
    >
      {/* 紫色高光层 */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-1/4 bg-gradient-to-r from-purple-400/40 via-fuchsia-400/30 to-blue-400/30 blur-2xl rounded-full opacity-50 pointer-events-none" />
      {children}
    </div>
  );
};

export default Card;
