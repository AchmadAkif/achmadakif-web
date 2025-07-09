export type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  handleClick?: () => void;
  otherClasses?: string;
};
