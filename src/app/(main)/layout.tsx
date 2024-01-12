"use client";

import React from "react";

import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { usePathname } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  return (
    <div className="bg-blur-circle relative w-full h-screen overflow-scroll no-scrollbar">
      <Navbar />
      <div className={`fixed top-0 left-4 md:left-20 border-r border-white/15 w-0 ${pathname != "/" ? "h-full" : "h-[calc(100%-64px)] md:h-[calc(100%-80px)]"}`}></div>
        {children}
      <div className={`fixed top-0 right-4 md:right-20 border-l border-white/15 w-0 ${pathname != "/" ? "h-full" : "h-[calc(100%-64px)] md:h-[calc(100%-80px)]"}`}></div>
      <Footer />
    </div>
  )
}
