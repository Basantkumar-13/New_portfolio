import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function Hero() {
  return (
    <section className="relative mb-6">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 pt-2 pb-4">
        {/* Left Column: Heading, Role, Description, Actions */}
        <div className="space-y-4 max-w-xl">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4EF] dark:bg-[#0E2F26] text-[#174A39] dark:text-[#8EE2B2] text-xs font-semibold border border-[#DDECE3] dark:border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>{profileData.badge}</span>
          </div>

          {/* Heading */}
          <div className="space-y-0.5">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F261E] dark:text-white leading-[1.12]">
              {profileData.headline} <br />
              <span className="text-[#136C49] dark:text-[#5EEAD4]">{profileData.name}</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#4D675D] dark:text-[#9FBDB1] leading-relaxed max-w-lg font-normal pt-1">
            {profileData.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102D26] hover:bg-[#163D34] dark:bg-[#8EE2B2] dark:hover:bg-[#A3EFC5] text-white dark:text-[#071F19] text-sm font-semibold shadow-sm transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/15 text-[#0F261E] dark:text-white border border-[#D5E3DA] dark:border-white/10 text-sm font-semibold shadow-2xs transition-all duration-150 active:scale-95 cursor-pointer"
            >
              <span>Contact Me</span>
              <Mail size={15} strokeWidth={2} className="text-[#4D675D] dark:text-[#9FBDB1]" />
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Workspace Graphic matching reference */}
        <div className="shrink-0 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            <img
              src="D:\projecto\new_portfolio\public\assets\workspace-3d.png"
              alt="My Workspace 3D Visual"
              className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(20,50,40,0.1)] select-none pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
