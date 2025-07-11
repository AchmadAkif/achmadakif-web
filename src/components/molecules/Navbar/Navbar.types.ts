export type NavItemTypes = {
  name: string;
  link: string;
  icon?: React.ReactElement;
};

export type NavbarProps = {
  navItems: NavItemTypes[];
  className?: string;
};
