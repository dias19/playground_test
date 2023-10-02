import { navItems } from "~/constants";

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 grid grid-cols-4 h-bottomNav w-full rounded-t-[10px] bg-gradient-to-r from-transparent via-transparent to-blue-100 shadow-bottomNav px-10">
      {navItems.map((NavItem) => (
        <div
          key={NavItem.id}
          className="flex flex-col justify-between items-center py-4"
        >
          <NavItem.icon />
          <p
            className={`text-sm font-medium ${
              NavItem.active ? "text-navItem" : "text-disabledNavItem"
            }`}
          >
            {NavItem.text}
          </p>
        </div>
      ))}
    </nav>
  );
}
