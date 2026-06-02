import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import cmsImg from "@/public/storeDashbard.png";
import pcbImg from "@/public/pcb1.jpg";
import portfolioImg from "@/public/portfolio.png";
import doodleImg from "@/public/Doodle.png";

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
    id: "uom-degree",
    title: "BSc. (Hons) in Information Technology",
    company: "University of Moratuwa",
    date: "2022 - 2026",
    icon: React.createElement(LuGraduationCap),
    points: [
      "Expected graduation: Jul 2026.",
      "CGPA: 3.61 / 4.0, with Dean's List recognition for Semester 3 and 4.",
      "Final Year Research: Trilingual PII Detection Redaction Middleware for LLM Security.",
    ],
  },
  {
    id: "app360-internship",
    title: "Software Engineer Intern",
    company: "App360 (PVT) Ltd",
    date: "Feb 2025 - Sept 2025",
    icon: React.createElement(CgWorkAlt),
    points: [
      "Developed and maintained scalable backend services using ASP.NET Core 8.0, ADO.NET, and Microsoft SQL Server.",
      "Built responsive and high-performance web interfaces using Next.js, Redux Toolkit, and Tailwind CSS.",
      "Deployed applications to Microsoft Azure and managed cloud resources for smooth production releases.",
      "Collaborated within an agile team using Bitbucket, branching strategies, and peer code reviews.",
      "Contributed to production systems including a POS platform and a Petrol Shed Management System.",
    ],
  },
] as const;
 
export const projectsData = [
  {
    id: "construction-project-management",
    title: "A project management system designed for construction companies",
    description:
      "A project management system designed for construction companies to effectively oversee their projects nationwide.",
    tags: ["React", "Spring Boot", "MySQL", "Tailwind", "AWS"],
    imageUrl: cmsImg,
  },
  {
    id: "bicycle-security-system",
    title: "Safety and Security System for Bicycle",
    description:
      "The project aims to improve bicycle rider safety, challenge negative cycling perceptions, and boost confidence in cycling as a reliable mode of transportation.",
    tags: ["Arduino"],
    imageUrl: pcbImg,
  },
  {
    id: "personal-website",
    title: "My Personal Website",
    description:
      "I worked as a full-stack developer on this project. This is my personal portfolio website.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
  },
  {
    id: "doodle-drawing-app",
    title: "Doodle Drawing App",
    description:
      "A custom-built doodle drawing application. I worked as a full-stack developer on this project.",
    tags: ["NextJs", "JavaScript", "RoughJs", "Docker"],
    imageUrl: doodleImg,
  },
  {
    id: "trilingual-pii-redaction",
    title: "Trilingual PII Detection Redaction Middleware for LLM Security",
    description:
      "A middleware system to detect and redact PII in Sinhala, code-mixed Sinhala + English, and Singlish LLM prompts.",
    tags: ["Python", "PyTorch", "HuggingFace", "ByT5", "XLM-Roberta"],
  },
  {
    id: "workflow-automation-rule-engine",
    title: "Workflow Automation & Rule Engine Platform",
    description:
      "A configurable workflow automation platform with dynamic business rules, multi-step approval pipelines, and backend-driven execution.",
    tags: ["ASP.NET Core", "ADO.NET", "MSSQL", "JWT"],
  },
  {
    id: "bagify-ecommerce-web-app",
    title: "Bagify - E-commerce Web Application for Bags",
    description:
      "A full-stack e-commerce platform with product listing, search, filtering, shopping cart, checkout, and protected routes.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Auth"],
  },
  {
    id: "mini-ecommerce-microservices",
    title: "Mini E-commerce Microservices Platform",
    description:
      "A scalable microservices architecture with API Gateway, Eureka service discovery, Kafka-based async workflows, and JWT security.",
    tags: ["Spring Boot", "Spring Cloud", "Kafka", "Docker", "PostgreSQL"],
  },
] as const;

export const skillsData = [
  "Java",
  "C#",
  "C",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "HTML",
  "Framer Motion",
  "MUI",
  "Spring Boot",
  "ASP.NET Core 8.0",
  "ADO.NET",
  "MySQL",
  "MSSQL",
  "Git",
  "Bitbucket",
  "Microsoft Azure",
  "Cypress",
  "Cucumber (BDD)",
  "Postman",
  "Figma",
  "Trello",
] as const;
