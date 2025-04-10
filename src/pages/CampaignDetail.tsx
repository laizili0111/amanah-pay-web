import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, Users, Share2, Heart, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import QRCodePayment from '@/components/payments/QRCodePayment';

const campaignData = {
  id: '1',
  title: 'Masjid Renovation Project',
  description: 'Help us renovate the local masjid to accommodate our growing community and provide better services.',
  longDescription: `
    Our community's masjid has been serving our growing Muslim population for over 20 years, but it now requires significant renovations to continue meeting the needs of our ummah. The current structure is facing several challenges:

    - The prayer hall is too small for Friday prayers, with many worshippers having to pray outside
    - The roof has developed leaks, causing damage during rainy seasons
    - The wudu area needs complete renovation to improve accessibility
    - Heating and cooling systems are outdated and inefficient
    - Additional classrooms are needed for our expanding weekend Islamic school

    This renovation project will expand the prayer hall by 30%, completely renovate the roof and weatherproofing, modernize the wudu facilities, install energy-efficient HVAC systems, and add three new classrooms for education.

    All donations will be tracked on the blockchain for complete transparency, and detailed financial reports will be published monthly. The project has been approved by the local Islamic council, and all construction will be performed by certified contractors.

    Your generous support will help ensure our masjid continues to be a center for worship, education, and community for generations to come. May Allah reward your generosity.
  `,
  imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop',
  goal: 250000,
  raised: 162500,
  currency: 'MYR',
  daysLeft: 21,
  supporters: 147,
  category: 'Masjid',
  organizationName: 'Islamic Community Center',
  organizationLogo: 'https://randomuser.me/api/portraits/lego/1.jpg',
  updates: [
    {
      date: '2023-03-01',
      title: 'Construction Begins',
      content: 'We are excited to announce that construction has officially begun on the masjid renovation project. The first phase involves roof repairs and structural assessments.'
    },
    {
      date: '2023-02-15',
      title: 'Architectural Plans Approved',
      content: 'The city council has approved our architectural plans. We can now proceed with the renovation as scheduled.'
    },
    {
      date: '2023-01-20',
      title: 'Fundraising Campaign Launch',
      content: 'Today we officially launch our fundraising campaign for the masjid renovation. We thank everyone for their support and duas.'
    }
  ],
  blockchainTransactions: [
    { 
      txHash: '0x2a567de4ac1cbd4c41c48988963988211c45a1c2a1d1bd4545',
      date: '2023-03-05',
      amount: 0.25,
      currency: 'ETH'
    },
    { 
      txHash: '0x8b34f67de43c21a56789a452bb4e3267fdde321ac34a45c2',
      date: '2023-02-25',
      amount: 0.5,
      currency: 'ETH'
    },
    { 
      txHash: '0x3c45de67843abc1357924680abcdef12345678901234567',
      date: '2023-02-10',
      amount: 0.7,
      currency: 'ETH'
    }
  ]
};

const CampaignDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [donationAmount, setDonationAmount] = useState<string>('250');
  const fiatCurrency = 'MYR';
  const cryptoCurrency = 'ETH';
  const [donationTab, setDonationTab] = useState<string>('fiat');
  
  const progress = (campaignData.raised / campaignData.goal) * 100;
  
  const handleDonate = () => {
    const currency = donationTab === 'fiat' ? fiatCurrency : cryptoCurrency;
    toast.success(`Thank you for your ${donationAmount} ${currency} donation!`, {
      description: "Your transaction is being processed.",
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img 
              src={campaignData.imageUrl} 
              alt={campaignData.title}
              className="w-full h-96 object-cover rounded-xl mb-6" 
            />
            
            <h1 className="text-3xl font-bold mb-4">{campaignData.title}</h1>
            
            <div className="flex items-center mb-6">
              <img 
                src={campaignData.organizationLogo} 
                alt={campaignData.organizationName}
                className="w-10 h-10 rounded-full mr-3" 
              />
              <span className="font-medium">{campaignData.organizationName}</span>
              <span className="mx-3 text-gray-400">•</span>
              <span className="bg-islamic-secondary/20 text-islamic-dark px-3 py-1 rounded-full text-sm">
                {campaignData.category}
              </span>
            </div>
            
            <Tabs defaultValue="about">
              <TabsList className="w-full">
                <TabsTrigger value="about" className="flex-1">About</TabsTrigger>
                <TabsTrigger value="updates" className="flex-1">Updates</TabsTrigger>
                <TabsTrigger value="transactions" className="flex-1">Blockchain Transactions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">{campaignData.longDescription}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="updates" className="mt-6">
                <div className="space-y-6">
                  {campaignData.updates.map((update, index) => (
                    <div key={index} className="border-l-4 border-islamic-primary pl-4 py-2">
                      <div className="text-sm text-gray-500 mb-1">{update.date}</div>
                      <h3 className="font-medium text-lg mb-2">{update.title}</h3>
                      <p className="text-gray-600">{update.content}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="transactions" className="mt-6">
                <div className="rounded-lg border overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Hash</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {campaignData.blockchainTransactions.map((tx, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{tx.amount} {tx.currency}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-xs">
                            <a href="#" className="text-islamic-primary hover:underline">
                              {tx.txHash.substring(0, 10)}...{tx.txHash.substring(tx.txHash.length - 8)}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border shadow-sm p-6 sticky top-24">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Raised: <span className="text-islamic-primary">{campaignData.currency} {campaignData.raised.toLocaleString()}</span></span>
                  <span className="text-gray-500">Goal: {campaignData.currency} {campaignData.goal.toLocaleString()}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="flex justify-between mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{campaignData.daysLeft} days left</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-1" />
                  <span>{campaignData.supporters} supporters</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Tabs value={donationTab} onValueChange={setDonationTab}>
                  <TabsList className="w-full">
                    <TabsTrigger value="fiat" className="flex-1">Fiat</TabsTrigger>
                    <TabsTrigger value="crypto" className="flex-1">Crypto</TabsTrigger>
                  </TabsList>
                  <TabsContent value="fiat" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">Amount</label>
                        <div className="flex">
                          <Input
                            type="number"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            className="rounded-r-none"
                          />
                          <div className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-l-none border border-l-0 border-input bg-background px-3 text-sm font-medium shadow-sm">
                            MYR
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2">
                        {[50, 100, 250, 500].map((amount) => (
                          <Button 
                            key={amount}
                            variant="outline"
                            onClick={() => setDonationAmount(amount.toString())}
                            className={donationAmount === amount.toString() ? "bg-islamic-primary/10 border-islamic-primary text-islamic-primary" : ""}
                          >
                            {fiatCurrency} {amount}
                          </Button>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-islamic-primary hover:bg-islamic-primary/90" onClick={handleDonate}>
                        Donate Now
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="crypto" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">Amount</label>
                        <div className="flex">
                          <Input
                            type="number"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            className="rounded-r-none"
                          />
                          <div className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-l-none border border-l-0 border-input bg-background px-3 text-sm font-medium shadow-sm">
                            ETH
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-islamic-primary/5 rounded-md flex items-center">
                        <AlertCircle size={16} className="text-islamic-primary mr-2" />
                        <p className="text-xs">All donations are processed on the Ethereum blockchain for full transparency.</p>
                      </div>
                      
                      <Button className="w-full bg-islamic-primary hover:bg-islamic-primary/90" onClick={handleDonate}>
                        Donate with Ethereum
                      </Button>
                      
                      <QRCodePayment 
                        amount={donationAmount} 
                        currency={cryptoCurrency} 
                        campaignId={id || '1'}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="border-t pt-4 mt-4 flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Heart size={16} className="mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetail;
