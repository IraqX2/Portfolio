import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink, Server } from "lucide-react";
import { SERVICE_CONTENT, CLIENT_WORKS, SectionId } from "../constants";
import type { ClientWork } from "../types";

interface ProjectsProps {
  onOpenInquiry: () => void;
}

function useFadingSlideshow(images: string[], intervalMs = 3500, fadeMs = 650) {
  const [current, setCurrent] = React.useState(0);
  const [next, setNext] = React.useState(images.length > 1 ? 1 : 0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    if (images.length <= 1) return;

    const t = window.setInterval(() => {
      const n = (current + 1) % images.length;
      setNext(n);
      setIsFading(true);

      window.setTimeout(() => {
        setCurrent(n);
        setIsFading(false);
      }, fadeMs);
    }, intervalMs);

    return () => window.clearInterval(t);
  }, [current, images.length, intervalMs, fadeMs]);

  return { current, next, isFading, fadeMs };
}

const ClientWorkCard: React.FC<{ work: ClientWork }> = ({ work }) => {
  const images = work.previewImages ?? [];
  const slideshow = useFadingSlideshow(images);

  const openLive = () => window.open(work.url, "_blank", "noopener,noreferrer");

  const hasImages = images.length > 0;
  const heroImg = hasImages ? images[slideshow.current] : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
    >
      {/* IMAGE PREVIEW */}
      <div
        onClick={openLive}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLive();
          }
        }}
        role="link"
        tabIndex={0}
        aria-label={`Open live site: ${work.name}`}
        className="relative w-full aspect-video cursor-pointer group overflow-hidden bg-slate-950"
      >
        {hasImages ? (
          <>
            {/* Current */}
            <img
              src={heroImg}
              alt={`${work.name} preview ${slideshow.current + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] transition-transform duration-500 group-hover:scale-[1.06]"
              draggable={false}
              loading="lazy"
            />

            {/* Next */}
            {images.length > 1 && (
              <img
                src={images[slideshow.next]}
                alt={`${work.name} preview ${slideshow.next + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] transition-transform duration-500 group-hover:scale-[1.06]"
                style={{
                  opacity: slideshow.isFading ? 1 : 0,
                  transition: `opacity ${slideshow.fadeMs}ms ease-in-out`,
                }}
                draggable={false}
                loading="lazy"
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-400">
            No preview image
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="flex items-center gap-2 text-white font-medium">
            View Live <ExternalLink size={16} />
          </span>
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === slideshow.current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <span className="text-xs uppercase tracking-widest text-accent-violet font-bold">
          {work.category}
        </span>

        <h3 className="text-xl font-bold text-white mt-2">{work.name}</h3>

        <p className="text-slate-500 text-sm mt-1">{work.industry}</p>

        <div className="mt-4 bg-slate-950 border border-slate-800 rounded-lg p-3">
          <div className="flex items-center gap-2 text-white text-sm font-medium">
            <Server size={14} className="text-green-500" />
            Service Provided
          </div>
          <p className="text-slate-400 text-sm mt-1">{work.role}</p>
        </div>

        <p className="text-slate-400 text-sm mt-4 leading-relaxed">
          {work.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {work.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <a
            href={work.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white border-b border-slate-700 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            Visit Live Site <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects: React.FC<ProjectsProps> = ({ onOpenInquiry }) => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {SERVICE_CONTENT.title}
          </h2>

          <p className="text-slate-400 text-lg mb-8">
            {SERVICE_CONTENT.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICE_CONTENT.offerings.map((offer, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-accent-cyan" />
                <span className="text-slate-300">{offer}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-accent-cyan text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition"
            >
              Build a Website
            </button>
          </div>
        </motion.div>

        <div className="border-t border-slate-800 my-12" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_WORKS.map((work) => (
            <ClientWorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
