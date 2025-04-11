
import React from 'react';
import { Transaction } from './DonationHistory';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface NFTCertificateProps {
  transaction: Transaction;
}

const NFTCertificate: React.FC<NFTCertificateProps> = ({ transaction }) => {
  const certificateId = `FFNFT-${transaction.id.toUpperCase()}`;
  
  const handleDownload = () => {
    toast.success("Certificate downloaded successfully");
  };
  
  const handleShare = () => {
    toast.success("Certificate share link copied to clipboard");
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-[500px] overflow-hidden border-2 border-islamic-primary/30 shadow-lg relative bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-islamic-pattern"></div>
        
        <div className="absolute top-3 right-3 text-xs text-gray-500">
          NFT ID: {certificateId}
        </div>
        
        <div className="p-2 bg-islamic-primary text-white text-center">
          <h3 className="font-semibold">Faith Finance Forward</h3>
          <p className="text-xs">Blockchain Verified Donation Certificate</p>
        </div>
        
        <CardContent className="pt-6 pb-8 px-6">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-islamic-primary/10 flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="NFT Certificate" 
                className="w-20 h-20 object-cover rounded-full border-4 border-islamic-primary/20"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold">Donation Certificate</h3>
              <p className="text-sm text-gray-500">Thank you for your charitable contribution</p>
            </div>
            
            <div className="space-y-2 border-t border-b py-4 my-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Campaign:</span>
                <span className="font-medium">{transaction.campaignName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amount:</span>
                <span className="font-medium">{transaction.amount} {transaction.currency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Date:</span>
                <span className="font-medium">{transaction.date}</span>
              </div>
              {transaction.txHash && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Transaction Hash:</span>
                  <span className="font-medium text-xs truncate max-w-[200px]">{transaction.txHash}</span>
                </div>
              )}
            </div>
            
            <div className="text-center text-sm text-gray-600">
              <p>This certificate verifies your contribution and can be used for tax deduction purposes.</p>
              <p className="mt-2 text-xs">Verified on Faith Finance Forward blockchain network.</p>
            </div>
            
            <div className="pt-2 flex justify-center space-x-2">
              <Button 
                onClick={handleDownload}
                className="bg-islamic-primary hover:bg-islamic-primary/90"
                size="sm"
              >
                <Download className="mr-1 h-4 w-4" />
                Download
              </Button>
              
              <Button 
                variant="outline" 
                className="border-islamic-primary text-islamic-primary hover:bg-islamic-primary/10"
                size="sm"
                onClick={handleShare}
              >
                <Share2 className="mr-1 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NFTCertificate;
