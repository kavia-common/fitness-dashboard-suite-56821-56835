import React, { useMemo } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import styles from "./pages.module.css";
import { useToasts } from "../components/ui/ToastProvider";

export default function PlansPage() {
  const { push } = useToasts();

  const plan = useMemo(
    () => ({
      name: "Cutting — 4 days",
      notes: "Prioritize strength maintenance + steady cardio. Keep protein high.",
      schedule: [
        { day: "Mon", workout: "Push Day", tag: "Strength" },
        { day: "Tue", workout: "Zone 2 Cardio", tag: "Cardio" },
        { day: "Thu", workout: "Pull Day", tag: "Strength" },
        { day: "Sat", workout: "Leg Day", tag: "Strength" }
      ]
    }),
    []
  );

  return (
    <div className={styles.stack}>
      <div className={styles.grid2}>
        <Card
          title="Active plan"
          subtitle={plan.name}
          actions={
            <Button
              variant="primary"
              size="sm"
              onClick={() => push({ title: "Plan updated", message: "Demo: changes saved.", kind: "success" })}
            >
              Save
            </Button>
          }
        >
          <div className={styles.note}>{plan.notes}</div>

          <div className={styles.list}>
            {plan.schedule.map((row) => (
              <div key={row.day} className={styles.listRow}>
                <div className={styles.listMain}>
                  <div className={styles.listTitle}>
                    {row.day} — {row.workout}
                  </div>
                  <div className={styles.listSub}>{row.tag}</div>
                </div>
                <div className={styles.badge}>Planned</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Targets" subtitle="Weekly & daily guardrails">
          <div className={styles.goals}>
            {[
              { label: "Strength sessions", value: "3", progress: 0.66 },
              { label: "Cardio sessions", value: "1", progress: 0.5 },
              { label: "Steps", value: "8k/day", progress: 0.72 },
              { label: "Calories", value: "2,150/day", progress: 0.58 }
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
