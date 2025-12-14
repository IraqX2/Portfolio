import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All Rights Reserved. <br className="md:hidden" />
        Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
