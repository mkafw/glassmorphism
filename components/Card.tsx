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
        "rounded-lg relative z-0 overflow-hidden border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg",
        className
      )}
      {...other}
    >
      <div className="absolute inset-0 -z-10 opacity-5" style={{}}></div>
      {children}
    </div>
  );
};

export default Card;
