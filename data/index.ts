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
    title: 'Always learning and exploring the world of web dev.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
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
    title: 'Currently building ReactMap - a React component visualizer tool',
    description: 'ReactMap',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-between',
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
    link: 'https://karangsuci-landing-cms-dev.pages.dev/',
    isDeployed: true,
  },
  {
    id: 3,
    title: 'ZMATH LMS',
    des: 'ZMATH enables teachers to curate learning materials and dynamic quizzes. Students access these resources through a unified dashboard, allowing them to study and test their knowledge in one secure platform.',
    img: '/captures/zmath.png',
    iconLists: [
      '/brand_logo/next.svg',
      '/brand_logo/tail.svg',
      '/brand_logo/ts.svg',
      '/brand_logo/mui.svg',
      '/brand_logo/zst.svg',
      '/brand_logo/spb.svg',
    ],
    link: 'https://zmath-lms.vercel.app/',
    isDeployed: true,
  },
];

export const timelineData = [
  {
    title: 'Nov 2025',
    desc: 'ZMATH is a full-stack LMS engineered to handle both content delivery and student assessment. Utilizing Supabase for the backend, I implemented a relational schema that links course materials and quizzes to specific subjects and student cohorts. Key features include a secure file distribution system for subject resources, a real-time quiz engine, and strict Row Level Security (RLS) to ensure students can only access materials and grades authorized for their specific role.',
    images: '/private_client.png',
    company: 'Private Client',
    role: 'Fullstack Developer',
  },
  {
    title: 'Jun 2025',
    desc: 'Developed a custom Content Management System for Pondok Pesantren Al-Hidayah Purwokerto as a Frontend Developer. I worked collaboratively with other engineers using React. Implemented authentication by integrating with the existing Karangsuci API and leveraging Supabase for seamless data synchronization with the landing page.',
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
