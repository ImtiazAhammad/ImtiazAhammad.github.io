export const siteConfig = {
  name: "Imtiaz Ahammad",
  role: "AI Engineer & Team Lead",
  tagline: "Building intelligent systems that see, think, and act.",
  email: "imtiaz.shoaib746@gmail.com",
  phone: "+880-1782737074",
  location: "Uttara, Dhaka-1230, Bangladesh",
  github: "https://github.com/ImtiazAhammad",
  linkedin: "https://www.linkedin.com/in/imtiaz-shoaib",
};

export const stats = [
  { label: "Years building AI", value: 2, suffix: "+" },
  { label: "Team members led", value: 4, suffix: "" },
  { label: "ANPR accuracy", value: 90, suffix: "%+" },
  { label: "Manual time saved", value: 50, suffix: "%" },
];

export const timeline = [
  {
    period: "Sept '25 — Present",
    role: "AI Engineer (Team Lead)",
    company: "Regnum Resource Ltd",
    location: "Dhaka, BD",
    tagColor: "green" as const,
    highlights: [
      "Leading a 4-person AI team building production computer vision systems for national toll infrastructure",
      "Architected end-to-end intelligent toll management: ANPR, RFID automation, barrier control, vehicle analytics",
      "Built real-time Traffic Flow Analysis ingesting 8+ RTSP camera feeds using RFDETR and ByteTrack",
      "Engineered hardware for high-concurrency CV and LLM architectures on NVIDIA DeepStream edge devices",
      "Integrated automated data pipelines into Oracle 19c, reducing manual reporting by ~50%",
      "Mentored 3 interns through full ML workflow — dataset creation to field validation",
    ],
  },
  {
    period: "Mar '24 — Aug '25",
    role: "Machine Learning Engineer",
    company: "ANTT Robotics",
    location: "Dhaka, BD",
    tagColor: "blue" as const,
    highlights: [
      "Fine-tuned LLaMA and GPT models for ANTT AI Bot — hardware-specific code generation assistant",
      "Built Predictive Maintenance pipelines with ARIMA, Prophet, XGBoost; deployed on AWS EC2 via FastAPI",
      "Designed real-time ANPR and Dynamic Toll Collection using YOLOv8 and PaddleOCR (>90% accuracy)",
      "Engineered Driver Behavior Monitoring using MediaPipe Face Mesh with <500ms detection latency",
      "Developed RAG-based Recommendation Chatbot deployed with 3 pilot retail partners",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Research Assistant",
    company: "World University of Bangladesh",
    location: "Dhaka, BD",
    tagColor: "gray" as const,
    highlights: [
      "Assisted faculty in AI/ML research projects including XAI and mental health impact studies",
      "Co-authored IEEE conference paper on AI-Powered Resilience published at ICETITE 2024",
      "Contributed to academic thesis on PostHoc XAI on Blackbox Models (under review)",
      "Guided junior students in machine learning coursework and project development",
    ],
  },
  {
    period: "2020 — 2024",
    role: "B.Sc. in Computer Science & Engineering",
    company: "World University of Bangladesh",
    location: "Dhaka, BD",
    tagColor: "gray" as const,
    highlights: [
      "Graduated with focus on AI, Machine Learning, and Computer Vision",
      "Won 1st Place — Sustainable Business Idea Competition 2023",
      "Active member of AI/ML research group",
    ],
  },
];

export const projects = [
  {
    number: "01",
    year: "2025",
    title: "Intelligent Toll Management System",
    tags: ["Computer Vision", "Edge AI", "NVIDIA Jetson"],
    description:
      "End-to-end intelligent toll management covering ANPR, RFID automation, barrier control, and vehicle analytics — processing high-volume vehicle streams across multiple toll points using YOLO-based detectors and Transformer-based vision models running on NVIDIA DeepStream-powered edge devices.",
    stats: "90%+ plate-read accuracy across varied lighting",
    status: "Live" as const,
  },
  {
    number: "02",
    year: "2025",
    title: "Real-time Traffic Flow Analysis",
    tags: ["RFDETR", "ByteTrack", "Multi-Camera"],
    description:
      "Real-time Traffic Flow Analysis System ingesting multi-camera RTSP streams (8+ feeds) using RFDETR and ByteTrack for vehicle classification and density estimation. Engineered specific hardware requirements for high-concurrency Computer Vision and LLM architectures, with automated data pipelines into Oracle 19c.",
    stats: "50% reduction in manual reporting time",
    status: "Live" as const,
  },
  {
    number: "03",
    year: "2024",
    title: "Zero-Trust Multi-Agent Knowledge Mesh",
    tags: ["RAG", "MCP", "PostgreSQL"],
    description:
      "Enterprise-grade RAG pipeline with document-level RBAC enforced via custom JWT middleware. Orchestrated a data mesh across distributed mock enterprise endpoints using Anthropic's Model Context Protocol (MCP) with FastMCP servers communicating over WebSockets/SSE.",
    stats: "0.92 cosine similarity semantic cache",
    status: "Project" as const,
  },
  {
    number: "04",
    year: "2024",
    title: "Local Incident Resolution Graph for AIOps",
    tags: ["Oracle 26ai", "LangChain", "Ollama"],
    description:
      "Privacy-first AIOps agent using Oracle 26ai hybrid vector search and HNSW indexing to autonomously map PagerDuty alerts to historical runbooks. Chose Qwen 2.5 Coder 14B over GPT-4 for fully local LLM orchestration on consumer hardware.",
    stats: "1.7s warm response, zero external data transmission",
    status: "Project" as const,
  },
];

export const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
