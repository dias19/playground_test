import React from "react";

export function Button({ type, children, onClick, className }) {
  const styles =
    type === "yellow"
      ? "linear-gradient(273deg, #FFC543 4.95%, #FF8412 93.62%)"
      : type === "blue"
      ? "linear-gradient(273deg, #686DE0 4.95%, #4834D4 93.62%)"
      : "linear-gradient(273deg, #EDEBFB 4.95%, #F0F0FC 93.62%)";

  return (
    <button
      className={`h-button rounded-button w-full text-white text-sm font-bold ${className}`}
      style={{
        backgroundImage: `${styles}`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
