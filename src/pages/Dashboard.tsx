
import React from 'react';
import Layout from '@/components/layout/Layout';
import DonationHistory from '@/components/transactions/DonationHistory';
import ContributionDashboard from '@/components/dashboard/ContributionDashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ZakatCalculator from '@/components/zakat/ZakatCalculator';

// Sample data - would typically come from API
const sampleTransactions = [
  {
    id: '1',
    date: '2025-03-15',
    amount: 2500,
    currency: 'MYR',
    campaignName: 'Masjid Renovation Project',
    campaignId: '1',
    status: 'success' as const
  },
  {
    id: '2',
    date: '2025-03-10',
    amount: 1200,
    currency: 'MYR',
    campaignName: 'Eid Food Packages',
    campaignId: '2',
    status: 'success' as const
  },
  {
    id: '3',
    date: '2025-03-05',
    amount: 0.25,
    currency: 'ETH',
    campaignName: 'Islamic Education Scholarship',
    campaignId: '3',
    status: 'pending' as const
  },
  {
    id: '4',
    date: '2025-02-20',
    amount: 1500,
    currency: 'MYR',
    campaignName: 'Water Wells in Africa',
    campaignId: '6',
    status: 'success' as const
  },
  {
    id: '5',
    date: '2025-02-15',
    amount: 0.1,
    currency: 'ETH',
    campaignName: 'Yemen Emergency Relief',
    campaignId: '4',
    status: 'failed' as const
  }
];

const dashboardData = {
  totalAmount: 225000,
  campaigns: 12,
  donors: 320,
  transactions: 524,
  monthlySummary: [
    { name: 'Jan', amount: 20000 },
    { name: 'Feb', amount: 17500 },
    { name: 'Mar', amount: 34000 },
    { name: 'Apr', amount: 26500 },
    { name: 'May', amount: 44500 },
    { name: 'Jun', amount: 37500 },
  ],
  categoryDistribution: [
    { name: 'Masjid', value: 90000, color: '#8884d8' },
    { name: 'Education', value: 45000, color: '#83a6ed' },
    { name: 'Emergency', value: 60000, color: '#8dd1e1' },
    { name: 'Food Aid', value: 30000, color: '#82ca9d' },
  ],
};

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transaction History</TabsTrigger>
            <TabsTrigger value="zakat">Zakat Calculator</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <ContributionDashboard donationData={dashboardData} />
          </TabsContent>
          
          <TabsContent value="transactions">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Your Donation History</h2>
              <DonationHistory transactions={sampleTransactions} />
            </div>
          </TabsContent>
          
          <TabsContent value="zakat">
            <ZakatCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
