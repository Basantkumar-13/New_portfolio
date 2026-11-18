/**
 * Analytics and engineering telemetry data.
 * Structured to allow direct hydration from GitHub/LeetCode APIs in the future.
 */

export const homeMetricsData = [
  {
    id: 'projects',
    value: '15+',
    label: 'Projects',
    iconBg: 'bg-[#EAF6EE]',
    iconColor: 'text-[#136C49]',
    icon: 'package'
  },
  {
    id: 'problems',
    value: '1,324+',
    label: 'Problems Solved',
    iconBg: 'bg-[#EDF3EF]',
    iconColor: 'text-[#2C4A3E]',
    icon: 'code'
  },
  {
    id: 'streak',
    value: '47',
    label: 'Day Streak',
    iconBg: 'bg-[#FFF3E8]',
    iconColor: 'text-[#F97316]',
    icon: 'flame'
  },
  {
    id: 'learning',
    value: '2+',
    label: 'Years Learning',
    iconBg: 'bg-[#EBF3FE]',
    iconColor: 'text-[#2563EB]',
    icon: 'trending'
  }
];

export const analyticsStatsData = [
  {
    id: 'prs',
    title: 'PRs Merged',
    value: '412',
    change: '+14%',
    isPositive: true,
    subtitle: 'This year',
    icon: 'git-pull-request'
  },
  {
    id: 'commits',
    title: 'Total Commits',
    value: '2,480',
    change: '+18%',
    isPositive: true,
    subtitle: 'Past 365 days',
    icon: 'git-commit'
  },
  {
    id: 'impressions',
    title: 'Profile Impressions',
    value: '45.2k',
    change: '+32%',
    isPositive: true,
    subtitle: 'Last 90 days',
    icon: 'eye'
  },
  {
    id: 'build-rate',
    title: 'Build Success Rate',
    value: '99.7%',
    change: '+0.2%',
    isPositive: true,
    subtitle: 'CI/CD pipelines',
    icon: 'activity'
  }
];

export const velocityChartData = [
  { month: 'Jan', commits: 45, reviews: 18 },
  { month: 'Feb', commits: 72, reviews: 29 },
  { month: 'Mar', commits: 60, reviews: 24 },
  { month: 'Apr', commits: 95, reviews: 36 },
  { month: 'May', commits: 110, reviews: 42 },
  { month: 'Jun', commits: 88, reviews: 31 }
];

export const platformProfilesData = [
  {
    platform: 'GitHub',
    handle: '@Basantkumar-13',
    link: 'https://github.com/Basantkumar-13',
    iconType: 'github',
    stats: [
      { label: 'Followers', value: '1.2k' },
      { label: 'Public Repos', value: '42' }
    ]
  },
  {
    platform: 'LeetCode',
    handle: 'algo_master',
    link: 'https://leetcode.com',
    iconType: 'code',
    stats: [
      { label: 'Solved', value: '650+' },
      { label: 'Global Ranking', value: 'Top 1.5%' }
    ]
  },
  {
    platform: 'Technical Blog',
    handle: 'dev.to/engineer',
    link: 'https://dev.to',
    iconType: 'globe',
    stats: [
      { label: 'Total Views', value: '180k' },
      { label: 'Articles', value: '28' }
    ]
  }
];
