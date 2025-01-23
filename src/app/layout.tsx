import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNav from "@/components/GlobalNav";
import AddressBar from "@/components/AddressBar";
import Byline from "@/components/Byline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blogify",
  description: "Blogify is paltform for bloggers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36 relative flex flex-col">
        <GlobalNav />

        <div className="lg:pl-72 relative flex-grow">
          <div className="p-px shadow-lg bg-vc-border-gradient shadow-black/20 fixed right-0 w-full top-0 lg:w-[975px] z-10">
            <div className="bg-black">
              <AddressBar />
            </div>
          </div>
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8 lg:pt-20">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">{/* <AddressBar /> */}</div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
            <Byline />
          </div>
        </div>
      </body>
    </html>
  );
}
