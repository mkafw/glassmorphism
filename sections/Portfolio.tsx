import Card from "@/components/Card";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import ecoCommerceSS from "@/assets/EcoCommerce.png";
import gallery360SS from "@/assets/Gallery360.png";
import wellnessPortalSS from "@/assets/WellnessPortal.png";

const portfolioProjects = [
  {
    company: "GreenTech Innovations",
    year: "2022",
    title: "EcoCommerce",
    results: [
      { title: "Add AI-based product recommendations" },
      { title: "Implement server-side rendering (SSR) for faster loading." },
      { title: "Add multi-factor authentication for security." },
    ],
    image: ecoCommerceSS,
    link: "#",
  },
  {
    company: "ArtistryHub",
    year: "2023",
    title: "Gallery360",
    results: [
      { title: "Redesign UI for mobile-first experience." },
      { title: "Optimize for better SEO." },
      { title: "Integrate AR/VR features for artwork visualization." },
    ],
    image: gallery360SS,
    link: "#",
  },
  {
    company: "HealthifyNow",
    year: "2024",
    title: "WellnessPortal",
    results: [
      { title: "Optimize page load speeds with CDN and lazy loading." },
      { title: "Add analytics for user behavior tracking." },
      { title: "Personalize content based on user preferences." },
    ],
    image: wellnessPortalSS,
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-16 lg:py-24">
      <Header
        title="01. Portfolio"
        description="A collection of my favorite projects, showing how I turn ideas into functional, creative solutions."
      />
      <div className="container">
        <div className="flex flex-col mt-10 gap-20 md:mt-10">
          {portfolioProjects.map((portfolioProject, portfolioProjectIndex) => (
            <Card
              key={portfolioProject.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(74px + ${portfolioProjectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="text-gray- inline-flex gap-2 font-bold uppercase tracing-widest text-sm">
                    <span>{portfolioProject.company}</span>
                    <span>&bull;</span>
                    <span>{portfolioProject.year}</span>
                  </div>

                  <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl">
                    {portfolioProject.title}
                  </h3>
                  <hr className="border-t-2 border-black/10 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {portfolioProject.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-black/80 md:text-base"
                      >
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col mt-8 md:flex-row gap-4">
                    <a href={portfolioProject.link}>
                      <button className="bg-black text-white hover:bg-gray-900 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center">
                        <span>View Project</span>
                      </button>
                    </a>
                    <a href={portfolioProject.link}>
                      <button className="bg-black text-white hover:bg-gray-900 h-12 w-full md:w-auto px-6 rounded-lg font-semibold inline-flex items-center justify-center">
                        <span>Source Code</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={portfolioProject.image}
                    alt={portfolioProject.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
