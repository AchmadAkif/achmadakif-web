'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

import { TextGenerateEffectProps } from './TextGenerateEffect.types';

const TextGenerateEffect = ({
  words,
  className,
  duration,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, wordsArray, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${idx > 2 ? 'text-purple' : 'text-white'} opacity-0`}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
