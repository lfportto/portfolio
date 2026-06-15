import { Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

export const ExperienceSection = () => {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      const visibleHeight = Math.min(
        totalHeight,
        Math.max(0, windowHeight - rect.top)
      );

      const percentage = (visibleHeight / totalHeight) * 100;

      setProgress(Math.min(100, percentage));
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Professional <span className="text-primary">Journey</span>
        </h2>

        {/* Introdução */}
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-sm md:text-base">
          My professional journey started in manufacturing operations and
          gradually evolved toward process improvement, analytics, automation
          and data engineering. This background allows me to combine business
          understanding with technical problem-solving to build impactful data
          solutions.
        </p>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">

          {/* Linha base */}
          <div className="absolute left-6 md:left-40 top-0 bottom-0 w-0.5 bg-primary/20 z-0"></div>

          {/* Linha animada */}
          <div
            className="absolute left-[23px] md:left-[159px] top-0 w-1 rounded-full z-0 transition-all duration-300"
            style={{
              height: `${progress}%`,
              background:
                "linear-gradient(to bottom, #ffffff, #c4b5fd)",
              boxShadow:
                "0 0 20px rgba(255,255,255,0.8)",
            }}
          />

          {/* Bolinha luminosa */}
          <div
            className="absolute left-6 md:left-40 w-4 h-4 rounded-full bg-white z-20 animate-pulse"
            style={{
              top: `${progress}%`,
              transform: "translate(-50%, -50%)",
              boxShadow:
                "0 0 25px rgba(255,255,255,1)",
            }}
          />

          {/* ========================================= */}
          {/* EXPERIÊNCIA 1 */}
          {/* ========================================= */}
          <div className="relative pl-14 md:pl-56 pb-12 md:pb-16">

            {/* Data */}
            <div className="relative md:absolute left-0 top-0 md:top-2 w-full md:w-32 text-left md:text-right mb-3 md:mb-0 block">
              <span className="text-xs md:text-sm font-semibold md:font-medium text-primary bg-primary/10 md:bg-transparent px-2 py-0.5 md:p-0 rounded md:rounded-none inline-block md:inline">
                May 2024 — Dec 2025
              </span>
            </div>

            {/* Ícone */}
            <div className="absolute left-[2px] md:left-[136px] top-0 md:top-0 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary border border-primary shadow-lg scale-90 md:scale-100">
              <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
            </div>

            {/* Card */}
            <AnimatedCard delay={0}>
              <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-md p-5 md:p-6 text-left md:text-center">

                <h3 className="text-lg md:text-xl font-bold md:font-semibold">
                  Data Analyst Intern
                </h3>

                <p className="text-primary font-medium text-sm md:text-base mt-0.5 md:mt-0">
                  Ericsson
                </p>

                {/* Blocado com texto original explícito (text-sm) fixado para telas grandes */}
                <ul className="mt-4 space-y-2 text-muted-foreground text-left text-[13px] md:text-sm leading-relaxed">
                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Developed dashboards, automated workflows and data pipelines for global operational teams.</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Worked with Power BI, SQL, Python and Power Automate to improve data quality and decision-making processes.</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Reduced analysis time by up to <strong className="text-foreground font-semibold">97%</strong> through automation and large-scale data validation solutions.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap justify-start md:justify-center gap-1.5 md:gap-2 mt-5">
                  {["Power BI", "SQL", "Python", "Power Automate", "Jira"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 md:px-3 md:py-1 text-[11px] md:text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </AnimatedCard>
          </div>

          {/* ========================================= */}
          {/* EXPERIÊNCIA 2 */}
          {/* ========================================= */}
          <div className="relative pl-14 md:pl-56 pb-12 md:pb-16">

            {/* Data */}
            <div className="relative md:absolute left-0 top-0 md:top-2 w-full md:w-32 text-left md:text-right mb-3 md:mb-0 block">
              <span className="text-xs md:text-sm font-semibold md:font-medium text-primary bg-primary/10 md:bg-transparent px-2 py-0.5 md:p-0 rounded md:rounded-none inline-block md:inline">
                Aug 2023 — Apr 2024
              </span>
            </div>

            {/* Ícone */}
            <div className="absolute left-[2px] md:left-[136px] top-0 md:top-0 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary border border-primary shadow-lg scale-90 md:scale-100">
              <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
            </div>

            <AnimatedCard delay={200}>
              <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-md p-5 md:p-6 text-left md:text-center">

                <h3 className="text-lg md:text-xl font-bold md:font-semibold">
                  Process Engineering Intern
                </h3>

                <p className="text-primary font-medium text-sm md:text-base mt-0.5 md:mt-0">
                  Suzano
                </p>

                {/* Blocado com texto original explícito (text-sm) fixado para telas grandes */}
                <ul className="mt-4 space-y-2 text-muted-foreground text-left text-[13px] md:text-sm leading-relaxed">
                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Monitored operational and quality KPIs to support process improvement initiatives.</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Developed dashboards and automated reports using Excel, VBA and Power BI.</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Reduced daily analysis time by up to <strong className="text-foreground font-semibold">93%</strong> through process automation and reporting improvements.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap justify-start md:justify-center gap-1.5 md:gap-2 mt-5">
                  {["Excel", "VBA", "Power BI", "SAP"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 md:px-3 md:py-1 text-[11px] md:text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </AnimatedCard>
          </div>

          {/* ========================================= */}
          {/* EXPERIÊNCIA 3 */}
          {/* ========================================= */}
          <div className="relative pl-14 md:pl-56">

            {/* Data */}
            <div className="relative md:absolute left-0 top-0 md:top-2 w-full md:w-32 text-left md:text-right mb-3 md:mb-0 block">
              <span className="text-xs md:text-sm font-semibold md:font-medium text-primary bg-primary/10 md:bg-transparent px-2 py-0.5 md:p-0 rounded md:rounded-none inline-block md:inline">
                Feb 2021 — Dec 2022
              </span>
            </div>

            {/* Ícone */}
            <div className="absolute left-[2px] md:left-[136px] top-0 md:top-0 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary border border-primary shadow-lg scale-90 md:scale-100">
              <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
            </div>

            <AnimatedCard delay={400}>
              <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-md p-5 md:p-6 text-left md:text-center">

                <h3 className="text-lg md:text-xl font-bold md:font-semibold">
                  Production Apprentice
                </h3>

                <p className="text-primary font-medium text-sm md:text-base mt-0.5 md:mt-0">
                  Ericsson
                </p>

                {/* Blocado com texto original explícito (text-sm) fixado para telas grandes */}
                <ul className="mt-4 space-y-2 text-muted-foreground text-left text-[13px] md:text-sm leading-relaxed">
                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Supported manufacturing, logistics and production operations in an electronics manufacturing environment.</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Worked across inventory management, production support and machine operation activities.</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="select-none mt-0.5">•</span>
                    <span>Developed a strong understanding of industrial processes, operational workflows and continuous improvement.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap justify-start md:justify-center gap-1.5 md:gap-2 mt-5">
                  {["Manufacturing", "Logistics", "Operations"].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 md:px-3 md:py-1 text-[11px] md:text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};