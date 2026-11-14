import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { ArrowUpRight, Brain, Code, Cpu } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="glass-card p-6 md:p-8 mb-10">
      <SectionHeader
        badge="ENGINEER PROFILE"
        title="About My Engineering Approach"
        subtitle="Bridging theoretical AI models with production software engineering to solve tangible problems."
        action={
          <Link
            to="/about"
            className="text-xs font-mono font-semibold text-mint-600 hover:text-emerald-700 inline-flex items-center gap-1"
          >
            <span>Read Full Bio</span>
            <ArrowUpRight size={14} />
          </Link>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-text-secondary-dark">
        <div className="p-5 rounded-card bg-white/60 border border-white/80 space-y-2 hover:bg-white/80 transition-colors">
          <div className="p-2 w-fit rounded-pill bg-mint-100 text-mint-600 mb-2">
            <Brain size={18} />
          </div>
          <h3 className="font-bold text-text-primary-dark">Applied Intelligence</h3>
          <p className="text-xs md:text-sm leading-relaxed">
            Harnessing language models, voice synthesis, and semantic vector search into purpose-built software like Neuron and VaaniERP.
          </p>
        </div>

        <div className="p-5 rounded-card bg-white/60 border border-white/80 space-y-2 hover:bg-white/80 transition-colors">
          <div className="p-2 w-fit rounded-pill bg-mint-100 text-mint-600 mb-2">
            <Code size={18} />
          </div>
          <h3 className="font-bold text-text-primary-dark">Clean Implementation</h3>
          <p className="text-xs md:text-sm leading-relaxed">
            Prioritizing readable, maintainable architectures over unnecessary complexity, emphasizing Python backend clarity and modern React UIs.
          </p>
        </div>

        <div className="p-5 rounded-card bg-white/60 border border-white/80 space-y-2 hover:bg-white/80 transition-colors">
          <div className="p-2 w-fit rounded-pill bg-mint-100 text-mint-600 mb-2">
            <Cpu size={18} />
          </div>
          <h3 className="font-bold text-text-primary-dark">Academic Foundation</h3>
          <p className="text-xs md:text-sm leading-relaxed">
            Deepening core computer science and AI/ML algorithms through B.Tech CSE (AI Specialization) at PSIT Kanpur.
          </p>
        </div>
      </div>
    </section>
  );
}
