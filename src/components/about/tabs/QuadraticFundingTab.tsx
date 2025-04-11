
import React from 'react';

const QuadraticFundingTab = () => {
  return (
    <div className="space-y-6">
      <img 
        src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1200&auto=format&fit=crop" 
        alt="Quadratic Funding" 
        className="w-full h-64 object-cover rounded-xl mb-8" 
      />
      
      <div className="prose max-w-none">
        <h2>Quadratic Funding</h2>
        <p>
          Faith Finance Forward implements quadratic funding, a revolutionary approach to matching donations that promotes inclusivity and greater community participation in Islamic charitable giving.
        </p>
        
        <h3>What is Quadratic Funding?</h3>
        <p>
          Quadratic funding is a mathematically optimal way to fund public goods in a democratic community. Unlike traditional matching methods that simply match amounts, quadratic funding gives greater weight to the number of contributors rather than the size of individual contributions.
        </p>
        
        <div className="bg-islamic-primary/10 p-5 rounded-lg border border-islamic-primary/20 my-6">
          <h4 className="font-semibold text-islamic-primary">The Quadratic Funding Formula</h4>
          <p className="text-sm mt-2">
            The matching amount for a project is proportional to the square of the sum of the square roots of contributions. This means many small donations can receive more matching funds than a few large donations of the same total amount.
          </p>
          <div className="mt-4 text-center font-serif italic">
            M ∝ (∑√c<sub>i</sub>)<sup>2</sup>
          </div>
          <p className="text-xs text-center mt-2">
            Where M is the matching amount and c<sub>i</sub> is each individual contribution
          </p>
        </div>
        
        <h3>Benefits of Quadratic Funding in Islamic Charity</h3>
        
        <h4>1. Promoting Inclusivity</h4>
        <p>
          By giving greater weight to the number of donors rather than the amount donated, quadratic funding ensures that projects with broad community support receive appropriate funding. This aligns perfectly with Islamic principles of community (ummah) and collective responsibility.
        </p>
        
        <h4>2. Democratizing Charitable Decisions</h4>
        <p>
          Quadratic funding puts more decision-making power in the hands of the entire community, rather than just wealthy donors. This creates a more democratic process for allocating charitable funds in line with Islamic values of equity and justice (adl).
        </p>
        
        <h4>3. Supporting Grassroots Initiatives</h4>
        <p>
          Small, local projects that might otherwise be overlooked can receive substantial funding when they have strong community backing. This helps foster innovative solutions to community needs that align with Islamic values.
        </p>
        
        <h4>4. Preserving Dignity</h4>
        <p>
          The system dignifies small donations, honoring the Islamic principle that Allah looks at sincerity rather than amount. Every contribution, no matter how small, has significant impact when combined with others.
        </p>
        
        <h3>How It Works on Our Platform</h3>
        
        <ol>
          <li>
            <strong>Donation Phase:</strong> Individual donors contribute to projects they support, with each donation recorded on the blockchain.
          </li>
          <li>
            <strong>Calculation Period:</strong> At the end of each funding round, our system applies the quadratic funding formula to determine matching amounts from our matching pool.
          </li>
          <li>
            <strong>Distribution:</strong> Projects receive their individual donations plus the calculated matching amount from the pool.
          </li>
          <li>
            <strong>Transparency:</strong> All calculations and distributions are recorded on the blockchain, providing complete transparency.
          </li>
        </ol>
        
        <div className="p-4 bg-islamic-primary/10 rounded-lg border border-islamic-primary/30 my-6">
          <p className="italic text-gray-700">
            "The believer's shade on the Day of Resurrection will be his charity."
            <span className="block mt-2 text-right">— Prophet Muhammad (PBUH)</span>
          </p>
        </div>
        
        <p>
          By implementing quadratic funding, Faith Finance Forward ensures that our platform not only facilitates charitable giving in accordance with Islamic principles but also optimizes the impact of these contributions through advanced economic mechanisms that promote community-driven decision making.
        </p>
      </div>
    </div>
  );
};

export default QuadraticFundingTab;
