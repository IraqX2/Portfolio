import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../constants';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  // ✅ Add multiple image links here
  const photos = [
    "https://res.cloudinary.com/dx9efyuos/image/upload/v1765744715/591711491_2735221790161765_6994016510208720438_n_r115ou.jpg",
    "https://res.cloudinary.com/dx9efyuos/image/upload/v1765745137/526746088_2601535756863703_6176127401389523086_n_uvyr3v.jpg",
  ];

  const fallbackPhoto =
    "https://res.cloudinary.com/dx9efyuos/image/upload/v1765744715/591711491_2735221790161765_6994016510208720438_n_r115ou.jpg";

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  // Preload images so hover transition is clean
  React.useEffect(() => {
    photos.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const shownIndex = hoverIndex ?? activeIndex;
  const nextIndex = (activeIndex + 1) % photos.length;

  const showNextOnClick = () => {
    if (photos.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section
      id={SectionId.HERO}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10"
    >
      {/* Subtle Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-slate-800 shadow-2xl relative select-none"
            onMouseEnter={() => {
              if (photos.length > 1) setHoverIndex(nextIndex);
            }}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={showNextOnClick}
            role={photos.length > 1 ? "button" : undefined}
            tabIndex={photos.length > 1 ? 0 : -1}
            aria-label="Change photo"
            onKeyDown={(e) => {
              if (photos.length <= 1) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                showNextOnClick();
              }
            }}
          >
            {/* Base (current) image */}
            <img
              src={photos[activeIndex]}
              alt="Syed Miftahul Islam"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackPhoto;
              }}
              draggable={false}
            />

            {/* Smooth overlay image (only fades in on hover / after click change) */}
            <motion.img
              src={photos[shownIndex]}
              alt="Syed Miftahul Islam"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              onError={(e) => {
                e.currentTarget.src = fallbackPhoto;
              }}
              animate={{ opacity: shownIndex === activeIndex ? 0 : 1 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            />

          
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
        >
          Call me <span className="text-red-600">Iraq</span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10"
        >
          Syed Miftahul Islam Iraq. <br />
          Computer Science Undergraduate. <br />
          Full Stack Developer. Problem Solver.
        </motion.p>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 text-white border-b border-accent-cyan pb-1 hover:text-accent-cyan transition-colors font-medium"
          >
            Let's Talk <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
