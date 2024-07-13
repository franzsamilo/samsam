"use client";
import Link from "next/link";
import { SparklesCore } from "./screens/TemplateUI/Sparkles";
import { TextRevealCard } from "./screens/TemplateUI/TextRevealCard";
import { TextGenerateEffect } from "./screens/TemplateUI/TextGenerate";

export default function Home() {
  return (
    <div className="min-h-screen w-screen items-center justify-center">
      <SparklesCore
        className="w-screen h-screen z-0 absolute"
        background="#000000"
      />
      <TextRevealCard
        className="scale-[0.5]"
        text="Franz Eliezer Samilo"
        revealText="Full Stack Web Developer"
      />
    </div>
  );
}
