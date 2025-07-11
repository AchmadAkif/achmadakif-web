import React from 'react';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

import { SectionTitle } from '@/components/atoms';
import { projects } from '../../../../data';

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <SectionTitle>
        A small selection of {''}{' '}
        <span className="text-purple">recent projects</span>
      </SectionTitle>
      <div className="flex flex-wrap justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, link, isDeployed }) => (
            <div
              key={id}
              className="flex flex-col justify-between sm:w-[570px] w-[80vw] p-6 rounded-xl lg:rounded-3xl border border-white/[0.1] text-white"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: 'rgb(4,7,29)',
                backgroundColor:
                  'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              }}
            >
              <div>
                <div className="relative flex items-center justify-center overflow-hidden mb-10">
                  <Image
                    src={img}
                    alt="cover"
                    height={0}
                    width={1000}
                    className="rounded-lg lg:rounded-2xl"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                  {title}
                </h1>
                <p className="lg:text-xl md:text-lg lg:font-normal font-light text-sm mt-2">
                  {des}
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between mt-12">
                <div className="flex items-center">
                  {iconLists.map((icon, idx) => (
                    <div
                      key={icon}
                      className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 md:w-10 w-8 md:h-10 h-8 flex justify-center items-center"
                      style={{
                        transform: `${idx > 0 ? `translateX(-${idx * 5}px)` : ''}`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={100}
                        height={100}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  className="flex md:justify-center items-center gap-2"
                >
                  <p className="font-medium lg:text-2xl md:text-xl text-purple">
                    Check {isDeployed ? 'Live Site' : 'Repository'}
                  </p>
                  <FaLocationArrow color="#CBACF9" />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
