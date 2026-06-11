import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
// Business Intelligence
{ name: "Power BI", category: "business intelligence" },
{ name: "DAX", category: "business intelligence" },
{ name: "Power Query", category: "business intelligence" },
{ name: "M Language", category: "business intelligence" },

// Data & Analytics
{ name: "Python", category: "data & analytics" },
{ name: "SQL", category: "data & analytics" },
{ name: "Pandas", category: "data & analytics" },
{ name: "NumPy", category: "data & analytics" },
{ name: "Plotly", category: "data & analytics" },
{ name: "Matplotlib", category: "data & analytics" },

// Data Engineering
{ name: "PostgreSQL", category: "data engineering" },
{ name: "MySQL", category: "data engineering" },
{ name: "ETL/ELT", category: "data engineering" },
{ name: "REST APIs", category: "data engineering" },
{ name: "Data Pipelines", category: "data engineering" },
{ name: "Star Schema", category: "data engineering" },

// Tools & Automation
{ name: "Excel", category: "tools & automation" },
{ name: "VBA", category: "tools & automation" },
{ name: "Git", category: "tools & automation" },
{ name: "GitHub Actions", category: "tools & automation" },
{ name: "Power Automate", category: "tools & automation" },
{ name: "Prefect", category: "tools & automation" },
{ name: "Jira", category: "tools & automation" },
{ name: "Figma", category: "tools & automation" },
];

// Categorias para os filtros
const categories = [
"all",
"business intelligence",
"data & analytics",
"data engineering",
"tools & automation",
];

export const SkillsSection = () => {
const [activeCategory, setActiveCategory] = useState("all");

// Filtra as skills conforme a categoria selecionada
const filteredSkills = skills.filter(
(skill) =>
activeCategory === "all" || skill.category === activeCategory
);

return ( <section
   id="skills"
   className="py-24 px-4 relative bg-secondary/30"
 > <div className="container mx-auto max-w-5xl">


    {/* Título da seção */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Technical <span className="text-primary">Skills</span>
    </h2>

    {/* Botões de filtro */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, key) => (
        <button
          key={key}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary/70 text-foreground hover:bg-secondary"
          )}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Cards das habilidades */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

      {filteredSkills.map((skill, key) => (
        <div
          key={key}
          className="bg-card p-4 rounded-lg shadow-xs card-hover flex items-center justify-center"
        >
          {/* Nome da habilidade */}
          <h3 className="font-medium text-center">
            {skill.name}
          </h3>
        </div>
      ))}

    </div>
  </div>
</section>


);
};