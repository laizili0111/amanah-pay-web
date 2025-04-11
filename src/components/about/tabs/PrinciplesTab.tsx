
import React from 'react';

const PrinciplesTab = () => {
  return (
    <div className="space-y-6">
      <img 
        src="https://images.unsplash.com/photo-1585036156261-1e2b76e5e8e6?q=80&w=1200&auto=format&fit=crop" 
        alt="Islamic Principles" 
        className="w-full h-64 object-cover rounded-xl mb-8" 
      />
      
      <div className="prose max-w-none">
        <h2>Islamic Financial Principles</h2>
        <p>
          At Faith Finance Forward, every aspect of our platform is designed to uphold the fundamental principles of Islamic finance. We recognize the importance of ensuring that all donations and transactions comply with Shariah guidelines.
        </p>
        
        <h3>Key Islamic Financial Principles We Uphold:</h3>
        
        <h4>1. Prohibition of Riba (Interest)</h4>
        <p>
          Our platform is completely free from interest-based transactions. Any funds collected are never invested in interest-bearing instruments, and all financial activities strictly avoid Riba in any form.
        </p>
        
        <h4>2. Zakat Compliance</h4>
        <p>
          We provide specialized tools to help Muslims calculate and distribute their Zakat according to Islamic guidelines. Our Zakat campaigns ensure that funds reach eligible recipients as defined by Islamic law.
        </p>
        
        <h4>3. Transparency (Amanah)</h4>
        <p>
          Blockchain technology allows us to fulfill the Islamic principle of Amanah (trustworthiness) by providing complete transparency in how funds are collected, managed, and distributed.
        </p>
        
        <h4>4. Ethical Investment (Halal)</h4>
        <p>
          Any temporary holding of funds within our system is done in compliance with Halal investment principles, avoiding industries and activities prohibited in Islam.
        </p>
        
        <h3>Shariah Advisory Board</h3>
        <p>
          Our platform is regularly reviewed by a board of qualified Islamic scholars who ensure that all aspects of our operations remain Shariah-compliant. They provide guidance on campaign selection, fund management, and technological implementations to maintain adherence to Islamic principles.
        </p>
        
        <div className="p-4 bg-islamic-primary/10 rounded-lg border border-islamic-primary/30 my-6">
          <p className="italic text-gray-700">
            "Those who spend their wealth in the way of Allah and then do not follow up what they have spent with reminders of their generosity or with injury, they shall have their reward from their Lord."
            <span className="block mt-2 text-right">— Quran 2:262</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesTab;
