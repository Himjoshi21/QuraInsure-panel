"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamProfiles = [
  {
    name: "Jigar Maniar",
    role: "Operations & Customer Experience Leader",
    image: "/team/jigar-maniar.jpeg",
    intro: "Jigar brings more than 17 years of experience across contact-center management, insurance, refinancing, lead management, and MIS.",
    detail: "He leads end-to-end operations with a focus on efficient workflows, practical data-led decisions, and customer experiences that feel clear and dependable. His career includes work with Mercedes-Benz, Audi, Volkswagen, Kia, Hyundai, Honda Cars, Ashok Leyland, and Ducati.",
    strengths: ["Operations strategy", "Team leadership", "Customer experience"],
  },
  {
    name: "Aakansha Patel",
    role: "Co-Founder & Data Strategy Leader",
    image: "/team/aakansha-patel.jpeg",
    intro: "Aakansha combines people leadership with deep experience in data analysis, helping teams turn complex information into confident action.",
    detail: "Her analytical approach has improved efficiency and effectiveness across diverse projects. She focuses on building capable teams, finding meaningful patterns in data, and translating insight into better day-to-day decisions.",
    strengths: ["Data analytics", "Team development", "Business insights"],
  },
];

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

export default function AboutUs() {
  return (
    <section id="team" className="relative overflow-hidden bg-primary py-28 text-white md:py-36">
      <div className="absolute inset-0 bg-grid-pattern opacity-[.08]" />
      <motion.div animate={{ x: [0, 70, 0], y: [0, -30, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-cta/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div {...reveal} className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><span className="text-sm font-bold uppercase tracking-[.2em] text-cta">The people behind QURA</span><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-.04em] md:text-6xl">Experience you can trust. <span className="font-editorial text-cta">People you can reach.</span></h2></div><p className="max-w-md text-lg leading-relaxed text-white/65">Meet the leaders shaping a simpler, more transparent insurance experience for every family we serve.</p></motion.div>
        <div className="mt-16 space-y-7">
          {teamProfiles.map((person, index) => (
            <motion.article initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-90px" }} transition={{ duration: .7, delay: index * .12 }} key={person.name} className={`group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] backdrop-blur-sm lg:grid-cols-[.82fr_1.18fr] ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative min-h-[480px] overflow-hidden bg-white"><Image src={person.image} alt={person.name} fill className="object-contain object-bottom transition duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/35 to-transparent" /><motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: index * .6 }} className="absolute bottom-5 left-5 rounded-2xl bg-cta px-5 py-3 text-primary shadow-xl"><div className="text-xs font-bold uppercase tracking-[.16em]">Leadership</div></motion.div></div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14"><div className="text-xs font-bold uppercase tracking-[.2em] text-cta">{person.role}</div><h3 className="mt-4 text-4xl font-semibold tracking-[-.035em] md:text-5xl">{person.name}</h3><p className="mt-7 text-xl leading-relaxed text-white/90">{person.intro}</p><p className="mt-5 leading-relaxed text-white/62">{person.detail}</p><div className="mt-8 flex flex-wrap gap-3">{person.strengths.map((strength, strengthIndex) => <motion.span initial={{ opacity: 0, scale: .85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: .35 + strengthIndex * .08 }} whileHover={{ y: -4, backgroundColor: "#C0DA6F", color: "#0B2442" }} key={strength} className="rounded-full border border-white/15 bg-white/[.07] px-4 py-2 text-sm font-semibold text-white/80">{strength}</motion.span>)}</div><div className="mt-9 h-px overflow-hidden bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: "42%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: .35 }} className="h-full bg-cta" /></div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
