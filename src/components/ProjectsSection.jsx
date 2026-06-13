import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github, X, ChevronRight } from "lucide-react";

// ─── Modal content per project ───────────────────────────────────────────────

const modalData = {
  1: {
    type: "personal",
    fullTitle: "Fully Automated Near Real-Time Global Weather Dashboard",
    overview:
      "A fully automated end-to-end weather analytics platform that collects historical, current, and forecast weather data from multiple APIs, processes it through cloud-based ETL pipelines, and delivers near real-time insights through an interactive Power BI dashboard.",
    businessProblem:
      "Weather information is often scattered across different sources and presented without historical context or meaningful analytics. The goal of this project was to centralize weather data from multiple providers, automate data collection and processing, and create an intuitive dashboard capable of supporting weather analysis and city comparisons in near real time.",
    solution:
      "Designed and implemented a complete cloud-based data pipeline using Python, PostgreSQL and Prefect Cloud. The solution automatically ingests weather data from OpenWeather and Meteostat APIs, performs data cleaning and standardization, stores the information in a cloud database, and feeds a Power BI dashboard with automated updates throughout the day.\n\nThe dashboard allows users to explore current, historical and forecast weather conditions across multiple cities, compare locations, analyze trends and monitor key environmental indicators through an interactive and user-friendly interface.",
    technologies: [
      "Python",
      "PostgreSQL (Neon Cloud)",
      "Power BI",
      "Prefect Cloud",
      "OpenWeather API",
      "Meteostat API",
      "Git & GitHub",
      "Figma",
    ],
    keyHighlights: [
      "Developed a complete end-to-end ETL pipeline from ingestion to visualization",
      "Integrated multiple external REST APIs for historical, current and forecast weather data",
      "Implemented cloud orchestration using Prefect Cloud with scheduled automated executions",
      "Built incremental ingestion processes and automated database updates",
      "Designed a fully interactive Power BI dashboard with dynamic KPIs, city comparison features and advanced filtering",
      "Applied UX/UI principles inspired by the Frutiger Aero design aesthetic",
      "Created a scalable architecture capable of supporting additional cities and future data sources",
    ],
  },
  2: {
    type: "personal",
    fullTitle: "Crypto Dashboard — Real-Time Cryptocurrency Analysis",
    overview:
      "A real-time cryptocurrency analytics platform that automatically collects market data from public APIs, stores historical information in a cloud database, and delivers interactive insights through a Streamlit dashboard with multilingual support.",
    businessProblem:
      "Cryptocurrency markets generate large volumes of highly dynamic data, making it difficult to monitor performance, volatility and trends across multiple assets. The objective of this project was to centralize market information, automate data collection and provide an intuitive environment for analyzing and comparing cryptocurrencies over time.",
    solution:
      "Designed and implemented an end-to-end ETL pipeline using Python, PostgreSQL and GitHub Actions. The solution automatically collects cryptocurrency data from the CoinGecko API, performs data transformation and historical storage, and feeds a Streamlit dashboard that enables interactive exploration of market trends, rankings, volatility and asset performance.\n\nThe pipeline runs entirely in the cloud through scheduled automations, ensuring that data remains continuously updated without requiring local execution.",
    technologies: [
      "Python",
      "PostgreSQL (Neon Cloud)",
      "Streamlit",
      "Plotly",
      "GitHub Actions",
      "CoinGecko API",
      "Git & GitHub",
      "CSS",
    ],
    keyHighlights: [
      "Developed a complete end-to-end ETL pipeline for cryptocurrency monitoring",
      "Automated cloud-based data ingestion using GitHub Actions",
      "Implemented historical data storage with a hybrid ingestion strategy to optimize granularity and performance",
      "Built an interactive Streamlit dashboard with dynamic filters and multilingual support",
      "Created automated market insights highlighting top gainers, largest declines and volatility metrics",
      "Developed comparative visualizations including performance tracking, rankings and volatility analysis",
      "Designed a scalable architecture capable of supporting additional cryptocurrencies and future analytical features",
    ],
  },
  3: {
    type: "personal",
    fullTitle: "Brazilian Export Mapping (2022–2025)",
    overview:
      "This project analyzes Brazilian export data between 2022 and 2025 using public datasets provided by the Brazilian federal government. The solution combines Python, MySQL and Power BI to automate data ingestion, structure large datasets and deliver interactive visualizations focused on logistics and international trade insights.\n\nBy transforming raw export records into an analytical environment, the project enables users to explore export performance, destination markets, customs operations and cargo flows through a centralized dashboard.",
    businessProblem:
      "Large volumes of Brazilian export data are publicly available, but extracting meaningful insights from raw government datasets can be challenging. Understanding export destinations, product categories, customs operations and seasonal trends often requires significant manual processing and data preparation. This project was developed to create a streamlined analytics solution capable of transforming complex export datasets into actionable business and logistics insights.",
    solution:
      "An end-to-end ELT workflow was developed using Python, MySQL and Power BI. Python automates the detection and import of new CSV files into MySQL, where the data is centralized and organized for analysis. Power BI connects directly to the database, performing transformations through Power Query and delivering interactive dashboards powered by DAX measures and KPIs.\n\nThe final dashboard allows users to analyze export activity by state, destination country, customs unit, product category and time period through dynamic filters and visualizations.",
    technologies: [
      "Python",
      "MySQL",
      "SQL",
      "Power BI",
      "Power Query",
      "DAX",
      "Git & GitHub",
    ],
    keyHighlights: [
      "Automated import of large government datasets using Python",
      "MySQL database architecture for centralized storage and management",
      "Interactive Power BI dashboard with dynamic filters and KPIs",
      "Analysis of export destinations, cargo categories and customs operations",
      "Identification of export seasonality and trade patterns",
      "End-to-end workflow from data ingestion to business intelligence",
      "Focus on logistics, international trade and operational analytics",
    ],
  },
  4: {
    type: "academic",
    fullTitle: "Purchase Request, Receiving and Inventory Management System",
    overview:
      "This project was developed as a Graduation Project during the Industrial Production Management degree program at FATEC São José dos Campos. The solution automates and standardizes the entire purchasing and inventory management workflow for small businesses, covering purchase requests, supplier quotations, approvals, receiving and inventory control.\n\nBuilt using Excel VBA, Google Workspace tools and Power BI, the system creates a complete data flow from operational transactions to managerial analytics, ensuring end-to-end traceability and supporting data-driven decision-making.",
    businessProblem:
      "Many small businesses still manage purchasing and inventory processes through disconnected spreadsheets, manual approvals and informal communication channels. This often leads to data inconsistencies, limited traceability, delayed purchasing decisions and poor inventory visibility. The challenge was to develop a low-cost solution capable of centralizing information, automating repetitive tasks and transforming operational data into actionable business insights.",
    solution:
      "A complete workflow was designed integrating Excel, Google Forms, Google Sheets, VBA, Google Apps Script and Power BI. The process begins with purchase requests submitted through an Excel interface. Supplier quotations are collected through automated emails and Google Forms, while Google Apps Script generates unique Ticket IDs to track each request throughout the process.\n\nVBA automations handle data validation, status updates, approval workflows, receiving operations and inventory transactions. Finally, all data is consolidated and visualized through an interactive Power BI dashboard, providing real-time visibility into purchasing activities, supplier performance and inventory levels.",
    technologies: [
      "Excel VBA",
      "Google Forms",
      "Google Sheets",
      "Google Apps Script",
      "Power BI",
      "DAX",
      "Power Query",
      "Git & GitHub",
    ],
    keyHighlights: [
      "End-to-end purchasing and inventory management workflow",
      "Automated supplier quotation requests via email",
      "Integration between Excel, Google Forms and Google Sheets",
      "Automatic Ticket ID generation for complete process traceability",
      "Inventory entry and withdrawal control with validation mechanisms",
      "Interactive Power BI dashboard for KPI monitoring and operational analysis",
      "Real-time visibility of purchasing, receiving and inventory processes",
      "Focus on process automation, operational efficiency and data-driven decision-making",
    ],
  },
  5: {
    type: "personal",
    fullTitle: "Netflix Content Catalog Dashboard (2008–2021)",
    overview:
      "This project consists of the development of an interactive Power BI dashboard designed to analyze Netflix's content catalog between 2008 and 2021. Using a complete ETL approach, the solution transforms raw catalog data into meaningful insights regarding content growth, audience profile, geographic distribution and editorial strategy.\n\nThe project was developed to strengthen skills in SQL, data modeling, DAX and business intelligence while demonstrating how data can be leveraged to answer real-world business questions through interactive analytics.",
    businessProblem:
      "Streaming platforms generate large amounts of content-related data, but understanding catalog evolution, audience targeting, content distribution and production trends can be challenging without proper analysis. This project was developed to transform raw Netflix catalog data into an analytical environment capable of revealing patterns in content growth, genre distribution, geographic concentration, audience ratings and production characteristics over time.",
    solution:
      "An end-to-end analytics workflow was built using MySQL and Power BI. The dataset was first processed and structured in MySQL, where data cleaning, encoding standardization and supporting transformations were performed. Additional transformations and modeling were completed in Power BI using Power Query, followed by the creation of DAX measures, dynamic calculations and interactive visualizations.\n\nThe final dashboard provides multiple analytical perspectives, allowing users to explore catalog evolution, geographic distribution, audience segmentation, genre composition and content characteristics through highly interactive reports.",
    technologies: [
      "MySQL",
      "SQL",
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "Git & GitHub",
    ],
    keyHighlights: [
      "Complete ETL workflow from data preparation to visualization",
      "Interactive Power BI dashboard with multiple analytical pages",
      "Advanced DAX calculations and dynamic measures",
      "Dynamic rankings using RANKX",
      "Top N parameter selection and field parameter switching",
      "Dynamic titles and context-aware metrics",
      "Conditional formatting driven by business logic",
      "Geographic analysis using dynamically rendered country flags",
      "Star schema data model with normalized dimensions",
      "Analysis of catalog growth, audience profile, genres, countries, actors and directors",
      "Strong focus on dashboard UX/UI and user interaction design",
    ],
  },
};

