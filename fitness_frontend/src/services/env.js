import React from "react";

/**
 * Read-only environment configuration for the frontend.
 *
 * Note: These values must be provided by the runtime (.env managed by the platform).
 */
export function getEnv() {
  return {
    apiBase: process.env.REACT_APP_API_BASE || "",
    backendUrl: process.env.REACT_APP_BACKEND_URL || "",
    frontendUrl: process.env.REACT_APP_FRONTEND_URL || "",
    wsUrl: process.env.REACT_APP_WS_URL || "",
    nodeEnv: process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || "development",
    nextTelemetryDisabled: process.env.REACT_APP_NEXT_TELEMETRY_DISABLED || "",
    enableSourceMaps: process.env.REACT_APP_ENABLE_SOURCE_MAPS || "",
    port: process.env.REACT_APP_PORT || ""
  };
}

export const EnvContext = React.createContext(getEnv());

/**
 * PUBLIC_INTERFACE
 * Hook to access environment configuration.
 */
export function useEnv() {
  /** This is a public function. */
  return React.useContext(EnvContext);
}
