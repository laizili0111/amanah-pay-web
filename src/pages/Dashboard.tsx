
import React, { useEffect, useState } from 'react';
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

const Dashboard = () => {
  // State to store user dashboard data
  const [userDashboardData, setUserDashboardData] = useState({
    totalDonations: 5525,  // in MYR
    campaignsContributed: 5,
    totalTransactions: 7,
    monthlySummary: [
      { name: 'Jan', amount: 0 },
      { name: 'Feb', amount: 1600 },
      { name: 'Mar', amount: 3925 },
      { name: 'Apr', amount: 0 },
      { name: 'May', amount: 0 },
      { name: 'Jun', amount: 0 },
    ],
    categoryDistribution: [
      { name: 'Masjid', value: 2500, color: '#8884d8' },
      { name: 'Education', value: 800, color: '#83a6ed' },
      { name: 'Emergency', value: 975, color: '#8dd1e1' },
      { name: 'Food Aid', value: 1250, color: '#82ca9d' },
    ],
  });

  // Effect to update the dashboard data whenever it changes in localStorage
  useEffect(() => {
    // Get the initial value from localStorage
    const updateFromLocalStorage = () => {
      const storedDonations = localStorage.getItem('totalDonations');
      
      if (storedDonations) {
        const parsedDonations = parseFloat(storedDonations);
        
        // Update the dashboard data with the new total donations
        setUserDashboardData(prevData => {
          // Get the current month (April as we're in April 2025)
          const currentMonth = 'Apr';
          
          return {
            ...prevData,
            totalDonations: parsedDonations,
            // Update current month's summary with the new donations
            monthlySummary: prevData.monthlySummary.map(month => {
              if (month.name === currentMonth) {
                return {
                  ...month,
                  amount: parsedDonations - 5525 + month.amount // Add the difference to current month
                };
              }
              return month;
            })
          };
        });
      }
    };
    
    // Call it once on initial load
    updateFromLocalStorage();
    
    // Set up an event listener to listen for storage changes
    const handleStorageChange = () => {
      updateFromLocalStorage();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Add an event listener for the custom event
    window.addEventListener('storage', handleStorageChange);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
            <ContributionDashboard donationData={userDashboardData} />
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
