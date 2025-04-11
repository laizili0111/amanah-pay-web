
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MissionTab from './tabs/MissionTab';
import PrinciplesTab from './tabs/PrinciplesTab';
import TechnologyTab from './tabs/TechnologyTab';
import QuadraticFundingTab from './tabs/QuadraticFundingTab';

const AboutTabs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="mission">
          <TabsList className="w-full mb-8">
            <TabsTrigger value="mission" className="flex-1">Our Mission</TabsTrigger>
            <TabsTrigger value="principles" className="flex-1">Islamic Principles</TabsTrigger>
            <TabsTrigger value="technology" className="flex-1">Blockchain Technology</TabsTrigger>
            <TabsTrigger value="quadratic" className="flex-1">Quadratic Funding</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission">
            <MissionTab />
          </TabsContent>
          
          <TabsContent value="principles">
            <PrinciplesTab />
          </TabsContent>
          
          <TabsContent value="technology">
            <TechnologyTab />
          </TabsContent>
          
          <TabsContent value="quadratic">
            <QuadraticFundingTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutTabs;
