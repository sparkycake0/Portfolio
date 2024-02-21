import Navbar from "@/components/Navbar";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = JetBrains_Mono({ subsets: ["latin"] });
export const metadata = {
  title: "WeCanHackNasa",
  description: "our portfolio :)",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
