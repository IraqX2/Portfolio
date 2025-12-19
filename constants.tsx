// src/constants.ts
import { Linkedin, Facebook, Instagram, Dribbble, Github, Palette } from "lucide-react";
import { NavItem, SocialLink, SkillCategory, SectionId, ClientWork } from "./types";

export { SectionId };

export const PERSONAL_INFO = {
  name: "Iraq",
  fullName: "Syed Miftahul Islam",
  role: "Computer Science Undergraduate & Web Developer",
  email: "ikraismam23@gmail.com",
  phone: "+8801939888381",
  whatsappUrl: "https://wa.me/8801939888381",
};

// ✅ No runtime dependency on SectionId here, so no crash.
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/syed-miftahul-islam/", icon: Linkedin, label: "Professional Profile" },
  { platform: "GitHub", url: "https://github.com/IraqX2", icon: Github, label: "Code & Projects" },
  { platform: "Facebook", url: "https://www.facebook.com/Shotta.Xmote", icon: Facebook, label: "Social" },
  { platform: "Instagram", url: "https://www.instagram.com/syed_exit/", icon: Instagram, label: "Personal" },
  { platform: "Design Insta", url: "https://www.instagram.com/shotta_makings/", icon: Palette, label: "Design Portfolio" },
  { platform: "Behance", url: "https://www.behance.net/shottamaking", icon: Dribbble, label: "Creative Work" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Web Development & Engineering",
    description: "Architecting scalable digital solutions with modern stacks.",
    skills: [
      "React.js / Next.js",
      "TypeScript",
      "Node.js & Backend",
      "Database Design",
      "Git & GitHub",
      "UI/UX Implementation",
    ],
    themeColor: "text-accent-cyan",
    isPrimary: true,
  },
  {
    title: "Creative Design & Branding",
    description: "A passion for visual storytelling and brand identity.",
    skills: [
      "Adobe Photoshop",
      "Brand Identity",
      "Visual Layout",
      "Social Media Design",
    ],
    themeColor: "text-accent-violet",
    isPrimary: false,
  },
];

export const BIO_TEXT = `
I am Syed Miftahul Islam Iraq , a Computer Science undergraduate at Independent University, Bangladesh (IUB) with a strong foundation in software engineering and embedded systems. My approach to technology is practical and solution-oriented.

Beyond the code, I bring a disciplined creative perspective to my work, ensuring that technical solutions are not only robust but also intuitive and visually coherent. I thrive in environments that require bridging the gap between hardware functionality and software interactivity.
`;

export const EXPERIENCE_LIST = [
  {
    id: "fablab",
    role: "Student On Duty (SOD)",
    company: "FabLab IUB",
    period: "Current",
    description: "Managing daily operations and technical workflows at IUB's premier digital fabrication laboratory.",
    isPrimary: true,
    responsibilities: [
      "Manage digital fabrication workflows including 3D printing and laser cutting.",
      "Develop technical solutions using Microcontrollers (Arduino/ESP) and Sensors.",
      "Coordinate student projects and ensure safe, efficient equipment usage.",
      "Documentation of lab procedures and technical troubleshooting.",
    ],
  },
  {
    id: "web-dev",
    role: "Founder & Full Stack Developer",
    company: "Website Development Business",
    period: "Ongoing",
    description: "Managing a professional web development service delivering custom React-based solutions. Overseeing client requirements, system architecture, and long-term maintenance cycles.",
    isPrimary: false,
    tags: ["React.js", "Business Management", "Client Relations"],
  },
  {
    id: "design",
    role: "Visual Brand Designer",
    company: "Graphics Designing Service",
    period: "Ongoing",
    description: "Providing high-end brand identity and graphic design services. Specializing in creating cohesive visual narratives for businesses and social media campaigns.",
    isPrimary: false,
    tags: ["Adobe Suite", "Branding", "Creative Direction"],
  },
];

