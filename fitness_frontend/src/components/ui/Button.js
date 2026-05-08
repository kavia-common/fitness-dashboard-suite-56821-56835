import React from "react";
import styles from "./Button.module.css";

/**
 * Reusable button component.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  href
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick} aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
