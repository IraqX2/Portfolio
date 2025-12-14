import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, SectionId } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Core Competencies
          </h2>
        </motion.div>

        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className={`text-xl font-bold mb-4 ${category.isPrimary ? 'text-white' : 'text-slate-400'}`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      category.isPrimary 
                        ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-accent-cyan/50' 
                        : 'bg-transparent border-slate-800 text-slate-500 hover:text-slate-400'
                    }`}
                  >
                    {skill}
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

export default Skills;