import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2 rounded-lg relative z-10 border border-white/20">
              <BookOpen size={24} />
            </div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
            Coursera<span className="font-light text-blue-400">Info</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#ai-guide" 
            className="flex items-center gap-2 text-sm font-medium text-yellow-300 hover:text-yellow-200 transition-colors"
          >
             <Sparkles size={16} className="animate-pulse" /> AI Guide
          </a>
          <a 
            href="https://www.coursera.org" 
            target="_blank" 
            rel="noreferrer"
            className="relative group overflow-hidden bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border border-white/10 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            Visit Official Site
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl animate-fade-in-up">
           {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-slate-300 font-medium py-3 border-b border-white/5 hover:text-blue-400 hover:pl-2 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
             href="https://www.coursera.org" 
             target="_blank" 
             rel="noreferrer"
             className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-blue-900/50"
          >
            Visit Official Site
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;