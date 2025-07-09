import React from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

import {
  Spotlight,
  GridBackground,
  TextGenerate,
  Button,
} from '@/components/atoms';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.JS
          </h2>
          <TextGenerate
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[32px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
            Hi, I&apos;m Akif, a Junior Frontend Developer based in Purwokerto,
            Indonesia
          </p>
          <a href="#about">
            <Button
              title="Show my works"
              icon={<IoIosArrowDropdownCircle className="text-lg" />}
              iconPosition="end"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
