import { Montserrat } from "next/font/google";
import { LoginActions } from "~/features/auth/login-actions";
import { LayoutWithNavItems } from "~/layouts/LayoutWithNavItems";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutWithNavItems className={montserrat.className}>
      <LoginActions />
    </LayoutWithNavItems>
  );
}