// ─── Project carousel data ────────────────────────────────────────────────────

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
    githubUrl: "https://github.com/lfportto/weather_dashboard_pipeline",
  },
  {
    id: 2,
    title: "Cryptocurrency Analytics Dashboard",
    description:
      "Near real-time cryptocurrency monitoring solution with automated ingestion, cloud storage and Streamlit analytics.",
    image: "/projects/crypto-dashboard.png",
    tags: ["Python", "PostgreSQL", "Streamlit", "API", "ETL"],
    demoUrl: "https://crypto-dashboard-luisfelipeporto.streamlit.app/",
    githubUrl: "https://github.com/lfportto/crypto-dashboard",
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
    githubUrl: "https://github.com/lfportto/dashboard-exportacoes-brasil",
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
    githubUrl: "https://github.com/lfportto/trabalho-de-graduacao-fatec",
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
    githubUrl: "https://github.com/lfportto/netflix-content-analysis-powerbi",
  },
];

// ─── Transition constants ─────────────────────────────────────────────────────

const heightTransition = "height 500ms ease-in-out";
const fontTransition = "font-size 500ms ease-in-out";
const maxHeightTransition = "max-height 500ms ease-in-out";
const opacityTransition = "opacity 400ms ease-in-out";

// ─── Project Detail Modal ─────────────────────────────────────────────────────

