import React from "react";
import { BottomNavigation } from "~/components/bottomNavigation";
import { Header } from "~/components/header";

export function LayoutWithNavItems({ children, className }) {
  return (
    <main className={`flex flex-col h-screen ${className}`}>
      <Header />
      <div className="px-7">{children}</div>
      <BottomNavigation />
    </main>
  );
}
