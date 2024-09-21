import React from "react";
import Button from "./ui/Button";
import { BiChevronRight } from "react-icons/bi";
import { Compare } from "./ui/compare";
import { TextGenerateEffect } from "./ui/text-generate-effect";

// Text to be animated in the heading
const headline = "Next-level Websites for Forward-Thinking Brands";
const tagline =
  "At Teki Technologies, we partner with visionary brands to craft websites that are not just ahead of the curve—they set the curve.";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-8 justify-center py-32 w-full bg-white dark:bg-background dark:bg-dot-white-200/[0.2] bg-dot-black/[0.2]">
      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content Container */}
      <div className="flex flex-col gap-8 text-center max-w-2xl z-10">
        {/* Animated Heading */}
        <TextGenerateEffect
          words={headline}
          className="text-3xl lg:text-5xl font-bold"
        />

        {/* Subheading Paragraph */}
        <TextGenerateEffect
          words={tagline}
          className="body-16 lg:body-16 lg:text-green-600"
          filter={false}
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button label="Get Started" variant="filled" />
          <Button
            label="Talk to our A.I"
            icon={BiChevronRight}
            variant="outlined"
          />
        </div>
      </div>

      {/* Compare Component Container */}
      <div className="w-full mt-24 p-4 border rounded-3xl bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top w-full h-full"
          secondImageClassname="object-cover object-left-top w-full h-full" // Fixed typo: ClassName with capital 'N'
          className="h-96 w-full md:h-128" // Responsive height
          slideMode="hover"
        />
      </div>
    </section>
  );
};

export default Hero;
