import SectionHeader from '../components/common/SectionHeader';
import StatsCard from '../components/analytics/StatsCard';
import ProgressChart from '../components/analytics/ProgressChart';
import ActivityHeatmap from '../components/analytics/ActivityHeatmap';
import PlatformCard from '../components/analytics/PlatformCard';
import { GitPullRequest, GitCommit, Eye, Activity, Globe, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';
import {
  analyticsStatsData,
  platformProfilesData,
  velocityChartData
} from '../data/analytics';

const statIconMap = {
  'git-pull-request': GitPullRequest,
  'git-commit': GitCommit,
  eye: Eye,
  activity: Activity,
};

const platformIconMap = {
  github: GithubIcon,
  code: Code2,
  globe: Globe,
};

export default function Analytics() {
  return (
    <div className="space-y-8">
      <SectionHeader
        badge="ENGINEERING METRICS"
        title="Developer Analytics"
        subtitle="Transparent instrumentation of output, repository activity, and system throughput."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {analyticsStatsData.map((stat) => {
          const Icon = statIconMap[stat.icon] || Activity;
          return (
            <StatsCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              isPositive={stat.isPositive}
              icon={Icon}
              subtitle={stat.subtitle}
            />
          );
        })}
      </div>

      <ProgressChart data={velocityChartData} />

      <ActivityHeatmap weeks={18} />

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-text-primary-dark">Platform Footprint</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platformProfilesData.map((p) => {
            const Icon = platformIconMap[p.iconType] || Globe;
            return (
              <PlatformCard
                key={p.platform}
                platform={p.platform}
                handle={p.handle}
                link={p.link}
                stats={p.stats}
                icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
