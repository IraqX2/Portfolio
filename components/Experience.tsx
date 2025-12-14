import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Printer, Wifi, Settings, Briefcase, Palette } from 'lucide-react';
import { EXPERIENCE_LIST, SectionId } from '../constants';

const Experience: React.FC = () => {
  const primaryExperience = EXPERIENCE_LIST.find(exp => exp.isPrimary);
  const secondaryExperiences = EXPERIENCE_LIST.filter(exp => !exp.isPrimary);

  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent-cyan rounded-full"></div>
        </motion.div>

        {/* Primary Experience (FabLab) */}
        {primaryExperience && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 relative overflow-hidden group mb-8"
          >
            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl -z-0 group-hover:bg-accent-cyan/10 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{primaryExperience.role}</h3>
                  <h4 className="text-accent-cyan font-medium text-lg">{primaryExperience.company}</h4>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-accent-cyan/10 text-accent-cyan text-sm font-semibold rounded-full border border-accent-cyan/20 w-fit">
                  {primaryExperience.period}
                </span>
              </div>

              <p className="text-slate-300 mb-8 max-w-3xl leading-relaxed">
                {primaryExperience.description}
              </p>

              {/* Responsibility Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {primaryExperience.responsibilities?.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px] text-accent-cyan">
                      {index === 0 && <Printer size={20} />}
                      {index === 1 && <Cpu size={20} />}
                      {index === 2 && <Settings size={20} />}
                      {index === 3 && <Wifi size={20} />}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Experiences Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondaryExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-900 rounded-lg text-accent-violet">
                   {exp.id === 'web-dev' ? <Briefcase size={24} /> : <Palette size={24} />}
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{exp.period}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <h4 className="text-slate-400 font-medium mb-4">{exp.company}</h4>
              
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags?.map((tag) => (
                  <span key={tag} className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;