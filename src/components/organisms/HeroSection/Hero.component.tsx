import React from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { FaFileDownload } from 'react-icons/fa';
import Link from 'next/link';

import {
  Spotlight,
  GridBackground,
  TextGenerate,
} from '@/components/aceternityui';
import { Button } from '@/components/atoms';

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
      <GridBackground position="top-0 left-0" />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Crafted Using Next.js
          </h2>
          <TextGenerate
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[32px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
            Hi, I&apos;m Achmad Akif, a Junior Frontend Developer based in
            Purwokerto, Indonesia
          </p>
          <div className="flex gap-2">
            <Link href="#projects">
              <Button
                title="Show my works"
                icon={<IoIosArrowDropdownCircle className="text-lg" />}
                iconPosition="end"
              />
            </Link>
            <Link download href="/cv_achmad-akif-bachtiar.pdf">
              <Button
                title="Download CV"
                icon={<FaFileDownload className="text-lg" />}
                iconPosition="end"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
