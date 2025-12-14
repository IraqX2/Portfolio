import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType; // Lucide Icon type
  label: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  themeColor: string;
  isPrimary: boolean;
}

export interface InquiryFormData {
  name: string;
  email: string;
  projectType: string;
  projectPurpose: string;
  maintenanceInterest: string;
  timeline: string;
}

export enum SectionId {
  HERO = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  EDUCATION = 'education',
  CONTACT = 'contact',
}