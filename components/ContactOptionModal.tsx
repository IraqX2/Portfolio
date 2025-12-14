import React from 'react';
import { Mail, Phone, X, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

interface ContactOptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CopiedKey = 'email' | 'phone' | null;

const ContactOptionModal: React.FC<ContactOptionModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState<CopiedKey>(null);

  if (!isOpen) return null;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}`;

  // WhatsApp (works on mobile + desktop)
  const whatsappUrl = PERSONAL_INFO.whatsappUrl || `https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`;
  // Optional alternative desktop URL (kept here if you want later)
  // const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${PERSONAL_INFO.phone.replace(/\D/g, '')}`;

  const copyText = async (key: CopiedKey, text: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1200);
    } catch {
      // If copy fails, do nothing (or you can add an alert)
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-sm bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 text-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-display font-bold text-white mb-2">Let's Talk</h3>
            <p className="text-slate-400 text-sm mb-8">How would you like to connect?</p>

            <div className="grid gap-4">
              {/* WhatsApp */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                    <Phone size={24} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg leading-tight">WhatsApp</h4>
                    <p className="text-slate-500 text-xs">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-100 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all"
                  >
                    Open
                  </a>

                  <button
                    onClick={() => copyText('phone', PERSONAL_INFO.phone)}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-100 hover:bg-white/5 transition-all"
                    aria-label="Copy WhatsApp number"
                  >
                    {copied === 'phone' ? <Check size={18} /> : <Copy size={18} />}
                    <span className="text-sm">{copied === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Mail size={24} />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg leading-tight">Email</h4>
                    <p className="text-slate-500 text-xs break-all">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  {/* Best for PC */}
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-100 hover:bg-white/10 hover:border-white/40 transition-all"
                  >
                    Open Gmail
                  </a>

                  <button
                    onClick={() => copyText('email', PERSONAL_INFO.email)}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-100 hover:bg-white/5 transition-all"
                    aria-label="Copy email"
                  >
                    {copied === 'email' ? <Check size={18} /> : <Copy size={18} />}
                    <span className="text-sm">{copied === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Optional: keep mailto for users who have mail apps */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mt-2 inline-block text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Having Outlook/Mail? Click here to use mail app
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactOptionModal;
