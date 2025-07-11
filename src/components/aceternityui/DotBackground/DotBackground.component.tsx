import { cn } from '@/lib/utils';
import React from 'react';

export default function DotBackgroundDemo({ position }: { position: string }) {
  return (
    <div
      className={`absolute ${position} flex h-screen w-full items-center justify-center`}
    >
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:radial-gradient(#404040_1px,transparent_1px)]'
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100"></div>
    </div>
  );
}
