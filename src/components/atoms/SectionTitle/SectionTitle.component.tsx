import React from 'react';

import { SectionTitleProps } from './SectionTitle.types';

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h1 className="heading text-white">{children}</h1>;
};

export default SectionTitle;
