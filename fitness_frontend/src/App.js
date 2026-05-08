import React, { useMemo, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import { ToastProvider } from "./components/ui/ToastProvider";
import OnboardingModal from "./components/modals/OnboardingModal";
import AdminModal from "./components/modals/AdminModal";
import OverviewPage from "./pages/OverviewPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import PlansPage from "./pages/PlansPage";
import LogsPage from "./pages/LogsPage";
import ProgressPage from "./pages/ProgressPage";
import ProfilePage from "./pages/ProfilePage";
import { EnvContext, getEnv } from "./services/env";

/**
 * Root application component.
 * Provides routing, global modals, and environment context.
 */
export default function App() {
  const env = useMemo(() => getEnv(), []);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <EnvContext.Provider value={env}>
      <ToastProvider>
        <BrowserRouter>
          <DashboardLayout
            onOpenOnboarding={() => setIsOnboardingOpen(true)}
            onOpenAdmin={() => setIsAdminOpen(true)}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/workouts" element={<WorkoutsPage />} />
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/logs" element={<LogsPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate to="/overview" replace />} />
            </Routes>
          </DashboardLayout>

          <OnboardingModal
            isOpen={isOnboardingOpen}
            onClose={() => setIsOnboardingOpen(false)}
            onOpenAdmin={() => {
              setIsOnboardingOpen(false);
              setIsAdminOpen(true);
            }}
          />
          <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
        </BrowserRouter>
      </ToastProvider>
    </EnvContext.Provider>
  );
}