export const SERVICE_CONTENT = {
  title: "Custom Website Development & Maintenance",
  description: "I provide professional website development services tailored to your specific needs. From personal portfolios to e-commerce platforms, I build robust, custom solutions using modern technologies.",
  offerings: [
    "Custom Development for Personal & Business Brands",
    "E-commerce & Shop Website Solutions",
    "Monthly Maintenance & Updates",
    "Performance Optimization & Long-term Support",
  ],
};

export const CLIENT_EXAMPLE_AIRA = {
  name: "Aira",
  category: "Client Website Example",
  industry: "Clothing Brand",
  role: "Full Development & Monthly Maintenance",
  description: "A customized clothing brand website built to client specifications. This project demonstrates my ability to deliver production-ready solutions and provide ongoing monthly maintenance for updates, fixes, and feature enhancements.",
  url: "https://airacraft.netlify.app/",
  techStack: ["React.js", "Tailwind CSS", "Production Deployment"],
};

export const CLIENT_EXAMPLE_DEMO_1 = {
  name: "Pearl By Payel",
  category: "Business Website",
  industry: "Beauty & Wellness",
  role: "Website Design & Development",
  description: "A modern beauty parlour website focused on branding, services showcase, and WhatsApp booking.",
  url: "https://pearl-by-payel-demo.netlify.app/",
  techStack: ["React.js", "Tailwind CSS", "Brand UI"],
};

export const CLIENT_EXAMPLE_DEMO_2 = {
  name: "Packaging Solutions",
  category: "Business Platform",
  industry: "Pakaging Services",
  role: "Frontend Development",
  description: "A web platform for managing pakaging services for new business , orders, and informations about pakaging materials.",
  url: "https://demopakage.netlify.app/",
  techStack: ["React.js", "Tailwind CSS"],
};

export const CLIENT_WORKS: ClientWork[] = [
  {
    id: "aira",
    name: "Aira",
    category: "Client Website",
    industry: "Clothing Brand",
    role: "Full Development & Monthly Maintenance",
    description:
      "A customized clothing brand website built to client specifications. Demonstrates production-ready delivery and ongoing monthly maintenance for updates, fixes, and improvements.",
    url: "https://airacraft.netlify.app/",
    techStack: ["React.js", "Tailwind CSS", "Production Deployment"],
    previewImages: [
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748596/Screenshot_2025-12-15_034254_yhyoyw.png",
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748755/Screenshot_2025-12-15_034533_jve25b.png",
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748992/Screenshot_2025-12-15_034719_uflfl9.png",
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1765748991/Screenshot_2025-12-15_034911_ixkgqd.png",
    ],
  },
  {
    id: "pearl-by-payel",
    name: "Pearl By Payel",
    category: "Parlour Client Demo Website",
    industry: "Beauty & Wellness",
    role: "Website Design & Development",
    description:
      "A modern beauty parlour website focused on branding, services showcase, and WhatsApp booking.",
    url: "https://pearl-by-payel-demo.netlify.app/",
    techStack: ["React.js", "Tailwind CSS", "Brand UI"],
    previewImages: [
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1766162770/Screenshot_2025-12-19_210612_lr6e1j.png",
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1766162768/Screenshot_2025-12-19_210718_sr888u.png",
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1766162768/Screenshot_2025-12-19_210641_pfccjk.png",
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1766162768/Screenshot_2025-12-19_210738_poykrb.png",
    ],
  },
  {
    id: "packaging-solutions",
    name: "Packaging Solutions",
    category: "Pakaging Business Client Demo Website",
    industry: "Packaging Services",
    role: "Frontend Development",
    description:
      "A web platform for showcasing packaging materials, service info, and customer-facing order flow for a new business.",
    url: "https://demopakage.netlify.app/",
    techStack: ["React.js", "Tailwind CSS"],
    previewImages: [
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1766162768/Screenshot_2025-12-19_210805_xuusvu.png",
      "https://res.cloudinary.com/dx9efyuos/image/upload/v1766162768/Screenshot_2025-12-19_210827_ngpbyx.png",
    ],
  },
];
