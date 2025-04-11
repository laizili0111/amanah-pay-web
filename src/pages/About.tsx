
import React from 'react';
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import AboutTabs from '@/components/about/AboutTabs';
import CoreValues from '@/components/about/CoreValues';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <AboutTabs />
      <CoreValues />
    </Layout>
  );
};

export default About;
