export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Experiences', link: '#timeline' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title:
      'Great projects don’t happen alone — I’m always up for learning and building together.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Still a student, but I build like a pro (or at least I try to 😄).',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start text-center font-black',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a Content Management System',
    description: 'Karangsuci Landing CMS',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Have a project or idea? I’m just an email away.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const leftLists = ['ReactJS', 'NextJS', 'Typescript', 'Redux'];
export const rightLists = ['Tanstack', 'ReactJS', 'Supabase'];

export const projects = [
  {
    id: 1,
    title: 'BurnAlyze - Aplikasi Deteksi Luka Bakar',
    des: 'Smart burn detection app that classifies burn severity from images and provides proper first aid recommendations.',
    img: '/captures/burnalyze_home.png',
    iconLists: [
      '/brand_logo/re.svg',
      '/brand_logo/tail.svg',
      '/brand_logo/js.svg',
      '/brand_logo/mui.svg',
      '/brand_logo/rdx.svg',
    ],
    link: 'https://github.com/CC25-CF199',
    isDeployed: false,
  },
  {
    id: 2,
    title: 'Karangsuci Landing CMS',
    des: 'A content management system designed for Pondok Pesantren Al-Hidayah Purwokerto to easily manage and update their landing page content.',
    img: '/captures/klcms_login.png',
    iconLists: [
      '/brand_logo/re.svg',
      '/brand_logo/tail.svg',
      '/brand_logo/ts.svg',
      '/brand_logo/mui.svg',
      '/brand_logo/rdx.svg',
      '/brand_logo/spb.svg',
    ],
    link: 'https://github.com/AchmadAkif/karangsuci-landing-cms',
    isDeployed: false,
  },
];

export const timelineData = [
  {
    title: 'On Going',
    desc: 'Currently developing a custom Content Management System for Pondok Pesantren Al-Hidayah Purwokerto as a Frontend Developer. Iam working collaboratively with other engineers using React. Implemented authentication by integrating with the existing Karangsuci API and leveraging Supabase for seamless data synchronization with the landing page.',
    images: '/karangsuci_logo.jpg',
    company: 'Pondok Pesantren Karangsuci Al-Hidayah',
    role: 'Frontend Developer',
  },
  {
    title: 'Feb 2025',
    desc: 'Burnalyze is a collaborative project between Web developers and Machine Learning Engineers built during my bootcamp program. I worked as a Fullstack Developer, co-developing the frontend in React.js, building the backend with Node.js and Express, and integrating it with the AI model via a FastAPI wrapper.',
    images: '/cc_logo.jpg',
    company: 'Coding Camp 2025 powered by DBS',
    role: 'Fullstack Developer',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/brand_logo/git.svg',
    link: 'https://github.com/AchmadAkif',
  },
  {
    id: 2,
    img: '/brand_logo/insta.svg',
    link: 'https://www.instagram.com/_achmadakif/',
  },
  {
    id: 3,
    img: '/brand_logo/link.svg',
    link: 'https://www.linkedin.com/in/achmad-akif-bachtiar-76814a193/',
  },
  {
    id: 4,
    img: '/brand_logo/wha.svg',
    link: 'https:/wa.me/6287734611259',
  },
];
