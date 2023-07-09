import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Oxanium } from "next/font/google";

const oxaminium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxaminium",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${oxaminium.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  );
}
