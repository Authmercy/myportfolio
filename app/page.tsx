"use client";

import { useState } from "react";
import cv from "@/i18/fr/fr.json";
import { slugify } from "@/lib/slug";
import type { CV } from "@/lib/types";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Project";
import Education from "@/components/Education";
import Assets from "@/components/Assets";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  const data = cv as CV;
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = data.menu.map((label) => ({
    label,
    href: `#${slugify(label)}`,
  }));

 return (
    <div id="app-root" className="w-full relative">
      <Navbar items={navItems} open={menuOpen} setOpen={setMenuOpen} />
{menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    <main className="w-full">
      <Section id={slugify("Profil")}>
        <Hero profil={data.profil} />
      </Section>

      <Section id={slugify("Compétences")} title="Compétences">
        <Skills competence={data.competence} />
      </Section>

      <Section id={slugify("Expériences")} title={data.experience.title}>
        <Experience items={data.experience.experience} />
      </Section>

      <Section id={slugify("Projets")} title={data.projects?.title ?? "Projets"}>
        <Projects items={data.projects?.items ?? []} />
      </Section>

      <Section id={slugify("Formation")} title={data.school.title}>
        <Education school={data.school} />
      </Section>

      <Section id={slugify("Atouts")} title={data.assets.title}>
        <Assets items={data.assets.items} />
      </Section>

      <Section id={slugify("Langues")} title={data.language.title}>
        <Languages items={data.language.items} />
      </Section>

      <Section id={slugify("Contact")} title="Contact">
        <Contact profil={data.profil} />
      </Section>

      <Footer footer={data.footer} />
    </main>
    </div>
 
);

}
