
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Award } from 'lucide-react';
import TransactionStatus from './TransactionStatus';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import NFTCertificate from './NFTCertificate';

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

  const handleViewCertificate = (tx: Transaction) => {
    setSelectedTransaction(tx);
    setIsCertificateOpen(true);
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
            {transactions.length > 0 ? (
              transactions.map((tx) => (
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
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/transactions/${tx.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Link>
                      </Button>
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
