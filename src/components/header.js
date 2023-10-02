import React from "react";
import Image from "next/image";
import { SearchIcon } from "../../public/icons/search";
import { ProfileIcon } from "../../public/icons/profile";
export function Header() {
  return (
    <header className="flex mt-4 items-baseline justify-between mx-7">
      <div className="flex items-baseline">
        <Image src="/logo.png" width={30} height={47} alt="logo" />
        <p className="text-navItem text-xs font-bold">CoinsFill</p>
      </div>
      <div className="flex items-center gap-4">
        <SearchIcon />
        <ProfileIcon />
      </div>
    </header>
  );
}
