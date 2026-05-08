import React, { useMemo } from "react";
import Card from "../components/ui/Card";
import styles from "./pages.module.css";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from "recharts";

export default function ProgressPage() {
  const load = useMemo(
    () => [
      { week: "W1", load: 210 },
      { week: "W2", load: 260 },
      { week: "W3", load: 240 },
      { week: "W4", load: 290 },
      { week: "W5", load: 310 }
    ],
    []
  );

  const split = useMemo(
    () => [
      { name: "Strength", value: 68 },
      { name: "Cardio", value: 22 },
      { name: "Mobility", value: 10 }
    ],
    []
  );

  const COLORS = ["rgba(59,130,246,0.9)", "rgba(16,185,129,0.9)", "rgba(245,158,11,0.9)"];

  return (
    <div className={styles.stack}>
      <div className={styles.grid2}>
        <Card title="Training load" subtitle="Weekly total (demo units)">
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <AreaChart data={load}>
                <defs>
                  <linearGradient id="loadFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgba(59,130,246,0.6)" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="rgba(59,130,246,0.05)" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(17,24,39,0.08)" vertical={false} />
                <XAxis dataKey="week" stroke="rgba(17,24,39,0.55)" fontSize={12} />
                <YAxis stroke="rgba(17,24,39,0.55)" fontSize={12} width={32} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="load"
                  stroke="rgba(59,130,246,0.9)"
                  strokeWidth={3}
                  fill="url(#loadFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.note}>
            Load is trending up. Ensure deload weeks every 4–6 weeks.
          </div>
        </Card>

        <Card title="Activity split" subtitle="Last 14 days">
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <PieChart>
                <Tooltip />
                <Pie data={split} dataKey="value" nameKey="name" innerRadius={62} outerRadius={92} paddingAngle={3}>
                  {split.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.legend}>
            {split.map((s, i) => (
              <div key={s.name} className={styles.legendRow}>
                <span className={styles.legendDot} style={{ background: COLORS[i] }} />
                <span className={styles.legendLabel}>{s.name}</span>
                <span className={styles.legendValue}>{s.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
