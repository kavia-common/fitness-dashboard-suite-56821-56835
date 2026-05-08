import React from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import styles from "./OnboardingModal.module.css";
import { useEnv } from "../../services/env";

/**
 * Onboarding modal shown on first load (demo).
 */
export default function OnboardingModal({ isOpen, onClose, onOpenAdmin }) {
  const env = useEnv();

  return (
    <Modal
      isOpen={isOpen}
      title="Welcome to FitDash"
      description="A lightweight dashboard for workouts, plans, logs, and progress."
      onClose={onClose}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Not now
          </Button>
          <Button variant="secondary" onClick={onOpenAdmin}>
            Admin setup
          </Button>
          <Button variant="primary" onClick={onClose}>
            Start exploring
          </Button>
        </>
      }
    >
      <div className={styles.grid}>
        <div className={styles.block}>
          <div className={styles.kicker}>Step 1</div>
          <div className={styles.title}>Create a plan</div>
          <div className={styles.text}>
            Define weekly targets (strength, cardio, mobility) and get a clear overview.
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.kicker}>Step 2</div>
          <div className={styles.title}>Log workouts & nutrition</div>
          <div className={styles.text}>
            Add sessions, sets, and quick notes. Track protein, calories, and hydration.
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.kicker}>Step 3</div>
          <div className={styles.title}>Watch progress</div>
          <div className={styles.text}>
            Visualize consistency, training load, and weight trends over time.
          </div>
        </div>

        <div className={styles.envBox}>
          <div className={styles.envTitle}>Connection</div>
          <div className={styles.envRow}>
            <span className={styles.envLabel}>API base</span>
            <span className={styles.envValue}>{env.apiBase || "—"}</span>
          </div>
          <div className={styles.envRow}>
            <span className={styles.envLabel}>Backend URL</span>
            <span className={styles.envValue}>{env.backendUrl || "—"}</span>
          </div>
          <div className={styles.envRow}>
            <span className={styles.envLabel}>WS URL</span>
            <span className={styles.envValue}>{env.wsUrl || "—"}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
