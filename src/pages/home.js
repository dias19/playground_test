import { Montserrat } from "next/font/google";
import { UploadImage } from "~/features/settings/upload-image";
import { LayoutWithNavItems } from "~/layouts/LayoutWithNavItems";
import { AuthProvider } from "~/components/auth-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <AuthProvider>
      <LayoutWithNavItems className={montserrat.className}>
        <UploadImage />
      </LayoutWithNavItems>
    </AuthProvider>
  );
}
