import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";

// ======================================
// PROJETOS EM DESTAQUE
// ======================================

const projects = [
  {
    id: 1,
    title: "Global Weather Data Pipeline",
    description:
      "End-to-end automated weather pipeline with REST APIs, cloud database, ETL orchestration and Power BI analytics.",
    image: "/projects/weather-dashboard.png",
    tags: ["Python", "PostgreSQL", "Power BI", "API", "ETL"],
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMTM4NTYzYjMtZWIxMS00ZjYxLTkyMTItNmJlNjBkN2Y1NzZhIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9",
    githubUrl:
      "https://github.com/lfportto/weather_dashboard_pipeline",
  },

  {
    id: 2,
    title: "Cryptocurrency Analytics Dashboard",
    description:
      "Near real-time cryptocurrency monitoring solution with automated ingestion, cloud storage and Streamlit analytics.",
    image: "/projects/crypto-dashboard.png",
    tags: ["Python", "PostgreSQL", "Streamlit", "API", "ETL"],
    demoUrl:
      "https://crypto-dashboard-luisfelipeporto.streamlit.app/",
    githubUrl:
      "https://github.com/lfportto/crypto-dashboard",
  },

  {
    id: 3,
    title: "Brazilian Exports Analytics",
    description:
      "Interactive Power BI dashboard analyzing Brazilian exports using automated ELT processes and public trade data.",
    image: "/projects/exports-dashboard.png",
    tags: ["Python", "MySQL", "Power BI", "ELT"],
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYTVmZWQ0NWQtOGFjYy00MzhkLWE5MjAtNWZkNzc1ODc4MTllIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9&embedImagePlaceholder=true",
    githubUrl:
      "https://github.com/lfportto/dashboard-exportacoes-brasil",
  },

  {
    id: 4,
    title: "Procurement & Inventory BI System",
    description:
      "Business Intelligence solution integrating Excel VBA, Google Workspace and Power BI for procurement management.",
    image: "/projects/procurement-dashboard.png",
    tags: ["Power BI", "Excel", "VBA", "Google Apps Script"],
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNGI0NTFjZmItNjA4Yi00MGI5LTllYzUtM2U0ZDg4ZTBkZmE1IiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9",
    githubUrl:
      "https://github.com/lfportto/trabalho-de-graduacao-fatec",
  },

  {
    id: 5,
    title: "Netflix Content Analysis",
    description:
      "Interactive Power BI report exploring Netflix's global catalog through ETL, data modeling and advanced analytics.",
    image: "/projects/netflix-dashboard.png",
    tags: ["Power BI", "MySQL", "DAX", "ETL"],
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYjc5OWVlMzUtMmZlNS00NWVhLWI3OTQtYzJiODkyNjcyMTkxIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9&pageName=36e59d76a072732c0365",
    githubUrl:
      "https://github.com/lfportto/netflix-content-analysis-powerbi",
  },
];

export const ProjectsSection = () => {
  // ======================================
  // CONTROLE DO CAROUSEL
  // ======================================

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const getVisibleProjects = () => {
    const visible = [];

    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + projects.length) % projects.length;

      visible.push({
        ...projects[index],
        position: i,
      });
    }

    return visible;
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* DESCRIÇÃO */}
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          A selection of personal projects focused on Data Analytics,
          Business Intelligence, Data Engineering and Process Automation.
          Each project was designed to solve real-world problems through
          data-driven solutions.
        </p>

        {/* ======================================
            CAROUSEL
        ====================================== */}

        <div className="relative flex items-center justify-center">

          {/* SETA ESQUERDA */}
          <button
            onClick={prevProject}
            className="absolute left-0 z-30 p-3 rounded-full bg-card border border-border hover:border-primary transition-all"
          >
            <ArrowLeft size={22} />
          </button>

          {/* PROJETOS */}
          <div className="flex items-center justify-center gap-8">

            {getVisibleProjects().map((project) => {
              const isCenter = project.position === 0;

              return (
                <div
                  key={project.id}
                  className={`
                    group
                    bg-card
                    rounded-xl
                    overflow-hidden
                    transition-all
                    duration-500
                    shadow-xs

                    ${
                      isCenter
                        ? "w-[460px] scale-100 opacity-100"
                        : "w-[320px] scale-90 opacity-60"
                    }
                  `}
                >
                  {/* IMAGEM */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">

                    {/* TÍTULO */}
                    <h3 className="text-2xl font-bold mb-4">
                      {project.title}
                    </h3>

                    {/* TECNOLOGIAS */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium border rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DESCRIÇÃO */}
                    <p className="text-muted-foreground text-sm mb-6">
                      {project.description}
                    </p>

                    {/* LINKS */}
                    <div className="flex items-center gap-4">

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cosmic-button"
                      >
                        View Dashboard
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        <Github size={22} />
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SETA DIREITA */}
          <button
            onClick={nextProject}
            className="absolute right-0 z-30 p-3 rounded-full bg-card border border-border hover:border-primary transition-all"
          >
            <ArrowRight size={22} />
          </button>
        </div>

        {/* BOTÃO GITHUB */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lfportto"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};