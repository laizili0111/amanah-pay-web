
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { CalculatorIcon, InfoIcon } from 'lucide-react';
import { toast } from 'sonner';

const ZakatCalculator: React.FC = () => {
  const [calculatorMode, setCalculatorMode] = useState<string>('wealth');
  const currency = 'MYR';
  
  // Personal wealth inputs
  const [salary, setSalary] = useState<string>('');
  const [cash, setCash] = useState<string>('');
  const [gold, setGold] = useState<string>('');
  const [silver, setSilver] = useState<string>('');
  const [investments, setInvestments] = useState<string>('');
  const [properties, setProperties] = useState<string>('');
  const [debts, setDebts] = useState<string>('');
  const [zakatResult, setZakatResult] = useState<number | null>(null);
  
  // Business wealth inputs
  const [annualRevenue, setAnnualRevenue] = useState<string>('');
  const [inventory, setInventory] = useState<string>('');
  const [receivables, setReceivables] = useState<string>('');
  const [businessCash, setBusinessCash] = useState<string>('');
  const [liabilities, setLiabilities] = useState<string>('');
  
  const nisabThreshold = 24500;
  
  const calculateZakat = () => {
    if (calculatorMode === 'wealth') {
      const annualSalary = parseFloat(salary || '0') * 12; // Convert monthly salary to annual
      const totalAssets = parseFloat(cash || '0') + 
                          parseFloat(gold || '0') + 
                          parseFloat(silver || '0') + 
                          parseFloat(investments || '0') + 
                          parseFloat(properties || '0') +
                          annualSalary;
                          
      const totalLiabilities = parseFloat(debts || '0');
      const netWealth = totalAssets - totalLiabilities;
      
      if (netWealth < nisabThreshold) {
        toast.info("Your wealth is below the Nisab threshold. Zakat is not mandatory.", {
          description: `The Nisab threshold is MYR ${nisabThreshold.toLocaleString()}.`
        });
        setZakatResult(0);
      } else {
        const zakatAmount = netWealth * 0.025;
        setZakatResult(zakatAmount);
        toast.success("Zakat calculated successfully!");
      }
    } else {
      const totalBusinessAssets = parseFloat(inventory || '0') + 
                                parseFloat(receivables || '0') + 
                                parseFloat(businessCash || '0') +
                                parseFloat(annualRevenue || '0');
                                
      const totalBusinessLiabilities = parseFloat(liabilities || '0');
      const netBusinessWealth = totalBusinessAssets - totalBusinessLiabilities;
      
      if (netBusinessWealth < nisabThreshold) {
        toast.info("Your business wealth is below the Nisab threshold. Zakat is not mandatory.", {
          description: `The Nisab threshold is MYR ${nisabThreshold.toLocaleString()}.`
        });
        setZakatResult(0);
      } else {
        const zakatAmount = netBusinessWealth * 0.025;
        setZakatResult(zakatAmount);
        toast.success("Business Zakat calculated successfully!");
      }
    }
  };
  
  const handlePayZakat = () => {
    if (zakatResult !== null && zakatResult > 0) {
      // Get existing donations from localStorage or initialize
      const existingDonations = localStorage.getItem('totalDonations') 
        ? parseFloat(localStorage.getItem('totalDonations') || '0') 
        : 0;
      
      // Add zakat amount to total donations
      const updatedDonations = existingDonations + zakatResult;
      
      // Store updated donations
      localStorage.setItem('totalDonations', updatedDonations.toString());
      
      toast.success("Zakat payment processed successfully!", {
        description: `MYR ${zakatResult.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} has been added to your total donations.`
      });
      
      // Reset calculator after payment
      setZakatResult(null);
      
      // Clear all input fields
      if (calculatorMode === 'wealth') {
        setSalary('');
        setCash('');
        setGold('');
        setSilver('');
        setInvestments('');
        setProperties('');
        setDebts('');
      } else {
        setAnnualRevenue('');
        setInventory('');
        setReceivables('');
        setBusinessCash('');
        setLiabilities('');
      }
      
      // Dispatch a custom event to notify the dashboard of the change
      window.dispatchEvent(new Event('storage'));
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex items-center mb-6">
        <CalculatorIcon className="mr-2 text-islamic-primary" />
        <h2 className="text-2xl font-bold text-islamic-dark">Zakat Calculator</h2>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <InfoIcon className="h-4 w-4 text-islamic-primary" />
          <p className="text-sm text-gray-600">
            Zakat is calculated at 2.5% of your eligible wealth that has been in your possession for one lunar year.
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <Tabs value={calculatorMode} onValueChange={setCalculatorMode} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="wealth">Personal Wealth</TabsTrigger>
              <TabsTrigger value="business">Business Assets</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="ml-4 w-32">
            <div className="h-10 px-3 py-2 rounded-md border border-input bg-background flex items-center text-sm">
              MYR
            </div>
          </div>
        </div>
      </div>
      
      <TabsContent value="wealth" className="mt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="salary">Monthly Salary</Label>
              <Input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="cash">Cash & Bank Balance</Label>
              <Input
                id="cash"
                type="number"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="gold">Gold Value</Label>
              <Input
                id="gold"
                type="number"
                value={gold}
                onChange={(e) => setGold(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="silver">Silver Value</Label>
              <Input
                id="silver"
                type="number"
                value={silver}
                onChange={(e) => setSilver(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="investments">Investments & Stocks</Label>
              <Input
                id="investments"
                type="number"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="properties">Property for Investment</Label>
              <Input
                id="properties"
                type="number"
                value={properties}
                onChange={(e) => setProperties(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="debts">Debts & Liabilities</Label>
              <Input
                id="debts"
                type="number"
                value={debts}
                onChange={(e) => setDebts(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="business" className="mt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="annualRevenue">Annual Revenue</Label>
              <Input
                id="annualRevenue"
                type="number"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="inventory">Inventory Value</Label>
              <Input
                id="inventory"
                type="number"
                value={inventory}
                onChange={(e) => setInventory(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="receivables">Accounts Receivable</Label>
              <Input
                id="receivables"
                type="number"
                value={receivables}
                onChange={(e) => setReceivables(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="businessCash">Cash & Bank Balance</Label>
              <Input
                id="businessCash"
                type="number"
                value={businessCash}
                onChange={(e) => setBusinessCash(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="liabilities">Liabilities</Label>
              <Input
                id="liabilities"
                type="number"
                value={liabilities}
                onChange={(e) => setLiabilities(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>
        </div>
      </TabsContent>
      
      <div className="mt-6">
        <Button 
          onClick={calculateZakat}
          className="bg-islamic-primary hover:bg-islamic-primary/90 w-full"
        >
          Calculate Zakat
        </Button>
        
        {zakatResult !== null && (
          <div className="mt-6 p-4 bg-islamic-secondary/10 rounded-lg">
            <p className="text-center text-lg font-medium">
              Your Zakat amount:
            </p>
            <p className="text-center text-2xl font-bold text-islamic-primary">
              MYR {zakatResult.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </p>
            <div className="flex justify-center mt-4">
              <Button 
                onClick={handlePayZakat}
                className="bg-islamic-secondary text-islamic-dark hover:bg-islamic-secondary/90"
                size="sm"
              >
                Pay Zakat Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZakatCalculator;
