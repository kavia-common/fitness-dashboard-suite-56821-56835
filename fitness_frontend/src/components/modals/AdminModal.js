import React, { useMemo, useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import styles from "./AdminModal.module.css";

/**
 * Admin modal (demo) to manage workout templates and reminders.
 */
export default function AdminModal({ isOpen, onClose }) {
  const [templateName, setTemplateName] = useState("");
  const [reminderTime, setReminderTime] = useState("18:30");

  const templates = useMemo(
    () => [
      { name: "Push Day", tags: ["Strength", "Upper"] },
      { name: "Pull Day", tags: ["Strength", "Upper"] },
      { name: "Leg Day", tags: ["Strength", "Lower"] },
      { name: "Zone 2 Cardio", tags: ["Cardio"] }
    ],
    []
  );

  return (
    <Modal
      isOpen={isOpen}
      title="Admin"
      description="Manage templates and reminders (demo UI)."
      onClose={onClose}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              // Demo: no persistence
              onClose?.();
            }}
          >
            Save changes
          </Button>
        </>
      }
    >
      <div className={styles.grid}>
        <div className={styles.panel}>
          <div className={styles.panelTitle}>Workout templates</div>
          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="tmpl">
              New template
            </label>
            <input
              id="tmpl"
              className={styles.input}
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="e.g., Full Body A"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setTemplateName("");
              }}
              disabled={!templateName}
            >
              Add
            </Button>
          </div>

          <div className={styles.list}>
            {templates.map((t) => (
              <div key={t.name} className={styles.listItem}>
                <div className={styles.listMain}>
                  <div className={styles.listName}>{t.name}</div>
                  <div className={styles.tags}>
                    {t.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelTitle}>Daily reminder</div>
          <div className={styles.helpText}>
            Send a gentle nudge to log training and nutrition.
          </div>

          <div className={styles.inputRow}>
            <label className={styles.label} htmlFor="reminder">
              Time
            </label>
            <input
              id="reminder"
              className={styles.input}
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
            />
          </div>

          <div className={styles.previewBox}>
            <div className={styles.previewTitle}>Preview</div>
            <div className={styles.previewBody}>
              “Quick check-in: did you train today? Add a log entry to stay on track.”
            </div>
            <div className={styles.previewMeta}>Scheduled: {reminderTime}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
