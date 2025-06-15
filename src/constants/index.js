import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  mes,
  acc,
  cict,
  usc,
  nipyum,
  portfolio,
  threejs,
  quecmanager,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "AI & Machine Learning",
    icon: mobile,
  },
  {
    title: "Network Specialist",
    icon: backend,
  },
  {
    title: "5G Open Solutions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Malinao Elementary School",
    company_name: "Elementary",
    icon: mes,
    iconBg: "#383E56",
    date: "June 2008 - March 2014",
    points: [
      "I skipped kindergaten and directly enrolled in Grade I.",
      "I was promoted to the Star Section (SPED) when I reached Grade II.",
      "I participated in various extracurricular activities, particularly in BSP and academic workshops for journalism.",
      "I finished elementary school with academic honors, except during Grade II.",
    ],
  },
  {
    title: "Aklan Catholic College",
    company_name: "Junior & Senior High School",
    icon: acc,
    iconBg: "#383E56",
    date: "Jan 2014 - March 2020",
    points: [
      "My first experience studying outside of my town.",
      "I finished high school as one of the top students across all sections.",
      "I developed and implemented the first automated student council government election in my school.",
      "I graduated from senior high school with academic honors and ranked in the top 5% of all students.",
    ],
  },
  {
    title: "WVSU - College of ICT",
    company_name: "College",
    icon: cict,
    iconBg: "#383E56",
    date: "August 2020 - June 2024",
    points: [
      "I received silver and gold medals for my academic performance.",
      "I joined various organizations and participated in numerous hackathons events and competitions.",
      "I was certified as MTCRE, MTCNA, and MTCUME by MikroTik during my fourth year.",
      "I finished my college degree with 1.32 GWA, won our college's Best Thesis Award, and graduated with adequate experiences in different fields of ICT.",
    ],
  },
];

const projects = [
  {
    name: "USC Infosite (Beta)",
    description:
      "The USC Student-Led Infosite is developed and managed by the USC - Committee on Innovation and Tech Empowerment. CITE is established to manage the information system of the USC, and to bring forward innovation that are beneficial to the students and the university.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: usc,
    web_link: "https://github.com/r-amee/USCINFOSITE-NA/blob/main/README.md",
    source_code_link:
      "https://github.com/r-amee/USCINFOSITE-NA/blob/main/README.md",
  },
  {
    name: "Nippon Yum",
    description:
      "Discover NipponYum (NipYum), a responsive Japanese restaurant website template featuring online ordering and payment. Our final project showcases our user-friendly design. The website is optimized for different devices and screen sizes, making it accessible to a broader range of customers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nipyum,
    web_link: "https://github.com/r-amee/NipYumWeb",
    source_code_link: "https://github.com/r-amee/NipYumWeb",
  },
  {
    name: "Portfolio Madness",
    description:
      "Welcome to Portfolio Madness, a personal web portfolio showcasing my skills and experiences through a space-themed design and eye-catching web animations. My portfolio represents my passion for learning and my commitment to delivering high-quality work.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    web_link: "https://portfolio-madness.vercel.app/",
    source_code_link: "https://github.com/r-amee/PortfolioMadness",
  },
  {
    name: "QuecManager",
    description:
      "QuecManager is an open-source tool designed to simplify the management of Quectel 5G modems. It provides a user-friendly interface for configuring and monitoring modem settings, making it easier for developers and enthusiasts to work with these devices.",
    tags: [
      {
        name: "NexJS",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWRT",
        color: "green-text-gradient",
      },
      {
        name: "Shell",
        color: "pink-text-gradient",
      },
    ],
    image: quecmanager,
    web_link: "https://github.com/dr-dolomite/QuecManager-JS.git",
    source_code_link: "https://github.com/dr-dolomite/QuecManager-JS.git",
  },
];

export { services, technologies, experiences, projects };
