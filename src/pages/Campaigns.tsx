
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CampaignCard, { CampaignProps } from '@/components/campaigns/CampaignCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter } from 'lucide-react';

// Sample campaign data
const ALL_CAMPAIGNS: CampaignProps[] = [
  {
    id: '1',
    title: 'Masjid Renovation Project',
    description: 'Help us renovate the local masjid to accommodate our growing community and provide better services.',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop',
    goal: 50000,
    raised: 32500,
    currency: 'USD',
    daysLeft: 21,
    supporters: 147,
    category: 'Masjid'
  },
  {
    id: '2',
    title: 'Eid Food Packages',
    description: 'Provide food packages to families in need during the blessed month of Ramadan and for Eid celebrations.',
    imageUrl: 'https://images.unsplash.com/photo-1574940290085-70d9f52c8bf7?q=80&w=800&auto=format&fit=crop',
    goal: 10000,
    raised: 8750,
    currency: 'USD',
    daysLeft: 7,
    supporters: 215,
    category: 'Food Aid'
  },
  {
    id: '3',
    title: 'Islamic Education Scholarship',
    description: 'Support students pursuing Islamic studies with scholarships to cover tuition and living expenses.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851905-dc99e1f8b4b9?q=80&w=800&auto=format&fit=crop',
    goal: 25000,
    raised: 12300,
    currency: 'USD',
    daysLeft: 45,
    supporters: 78,
    category: 'Education'
  },
  {
    id: '4',
    title: 'Yemen Emergency Relief',
    description: 'Urgent humanitarian aid for families affected by conflict in Yemen, providing food, shelter, and medical care.',
    imageUrl: 'https://images.unsplash.com/photo-1469290664615-bbe2afe34fb3?q=80&w=800&auto=format&fit=crop',
    goal: 100000,
    raised: 67800,
    currency: 'USD',
    daysLeft: 15,
    supporters: 532,
    category: 'Emergency'
  },
  {
    id: '5',
    title: 'Islamic Community Center',
    description: 'Build a new community center offering educational programs, youth activities, and community services.',
    imageUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=800&auto=format&fit=crop',
    goal: 200000,
    raised: 89000,
    currency: 'USD',
    daysLeft: 60,
    supporters: 312,
    category: 'Community'
  },
  {
    id: '6',
    title: 'Water Wells in Africa',
    description: 'Provide clean water access by building wells in drought-affected regions across Africa.',
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
    goal: 30000,
    raised: 21500,
    currency: 'USD',
    daysLeft: 30,
    supporters: 178,
    category: 'Water'
  }
];

const categories = [
  'All',
  'Masjid', 
  'Education', 
  'Food Aid', 
  'Emergency', 
  'Community',
  'Water',
  'Zakat',
  'Sadaqah'
];

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredCampaigns = ALL_CAMPAIGNS.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || campaign.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <section className="py-8 md:py-12 bg-islamic-primary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-islamic-dark">Browse Campaigns</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our collection of Shariah-compliant fundraising campaigns and support causes that matter to you. All donations are processed through our secure blockchain system.
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search campaigns..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-gray-500" />
              <span className="mr-2 text-sm text-gray-500">Filter:</span>
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="h-auto overflow-auto">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="text-xs px-3 py-1"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {filteredCampaigns.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium mb-2">No Campaigns Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
