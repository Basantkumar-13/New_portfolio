import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import SocialLinks from '../components/common/SocialLinks';
import { Mail, Send, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-8">
      <SectionHeader
        badge="GET IN TOUCH"
        title="Contact &amp; Collaboration"
        subtitle="Open to architectural consulting, technical leadership roles, and ambitious engineering projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-base font-bold text-text-primary-dark mb-1">Direct Channels</h3>
            <p className="text-xs text-text-secondary-dark">Reach out directly via email or professional networks.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-text-secondary-dark">
              <div className="p-2.5 rounded-pill bg-white dark:bg-white/10 shadow-sm text-mint-600 dark:text-mint-400 border border-black/5 dark:border-white/10">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-text-muted-dark">Email Address</p>
                <a href="mailto:developer@example.com" className="font-semibold text-text-primary-dark hover:text-mint-600 dark:hover:text-mint-400">
                  developer@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-text-secondary-dark">
              <div className="p-2.5 rounded-pill bg-white dark:bg-white/10 shadow-sm text-mint-600 dark:text-mint-400 border border-black/5 dark:border-white/10">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-text-muted-dark">Current Base</p>
                <p className="font-semibold text-text-primary-dark">PSIT Kanpur, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-text-secondary-dark">
              <div className="p-2.5 rounded-pill bg-white dark:bg-white/10 shadow-sm text-mint-600 dark:text-mint-400 border border-black/5 dark:border-white/10">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs text-text-muted-dark">Average Response Time</p>
                <p className="font-semibold text-text-primary-dark">&lt; 24 Hours</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/10">
            <p className="text-xs text-text-muted-dark mb-2">Connect online</p>
            <SocialLinks />
          </div>
        </div>

        <div className="lg:col-span-2 glass-card p-6 md:p-8">
          <h3 className="text-base font-bold text-text-primary-dark mb-4">Send a Message</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-secondary-dark">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Rivera"
                  className="w-full px-3.5 py-2.5 rounded-inner bg-white/70 dark:bg-white/10 border border-white dark:border-white/10 text-sm text-text-primary-dark dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-300"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-text-secondary-dark">Email Address</label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-inner bg-white/70 dark:bg-white/10 border border-white dark:border-white/10 text-sm text-text-primary-dark dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-300"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-secondary-dark">Subject / Inquiry</label>
              <input
                type="text"
                placeholder="Architectural Advisory / Role Opportunity"
                className="w-full px-3.5 py-2.5 rounded-inner bg-white/70 dark:bg-white/10 border border-white dark:border-white/10 text-sm text-text-primary-dark dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-text-secondary-dark">Message Details</label>
              <textarea
                rows={4}
                placeholder="Briefly describe your team, project scope, or opportunity..."
                className="w-full px-3.5 py-2.5 rounded-inner bg-white/70 dark:bg-white/10 border border-white dark:border-white/10 text-sm text-text-primary-dark dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-300 resize-none"
              />
            </div>

            <Button variant="primary" icon={Send} type="submit">
              Transmit Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
