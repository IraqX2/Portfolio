import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Business';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import ContactOptionModal from './components/ContactOptionModal';

const App: React.FC = () => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryModalOpen(true);
  const closeInquiryModal = () => setIsInquiryModalOpen(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-accent-cyan selection:text-slate-950">
      <Navbar onOpenContact={openContactModal} />
      
      <main>
        <Hero onOpenContact={openContactModal} />
        <About />
        <Experience />
        <Projects onOpenInquiry={openInquiryModal} />
        <Skills />
        <Education />
        <Contact onOpenInquiry={openInquiryModal} />
      </main>

      <Footer />
      
      <InquiryModal isOpen={isInquiryModalOpen} onClose={closeInquiryModal} />
      <ContactOptionModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default App;