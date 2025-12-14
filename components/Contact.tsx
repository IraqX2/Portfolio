import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO, SectionId } from '../constants';

interface ContactProps {
  onOpenInquiry: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenInquiry }) => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Ready to build?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors"
            >
              Email Me
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-900 border border-slate-700 text-white font-bold rounded-lg hover:border-slate-500 transition-colors"
            >
              WhatsApp
            </a>
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-medium rounded-lg hover:text-white hover:border-white transition-colors"
            >
              Start Project
            </button>
          </motion.div>

          <div className="pt-10 border-t border-slate-900">
            <h3 className="text-slate-600 font-medium mb-8 text-sm uppercase tracking-widest">Connect</h3>
            <div className="flex justify-center flex-wrap gap-8">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-600 transition-all">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] uppercase tracking-wide text-slate-600 group-hover:text-slate-400 transition-colors">
                      {social.platform}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;