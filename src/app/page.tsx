import {
  Hero,
  Navbar,
  Grid,
  RecentProjects,
  TimelineSection,
  FooterSection,
} from '@/components';
import { navItems } from '../../data';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <TimelineSection />
        <FooterSection />
      </div>
    </main>
  );
}
