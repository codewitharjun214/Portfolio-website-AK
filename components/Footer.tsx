import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const SocialIcon = ({ name, href }: { name: string; href: string }) => {
  const Icon = {
    GitHub: FiGithub,
    LinkedIn: FiLinkedin,
    Email: FiMail,
    Phone: FiPhone
  }[name];

  if (!Icon) return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-slate hover:text-accent transition-colors duration-300">
      <Icon size={22} />
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center items-center space-x-6 mb-4">
        <SocialIcon name="GitHub" href={SOCIAL_LINKS.github} />
        <SocialIcon name="LinkedIn" href={SOCIAL_LINKS.linkedin} />
        <SocialIcon name="Email" href={`mailto:${SOCIAL_LINKS.email}`} />
        <SocialIcon name="Phone" href={`tel:${SOCIAL_LINKS.phone}`} />
      </div>
      <p className="font-mono text-sm text-gray-700 dark:text-slate">
        Designed & Built by Arjun Kadam
      </p>
      <p className="font-mono text-xs text-gray-700 dark:text-slate mt-1">
        © {new Date().getFullYear()}. All Rights Reserved. | <a href="/admin" className="hover:text-accent">Admin</a>
      </p>
    </footer>
  );
};

export default Footer;