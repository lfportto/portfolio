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
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Professional <span className="text-primary">Journey</span>
        </h2>

        {/* Introdução */}
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          My professional journey started in manufacturing operations and
          gradually evolved toward process improvement, analytics, automation
          and data engineering. This background allows me to combine business
          understanding with technical problem-solving to build impactful data
          solutions.
        </p>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">

          {/* Linha base */}
          <div className="absolute left-40 top-0 bottom-0 w-0.5 bg-primary/20 z-0"></div>

          {/* Linha animada */}
          <div
            className="absolute left-[159px] top-0 w-1 rounded-full z-0 transition-all duration-300"
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
            className="absolute left-40 w-4 h-4 rounded-full bg-white z-20 animate-pulse"
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
          <div className="relative pl-56 pb-16">

            {/* Data */}
            <div className="absolute left-0 top-2 w-32 text-right">
              <span className="text-sm font-medium text-primary">
                May 2024
              </span>
              <br />
              <span className="text-sm text-muted-foreground">
                Dec 2025
              </span>
            </div>

            {/* Ícone */}
            <div className="absolute left-[136px] z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary border border-primary shadow-lg">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>

            {/* Card */}
            <AnimatedCard delay={0}>
        <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-md p-6 text-center">

              <h3 className="text-xl font-semibold">
                Data Analyst Intern
              </h3>

              <p className="text-primary font-medium">
                Ericsson
              </p>

              <ul className="mt-4 space-y-2 text-muted-foreground text-left">
                <li>
                  • Developed dashboards, automated workflows and data
                  pipelines for global operational teams.
                </li>

                <li>
                  • Worked with Power BI, SQL, Python and Power Automate
                  to improve data quality and decision-making processes.
                </li>

                <li>
                  • Reduced analysis time by up to <strong>97%</strong>
                  through automation and large-scale data validation
                  solutions.
                </li>
              </ul>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Power BI
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  SQL
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Python
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Power Automate
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Jira
                </span>
              </div>

            </div>
          </AnimatedCard>
          </div>

          {/* ========================================= */}
          {/* EXPERIÊNCIA 2 */}
          {/* ========================================= */}
          <div className="relative pl-56 pb-16">

            <div className="absolute left-0 top-2 w-32 text-right">
              <span className="text-sm font-medium text-primary">
                Aug 2023
              </span>
              <br />
              <span className="text-sm text-muted-foreground">
                Apr 2024
              </span>
            </div>

            <div className="absolute left-[136px] z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary border border-primary shadow-lg">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>

            <AnimatedCard delay={200}>
  <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-md p-6 text-center">

              <h3 className="text-xl font-semibold">
                Process Engineering Intern
              </h3>

              <p className="text-primary font-medium">
                Suzano
              </p>

              <ul className="mt-4 space-y-2 text-muted-foreground text-left">
                <li>
                  • Monitored operational and quality KPIs to support
                  process improvement initiatives.
                </li>

                <li>
                  • Developed dashboards and automated reports using
                  Excel, VBA and Power BI.
                </li>

                <li>
                  • Reduced daily analysis time by up to <strong>93%</strong>
                  through process automation and reporting improvements.
                </li>
              </ul>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Excel
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  VBA
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Power BI
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  SAP
                </span>
              </div>

            </div>
          </AnimatedCard>

            </div>

          {/* ========================================= */}
          {/* EXPERIÊNCIA 3 */}
          {/* ========================================= */}
          <div className="relative pl-56">

            <div className="absolute left-0 top-2 w-32 text-right">
              <span className="text-sm font-medium text-primary">
                Feb 2021
              </span>
              <br />
              <span className="text-sm text-muted-foreground">
                Dec 2022
              </span>
            </div>

            <div className="absolute left-[136px] z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary border border-primary shadow-lg">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>

            <AnimatedCard delay={400}>
  <div className="rounded-xl border border-primary/20 bg-card/60 backdrop-blur-md p-6 text-center">

              <h3 className="text-xl font-semibold">
                Production Apprentice
              </h3>

              <p className="text-primary font-medium">
                Ericsson
              </p>

              <ul className="mt-4 space-y-2 text-muted-foreground text-left">
                <li>
                  • Supported manufacturing, logistics and production
                  operations in an electronics manufacturing environment.
                </li>

                <li>
                  • Worked across inventory management, production support
                  and machine operation activities.
                </li>

                <li>
                  • Developed a strong understanding of industrial
                  processes, operational workflows and continuous
                  improvement.
                </li>
              </ul>

              <div className="flex flex-wrap justify-center gap-2 mt-5">
                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Manufacturing
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Logistics
                </span>

                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  Operations
                </span>
              </div>

            </div>
          </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};