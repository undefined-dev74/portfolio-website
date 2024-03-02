"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Armed with an <span className="font-medium">BCA</span> degree in 2017,
        With 1.6 years in IT recruitment, I bring valuable insights to the tech
        world. I took a detour into full-stack web development after a coding
        bootcamp in coding Ninjas. Proficient in{" "}
        <span className="font-medium">
          {" "}
          React, Next.js, Node.js, MongoDB, TypeScript, and Prisma{" "}
        </span>
        Since Nov 2021, I've been excelling as a{" "}
        <span className="font-medium">React Node developer </span> at Team
        Computers.com. A well-rounded individual, I balance tech expertise with
        a passion for continuous learning, making me an ideal fit for your team.
        Let's shape the future together!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy cooking
        reading books, listing tech and self-help poadcast for shaping myself in
        better way. I also enjoy{" "}
      </p>
    </motion.section>
  );
}
