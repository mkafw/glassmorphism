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
        "rounded-2xl relative z-0 overflow-hidden border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl",
        "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:border before:border-white/40 before:opacity-60 before:blur-[2px]",
        "after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:border after:border-white/10 after:opacity-30 after:blur-sm",
        className
      )}
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 8px 0 rgba(255,255,255,0.12) inset" }}
      {...other}
    >
      {/* 高光层 */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-1/4 bg-white/40 blur-2xl rounded-full opacity-40 pointer-events-none" />
      {children}
    </div>
  );
};

export default Card;
