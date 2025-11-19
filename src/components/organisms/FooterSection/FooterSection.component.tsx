import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';

import { SectionTitle, Button } from '@/components/atoms';
import { DotBackground } from '@/components/aceternityui';
import { socialMedia } from '../../../../data';

const FooterSection = () => {
  return (
    <footer id="contact" className="w-full pt-56 pb-10">
      <DotBackground>
        <div className=" relative z-10">
          <div className="flex flex-col items-center gap-5">
            <SectionTitle otherClasses="lg:max-w-[42vw]">
              Let’s build something that{' '}
              <span className="text-purple">matters</span> — together.
            </SectionTitle>
            <p className="text-white-200 md:mt-10 my-5 text-center">
              Let’s connect — I’d love to discuss how I can contribute to your
              team.
            </p>
            <Link
              href="https://www.linkedin.com/in/achmad-akif-bachtiar-76814a193/"
              target="_blank"
            >
              <Button
                title="Get in Touch with Me"
                icon={<FaLocationArrow />}
                iconPosition="end"
              />
            </Link>
          </div>
          <div className="flex mt-50 md:flex-row flex-col justify-between items-center gap-6 md:gap-0">
            <p className="md:text-base text-sm md:font-normal font-light text-white">
              Copyright © 2025 Achmad Akif
            </p>
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map(({ id, img, link }) => (
                <Link key={id} href={link} target="_blank">
                  <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <Image
                      src={img}
                      alt="social_media_logo"
                      width={20}
                      height={20}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DotBackground>
    </footer>
  );
};

export default FooterSection;
