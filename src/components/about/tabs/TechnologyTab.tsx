
import React from 'react';

const TechnologyTab = () => {
  return (
    <div className="space-y-6">
      <img 
        src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&auto=format&fit=crop" 
        alt="Blockchain Technology" 
        className="w-full h-64 object-cover rounded-xl mb-8" 
      />
      
      <div className="prose max-w-none">
        <h2>Blockchain Technology</h2>
        <p>
          Faith Finance Forward leverages the power of blockchain technology to revolutionize Islamic charitable giving, ensuring unprecedented levels of transparency, security, and efficiency.
        </p>
        
        <h3>How We Use Blockchain</h3>
        
        <h4>Transparent Donation Tracking</h4>
        <p>
          Every donation made through our platform is recorded on the blockchain, creating an immutable record that can be verified by anyone. This allows donors to track exactly where their funds go and how they are used.
        </p>
        
        <h4>Smart Contracts for Automated Compliance</h4>
        <p>
          We use smart contracts to automate the enforcement of Islamic financial principles. These self-executing contracts with the terms directly written into code ensure that funds are only used in ways that comply with Shariah guidelines.
        </p>
        
        <h4>Seamless Fiat-to-Crypto Conversion</h4>
        <p>
          Our platform allows donors to contribute using traditional currencies (fiat), which are then automatically converted to cryptocurrencies for blockchain processing. This makes the technology accessible to everyone, regardless of their familiarity with crypto.
        </p>
        
        <h4>Reduced Transaction Costs</h4>
        <p>
          By using blockchain technology, we significantly reduce the transaction fees associated with international transfers, ensuring that more of each donation reaches its intended recipient.
        </p>
        
        <h3>Technical Infrastructure</h3>
        <p>
          Our platform is built on the Ethereum blockchain, chosen for its established ecosystem and smart contract capabilities. We've implemented additional layers of security and optimization to ensure fast transaction processing and minimal gas fees.
        </p>
        
        <h4>Blockchain-Specific Features:</h4>
        <ul>
          <li>Decentralized verification of donation receipt and distribution</li>
          <li>Multi-signature wallets for enhanced security</li>
          <li>Optional anonymity for donors who prefer privacy</li>
          <li>Real-time conversion rates between fiat and cryptocurrencies</li>
          <li>Automated reporting for zakat and sadaqah tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnologyTab;
