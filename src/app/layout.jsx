import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YAGÁN",
  description: "Hotel Restobar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Topbar />
      {children}</body>
    </html>
  );
}
