import "~/styles/globals.css";
import { GlobalProvider } from "~/components/global-provider";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Toaster />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
