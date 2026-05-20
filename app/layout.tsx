import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Growth Tracker — All-in-one startup metrics dashboard",
  description: "Consolidates key startup metrics (MRR, CAC, LTV, runway) from multiple tools into a single founder-focused dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8cf39bbb-b0b6-4220-9512-4ad6bc484473"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
