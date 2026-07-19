export interface Project {
  number: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
  link: string;
}

export const projects: Project[] = [
  {
    number: "01",
    year: "2025",
    title: "Intelligent Toll Management System",
    description:
      "Architected and deployed an end-to-end intelligent toll management system covering ANPR, RFID automation, barrier control, and vehicle analytics — processing high-volume vehicle streams across multiple toll points using YOLO-based detectors and Transformer-based vision models running on NVIDIA DeepStream-powered edge devices.",
    tags: ["Computer Vision", "RFID", "Pyqt5", "YOLO", "ANPR"],
    image: "/projects/TMS_project.png",
    accent: "#40c21f",
    link: "https://regnum.com.bd",
  },
  {
    number: "02",
    year: "2025",
    title: "Real-time Traffic Flow Analysis",
    description:
      "Real-time Traffic Flow Analysis System ingesting multi-camera RTSP streams (8+ feeds) using RFDETR and ByteTrack for vehicle classification and density estimation; engineered specific hardware requirements for high-concurrency Computer Vision architectures, and integrated automated pipelines into Oracle 19c.",
    tags: ["RFDETR", "ByteTrack", "Multi-Camera", "Detection filter", "Supervision", "OC-sort", "Trackers"],
    image: "/projects/ATCC_project.png",
    accent: "#0281e0",
    link: "https://regnum.com.bd",
  },
  {
    number: "03",
    year: "2026",
    title: "Zero-Trust Multi-Agent Knowledge Mesh",
    description:
      "Engineered an enterprise-grade RAG pipeline with document-level RBAC enforced via custom JWT middleware, injecting dynamic clearance filters into pgvector queries. Orchestrated a data mesh across distributed mock enterprise endpoints using Anthropic's Model Context Protocol (MCP) with FastMCP servers.",
    tags: ["RAG", "MCP", "PostgreSQL", "FastAPI", "Docker"],
    image: "/projects/Zero-Trust MCP.png",
    accent: "#a855f7",
    link: "https://github.com/ImtiazAhammad/Zero-Trust-Multi-Agent-Knowledge-Mesh-RAG-with-MCP",
  },
  {
    number: "04",
    year: "2026",
    title: "Local Incident Resolution Graph for AIOps",
    description:
      "Privacy-first AIOps agent using Oracle 26ai hybrid vector search and HNSW indexing to autonomously map PagerDuty alerts to historical runbooks, eliminating cloud API data-leakage risk. Chose Qwen 2.5 Coder 14B over GPT-4 for fully local LLM orchestration on consumer hardware.",
    tags: ["Oracle 26ai", "LangChain", "Ollama", "HNSW"],
    image: "/projects/Local Incedent Resolution Graph.png",
    accent: "#f97316",
    link: "https://github.com/ImtiazAhammad/Local-Incident-Resolution-Graph-for-AIOps.git",
  },
  {
    number: "05",
    year: "2026",
    title: "Shefa-The Medical receptionist Voice Agent",
    description:
      "Shefa is a comprehensive healthcare management system that helps you manage your health and the health of your family. It is a web-based application that is designed to be used by healthcare professionals and patients. It is a comprehensive healthcare management system that helps you manage your health and the health of your family. It is a web-based application that is designed to be used by healthcare professionals and patients.",
    tags: ["RAG", "MCP", "PostgreSQL", "FastAPI", "Docker"],
    image: "/projects/Shefa-The Medicle Assistant.png",
    accent: "#f97316",
    link: "https://github.com/ImtiazAhammad/SHEFA-the-Medical-receptionist-voice-agent.git",
  },
];
