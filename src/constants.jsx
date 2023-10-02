import { HomeIcon } from "../public/icons/home";
import { CardIcon } from "../public/icons/card";
import { ArrowIcon } from "../public/icons/arrow";
import { WalletIcon } from "../public/icons/wallet";

export const navItems = [
  {
    icon: HomeIcon,
    id: 1,
    active: true,
    text: "ראשי",
  },
  {
    icon: CardIcon,
    id: 2,
    active: false,
    text: "מפות",
  },
  {
    icon: ArrowIcon,
    id: 3,
    active: false,
    text: "תרגומים",
  },
  {
    icon: WalletIcon,
    id: 4,
    active: false,
    text: "גיוס כספים",
  },
];
