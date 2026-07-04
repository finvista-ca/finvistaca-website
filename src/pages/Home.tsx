import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { StatisticsSection } from '../components/home/StatisticsSection';
import { KnowledgeHub } from '../components/home/KnowledgeHub';
import { ServicesSection } from '../components/home/ServicesSection';
import { LatestUpdates } from '../components/home/LatestUpdates';
import { DueDateReminder } from '../components/home/DueDateReminder';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Testimonials } from '../components/home/Testimonials';
import { ContactCTA } from '../components/home/ContactCTA';

export const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <KnowledgeHub />
      <ServicesSection />
      <LatestUpdates />
      <DueDateReminder />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </main>
  );
};
