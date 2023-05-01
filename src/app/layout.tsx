import Header from "@/ui/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "bg-gray-500 h-screen flex items-center justify-center"
        }
      >
        <div className="w-[350px] min-h-full bg-gray-300 text-gray-700">
          <header className="p-5">
            <Header />
          </header>
          <main className="p-5 pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}