import React from 'react';

import { SectionTitleProps } from './SectionTitle.types';

const SectionTitle = ({ children, otherClasses }: SectionTitleProps) => {
  return <h1 className={`heading text-white ${otherClasses}`}>{children}</h1>;
};

export default SectionTitle;
