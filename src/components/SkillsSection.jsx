import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiGit,
  SiFigma,
  SiJira,
} from "react-icons/si";

import {
  Database,
  BarChart3,
  Workflow,
  GitBranch,
  FileSpreadsheet,
  Cpu,
  Network,
} from "lucide-react";

/* ===================================== */
/* ANIMAÇÃO DE ENTRADA DOS CARDS */
/* ===================================== */

const AnimatedCard = ({ children, delay = 0 }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all duration-1000 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
      `}
    >
      {children}
    </div>
  );
};

/* ===================================== */
/* SKILLS */
/* ===================================== */

const skills = [
  // Business Intelligence
  {
    name: "Power BI",
    category: "business intelligence",
    icon: BarChart3,
  },
  {
    name: "DAX",
    category: "business intelligence",
    icon: BarChart3,
  },
  {
    name: "Power Query",
    category: "business intelligence",
    icon: Workflow,
  },
  {
    name: "M Language",
    category: "business intelligence",
    icon: Cpu,
  },

  // Data & Analytics
  {
    name: "Python",
    category: "data & analytics",
    icon: SiPython,
  },
  {
    name: "SQL",
    category: "data & analytics",
    icon: Database,
  },
  {
    name: "Pandas",
    category: "data & analytics",
    icon: SiPandas,
  },
  {
    name: "NumPy",
    category: "data & analytics",
    icon: SiNumpy,
  },
  {
    name: "Plotly",
    category: "data & analytics",
    icon: SiPlotly,
  },
  {
    name: "Matplotlib",
    category: "data & analytics",
    icon: BarChart3,
  },

  // Data Engineering
  {
    name: "PostgreSQL",
    category: "data engineering",
    icon: SiPostgresql,
  },
  {
    name: "MySQL",
    category: "data engineering",
    icon: SiMysql,
  },
  {
    name: "ETL/ELT",
    category: "data engineering",
    icon: Workflow,
  },
  {
    name: "REST APIs",
    category: "data engineering",
    icon: Network,
  },
  {
    name: "Data Pipelines",
    category: "data engineering",
    icon: Workflow,
  },
  {
    name: "Star Schema",
    category: "data engineering",
    icon: Database,
  },

  // Tools & Automation
  {
    name: "Excel",
    category: "tools & automation",
    icon: FileSpreadsheet,
  },
  {
    name: "VBA",
    category: "tools & automation",
    icon: Cpu,
  },
  {
    name: "Git",
    category: "tools & automation",
    icon: SiGit,
  },
  {
    name: "GitHub Actions",
    category: "tools & automation",
    icon: GitBranch,
  },
  {
    name: "Power Automate",
    category: "tools & automation",
    icon: Workflow,
  },
  {
    name: "Prefect",
    category: "tools & automation",
    icon: GitBranch,
  },
  {
    name: "Jira",
    category: "tools & automation",
    icon: SiJira,
  },
  {
    name: "Figma",
    category: "tools & automation",
    icon: SiFigma,
  },
];

/* ===================================== */
/* CATEGORIAS */
/* ===================================== */

const categories = [
  "all",
  "business intelligence",
  "data & analytics",
  "data engineering",
  "tools & automation",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" ||
      skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        {/* Ajuste de padding e texto para quebrar as abas de forma limpa no mobile */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-12 px-2 md:px-0">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full transition-colors duration-300 capitalize font-medium",
                "px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Alterado grid-cols-2 para grid-cols-6 no mobile para impor as 4 fileiras de 6 habilidades */}
        <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <AnimatedCard
                key={skill.name}
                delay={index * 50}
              >
                <div
                  className="
                    rounded-xl
                    border border-primary/20
                    bg-card/60
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-primary/50
                    hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
                    flex
                    flex-col
                    items-center
                    justify-center
                    h-20 md:h-28
                    p-1 md:p-5
                    gap-1 md:gap-3
                  "
                >
                  {/* Removido o size estático inline e controlado via Tailwind para reduzir no mobile e manter o original no desktop */}
                  <Icon
                    className="text-primary w-5 h-5 md:w-6 md:h-6"
                  />

                  {/* Micro-fonte aplicada apenas no mobile. Desktop mantido estritamente original (text-sm) */}
                  <h3 className="font-medium text-center text-[10px] md:text-sm block w-full truncate px-0.5">
                    {skill.name}
                  </h3>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};