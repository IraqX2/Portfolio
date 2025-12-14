import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../constants';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8">Academic Background</h2>
            
            <div className="space-y-10">
              {/* University */}
              <div className="border-l-2 border-accent-cyan pl-6 py-2 relative">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent-cyan"></div>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">Bachelor of Science in Computer Science & Engineering</h3>
                <p className="text-accent-cyan font-medium text-lg mb-1">Independent University, Bangladesh (IUB)</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-slate-500 text-sm bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    Currently 6th Semester
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Focusing on embedded systems, software engineering, and hardware-software integration. 
                  Building a strong foundation in algorithmic problem solving and system architecture.
                </p>
              </div>

              {/* HSC */}
              <div className="border-l-2 border-slate-700 pl-6 py-2 opacity-80 hover:opacity-100 transition-opacity relative group">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-slate-500 transition-colors"></div>
                <h3 className="text-lg font-bold text-white mb-1">Higher Secondary Certificate (HSC)</h3>
                <div className="flex items-center gap-3 mb-2">
                   <span className="text-slate-300 font-medium">Science Group</span>
                   <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                   <span className="text-accent-violet font-bold text-sm">GPA 5.00</span>
                </div>
                <p className="text-slate-500 text-sm">
                  Completed with distinction, demonstrating consistent academic excellence in mathematics and physical sciences.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full"
          >
            {/* Stylized representation of university/education */}
            <div className="relative w-full aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
                <img 
                    src="https://res.cloudinary.com/dx9efyuos/image/upload/v1765748413/IUB-project-feat-e1710084083720-1400x1020_aon4rm.jpg" 
                    alt="IUB Campus Art" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-white font-display font-bold text-2xl">IUB Campus</p>
                    <p className="text-slate-400 text-sm">Dhaka, Bangladesh</p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;