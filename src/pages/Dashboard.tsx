
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
    amount: 500,
    currency: 'USD',
    campaignName: 'Masjid Renovation Project',
    campaignId: '1',
    status: 'success'
  },
  {
    id: '2',
    date: '2025-03-10',
    amount: 250,
    currency: 'USD',
    campaignName: 'Eid Food Packages',
    campaignId: '2',
    status: 'success'
  },
  {
    id: '3',
    date: '2025-03-05',
    amount: 1000,
    currency: 'USD',
    campaignName: 'Islamic Education Scholarship',
    campaignId: '3',
    status: 'pending'
  },
  {
    id: '4',
    date: '2025-02-20',
    amount: 350,
    currency: 'USD',
    campaignName: 'Water Wells in Africa',
    campaignId: '6',
    status: 'success'
  },
  {
    id: '5',
    date: '2025-02-15',
    amount: 200,
    currency: 'USD',
    campaignName: 'Yemen Emergency Relief',
    campaignId: '4',
    status: 'failed'
  }
] as const;

const dashboardData = {
  totalAmount: 45000,
  campaigns: 12,
  donors: 320,
  transactions: 524,
  monthlySummary: [
    { name: 'Jan', amount: 4000 },
    { name: 'Feb', amount: 3500 },
    { name: 'Mar', amount: 6800 },
    { name: 'Apr', amount: 5300 },
    { name: 'May', amount: 8900 },
    { name: 'Jun', amount: 7500 },
  ],
  categoryDistribution: [
    { name: 'Masjid', value: 18000, color: '#8884d8' },
    { name: 'Education', value: 9000, color: '#83a6ed' },
    { name: 'Emergency', value: 12000, color: '#8dd1e1' },
    { name: 'Food Aid', value: 6000, color: '#82ca9d' },
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
