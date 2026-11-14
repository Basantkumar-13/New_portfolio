import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function SocialLinks({ className = '', iconSize = 18 }) {
  const socials = [
    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
    { name: 'Email', icon: Mail, href: 'mailto:developer@example.com' },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="p-2.5 rounded-pill bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-text-secondary-dark dark:text-text-primary-dark hover:text-text-primary-dark border border-white/80 dark:border-white/10 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
