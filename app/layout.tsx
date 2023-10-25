import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavHeader from "./(components)/NavHeader";
import NavFooter from "./(components)/NavFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventick",
  description: "Buy ticket with us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen bg-header text-default-text">
          <NavHeader />
          <div className="flex-grow overflow-y-scroll bg-page text-second-text overflow-hidden">
            {children}
            <NavFooter />
          </div>
        </div>
      </body>
    </html >
  );
}