const ProjectModal = ({ project, onClose }) => {
  const data = modalData[project.id];
  const scrollRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const badgeColors =
    data.type === "academic"
      ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
      : "bg-primary/15 text-primary border border-primary/30";

  const badgeLabel = data.type === "academic" ? "Academic Project" : "Personal Project";

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl border border-primary/25 bg-card shadow-2xl text-left"
        style={{ boxShadow: "0 0 60px rgba(139,92,246,0.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex-shrink-0 p-6 pb-4 border-b border-border/60">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold leading-snug mb-2">{data.fullTitle}</h2>
              <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${badgeColors}`}>
                {badgeLabel}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex-shrink-0 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Overview */}
          <Section title="Overview" icon="◈">
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {data.overview}
            </p>
          </Section>

          {/* Business Problem */}
          <Section title="Business Problem" icon="◈">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {data.businessProblem}
            </p>
          </Section>

          {/* Solution */}
          <Section title="Solution" icon="◈">
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {data.solution}
            </p>
          </Section>

          {/* Technologies */}
          <Section title="Technologies" icon="◈">
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium border border-border rounded-full text-foreground/80 bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Key Highlights */}
          <Section title="Key Highlights" icon="◈">
            <ul className="space-y-2">
              {data.keyHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight size={15} className="flex-shrink-0 mt-0.5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* ── Footer with links ── */}
        <div className="flex-shrink-0 p-5 pt-4 border-t border-border/60 flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={16} />
            View Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

// Small helper sub-component for modal sections
const Section = ({ title, icon, children }) => (
  <div>
    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-2">
      <span className="text-primary/60">{icon}</span>
      {title}
    </h3>
    {children}
  </div>
);

// ─── Main ProjectsSection ─────────────────────────────────────────────────────

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null); // holds project object or null

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

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <>
      <section id="projects" className="py-24 px-4 relative">
        <div
          ref={sectionRef}
          className={`container mx-auto max-w-7xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            A selection of personal projects focused on Data Analytics, Business
            Intelligence, Data Engineering and Process Automation. Each project
            was designed to solve real-world problems through data-driven
            solutions.
          </p>

          <div className="relative flex items-center justify-center">
            <button
              onClick={prevProject}
              className="absolute left-0 z-30 p-3 rounded-full bg-card border border-border hover:border-primary transition-all"
            >
              <ArrowLeft size={22} />
            </button>

            <div className="flex items-center justify-center gap-8">
              {visibleProjects.map((project) => {
                const isCenter = project.position === 0;

                const cardStyle = {
                  width: "420px",
                  opacity: isCenter ? 1 : 0.45,
                  transform: isCenter ? "scale(1)" : "scale(0.82)",
                  transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                  boxShadow: isCenter
                    ? "0 0 45px rgba(139,92,246,0.25)"
                    : "0 0 0 rgba(0,0,0,0)",
                  cursor: isCenter ? "pointer" : "default",
                };

                const imageStyle = {
                  height: isCenter ? "224px" : "160px",
                  transition: heightTransition,
                };

                const titleStyle = {
                  fontSize: isCenter ? "1.25rem" : "1rem",
                  transition: fontTransition,
                };

                const descStyle = {
                  maxHeight: isCenter ? "80px" : "48px",
                  overflow: "hidden",
                  transition: maxHeightTransition,
                };

                const linksStyle = {
                  opacity: isCenter ? 1 : 0,
                  pointerEvents: isCenter ? "auto" : "none",
                  transition: opacityTransition,
                };

                return (
                  <div
                    key={project.id}
                    style={cardStyle}
                    className="group bg-card/60 backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden flex-shrink-0"
                    // Clicking anywhere on the card opens modal (only when center)
                    onClick={() => isCenter && setActiveModal(project)}
                  >
                    {/* Project image */}
                    <div style={imageStyle} className="overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <h3 style={titleStyle} className="font-bold mb-3 leading-snug">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium border rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p style={descStyle} className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Bottom row: icons + "click for details" hint */}
                      <div style={linksStyle} className="flex items-center justify-between">
                        {/* Icon links — stop propagation so they don't open modal */}
                        <div className="flex items-center gap-4">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-foreground/80 hover:text-primary transition-colors"
                            aria-label="GitHub repository"
                          >
                            <Github size={22} />
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-foreground/80 hover:text-primary transition-colors"
                            aria-label="Live dashboard"
                          >
                            <ExternalLink size={22} />
                          </a>
                        </div>

                        {/* "Click to see details" hint text */}
                        <span className="text-xs text-muted-foreground/60 select-none italic">
                          Click to see details
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextProject}
              className="absolute right-0 z-30 p-3 rounded-full bg-card border border-border hover:border-primary transition-all"
            >
              <ArrowRight size={22} />
            </button>
          </div>

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

      {/* Modal rendered outside the section to avoid z-index/overflow issues */}
      {activeModal && (
        <ProjectModal
          project={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
};