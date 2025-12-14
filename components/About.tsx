import React from 'react';
import { motion } from 'framer-motion';
import { BIO_TEXT, SectionId } from '../constants';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                About <span className="text-accent-violet">Me</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                {BIO_TEXT.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-800 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Education</h4>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-white font-medium text-base">Independent University, Bangladesh</span>
                      <span className="text-slate-400 text-sm">B.Sc in Computer Science & Engineering</span>
                      <span className="text-accent-cyan text-xs font-semibold mt-1 inline-block bg-accent-cyan/10 px-2 py-0.5 rounded w-fit">Currently 6th Semester</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-white font-medium text-base">Higher Secondary Certificate (HSC)</span>
                      <span className="text-slate-400 text-sm">Science Group</span>
                      <span className="text-accent-violet text-xs font-bold bg-accent-violet/10 w-fit px-2 py-0.5 rounded mt-1">GPA 5.00</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Experience</h4>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="text-white font-medium">FabLab IUB</span>
                      <span className="text-slate-500 text-sm">Student On Duty (SOD)</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-white font-medium">Website Development Business</span>
                      <span className="text-slate-500 text-sm">Founder & Developer</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-white font-medium">Graphics Designing Service</span>
                      <span className="text-slate-500 text-sm">Visual Brand Designer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;