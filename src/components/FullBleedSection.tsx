"use client";

import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface FullBleedSectionProps {
  children: ReactNode;
  bgClass?: string; // e.g., bg-gold, bg-accent
  className?: string;
}

export default function FullBleedSection({
  children,
  bgClass = "",
  className = "",
}: FullBleedSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width background color */}
      <div className={cn("absolute inset-0", bgClass)} />

      {/* Padded content */}
      <div
        className={cn(
          "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
          "px-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}