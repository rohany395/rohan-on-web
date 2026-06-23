export type Profile = {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  resumePath: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  links?: { label: string; href: string }[];
};

export type Project = {
  id: string;
  name: string;
  tech: string[];
  url: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  gpa: string;
  period: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Leadership = {
  role: string;
  organization: string;
  description: string;
};

export const profile: Profile = {
  name: "Rohan Yadav",
  location: "Syracuse, NY",
  phone: "(315) 395-3313",
  email: "rohany395@gmail.com",
  linkedin: "https://linkedin.com/in/rohan-yadav5/",
  github: "https://github.com/rohany395",
  summary:
    "Full-stack software engineer with 4+ years shipping production web applications for millions of users. Strong across React/TypeScript frontends, Python and Node backends, SQL, and cloud infrastructure. Proven track record of owning features end to end and delivering measurable user impact across consumer-facing and internal products.",
  resumePath: "/Rohan_Yadav_Resume.pdf",
};

export const experience: Experience[] = [
  {
    id: "syracuse-gra",
    company: "Syracuse University",
    role: "Graduate Research Assistant",
    period: "Aug 2025 – Mar 2026",
    bullets: [
      "Led a 4-member team to design and deliver an Android application using Java on ATAK, securing funds and extending school-stakeholder partnership by an additional 2 years.",
      "Integrated an LLM pipeline to process unstructured data and surface actionable insights, improving user workflow.",
      "Deployed a containerized ATAK Server on Azure with Docker, SSL, and networking rules for secure client connectivity.",
      "Refactored 60% of the legacy codebase to improve readability, maintainability, and adherence to coding standards.",
    ],
  },
  {
    id: "webmd-swe",
    company: "WebMD",
    role: "Software Engineer",
    period: "Apr 2022 – Dec 2024",
    bullets: [
      "Developed and launched a Vue.js patient-prep UI that contributed to closing a $9M deal within one month of release.",
      "Shipped interactive content features including quizzes, slideshows, and articles using component-based TypeScript/Vue.js architecture serving millions of monthly users.",
      "Reduced page load times by 50% through lazy loading and optimization of Vue.js components across a high-traffic application.",
      "Designed and maintained SQL DB and backend for a content packaging tool enabling PMs to author and assemble reusable content blocks into production webpages.",
      "Led migration of 20+ production applications from Vue 2 to Vue 3, managing backward compatibility, writing automated tests, and conducting code reviews to ensure zero downtime.",
    ],
  },
  {
    id: "webmd-trainee",
    company: "WebMD",
    role: "Trainee Software Engineer",
    period: "Nov 2021 – Mar 2022",
    bullets: [
      "Built and deployed an internal web application for company-wide rewards and recognition used by ~100 employees.",
      "Extended Backstage, an open source developer portal, using React to streamline repository management.",
      "Integrated RESTful APIs across front-end applications, collaborating with backend teams on data-driven UI features.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "neuro-cue",
    name: "Neuro Cue",
    tech: ["Python", "Multimodal AI", "Inference pipeline", "React"],
    url: "https://neuro-cue.vercel.app/",
    bullets: [
      "Deployed Meta's TRIBE v2 multimodal foundation model on Hugging Face (ZeroGPU); forked the model to patch its torch version pin, restoring deployment after Hugging Face's GPU upgrade to Blackwell broke upstream dependency constraints.",
      "Built a React + Vite frontend with anatomical region overlay, an interactive 3D Plotly brain heatmap, and a Recharts activation chart for surfacing relevant information quickly.",
    ],
  },
  {
    id: "case-generator",
    name: "Clinical Case Study Generator",
    tech: ["LLM", "RAG", "Python"],
    url: "https://neurogenic-case-generator.streamlit.app/",
    bullets: [
      "Developed a multi-agent architecture with 3 specialized LLM agents for case generation, clinical documentation, and treatment planning using OpenAI and Anthropic models, generating comprehensive case studies for graduate students.",
      "Reduced case generation time by 90% by implementing RAG and prompt engineering for generating cases of desired consistency.",
    ],
  },
];

export const education: Education = {
  degree: "M.S. Information Systems",
  school: "Syracuse University",
  gpa: "3.86",
  period: "May 2026",
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "React",
      "TypeScript",
      "Python",
      "JavaScript",
      "Vue.js",
      "SQL",
      "Node.js",
      "Java",
      "FastAPI",
      "HTML/CSS",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "AWS",
      "Git",
      "Docker",
      "Kubernetes",
      "Postman",
      "Jest",
      "Cypress",
      "Jira",
      "Postgres",
      "Tableau",
    ],
  },
  {
    category: "AI Tooling",
    items: [
      "RAG",
      "Agents",
      "Evals",
      "LLM",
      "PyTorch",
      "Fine-tuning",
      "Prompt Engineering",
    ],
  },
];

export const leadership: Leadership = {
  role: "President",
  organization: "Worldwide Innovation Technology",
  description:
    "Led research initiatives and mentored junior engineers of the student technology club at Syracuse University.",
};

export const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
] as const;
