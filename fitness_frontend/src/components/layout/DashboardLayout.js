import React, { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { useEnv } from "../../services/env";
import styles from "./DashboardLayout.module.css";

const NAV_ITEMS = [
  { to: "/overview", label: "Overview", icon: "home" },
  { to: "/workouts", label: "Workouts", icon: "dumbbell" },
  { to: "/plans", label: "Plans", icon: "clipboard" },
  { to: "/logs", label: "Logs", icon: "log" },
  { to: "/progress", label: "Progress", icon: "chart" },
  { to: "/profile", label: "Profile", icon: "user" }
];

/**
 * Dashboard layout wrapper.
 * Renders a responsive sidebar, top header, and a main content slot.
 */
export default function DashboardLayout({ children, onOpenOnboarding, onOpenAdmin }) {
  const env = useEnv();
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const activeTitle = useMemo(() => {
    const match = NAV_ITEMS.find((i) => location.pathname.startsWith(i.to));
    return match ? match.label : "Dashboard";
  }, [location.pathname]);

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar} aria-label="Primary">
        <div className={styles.brandRow}>
          <div className={styles.brandMark} aria-hidden="true">
            <span />
          </div>
          <div className={styles.brandText}>
            <div className={styles.brandName}>FitDash</div>
            <div className={styles.brandSub}>Dashboard</div>
          </div>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
              }
              onClick={() => setIsMobileNavOpen(false)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.envPill} title="Environment / backend">
            <span className={styles.envDot} aria-hidden="true" />
            <span className={styles.envText}>
              {env.nodeEnv}
              {env.backendUrl ? ` • ${new URL(env.backendUrl).host}` : ""}
            </span>
          </div>

          <div className={styles.sidebarActions}>
            <Button variant="ghost" size="sm" onClick={onOpenOnboarding}>
              Help
            </Button>
            <Button variant="primary" size="sm" onClick={onOpenAdmin}>
              Admin
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay nav */}
      <div
        className={`${styles.mobileOverlay} ${isMobileNavOpen ? styles.mobileOverlayOpen : ""}`}
        onClick={() => setIsMobileNavOpen(false)}
        role="presentation"
      />

      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileNavOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
          >
            <Icon name="menu" />
          </button>
          <div className={styles.pageTitle}>
            <div className={styles.pageTitleTop}>{activeTitle}</div>
            <div className={styles.pageTitleSub}>Stay consistent. Track progress.</div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.quickActions}>
            <Button variant="secondary" size="sm" href="#new-log">
              + Log
            </Button>
            <Button variant="ghost" size="sm" href="#reminders">
              Reminders
            </Button>
          </div>

          <div className={styles.profileChip} title="Demo profile">
            <div className={styles.avatar} aria-hidden="true">
              <span>JD</span>
            </div>
            <div className={styles.profileMeta}>
              <div className={styles.profileName}>Jordan</div>
              <div className={styles.profileSub}>Intermediate • Cutting</div>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`${styles.mobileDrawer} ${isMobileNavOpen ? styles.mobileDrawerOpen : ""}`}>
          <div className={styles.mobileDrawerHeader}>
            <div className={styles.brandRow} style={{ padding: 0 }}>
              <div className={styles.brandMark} aria-hidden="true">
                <span />
              </div>
              <div className={styles.brandText}>
                <div className={styles.brandName}>FitDash</div>
                <div className={styles.brandSub}>Dashboard</div>
              </div>
            </div>
            <button
              type="button"
              className={styles.mobileCloseButton}
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Close navigation"
            >
              <Icon name="x" />
            </button>
          </div>
          <nav className={styles.nav} aria-label="Mobile primary">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
                }
                onClick={() => setIsMobileNavOpen(false)}
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className={styles.sidebarFooter} style={{ borderTop: "1px solid var(--border)" }}>
            <div className={styles.sidebarActions}>
              <Button variant="ghost" size="sm" onClick={onOpenOnboarding}>
                Help
              </Button>
              <Button variant="primary" size="sm" onClick={onOpenAdmin}>
                Admin
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main} aria-label="Main content">
        <div className={styles.mainInner}>{children}</div>
      </main>
    </div>
  );
}
