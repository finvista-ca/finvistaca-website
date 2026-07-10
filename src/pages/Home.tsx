import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatisticsSection } from '../components/home/StatisticsSection';
import { KnowledgeHub } from '../components/home/KnowledgeHub';
import { ServicesSection } from '../components/home/ServicesSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { IndustryExpertise } from '../components/home/IndustryExpertise';
import { LatestUpdates } from '../components/home/LatestUpdates';
import { DueDateReminder } from '../components/home/DueDateReminder';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Associations } from '../components/home/Associations';
import { Testimonials } from '../components/home/Testimonials';
import { ContactCTA } from '../components/home/ContactCTA';

export const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <ProcessSection />
      <IndustryExpertise />
      <WhyChooseUs />
      <KnowledgeHub />
      <LatestUpdates />
      <DueDateReminder />
      <Testimonials />
      <Associations />
      <ContactCTA />
    </main>
  );
};
