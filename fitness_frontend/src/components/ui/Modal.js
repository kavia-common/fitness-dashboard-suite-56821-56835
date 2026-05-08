import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import Icon from "./Icon";

/**
 * Basic modal dialog.
 */
export default function Modal({ isOpen, title, description, children, onClose, footer }) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={() => onClose?.()}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Dialog"}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <div className={styles.headerText}>
            {title && <div className={styles.title}>{title}</div>}
            {description && <div className={styles.description}>{description}</div>}
          </div>
          <button className={styles.closeButton} type="button" onClick={() => onClose?.()}>
            <Icon name="x" />
          </button>
        </header>

        <div className={styles.body}>{children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
}
