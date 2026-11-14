import SectionHeader from '../components/common/SectionHeader';
import StatsCard from '../components/analytics/StatsCard';
import ProgressChart from '../components/analytics/ProgressChart';
import ActivityHeatmap from '../components/analytics/ActivityHeatmap';
import PlatformCard from '../components/analytics/PlatformCard';
import { GitPullRequest, GitCommit, Eye, Activity, Globe, Code2 } from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';

export default function Analytics() {
  const platforms = [
    {
      platform: 'GitHub',
      handle: '@developer',
      link: 'https://github.com',
      icon: GithubIcon,
      stats: [
        { label: 'Followers', value: '1.2k' },
        { label: 'Public Repos', value: '42' },
      ],
    },
    {
      platform: 'LeetCode',
      handle: 'algo_master',
      link: 'https://leetcode.com',
      icon: Code2,
      stats: [
        { label: 'Solved', value: '650+' },
        { label: 'Global Ranking', value: 'Top 1.5%' },
      ],
    },
    {
      platform: 'Technical Blog',
      handle: 'dev.to/engineer',
      link: 'https://dev.to',
      icon: Globe,
      stats: [
        { label: 'Total Views', value: '180k' },
        { label: 'Articles', value: '28' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader
        badge="ENGINEERING METRICS"
        title="Developer Analytics"
        subtitle="Transparent instrumentation of output, repository activity, and system throughput."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          title="PRs Merged"
          value="412"
          change="+14%"
          icon={GitPullRequest}
          subtitle="This year"
        />
        <StatsCard
          title="Total Commits"
          value="2,480"
          change="+18%"
          icon={GitCommit}
          subtitle="Past 365 days"
        />
        <StatsCard
          title="Profile Impressions"
          value="45.2k"
          change="+32%"
          icon={Eye}
          subtitle="Last 90 days"
        />
        <StatsCard
          title="Build Success Rate"
          value="99.7%"
          change="+0.2%"
          icon={Activity}
          subtitle="CI/CD pipelines"
        />
      </div>

      <ProgressChart />

      <ActivityHeatmap weeks={18} />

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-text-primary-dark">Platform Footprint</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <PlatformCard key={p.platform} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
