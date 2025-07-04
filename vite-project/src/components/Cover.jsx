import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="w-full flex justify-center mt-10">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-center bg-gradient-to-b from-neutral-800 via-neutral-600 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
        <Cover>Web Developer</Cover>
      </h1>
    </div>
  );
}
