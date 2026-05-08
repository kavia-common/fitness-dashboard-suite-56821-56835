import React, { useMemo, useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import styles from "./pages.module.css";
import { useToasts } from "../components/ui/ToastProvider";

export default function LogsPage() {
  const { push } = useToasts();
  const [note, setNote] = useState("");
  const [protein, setProtein] = useState("128");
  const [calories, setCalories] = useState("2060");

  const recent = useMemo(
    () => [
      { date: "Today", type: "Workout", title: "Upper strength", meta: "55 min • RPE 8" },
      { date: "Yesterday", type: "Nutrition", title: "High protein day", meta: "150g protein • 2,120 kcal" },
      { date: "2 days ago", type: "Workout", title: "Zone 2 cardio", meta: "40 min • Easy" }
    ],
    []
  );

  return (
    <div className={styles.stack}>
      <div className={styles.grid2}>
        <Card title="Quick log" subtitle="Add a note and macros (demo)">
          <div className={styles.formGrid}>
            <label className={styles.formLabel}>
              Protein (g)
              <input className={styles.formInput} value={protein} onChange={(e) => setProtein(e.target.value)} />
            </label>

            <label className={styles.formLabel}>
              Calories
              <input className={styles.formInput} value={calories} onChange={(e) => setCalories(e.target.value)} />
            </label>

            <label className={styles.formLabel} style={{ gridColumn: "1 / -1" }}>
              Note
              <textarea
                className={styles.formTextarea}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g., felt strong today, good sleep..."
              />
            </label>

            <div className={styles.formActions}>
              <Button
                variant="secondary"
                onClick={() => {
                  setNote("");
                  push({ title: "Saved", message: "Demo: log entry recorded.", kind: "success" });
                }}
              >
                Save log
              </Button>
              <Button variant="ghost" onClick={() => setNote("")}>
                Clear
              </Button>
            </div>
          </div>
        </Card>

        <Card title="Recent activity" subtitle="Latest logs">
          <div className={styles.list}>
            {recent.map((r, idx) => (
              <div key={`${r.date}-${idx}`} className={styles.listRow}>
                <div className={styles.listMain}>
                  <div className={styles.listTitle}>
                    <span className={styles.badgeAlt}>{r.type}</span> {r.title}
                  </div>
                  <div className={styles.listSub}>
                    {r.date} • {r.meta}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
