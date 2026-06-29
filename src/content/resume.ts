export type Profile = {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  headline: string;
  subline: string;
  summary: string;
  availability: string;
  resumePath: string;
};

export type ImpactStat = {
  value: string;
  label: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  timeline: "current" | "previous";
  bullets: string[];
  featured?: boolean;
  pullQuote?: string;
  compact?: boolean;
  links?: { label: string; href: string }[];
};

export type Project = {
  id: string;
  name: string;
  tech: string[];
  url: string;
  highlight: string;
  problem: string;
  built: string;
  result: string;
};

export type Education = {
  degree: string;
  school: string;
  gpa: string;
  period: string;
};

export type SkillPillar = {
  title: string;
  description: string;
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
  headline: "I build software millions use — and AI products that ship.",
  subline:
    "Full-stack engineer. Previously WebMD. Now at Syracuse building research systems and multimodal AI.",
  summary:
    "Full-stack software engineer with 4+ years shipping production web applications for millions of users. Strong across React/TypeScript frontends, Python and Node backends, SQL, and cloud infrastructure.",
  availability: "Available May 2026",
  resumePath: "/Rohan_Yadav_Resume.pdf",
};

export const impactStats: ImpactStat[] = [
  { value: "$9M", label: "Deal influenced" },
  { value: "50%", label: "Faster page loads" },
  { value: "Millions", label: "Monthly users" },
  { value: "90%", label: "Faster AI workflow" },
];

export const experience: Experience[] = [
  {
    id: "syracuse-gra",
    company: "Syracuse University",
    role: "Graduate Research Assistant",
    period: "Aug 2025 – Mar 2026",
    timeline: "current",
    bullets: [
      "Secured 2 additional years of stakeholder funding by leading a 4-person team delivering an Android app on ATAK.",
      "Integrated an LLM pipeline to turn unstructured field data into actionable insights for users.",
      "Deployed a containerized ATAK Server on Azure with Docker, SSL, and secure networking.",
      "Refactored 60% of the legacy codebase to improve maintainability and coding standards.",
    ],
  },
  {
    id: "webmd-swe",
    company: "WebMD",
    role: "Software Engineer",
    period: "Apr 2022 – Dec 2024",
    timeline: "previous",
    featured: true,
    pullQuote:
      "Contributed to closing a $9M deal within one month of release.",
    bullets: [
      "Closed a $9M deal within 30 days of shipping a Vue patient-prep UI used in enterprise sales.",
      "Cut page load times 50% on content features serving millions of monthly users.",
      "Shipped interactive quizzes, slideshows, and articles on a component-based TypeScript/Vue architecture.",
      "Built SQL backend and content packaging tool enabling PMs to assemble reusable blocks into production pages.",
      "Led Vue 2 → Vue 3 migration for 20+ production apps with zero downtime.",
    ],
  },
  {
    id: "webmd-trainee",
    company: "WebMD",
    role: "Trainee Software Engineer",
    period: "Nov 2021 – Mar 2022",
    timeline: "previous",
    compact: true,
    bullets: [
      "Shipped company-wide rewards app used by ~100 employees.",
      "Extended Backstage developer portal in React for repository management.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "neuro-cue",
    name: "Neuro Cue",
    tech: ["Python", "Multimodal AI", "React", "Plotly"],
    url: "https://neuro-cue.vercel.app/",
    highlight: "Multimodal brain AI",
    problem:
      "Exploring TRIBE v2 model outputs was opaque — hard to see what the model was surfacing and where.",
    built:
      "React UI with 3D Plotly brain heatmap and anatomical overlays; deployed Meta's TRIBE v2 on Hugging Face ZeroGPU.",
    result:
      "Unblocked production deployment after a GPU upgrade broke upstream torch dependency pins.",
  },
  {
    id: "case-generator",
    name: "Clinical Case Study Generator",
    tech: ["LLM", "RAG", "Python", "Streamlit"],
    url: "https://neurogenic-case-generator.streamlit.app/",
    highlight: "90% faster cases",
    problem:
      "Grad students spent hours writing consistent clinical case studies by hand.",
    built:
      "3-agent LLM pipeline with RAG using OpenAI and Anthropic models for generation, documentation, and treatment planning.",
    result:
      "Cut case generation time by 90% while keeping output clinically consistent.",
  },
];

export const education: Education = {
  degree: "M.S. Information Systems",
  school: "Syracuse University",
  gpa: "3.86",
  period: "May 2026",
};

export const skillPillars: SkillPillar[] = [
  {
    title: "Ship at scale",
    description:
      "Consumer-facing products, performance, migrations, and the tooling to keep them running.",
    items: [
      "React",
      "TypeScript",
      "Vue.js",
      "SQL",
      "Node.js",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "AI in practice",
    description:
      "From RAG pipelines to multimodal models — built to ship, not just demo.",
    items: [
      "RAG",
      "Agents",
      "LLM",
      "PyTorch",
      "Prompt engineering",
      "Evals",
    ],
  },
  {
    title: "Own the stack",
    description:
      "Front to back: APIs, infra, containers, and cloud deployments.",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "FastAPI", "Postgres"],
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
