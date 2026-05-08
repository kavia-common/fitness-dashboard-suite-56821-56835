import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import styles from "./ToastProvider.module.css";

const ToastContext = createContext({
  push: () => {}
});

/**
 * PUBLIC_INTERFACE
 * Hook to access toast notifications.
 */
export function useToasts() {
  /** This is a public function. */
  return useContext(ToastContext);
}

/**
 * Toast provider used at app root.
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((toast) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const next = { id, title: toast?.title || "Notice", message: toast?.message || "", kind: toast?.kind || "info" };
    setToasts((prev) => [next, ...prev].slice(0, 4));

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const value = useMemo(() => ({ push }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className={styles.toaster} aria-live="polite" aria-relevant="additions">
        {toasts.map((t) => (
          <div key={t.id} className={`${styles.toast} ${styles[t.kind]}`}>
            <div className={styles.toastTitle}>{t.title}</div>
            {t.message && <div className={styles.toastMsg}>{t.message}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
