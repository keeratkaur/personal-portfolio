import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-theme text-theme antialiased transition-colors duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
