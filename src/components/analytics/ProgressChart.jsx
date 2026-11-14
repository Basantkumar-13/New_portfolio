import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { CHART_THEME } from '../../styles/theme';

export default function ProgressChart({ data = [] }) {
  const defaultData = [
    { month: 'Jan', commits: 45, reviews: 18 },
    { month: 'Feb', commits: 72, reviews: 29 },
    { month: 'Mar', commits: 60, reviews: 24 },
    { month: 'Apr', commits: 95, reviews: 36 },
    { month: 'May', commits: 110, reviews: 42 },
    { month: 'Jun', commits: 88, reviews: 31 },
  ];

  const chartData = data.length > 0 ? data : defaultData;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-text-primary-dark">Development Velocity</h3>
          <p className="text-xs text-text-muted-dark">Monthly commits and pull request activity</p>
        </div>
        <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-pill bg-mint-100 dark:bg-white/10 text-mint-600 dark:text-mint-400 border border-mint-200/50 dark:border-white/10">
          +32.4% vs last quarter
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="mintGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={CHART_THEME.strokeMint} stopOpacity={0.4} />
                <stop offset="95%" stopColor={CHART_THEME.strokeMint} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#789088' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#789088' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(5, 26, 20, 0.9)',
                borderColor: 'rgba(52, 211, 153, 0.3)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            />
            <Area
              type="monotone"
              dataKey="commits"
              stroke={CHART_THEME.strokeMint}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#mintGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
