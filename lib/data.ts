import edittor from "@/public/eddittor.png";
import streamline from "@/public/streamline.png";
import trust from "@/public/trust.png";
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
      "I worked here as a IT Requiter with thrive passion of learning things and improving understanding about tech industry",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2021",
  },
  {
    title: "Front-End Developer",
    location: "Delhi, IN",
    description:
      "I am working as a React developer from last 2.4 years in team computers. I also upskilled to the full stack. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB, Node. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - current",
  },
] as const;

export const projectsData = [
  {
    title: "Streamline",
    description:
      "I am working as a full-stack developer on this own project from last 1 year. Users can create Project and tackle task in realtime, managing notes.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Typescript",
      "Prisma",
      "express",
      "node",
      "socket-io",
    ],
    imageUrl: streamline,
  },
  {
    title: "edittor",
    description:
      "App with realtime integrations of notifications and todos with firebase services",
    tags: ["React", "TypeScript", "Next.js", "Redux", "firebase"],
    imageUrl: edittor,
  },
  {
    title: "#Trust",
    description:
      "A it company web lending for quick details of the organization. It has landing page, their testimonials, and team details",
    tags: ["html", "bootstrap", "scss", "css", "javascript"],
    imageUrl: trust,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React Query",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Material UI",
  "AntDesign",
  "Node",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
