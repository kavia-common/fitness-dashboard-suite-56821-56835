import React, { useMemo, useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useToasts } from "../components/ui/ToastProvider";
import styles from "./pages.module.css";

export default function WorkoutsPage() {
  const { push } = useToasts();
  const [query, setQuery] = useState("");

  const workouts = useMemo(
    () => [
      { name: "Push Day", focus: "Chest • Shoulders • Triceps", duration: 55, last: "2 days ago" },
      { name: "Pull Day", focus: "Back • Biceps", duration: 60, last: "5 days ago" },
      { name: "Leg Day", focus: "Quads • Glutes • Hamstrings", duration: 62, last: "1 week ago" },
      { name: "Zone 2 Cardio", focus: "Bike / Incline walk", duration: 40, last: "Yesterday" }
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return workouts;
    return workouts.filter((w) => w.name.toLowerCase().includes(q) || w.focus.toLowerCase().includes(q));
  }, [query, workouts]);

  return (
    <div className={styles.stack}>
      <Card
        title="Workout library"
        subtitle="Create, reuse, and start sessions quickly."
        actions={
          <Button
            variant="primary"
            size="sm"
            onClick={() =>
              push({
                title: "Create workout",
                message: "Demo: open workout editor (not implemented).",
                kind: "info"
              })
            }
          >
            + New
          </Button>
        }
      >
        <div className={styles.toolbar}>
          <input
            className={styles.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search workouts..."
            aria-label="Search workouts"
          />
          <div className={styles.toolbarRight}>
            <Button variant="ghost" size="sm">
              Filters
            </Button>
            <Button variant="ghost" size="sm">
              Sort
            </Button>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {filtered.map((w) => (
            <div key={w.name} className={styles.workoutCard}>
              <div className={styles.workoutTop}>
                <div>
                  <div className={styles.workoutName}>{w.name}</div>
                  <div className={styles.workoutSub}>{w.focus}</div>
                </div>
                <div className={styles.badge}>{w.duration} min</div>
              </div>
              <div className={styles.workoutMeta}>Last done: {w.last}</div>
              <div className={styles.cardActions}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => push({ title: "Started", message: `Demo: ${w.name} session started.`, kind: "success" })}
                >
                  Start
                </Button>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
