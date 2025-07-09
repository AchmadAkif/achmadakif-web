import React from 'react';

import { ButtonProps } from './Button.types';

const Button = ({ title, icon, iconPosition, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-md bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {iconPosition === 'start' && icon}
        {title}
        {iconPosition === 'end' && icon}
      </span>
    </button>
  );
};

export default Button;
