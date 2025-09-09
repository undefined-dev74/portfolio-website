import streamline from "@/public/streamline.png";
import unicraft from "@/public/unicraft.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Recruiter",
    location: "Noida, IN",
    description:
      "I worked as an IT Recruiter, gaining insights into the tech industry and improving my understanding of technical roles.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2021",
  },
  {
    title: "Front-End Developer",
    location: "Delhi, IN",
    description:
      "I worked as a React developer for 2.4 years at Team Computers, upskilling to full stack. My stack included React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, and Node.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Pune, IN",
    description:
      "I am working as a Full Stack Developer from April 2024. My stack included React, Next.js, TypeScript, Tailwind, Prisma, Python for ETL scripts, and Node.",
    icon: React.createElement(CgWorkAlt),
    date: "April2024 - Current",
  },
] as const;

export const projectsData = [
  {
    title: "Streamline",
    description:
      "I am working as a full-stack developer on this own project from last 1 year. Users can create Project and tackle task in realtime, managing notes, assigning issues",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tanstack Query",
      "Typescript",
      "Prisma",
      "express",
      "node",
      "socket-io",
    ],
    imageUrl: streamline,
  },
  {
    title: "Unicraft Tech",
    description:
      "Freelancing project: Collaborated with clients to deliver an end-to-end company portal using Next.js. Built a fully responsive UI for all devices, optimized SEO with SSR/SSG, integrated Vercel Analytics, and enabled real-time content updates via Google Sheets and server actions.",
    tags: ["Next.js", "React", "Vercel", "Google Sheets", "TypeScript", "SEO"],
    imageUrl: unicraft,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React Query",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Material UI",
  "AntDesign",
  "Node",
  "Tailwind",
  "Prisma",
  "Drizzle",
  "Python",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Amazon Amplify",
  "Vercel AI SDK",
] as const;
