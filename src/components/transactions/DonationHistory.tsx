
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Award } from 'lucide-react';
import TransactionStatus from './TransactionStatus';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import NFTCertificate from './NFTCertificate';
import { toast } from 'sonner';

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  currency: string;
  campaignName: string;
  campaignId: string;
  status: 'success' | 'pending' | 'failed';
  txHash?: string;
}

interface DonationHistoryProps {
  transactions: Transaction[];
}

const DonationHistory: React.FC<DonationHistoryProps> = ({ transactions }) => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [localTransactions, setLocalTransactions] = useState<Transaction[]>(transactions);

  useEffect(() => {
    // Check if there's any stored transactions
    const storedTransactions = localStorage.getItem('userTransactions');
    if (storedTransactions) {
      try {
        const parsedTransactions = JSON.parse(storedTransactions);
        setLocalTransactions([...parsedTransactions, ...transactions]);
      } catch (e) {
        console.error('Error parsing stored transactions:', e);
      }
    } else {
      // Initialize localStorage with sample transactions
      localStorage.setItem('userTransactions', JSON.stringify([]));
    }
  }, [transactions]);

  const handleViewCertificate = (tx: Transaction) => {
    setSelectedTransaction(tx);
    setIsCertificateOpen(true);
  };

  const processPendingTransaction = (txId: string) => {
    // Find the transaction
    const updatedTransactions = localTransactions.map((tx) => {
      if (tx.id === txId && tx.status === 'pending') {
        // Update status to success
        const updatedTx = { ...tx, status: 'success' as const };
        
        // Update total donations
        const existingDonations = localStorage.getItem('totalDonations') 
          ? parseFloat(localStorage.getItem('totalDonations') || '0') 
          : 0;
        
        // Convert to MYR if needed
        let donationAmount = tx.amount;
        if (tx.currency === 'ETH') {
          // Simple conversion rate for demo purposes
          donationAmount = tx.amount * 12000;
        }
        
        const updatedDonations = existingDonations + donationAmount;
        localStorage.setItem('totalDonations', updatedDonations.toString());
        
        // Update stored transactions
        const storedTransactions = JSON.parse(localStorage.getItem('userTransactions') || '[]');
        const updatedStoredTransactions = storedTransactions.map((storedTx: Transaction) => 
          storedTx.id === txId ? updatedTx : storedTx
        );
        localStorage.setItem('userTransactions', JSON.stringify(updatedStoredTransactions));
        
        toast.success("Transaction processed successfully!");
        
        // Trigger storage event for dashboard to update
        window.dispatchEvent(new Event('storage'));
        
        return updatedTx;
      }
      return tx;
    });
    
    setLocalTransactions(updatedTransactions);
  };

  return (
    <>
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Campaign</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {localTransactions.length > 0 ? (
              localTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.date}</TableCell>
                  <TableCell>
                    <Link to={`/campaigns/${tx.campaignId}`} className="hover:text-islamic-primary">
                      {tx.campaignName}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    {tx.amount} {tx.currency}
                  </TableCell>
                  <TableCell>
                    <TransactionStatus status={tx.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {tx.status === 'pending' ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => processPendingTransaction(tx.id)}
                          className="border-islamic-primary text-islamic-primary hover:bg-islamic-primary/10"
                        >
                          Process
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/transactions/${tx.id}`}>
                            <Eye className="h-4 w-4 mr-1" />
                            Details
                          </Link>
                        </Button>
                      )}
                      {tx.status === 'success' && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleViewCertificate(tx)}
                          className="border-islamic-primary text-islamic-primary hover:bg-islamic-primary/10"
                        >
                          <Award className="h-4 w-4 mr-1" />
                          Certificate
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  No donation history found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isCertificateOpen} onOpenChange={setIsCertificateOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Donation Certificate NFT</DialogTitle>
          </DialogHeader>
          {selectedTransaction && (
            <NFTCertificate transaction={selectedTransaction} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonationHistory;
