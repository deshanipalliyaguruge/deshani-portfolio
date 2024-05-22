import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cmsImg from "@/public/cms.png";
import pcbImg from "@/public/pcb1.jpg";
import portfolioImg from "@/public/portfolio.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "A project management system designed for construction companies",
    description:
      "I worked as a full-stack developer on this project.",
    tags: ["React", "Spring Boot", "MySQL", "Tailwind", "AWS"],
    imageUrl: cmsImg,
  },
  {
    title: "Safety and Security System for Bicycle",
    description:
      "The project aims to improve bicycle rider safety, challenge negative cycling perceptions, and boost confidence in cycling as a reliable modeof transportation.",
    tags: ["Arduino",],
    imageUrl: pcbImg,
  },
  {
    title: "My Personal Website",
    description:
      "I worked as a full-stack developer on this project. This is my personal portfolio website.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "React",
  "Spring Boot",
  "MySQL",
  "MsSQL",
  "C",
  "Java",
  "Arduino",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Git",
  "Tailwind",
  "Python",
  "AWS",
  "Framer Motion",
  "Figma",
] as const;
