import { useState, useEffect, useRef } from "react";

// ─── Skills Data ─────────────────────────────────────────────────────────────

const skillsData = [
  { name: "Power BI", category: "bi", icon: "📊" },
  { name: "SQL", category: "data-eng", icon: "🛢️" },
  { name: "Python", category: "data-eng", icon: "🐍" },
  { name: "Excel", category: "bi", icon: "📈" },
  { name: "VBA", category: "automation", icon: "💻" },
  { name: "Power Automate", category: "automation", icon: "⚙️" },
  { name: "MySQL", category: "data-eng", icon: "🐬" },
  { name: "PostgreSQL", category: "data-eng", icon: "🐘" },
  { name: "Prefect", category: "data-eng", icon: "🚀" },
  { name: "Git", category: "dev", icon: "🐙" },
  { name: "GitHub", category: "dev", icon: "🐱" },
  { name: "Jira", category: "management", icon: "🎯" },
  { name: "Scrum", category: "management", icon: "🔄" },
  { name: "Data Modeling", category: "bi", icon: "📐" },
  { name: "ETL / ELT", category: "data-eng", icon: "🔄" },
  { name: "DAX", category: "bi", icon: "🔢" },
  { name: "Power Query", category: "bi", icon: "🔍" },
  { name: "SAP", category: "management", icon: "🏢" },
  { name: "Figma", category: "dev", icon: "🎨" },
  { name: "HTML / CSS", category: "dev", icon: "🌐" },
  { name: "JavaScript", category: "dev", icon: "💛" },
  { name: "React", category: "dev", icon: "⚛️" },
  { name: "Tailwind CSS", category: "dev", icon: "🎨" },
  { name: "Vite", category: "dev", icon: "⚡" }
];

const categories = [
  { id: "all", label: "All Tech" },
  { id: "bi", label: "Business Intelligence" },
  { id: "data-eng", label: "Data Engineering" },
  { id: "automation", label: "Automation" },
  { id: "management", label: "Management & Agile" },
  { id: "dev", label: "Development Tools" }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animateItems, setAnimateItems] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => setAnimateItems(true), 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 md:py-24 px-4 relative">
      <div
        ref={sectionRef}
        className={`container mx-auto max-w-5xl transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Skills & <span className="text-primary">Technologies</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          My technical stack spans across data engineering pipelines, advanced analytics, 
          process automation, and modern web utilities.
        </p>

        {/* Categorias / Abas */}
        {/* Mobile: Layout reduzido em grid flexível para forçar a quebra organizada em 2 linhas */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-10 max-w-4xl mx-auto px-2 md:px-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                rounded-full transition-all duration-300 font-medium whitespace-nowrap
                text-xs md:text-sm 
                px-3 py-1.5 md:px-5 md:py-2
                border
                ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-100"
                    : "bg-card/40 backdrop-blur-sm text-muted-foreground border-border/60 hover:text-foreground hover:border-primary/50"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de Habilidades */}
        {/* Forçado grid-cols-6 nativo desde o mobile para formar as 4 fileiras perfeitas de 6 elementos */}
        <div 
          className={`
            grid grid-cols-6 md:grid-cols-4 lg:grid-cols-6 
            gap-2 md:gap-4 
            transition-all duration-500
            ${animateItems ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ transitionDelay: `${index * 25}ms` }}
              className="group relative flex flex-col items-center justify-center rounded-xl border border-primary/10 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:-translate-y-1 text-center
                p-2 md:p-5"
            >
              {/* Efeito Glow Invisível no Desktop / Suave no Mobile */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Ícone Reduzido no Mobile para caber na estrutura compacta */}
              <div className="flex items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-primary/10
                w-7 h-7 md:w-12 md:h-12 
                text-base md:text-2xl 
                mb-1 md:mb-3"
              >
                {skill.icon}
              </div>

              {/* Texto de Habilidade Ajustado para Micro-Fonte sem quebrar blocos */}
              <span className="font-medium text-foreground/90 tracking-tight group-hover:text-primary transition-colors
                text-[10px] md:text-sm md:font-semibold 
                block w-full truncate px-0.5"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};