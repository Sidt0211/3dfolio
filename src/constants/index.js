import { s } from "maath/dist/misc-7d870b3c.esm";
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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  me,
  nba,
  yt,
  piazza,
  c,
  gc, 
  cpp,
  python,
  sql,
  claws,
  sylvan,
  rx,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Structures & Algorithms",
    icon: web,
  },
  {
    title: "Web Systems",
    icon: mobile,
  },
  {
    title: "Computer Organization",
    icon: backend,
  },
  {
    title: "Discrete Mathematics",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Google Cloud",
    icon: gc,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "CLAWS Project Team",
    icon: claws,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Spearheaded the development of an Augmented Reality interface, increasing astronaut autonomy and operational efficiency by 35% through advanced real-time data visualizations and reduced system initialization time by 50% for active astronauts.",
      "Engineered a Mission Control Center Dashboard using HoloLens’ AR capabilities, cutting communication latency between active astronauts and mission control by 20% and while delivering real-time, in-depth statistics for monitoring.",
    ],
  },
  {
    title: "Software and Hardware Engineering Intern",
    company_name: "Rx Express Pharmacy",
    icon: rx,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Integrated APIs to streamline real-time inventory management, automating supplier availability checks, reducing manual reordering tasks by 50%, and improving ordering efficiency by 25% through price comparisons across major retailers.",
      "Enhanced the prescription fulfillment process by successfully implementing automation tools that streamlined data entry and reduced manual steps, cutting processing time by 20% and increasing overall workflow efficiency by 15%.",
      "Assembled and upgraded seven computer systems, including building PCs and configuring setups for pharmaceutical services.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Sylvan Learning Center",
    icon: sylvan,
    iconBg: "#383E56",
    date: "May 2023 - September 2023",
    points: [
      "Using tools like HTML, CSS, and JavaScript, incorporated schedules, events, and current offerings on branch’s website.",
      "Implemented new marketing strategies on the website, resulting in a 20% increase in traffic, as measured by user clicks.",
      "Optimized filing system for student data, learning materials, and payroll, while increasing efficiency and speed by almost 2x.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NBA Games Predictor",
    description:
      "Used a web-scraping algorithm with BeautifulSoup to collect over 17,000 NBA game stats and designed a machine learning model using scikit-learn’s Ridge Classifier to achieve 66% prediction accuracy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "green-text-gradient",
      },
      {
        name: "Sycikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: nba,
    source_code_link: "https://github.com/sidt0211/",
  },
  {
    name: "Youtube Clone",
    description:
      "Built a full-stack web application for video uploads and streaming, integrating Google Cloud Services to optimize storage and communication. Created a responsive user interface where people can stream and interact with videos.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "yellow-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: yt,
    source_code_link: "https://github.com/sidt0211/",
  },
  {
    name: "Piazza Post Classifier",
    description:
      "Developed an ML-powered classifier using Natural Language Processing techniques for categorizing Piazza posts. Achieved 90% accuracy on large datasets with efficient prediction times under 15 seconds, leveraging advanced text pre-processing and probabilistic modeling.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Natural Language Processing",
        color: "green-text-gradient",
      },
    ],
    image: piazza,
    source_code_link: "https://github.com/sidt0211",
  },
];

export { services, technologies, experiences, testimonials, projects };
