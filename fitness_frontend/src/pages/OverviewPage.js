import React, { useMemo } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useToasts } from "../components/ui/ToastProvider";
import styles from "./pages.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar
} from "recharts";

export default function OverviewPage() {
  const { push } = useToasts();

  const weekly = useMemo(
    () => [
      { day: "Mon", load: 48, minutes: 42 },
      { day: "Tue", load: 62, minutes: 55 },
      { day: "Wed", load: 30, minutes: 28 },
      { day: "Thu", load: 70, minutes: 60 },
      { day: "Fri", load: 58, minutes: 50 },
      { day: "Sat", load: 22, minutes: 20 },
      { day: "Sun", load: 40, minutes: 35 }
    ],
    []
  );

  const weight = useMemo(
    () => [
      { week: "W1", kg: 78.2 },
      { week: "W2", kg: 77.8 },
      { week: "W3", kg: 77.4 },
      { week: "W4", kg: 77.1 },
      { week: "W5", kg: 76.9 }
    ],
    []
  );

  return (
    <div className={styles.stack}>
      <div className={styles.grid3}>
        <Card
          title="Today"
          subtitle="Focus: Upper strength"
          actions={
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                push({
                  title: "Logged",
                  message: "Demo: session created (no backend wired).",
                  kind: "success"
                })
              }
            >
              Start session
            </Button>
          }
        >
          <div className={styles.kpiRow}>
            <div className={styles.kpi}>
              <div className={styles.kpiLabel}>Training</div>
              <div className={styles.kpiValue}>45 min</div>
              <div className={styles.kpiSub}>Est. 410 kcal</div>
            </div>
            <div className={styles.kpi}>
              <div className={styles.kpiLabel}>Protein</div>
              <div className={styles.kpiValue}>128 g</div>
              <div className={styles.kpiSub}>Target 150 g</div>
            </div>
            <div className={styles.kpi}>
              <div className={styles.kpiLabel}>Hydration</div>
              <div className={styles.kpiValue}>1.6 L</div>
              <div className={styles.kpiSub}>Target 2.5 L</div>
            </div>
          </div>
        </Card>

        <Card title="This week" subtitle="Consistency & time">
          <div style={{ width: "100%", height: 190 }}>
            <ResponsiveContainer>
              <BarChart data={weekly}>
                <CartesianGrid stroke="rgba(17,24,39,0.08)" vertical={false} />
                <XAxis dataKey="day" stroke="rgba(17,24,39,0.55)" fontSize={12} />
                <YAxis stroke="rgba(17,24,39,0.55)" fontSize={12} width={28} />
                <Tooltip />
                <Bar dataKey="minutes" fill="rgba(59, 130, 246, 0.85)" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.note}>
            Aim for 4+ sessions. Keep intensity high, recovery higher.
          </div>
        </Card>

        <Card title="Trend" subtitle="Weight (kg) over 5 weeks">
          <div style={{ width: "100%", height: 190 }}>
            <ResponsiveContainer>
              <LineChart data={weight}>
                <CartesianGrid stroke="rgba(17,24,39,0.08)" vertical={false} />
                <XAxis dataKey="week" stroke="rgba(17,24,39,0.55)" fontSize={12} />
                <YAxis
                  stroke="rgba(17,24,39,0.55)"
                  fontSize={12}
                  width={32}
                  domain={["dataMin - 0.5", "dataMax + 0.5"]}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="kg"
                  stroke="rgba(16, 185, 129, 0.95)"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.note}>Slow, steady downward trend. Great adherence.</div>
        </Card>
      </div>

      <div className={styles.grid2}>
        <Card title="Next workout" subtitle="Suggested based on plan">
          <div className={styles.list}>
            {[
              { name: "Bench Press", sets: "4 x 6", note: "RPE 7–8" },
              { name: "Incline DB Press", sets: "3 x 10", note: "Controlled tempo" },
              { name: "Lat Pulldown", sets: "4 x 10", note: "Full stretch" },
              { name: "Cable Fly", sets: "3 x 12", note: "Squeeze" }
            ].map((row) => (
              <div key={row.name} className={styles.listRow}>
                <div className={styles.listMain}>
                  <div className={styles.listTitle}>{row.name}</div>
                  <div className={styles.listSub}>{row.note}</div>
                </div>
                <div className={styles.badge}>{row.sets}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Goals" subtitle="Keep these in sight">
          <div className={styles.goals}>
            {[
              { label: "Sessions / week", value: "4", progress: 0.75 },
              { label: "Protein / day", value: "150g", progress: 0.68 },
              { label: "Sleep", value: "7h 30m", progress: 0.6 }
            ].map((g) => (
              <div key={g.label} className={styles.goalRow}>
                <div className={styles.goalMeta}>
                  <div className={styles.goalLabel}>{g.label}</div>
                  <div className={styles.goalValue}>{g.value}</div>
                </div>
                <div className={styles.progressBar} aria-hidden="true">
                  <div className={styles.progressFill} style={{ width: `${g.progress * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
