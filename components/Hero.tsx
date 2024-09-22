import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Button from "./ui/Button";
import { FaChevronRight, FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      {/* Spotlight at the top of the homepage */}
      <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden absolute">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      {/* Grid Background container */}
      <div className="h-screen w-full dark:bg-background bg-white  dark:bg-grid-small-yellow-600/[0.2] bg-grid-small-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Moving border element --- Tip:use as a header container for logo */}
      {/* <HoverBorderGradient
        containerClassName="rounded-full mt-36"
        as="button"
        className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <Image
          src={"/svg/mobile-logo.svg"}
          alt="company logo"
          width={24}
          height={24}
        />
        <span>Teki Technologies</span>
      </HoverBorderGradient> */}

      {/* Headline text and subheading paragraph with text-generate animation*/}
      <div className="max-w-5xl md:3xl  mx-auto relative z-10  w-full mt-36">
        <TextGenerateEffect
          className="text-[40px] md:text-5xl lg:text-6xl font-bold text-center bg-clip-text "
          words="Next-Level Websites For Forward-Thinking Brands"
        />
        <TextGenerateEffect
          className="px-6 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
          words="At Teki Technologies, we partner with visionary brands to craft websites that are not just ahead of the curve—they set the curve."
        />
        {/* Call to action Buttons with color invert animation*/}
        <div className="py-8 relative flex justify-center gap-8 items-center">
          <Button
            label="Request a Quote"
            variant="filled"
            icon={FaLocationArrow}
          />
          <Button label="Learn More" variant="outlined" icon={FaChevronRight} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
