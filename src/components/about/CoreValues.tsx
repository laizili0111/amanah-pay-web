
import React from 'react';
import { Shield, Heart, FileText, Calculator } from 'lucide-react';
import ValueCard from './ValueCard';

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Islamic Integrity",
      description: "Strict adherence to Shariah principles in all financial transactions and operations."
    },
    {
      icon: FileText,
      title: "Full Transparency",
      description: "Complete visibility into all donations, transactions, and fund allocations through blockchain."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Focused on creating meaningful, sustainable change in communities worldwide."
    },
    {
      icon: Calculator,
      title: "Quadratic Funding",
      description: "Promoting inclusivity by giving greater weight to the number of donors than donation amounts."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="islamic-heading text-3xl mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at Faith Finance Forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
