import React from "react";

/**
 * Small inline icon set used throughout the dashboard.
 */
export default function Icon({ name, size = 18, color = "currentColor" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path
            d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 20v-9.5Z"
            stroke={color}
            strokeWidth="1.8"
          />
          <path d="M9.5 21v-7h5v7" stroke={color} strokeWidth="1.8" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg {...common}>
          <path
            d="M7 9v6M17 9v6"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4.5 10.5V13.5M19.5 10.5V13.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9 12h6"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.2 8.5h1.6A1.2 1.2 0 0 1 9 9.7v4.6a1.2 1.2 0 0 1-1.2 1.2H6.2A1.2 1.2 0 0 1 5 14.3V9.7a1.2 1.2 0 0 1 1.2-1.2Z"
            stroke={color}
            strokeWidth="1.6"
          />
          <path
            d="M16.2 8.5h1.6A1.2 1.2 0 0 1 19 9.7v4.6a1.2 1.2 0 0 1-1.2 1.2h-1.6A1.2 1.2 0 0 1 15 14.3V9.7a1.2 1.2 0 0 1 1.2-1.2Z"
            stroke={color}
            strokeWidth="1.6"
          />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <path
            d="M9 4.5h6l1 2H8l1-2Z"
            stroke={color}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M7 6.5h10A2 2 0 0 1 19 8.5v11A2 2 0 0 1 17 21.5H7A2 2 0 0 1 5 19.5v-11A2 2 0 0 1 7 6.5Z"
            stroke={color}
            strokeWidth="1.8"
          />
          <path d="M8.5 11h7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8.5 14.5h7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "log":
      return (
        <svg {...common}>
          <path
            d="M7 4.5h10A2 2 0 0 1 19 6.5v13A2 2 0 0 1 17 21.5H7A2 2 0 0 1 5 19.5v-13A2 2 0 0 1 7 4.5Z"
            stroke={color}
            strokeWidth="1.8"
          />
          <path d="M8.5 9h7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8.5 12.5h7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8.5 16h5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path
            d="M5 19.5V5.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 19.5h15"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8 16v-4M12 16v-7M16 16v-9"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <path
            d="M12 12.2a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            stroke={color}
            strokeWidth="1.8"
          />
          <path
            d="M6.5 20.5a6.5 6.5 0 0 1 11 0"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M5 7h14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 12h14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 17h14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path
            d="M6.5 6.5 17.5 17.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.5 6.5 6.5 17.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
        </svg>
      );
  }
}
