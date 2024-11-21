"use client";
import { Reveal } from "./ui/Reveal";
import React from "react";
import ButtonGetStarted from "./ui/ButtonGetStarted";

interface IntroductionProps {
  onGetStartedClick: () => void;
}
const Introduction = ({ onGetStartedClick }: IntroductionProps) => {
  return (
    <section className="flex flex-col justify-center items-start text-left text-white mt-16 mx-auto px-4 sm:px-8 md:px-24 lg:px-48 xl:px-64 max-w-5xl">
      <Reveal>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space leading-tight md:leading-[4.5rem]">
          Student <br /> Autonomy in the Digital 4.0 Era
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-lg">
          Nghiên cứu này không chỉ quan trọng cho quá trình học tập mà còn cho
          sự phát triển toàn diện của học sinh trong xã hội hiện đại.
        </p>
      </Reveal>
      <Reveal>
        <div>
          <ButtonGetStarted onClick={onGetStartedClick} text="Get started" />
        </div>
      </Reveal>
    </section>
  );
};

export default Introduction;
