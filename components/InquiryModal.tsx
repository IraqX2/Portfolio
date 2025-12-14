import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    projectType: 'Business Website',
    projectPurpose: '',
    maintenanceInterest: 'No',
    timeline: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-900">
            <div>
               <h3 className="text-xl font-display font-semibold text-white">Project Consultation</h3>
               <p className="text-xs text-slate-500">Let's discuss your custom website</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="text-accent-cyan mb-4" size={48} />
                <h4 className="text-xl font-bold text-white mb-2">Request Received</h4>
                <p className="text-slate-400 mb-6">
                  I'll review your project details and reach out via email or WhatsApp to discuss the next steps.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Name</label>
                     <input
                       type="text"
                       name="name"
                       required
                       value={formData.name}
                       onChange={handleChange}
                       className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors"
                     />
                   </div>
                   <div>
                     <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Email</label>
                     <input
                       type="email"
                       name="email"
                       required
                       value={formData.email}
                       onChange={handleChange}
                       className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors"
                     />
                   </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Website Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors"
                  >
                    <option>Business Website</option>
                    <option>Clothing Brand / Shop</option>
                    <option>Personal Portfolio</option>
                    <option>Custom Web Application</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Purpose / Goal</label>
                  <textarea
                    name="projectPurpose"
                    value={formData.projectPurpose}
                    onChange={handleChange}
                    rows={2}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors resize-none"
                    placeholder="e.g. Sell clothes, showcase services..."
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Do you need monthly maintenance?</label>
                  <select
                    name="maintenanceInterest"
                    value={formData.maintenanceInterest}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors"
                  >
                    <option value="No">No, just development</option>
                    <option value="Yes">Yes, I need ongoing updates & support</option>
                    <option value="Unsure">Unsure, let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide">Expected Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-accent-cyan outline-none transition-colors"
                    placeholder="e.g. 2 weeks, 1 month"
                  />
                </div>

                <div className="pt-2">
                   <button
                     type="submit"
                     className="w-full bg-white text-slate-950 font-bold py-3 px-6 rounded-lg hover:bg-slate-200 flex items-center justify-center gap-2 transition-colors"
                   >
                     Start Conversation <ArrowRight size={18} />
                   </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InquiryModal;