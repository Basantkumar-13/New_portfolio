/**
 * Authentic, razor-sharp SVG vector logos for technology showcase cards.
 * Designed with high optical fidelity and theme support.
 */

export function TechLogo({ name, size = 24, className = '' }) {
  switch (name) {
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M11.9 2c-3.1 0-4.9.4-4.9 2.1v2.1h5v.7H5.8C3.7 6.9 2 8.6 2 11.4c0 2.4 1.5 3.8 3.5 4.3v-2.1c0-2.4 2-4.3 4.4-4.3h5v-.7H9.9V6.4c0-1.7 1.8-2.1 4.9-2.1 3 0 4.9.4 4.9 2.1v2.3h-2v.7h4.1c2.1 0 3.8-1.7 3.8-4.5 0-2.4-1.5-3.8-3.5-4.3v2.1c0 2.4-2 4.3-4.4 4.3h-5V6.4c0-1.7-1.8-2.1-4.9-2.1z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c3.1 0 4.9-.4 4.9-2.1v-2.1h-5v-.7h6.2c2.1 0 3.8-1.7 3.8-4.5 0-2.4-1.5-3.8-3.5-4.3v2.1c0 2.4-2 4.3-4.4 4.3h-5v.7h5v2.2c0 1.7-1.8 2.1-4.9 2.1-3 0-4.9-.4-4.9-2.1v-2.3h2v-.7H4.1C2 17.5.3 19.2.3 22c0 2.4 1.5 3.8 3.5 4.3v-2.1c0-2.4 2-4.3 4.4-4.3h5v2.2c0 1.7 1.8 2.1 4.9 2.1z"
            fill="#FFD43B"
          />
          <circle cx="9.2" cy="4.4" r="0.9" fill="#fff" />
          <circle cx="14.8" cy="19.6" r="0.9" fill="#071F19" />
        </svg>
      );

    case 'cpp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#00599C" />
          <path d="M12 4.2l6.8 3.9v7.8L12 19.8 5.2 15.9V8.1L12 4.2z" fill="#004482" />
          <path
            d="M12 8.5c-2 0-3.4 1.5-3.4 3.5s1.4 3.5 3.4 3.5c1.4 0 2.4-.7 2.9-1.7l-1.4-.7c-.3.5-.8.9-1.5.9-1.1 0-1.8-.8-1.8-2s.7-2 1.8-2c.7 0 1.2.4 1.5.9l1.4-.7c-.5-1-1.5-1.7-2.9-1.7z"
            fill="#fff"
          />
          <path d="M15.5 11h.8v-.8h.8v.8h.8v.8h-.8v.8h-.8v-.8h-.8v-.8zm2.8 0h.8v-.8h.8v.8h.8v.8h-.8v.8h-.8v-.8h-.8v-.8z" fill="#fff" />
        </svg>
      );

    case 'javascript':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7.5 18.5c.8.5 1.7.8 2.6.8 1.4 0 2.3-.7 2.3-2.1v-7.4H10v7.3c0 .6-.3.9-.9.9-.4 0-.8-.1-1.1-.3l-.5.8zm8.7.1c1.2 0 2-.6 2.5-1.3l-1.1-.7c-.3.5-.7.8-1.3.8-.7 0-1.2-.4-1.2-1 0-.6.4-.9 1.4-1.3 1.6-.6 2.3-1.3 2.3-2.5 0-1.4-1.1-2.4-2.7-2.4-1.1 0-2.1.4-2.8 1.1l1 1c.5-.4 1-.7 1.7-.7.7 0 1.2.4 1.2.9 0 .6-.4.9-1.3 1.2-1.6.6-2.4 1.3-2.4 2.6 0 1.5 1.1 2.3 2.7 2.3z"
            fill="#000"
          />
        </svg>
      );

    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="5" rx="8" ry="3" className="stroke-[#00758F] dark:stroke-[#5EEAD4]" fill="rgba(0,117,143,0.15)" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" className="stroke-[#00758F] dark:stroke-[#5EEAD4]" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" className="stroke-[#00758F] dark:stroke-[#5EEAD4]" />
          <path d="M14 17l4 4m0-4l-4 4" strokeWidth="2" strokeLinecap="round" className="stroke-mint-500" />
        </svg>
      );

    case 'numpy':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#013243" />
          <path d="M4 6h3.5l4.5 7.5V6h3.5v12h-3.5L7.5 10.5V18H4V6z" fill="#4DABCF" />
          <path d="M17 6h3v12h-3z" fill="#013243" />
          <circle cx="18.5" cy="8" r="1.5" fill="#4DABCF" />
          <circle cx="18.5" cy="16" r="1.5" fill="#4DABCF" />
        </svg>
      );

    case 'pandas':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#150458" />
          <rect x="5" y="5" width="4" height="6" rx="1" fill="#FFD43B" />
          <rect x="10.5" y="8" width="4" height="11" rx="1" fill="#E70488" />
          <rect x="16" y="5" width="4" height="8" rx="1" fill="#00A98F" />
        </svg>
      );

    case 'scikitlearn':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#F89939" />
          <path d="M7 12a5 5 0 0110 0 5 5 0 01-10 0z" fill="#3499CD" />
          <circle cx="12" cy="12" r="3" fill="#fff" />
          <circle cx="12" cy="12" r="1.5" fill="#F89939" />
        </svg>
      );

    case 'pytorch':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12.8 2.2a.8.8 0 00-1 .2L9.4 5.3a7.5 7.5 0 108.8 2.6l-1.7 1.3a5.4 5.4 0 11-6.7-1.7l1.7-1.9a.8.8 0 00.3-.7V2.2z"
            fill="#EE4C2C"
          />
          <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C" />
        </svg>
      );

    case 'llms':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 2a4 4 0 00-4 4c0 .8.2 1.5.7 2.1L6 11a5 5 0 00-2 4.1c0 2.2 1.4 4.1 3.4 4.7L8 22h8l.6-2.2c2-.6 3.4-2.5 3.4-4.7 0-1.7-.8-3.2-2-4.1l-2.7-2.9c.5-.6.7-1.3.7-2.1a4 4 0 00-4-4z" className="stroke-mint-500" fill="rgba(16,185,129,0.12)" />
          <path d="M9 14h6m-4 3h2" strokeLinecap="round" className="stroke-mint-400" />
          <circle cx="12" cy="6" r="1.2" fill="currentColor" className="text-mint-400" />
        </svg>
      );

    case 'rag':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="3" width="8" height="10" rx="1.5" className="stroke-[#3B82F6]" fill="rgba(59,130,246,0.12)" />
          <path d="M14 6h7m-7 4h5m-5 4h7" strokeLinecap="round" className="stroke-text-muted-dark" />
          <path d="M7 16v5m0 0l-2-2m2 2l2-2" strokeLinecap="round" strokeLinejoin="round" className="stroke-mint-500" />
          <circle cx="17" cy="18" r="3.5" className="stroke-mint-400" fill="rgba(16,185,129,0.15)" />
          <path d="M19.5 20.5l2 2" strokeLinecap="round" className="stroke-mint-400" />
        </svg>
      );

    case 'langchain':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" className="stroke-[#00A389]" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" className="stroke-[#F59E0B]" />
        </svg>
      );

    case 'embeddings':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="6" cy="6" r="2.5" fill="#8B5CF6" />
          <circle cx="18" cy="6" r="2" fill="#3B82F6" />
          <circle cx="14" cy="14" r="3" fill="#10B981" />
          <circle cx="6" cy="18" r="2" fill="#EC4899" />
          <path d="M6 8.5v7M8.5 6h7.5M16 8l-2 3M8 17l4-2" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="text-text-muted-dark opacity-60" />
        </svg>
      );

    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#E34F26" />
          <path d="M12 3.8v16.3l5.8-1.5 1.3-14.8H12z" fill="#EF652A" />
          <path d="M7 6.5h10l-.2 2.2H9.2l.2 2.3h7.4l-.5 5.5-4.3 1.2-4.3-1.2-.3-3.3h2.2l.2 1.7 2.2.6 2.2-.6.3-2.6H7.1L7 6.5z" fill="#fff" />
        </svg>
      );

    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#1572B6" />
          <path d="M12 3.8v16.3l5.8-1.5 1.3-14.8H12z" fill="#33A9DC" />
          <path d="M16.8 6.5H7.2l.2 2.2h7.1l-.2 2.3H7.6l.2 2.3h6.6l-.5 5.5-4.3 1.2-4.3-1.2-.3-3.3H3.2l.4 4.5 8.4 2.3 8.4-2.3 1.1-12.2H16.8z" fill="#fff" />
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case 'vite':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M20.8 3.5L12.5 18.2a.6.6 0 01-1 0L3.2 3.5a.6.6 0 01.5-.9h16.6a.6.6 0 01.5.9z" fill="url(#viteGrad)" />
          <path d="M13.8 2.6l-5.3 10.4a.4.4 0 00.5.5l3.2-.8-1.2 5.1a.4.4 0 00.7.3l5.5-9.6a.4.4 0 00-.5-.5l-3.2.7 1.2-5.7a.4.4 0 00-.7-.4z" fill="#FFD62E" />
          <defs>
            <linearGradient id="viteGrad" x1="3" y1="2" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.8-2.5 4.6-2 1 .3 1.8 1.1 2.6 1.9C13.9 12.6 15.6 14 19 14c3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.8 2.5-4.6 2-1-.3-1.8-1.1-2.6-1.9C17.1 7.4 15.4 6 12 6zM5 14c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.8-2.5 4.6-2 1 .3 1.8 1.1 2.6 1.9 1.3 1.3 3 2.7 6.4 2.7 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.8 2.5-4.6 2-1-.3-1.8-1.1-2.6-1.9C10.1 15.4 8.4 14 5 14z"
            fill="#06B6D4"
          />
        </svg>
      );

    case 'postgresql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2C6.5 2 2 6.5 2 12c0 3.7 2 7 5 8.7V17c-.6-.4-1-1.1-1-1.9 0-1.3 1-2.4 2.3-2.4.4 0 .7.1 1 .3V11c-.6-.4-1-1.1-1-1.9 0-1.3 1-2.4 2.3-2.4.8 0 1.5.4 1.9 1.1.4-.7 1.1-1.1 1.9-1.1 1.3 0 2.3 1.1 2.3 2.4 0 .8-.4 1.5-1 1.9v2c.3-.2.6-.3 1-.3 1.3 0 2.3 1.1 2.3 2.4 0 .8-.4 1.5-1 1.9v3.7c3-1.7 5-5 5-8.7 0-5.5-4.5-10-10-10z"
            fill="#336791"
          />
        </svg>
      );

    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 1.5s-6 6.3-6 11.2c0 4.2 3.2 8.3 6 9.8 2.8-1.5 6-5.6 6-9.8 0-4.9-6-11.2-6-11.2z"
            fill="#47A248"
          />
          <path d="M12 1.5v21c.2 0 .4-.1.6-.2 2.6-1.4 5.4-5.2 5.4-9.6 0-4.9-6-11.2-6-11.2z" fill="#499D4A" />
          <path d="M12 21.5c-.3 0-.6-.1-.9-.2-2.3-1.3-4.8-4.7-4.8-8.7 0-3.3 2.8-7.5 4.8-9.8l.9-.8v19.5z" fill="#58AA58" />
        </svg>
      );

    case 'chromadb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9" stroke="#FF5A5F" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="12" r="5" stroke="#00A699" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="2" fill="#FC642D" />
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M21.6 10.6L13.4 2.4a1.8 1.8 0 00-2.6 0L8.7 4.5l3.2 3.2a2.2 2.2 0 012.7 2.7l3.1 3.1a2.2 2.2 0 11-1.3 1.3l-2.9-2.9v4.2a2.2 2.2 0 11-1.8 0V11a2.2 2.2 0 01-1.2-2.9L7.3 4.9 2.4 9.8a1.8 1.8 0 000 2.6l8.2 8.2a1.8 1.8 0 002.6 0l8.4-8.4a1.8 1.8 0 000-2.6z"
            fill="#F05032"
          />
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`text-text-primary-dark ${className}`}>
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'linux':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C8.7 2 7.5 4.5 7.5 8c0 1.2.3 3 .8 4.2C7 13.5 6 15.5 6 18c0 2.2 2.5 4 6 4s6-1.8 6-4c0-2.5-1-4.5-2.3-5.8.5-1.2.8-3 .8-4.2 0-3.5-1.2-6-4.5-6z" fill="#FCC624" />
          <path d="M12 3c-2.8 0-3.5 2-3.5 5 0 1.2.3 2.8.7 4 .8-1 2-1.5 2.8-1.5s2 .5 2.8 1.5c.4-1.2.7-2.8.7-4 0-3-.7-5-3.5-5z" fill="#000" />
          <ellipse cx="10" cy="7" rx="1" ry="1.5" fill="#fff" />
          <ellipse cx="14" cy="7" rx="1" ry="1.5" fill="#fff" />
          <circle cx="10" cy="7" r="0.6" fill="#000" />
          <circle cx="14" cy="7" r="0.6" fill="#000" />
          <path d="M10.5 9.5c.5.5 2.5.5 3 0l-.5 1.5h-2l-.5-1.5z" fill="#FFA500" />
        </svg>
      );

    case 'vscode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M17.4 2.2l4.8 2.3c.5.2.8.8.8 1.3v12.4c0 .6-.3 1.1-.8 1.3l-4.8 2.3a1.4 1.4 0 01-1.7-.4L9.2 14.5l-4.5 3.5a1 1 0 01-1.4-.2l-1.5-1.9a1 1 0 01.1-1.4L6.8 12 1.9 7.5a1 1 0 01-.1-1.4l1.5-1.9a1 1 0 011.4-.2l4.5 3.5 6.5-6.9a1.4 1.4 0 011.7-.4z" fill="#007ACC" />
          <path d="M17.4 2.2L9.2 9.5 6.8 12l2.4 2.5 8.2 7.3V2.2z" fill="#0066B8" opacity="0.6" />
          <path d="M22.2 4.5l-4.8-2.3V21.8l4.8-2.3c.5-.2.8-.8.8-1.3V5.8c0-.5-.3-1.1-.8-1.3z" fill="#1F9CF0" />
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M22.5 10.5c-.3-.2-1.4-.3-2.4.3-.4-.7-1-1.2-1.7-1.4l-.4-.1-.3.3c-.6.9-.7 2-.5 3-1.2.1-3 .5-3.9 1.7-.7-.1-2.4-.2-4.3.7-2.1-1-4.7-.6-5.8.5-.6.6-.9 1.4-.9 2.3 0 4.2 3.8 6.5 9.7 6.5 5.5 0 9.4-2.8 9.9-7.2.5.1 1.4.1 1.8-.4.5-.6.3-1.5.1-1.8l-.3-.3.2-.4c.2-.5.5-2.6-1.5-3.8zM4.3 11.2h2.2v2.2H4.3v-2.2zm3 0h2.2v2.2H7.3v-2.2zm3 0h2.2v2.2h-2.2v-2.2zm3 0h2.2v2.2h-2.2v-2.2zm-6-2.9h2.2v2.2H7.3V8.3zm3 0h2.2v2.2h-2.2V8.3zm3 0h2.2v2.2h-2.2V8.3zm-3-2.9h2.2v2.2h-2.2V5.4z"
            fill="#2496ED"
          />
        </svg>
      );

    case 'fastapi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="11" fill="#009688" />
          <path d="M12.5 3L6 13.5h5L10.5 21 18 10.5h-5.5L12.5 3z" fill="#fff" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="11" className="fill-black dark:fill-white" />
          <path d="M15.5 8.5v7m-7-7v7l8.2-7.5" stroke="currentColor" className="stroke-white dark:stroke-black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2l8.6 5v10L12 22l-8.6-5V7L12 2z" fill="#339933" />
          <path d="M12 4.2L5.2 8.1v7.8L12 19.8l6.8-3.9V8.1L12 4.2z" fill="#215732" opacity="0.4" />
          <path d="M12 7.5a2.5 2.5 0 012.5 2.5v4a2.5 2.5 0 01-5 0v-4A2.5 2.5 0 0112 7.5z" stroke="#fff" strokeWidth="1.5" />
        </svg>
      );

    case 'openai':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M21.5 10.2a5.3 5.3 0 00-.4-4.2 5.5 5.5 0 00-5.1-2.7 5.4 5.4 0 00-3.3-1.3 5.5 5.5 0 00-5.2 3.8 5.4 5.4 0 00-3.7 1.8 5.5 5.5 0 00-.8 5.2 5.3 5.3 0 00.4 4.2 5.5 5.5 0 005.1 2.7 5.4 5.4 0 003.3 1.3 5.5 5.5 0 005.2-3.8 5.4 5.4 0 003.7-1.8 5.5 5.5 0 00.8-5.2zm-7.9 10.4a3.8 3.8 0 01-2.4-.9l.1-.1 4.1-2.4a.8.8 0 00.4-.7v-5.7l1.7 1a.1.1 0 01.1.1v4.8a3.9 3.9 0 01-4 3.9zm-8.8-4.1a3.8 3.8 0 01-.5-2.5v-.2l4.1 2.4a.8.8 0 00.8 0l4.9-2.8v2l-4.1 2.4a3.9 3.9 0 01-5.2-1.3zm-1.1-9a3.8 3.8 0 011.9-1.7l-.1.2v4.8a.8.8 0 00.4.7l4.9 2.8-1.7 1a.1.1 0 01-.1 0L5.9 9.3a3.9 3.9 0 01-2.2-1.8zm14.7 2.4l-4.9-2.8v-2l4.1-2.4a3.9 3.9 0 015.2 1.3 3.8 3.8 0 01.5 2.5v.2l-4.1-2.4a.8.8 0 00-.8 0v5.6zm2.3 4.2a3.8 3.8 0 01-1.9 1.7v-4.9a.8.8 0 00-.4-.7l-4.9-2.8 1.7-1a.1.1 0 01.1 0l4.2 2.4a3.9 3.9 0 011.2 5.3zM10.4 13.7l-1.7-1a.1.1 0 01-.1-.1V7.8a3.9 3.9 0 016.4-3l-.1.1-4.1 2.4a.8.8 0 00-.4.7v5.7zm1.1-2.2l2.2-1.3 2.2 1.3v2.5l-2.2 1.3-2.2-1.3v-2.5z"
            fill="#10A37F"
          />
        </svg>
      );

    default:
      return (
        <div className={`w-6 h-6 rounded-lg bg-mint-500/10 text-mint-500 flex items-center justify-center text-xs font-bold font-mono ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
