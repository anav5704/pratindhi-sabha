import AdminCommand from "@/components/global/AdminCommand";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Pratinidhi Sabha",
  description: "Developed & Powered by Procyon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex my-10 w-4/5 mx-auto h-full gap-10">
      <div className="grow">{children}</div>
      <div className="relative lg:block hidden">
        <AdminCommand />
      </div>
    </main>
  );
}
