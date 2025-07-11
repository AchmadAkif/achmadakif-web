import { SectionTitle } from '@/components/atoms';
import { Timeline } from '@/components/ui';
import { timelineData } from '../../../../data';

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20">
      <SectionTitle>
        My <span className="text-purple">Journey</span>
      </SectionTitle>
      <Timeline data={timelineData} />
    </section>
  );
};

export default TimelineSection;
