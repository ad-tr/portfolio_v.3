"use client";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { BrutalistHeader } from "@/components/BrutalistHeader";
import { BrutalistHero } from "@/components/sections/BrutalistHero";
import { BrutalistAbout } from "@/components/sections/BrutalistAbout";
import { BrutalistProjects } from "@/components/sections/BrutalistProjects";
import { BrutalistSkills } from "@/components/sections/BrutalistSkills";
import { BrutalistExperience } from "@/components/sections/BrutalistExperience";
import { BrutalistContact } from "@/components/sections/BrutalistContact";
import { BrutalistFooter } from "@/components/BrutalistFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Global Effects */}
      <BackgroundEffects />

      {/* Content */}
      <BrutalistHeader />
      <BrutalistHero />
      <BrutalistAbout />
      <BrutalistProjects />
      <BrutalistSkills />
      <BrutalistExperience />
      <BrutalistContact />
      <BrutalistFooter />
    </main>
  );
}
