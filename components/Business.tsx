import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Server } from 'lucide-react';
import { SERVICE_CONTENT, CLIENT_EXAMPLE_AIRA, SectionId } from '../constants';

interface ProjectsProps {
  onOpenInquiry: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenInquiry }) => {
  const airaPreviewImages = [
    "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748596/Screenshot_2025-12-15_034254_yhyoyw.png",
    "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748755/Screenshot_2025-12-15_034533_jve25b.png",
    "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748992/Screenshot_2025-12-15_034719_uflfl9.png",
    "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748991/Screenshot_2025-12-15_034911_ixkgqd.png",
  ];

  const intervalMs = 3500;     // how often to change
  const fadeMs = 650;          // fade duration (image -> image)

  const [current, setCurrent] = React.useState(0);
  const [next, setNext] = React.useState(airaPreviewImages.length > 1 ? 1 : 0);
  const [isFading, setIsFading] = React.useState(false);

  // Preload for smooth transitions (prevents "loading flash")
  React.useEffect(() => {
    airaPreviewImages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  React.useEffect(() => {
    if (airaPreviewImages.length <= 1) return;

    const t = window.setInterval(() => {
      const n = (current + 1) % airaPreviewImages.length;
      setNext(n);
      setIsFading(true);

      // After fade completes, commit next as current
      window.setTimeout(() => {
        setCurrent(n);
        setIsFading(false);
      }, fadeMs);
    }, intervalMs);

    return () => window.clearInterval(t);
  }, [current, airaPreviewImages.length]);

  const openLiveProject = () => {
    window.open(CLIENT_EXAMPLE_AIRA.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            {SERVICE_CONTENT.title}
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {SERVICE_CONTENT.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICE_CONTENT.offerings.map((offer, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-cyan shrink-0" size={20} />
                <span className="text-slate-300">{offer}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-accent-cyan text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Build a Website
            </button>
          </div>
        </motion.div>

        <div className="border-t border-slate-800 my-16"></div>

        {/* Client Example: Aira */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <span className="text-xs font-bold text-accent-violet tracking-widest uppercase mb-2 block">
              {CLIENT_EXAMPLE_AIRA.category}
            </span>

            <h3 className="text-2xl font-bold text-white mb-2">
              {CLIENT_EXAMPLE_AIRA.name}
            </h3>

            <p className="text-slate-500 font-medium mb-4">
              {CLIENT_EXAMPLE_AIRA.industry}
            </p>

            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3 mb-2 text-white font-medium">
                <Server size={18} className="text-green-500" />
                <span>Service Provided:</span>
              </div>
              <p className="text-slate-400 text-sm">{CLIENT_EXAMPLE_AIRA.role}</p>
            </div>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {CLIENT_EXAMPLE_AIRA.description}
            </p>

            <a
              href={CLIENT_EXAMPLE_AIRA.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white border-b border-slate-700 pb-1 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            >
              Visit Live Site <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Preview (Image -> Image fade, NO black flash) */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={openLiveProject}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLiveProject();
                }
              }}
              role="link"
              tabIndex={0}
              aria-label={`Open live project: ${CLIENT_EXAMPLE_AIRA.name}`}
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative aspect-[16/9] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              {/* Base image (always visible) */}
              <img
                src={airaPreviewImages[current]}
                alt={`${CLIENT_EXAMPLE_AIRA.name} preview ${current + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* Top image fades in (image -> image only) */}
              {airaPreviewImages.length > 1 && (
                <img
                  src={airaPreviewImages[next]}
                  alt={`${CLIENT_EXAMPLE_AIRA.name} preview ${next + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: isFading ? 1 : 0,
                    transition: `opacity ${fadeMs}ms ease-in-out`,
                  }}
                  draggable={false}
                />
              )}

              {/* VERY light gradient (no harsh black) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">View Live Project</p>
              </div>

              {/* Dots */}
              {airaPreviewImages.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {airaPreviewImages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full ${
                        i === current ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
