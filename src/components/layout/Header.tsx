
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-islamic-primary flex items-center justify-center">
              <span className="arabic text-white font-bold text-lg">صدقة</span>
            </div>
            <span className="text-xl font-bold text-islamic-dark">AmanahPay</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-islamic-dark hover:text-islamic-primary transition-colors">
            Home
          </Link>
          <Link to="/campaigns" className="text-islamic-dark hover:text-islamic-primary transition-colors">
            Campaigns
          </Link>
          <Link to="/news" className="text-islamic-dark hover:text-islamic-primary transition-colors">
            News
          </Link>
          <Link to="/dashboard" className="text-islamic-dark hover:text-islamic-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/about" className="text-islamic-dark hover:text-islamic-primary transition-colors">
            About
          </Link>
          <Link to="/learn" className="text-islamic-dark hover:text-islamic-primary transition-colors">
            Learn
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-islamic-primary text-white text-xs">
              2
            </Badge>
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
