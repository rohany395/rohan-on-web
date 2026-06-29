import type { ImpactStat } from "@/content/resume";

type ImpactStatsProps = {
  stats: ImpactStat[];
};

export function ImpactStats({ stats }: ImpactStatsProps) {
  return (
    <div className="impact-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="impact-stat">
          <p className="impact-stat-value">{stat.value}</p>
          <p className="impact-stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
