import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { profileData } from '../../data/profile';

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Twitter: TwitterIcon,
  Email: Mail,
};

export default function SocialLinks({ className = '', iconSize = 18 }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {profileData.socials.map((item) => {
        const Icon = iconMap[item.name] || Mail;
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
