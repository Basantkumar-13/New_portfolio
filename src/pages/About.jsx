import SectionHeader from '../components/common/SectionHeader';
import SocialLinks from '../components/common/SocialLinks';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8">
      <SectionHeader
        badge="ENGINEER IDENTITY"
        title="About Me"
        subtitle="AI/ML Engineer and software developer passionate about building practical, intelligent systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 md:p-8 space-y-4">
          <h3 className="text-xl font-bold text-text-primary-dark">
            Basant Yadav — AI/ML Engineer &amp; Developer
          </h3>
          <p className="text-sm md:text-base text-text-secondary-dark leading-relaxed">
            I am pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence at PSIT Kanpur. My engineering focus centers on developing intelligent software applications, language model integrations, and practical machine learning solutions that solve real-world challenges.
          </p>
          <p className="text-sm md:text-base text-text-secondary-dark leading-relaxed">
            Currently, I am building systems like <strong className="text-text-primary-dark">Neuron</strong> (an AI-powered second brain), <strong className="text-text-primary-dark">StepWise</strong> (an AI-driven process guidance platform), and <strong className="text-text-primary-dark">VaaniERP</strong> (a multilingual voice-enabled ERP system).
          </p>
          <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted-dark">
              <MapPin size={14} className="text-mint-600" />
              <span>PSIT Kanpur · Open to Remote / Relocation</span>
            </div>
            <SocialLinks />
          </div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h4 className="text-sm font-bold text-text-primary-dark pb-2 border-b border-black/5 dark:border-white/10">
            Profile Overview
          </h4>
          <ul className="space-y-2.5 text-xs text-text-secondary-dark">
            <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
              <span className="text-text-muted-dark">Full Name</span>
              <span className="font-semibold text-text-primary-dark">Basant Yadav</span>
            </li>
            <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
              <span className="text-text-muted-dark">Degree</span>
              <span className="font-semibold text-text-primary-dark">B.Tech CSE (AI)</span>
            </li>
            <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
              <span className="text-text-muted-dark">Institution</span>
              <span className="font-semibold text-text-primary-dark">PSIT Kanpur</span>
            </li>
            <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
              <span className="text-text-muted-dark">Primary Focus</span>
              <span className="font-semibold text-text-primary-dark">AI/ML &amp; Software Dev</span>
            </li>
            <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
              <span className="text-text-muted-dark">Key Focus Systems</span>
              <span className="font-semibold text-mint-600">Neuron, StepWise, VaaniERP</span>
            </li>
            <li className="flex justify-between py-1">
              <span className="text-text-muted-dark">Availability</span>
              <span className="text-mint-600 font-semibold">Open for Opportunities</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
