import React from "react";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative">
      <h2 className="text-3xl md:text-5xl text-center mt-6 text-white drop-shadow-lg">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/80 mt-4 max-w-2xl mx-auto drop-shadow">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
