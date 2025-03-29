import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect } from 'react';
import { init } from '@emailjs/browser';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize EmailJS with your public key
    init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
