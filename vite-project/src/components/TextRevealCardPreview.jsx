"use client";
import React from "react";
import {
  TextRevealCard
} from "../components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#010208]  rounded-2xl">
      <TextRevealCard text="I am a Engineer" revealText="I am a Developer">
      </TextRevealCard>
    </div>
  );
}
