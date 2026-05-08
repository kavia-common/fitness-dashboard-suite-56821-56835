import React from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import styles from "./pages.module.css";
import { useToasts } from "../components/ui/ToastProvider";

export default function ProfilePage() {
  const { push } = useToasts();

  return (
    <div className={styles.stack}>
      <div className={styles.grid2}>
        <Card
          title="Profile"
          subtitle="Preferences & history (demo)"
          actions={
            <Button
              variant="primary"
              size="sm"
              onClick={() => push({ title: "Updated", message: "Demo: profile saved.", kind: "success" })}
            >
              Save
            </Button>
          }
        >
          <div className={styles.profileGrid}>
            <div className={styles.profileField}>
              <div className={styles.kpiLabel}>Name</div>
              <div className={styles.kpiValue}>Jordan Doe</div>
              <div className={styles.kpiSub}>Demo user</div>
            </div>
            <div className={styles.profileField}>
              <div className={styles.kpiLabel}>Goal</div>
              <div className={styles.kpiValue}>Cut</div>
              <div className={styles.kpiSub}>Maintain strength</div>
            </div>
            <div className={styles.profileField}>
              <div className={styles.kpiLabel}>Experience</div>
              <div className={styles.kpiValue}>Intermediate</div>
              <div className={styles.kpiSub}>4–5 sessions/week</div>
            </div>
          </div>

          <div className={styles.note} style={{ marginTop: 12 }}>
            Backend integration can map these fields to your real user account.
          </div>
        </Card>

        <Card title="History" subtitle="Highlights">
          <div className={styles.list}>
            {[
              { title: "Best bench (est.)", meta: "95kg • 3 reps", when: "2 weeks ago" },
              { title: "Bodyweight trend", meta: "-1.3kg over 5 weeks", when: "Current" },
              { title: "Consistency streak", meta: "9 days logged", when: "This month" }
            ].map((h) => (
              <div key={h.title} className={styles.listRow}>
                <div className={styles.listMain}>
                  <div className={styles.listTitle}>{h.title}</div>
                  <div className={styles.listSub}>
                    {h.meta} • {h.when}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
