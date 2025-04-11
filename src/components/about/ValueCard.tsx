
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
      <div className="w-16 h-16 bg-islamic-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-islamic-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;
