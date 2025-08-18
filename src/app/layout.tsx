import type { Metadata } from "next";
import "../styles/globals.css";
import { ReactNode} from "react";

export const metadata: Metadata = {
  title: "My cv",
  description: "Frontend developer cv"
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="relative">
        { children }
      </body>
    </html>
  )
};