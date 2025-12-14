import React, { useState, useEffect } from 'react';
import { SectionId } from '../constants';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href={`#${SectionId.HERO}`} className="text-xl font-display font-bold tracking-tighter text-white">
          IRAQ<span className="text-accent-cyan">.</span>
        </a>

        {/* Minimal Nav */}
        <div className="flex items-center space-x-8">
          <a
            href={`#${SectionId.HERO}`}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block"
          >
            Home
          </a>
          <button
            onClick={onOpenContact}
            className="px-5 py-2 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-slate-200 transition-colors"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;