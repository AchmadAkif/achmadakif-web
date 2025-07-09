'use client';
import { TextGenerateEffect } from '../TextGenerateEffect';
import { TextGenerateProps } from './TextGenerate.types';

export default function TextGenerateEffectDemo({
  duration,
  words,
  className,
}: TextGenerateProps) {
  return (
    <TextGenerateEffect
      duration={duration}
      words={words}
      className={className}
    />
  );
}
