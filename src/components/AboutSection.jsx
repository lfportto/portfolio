import { useEffect, useRef, useState } from "react";

/* Animação de entrada */

const AnimatedCard = ({ children, delay = 0 }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

/* Contador animado */

const AnimatedCounter = ({ end, suffix = "" }) => {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={counterRef}>
      {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

/* Card de métrica — extraído para reutilizar no grid mobile */

const MetricCard = ({ value, suffix, label, delay }) => (
  <AnimatedCard delay={delay}>
    <div className="
      w-32 h-32
      rounded-full
      border border-primary/30
      bg-card/60
      backdrop-blur-md
      flex flex-col items-center justify-center
      mx-auto
      transition-all duration-500
      hover:scale-110 hover:border-primary/70
      shadow-[0_0_25px_rgba(139,92,246,0.12)]
      hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]
    ">
      <span className="text-3xl font-bold text-primary">
        {typeof value === "number"
          ? <AnimatedCounter end={value} suffix={suffix ?? ""} />
          : value}
      </span>
      <span className="text-xs text-center mt-1 text-muted-foreground px-3">
        {label}
      </span>
    </div>
  </AnimatedCard>
);

const metrics = [
  { value: 2.5,  suffix: "+", label: "Years of Experience" },
  { value: 5,    suffix: "",  label: "Personal Projects"   },
  { value: 15,   suffix: "+", label: "Technologies"        },
  { value: "C1", suffix: "",  label: "English Proficiency" },
];

export const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">

        {/* Título */}
        <AnimatedCard>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            About <span className="text-primary">Me</span>
          </h2>
        </AnimatedCard>

        {/* Conteúdo */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ── TEXTO ── */}
          <AnimatedCard delay={150}>
            <div className="flex-1 max-w-4xl">
              <p className="text-gray-400 text-sm md:text-[16px] leading-relaxed text-left">

                I'm a Data Analyst and Business Intelligence enthusiast based in
                São José dos Campos, São Paulo, Brazil.

                <br /><br />

                Currently in the final semester of my degree in Industrial
                Production Management at Fatec, I combine a strong operations and
                process-improvement background with data analytics, automation and
                business intelligence. This multidisciplinary perspective allows
                me to understand both the business side and the technical side of
                data projects, helping transform operational challenges into
                actionable insights.

                {/* Trecho oculto no mobile até clicar em "Ler mais" */}
                <span className={expanded ? "" : "hidden lg:inline"}>
                  <br /><br />

                  My journey started in manufacturing and operations environments,
                  where I developed a solid understanding of production processes,
                  supply chains and performance indicators. Over time, this
                  naturally evolved into a passion for data, leading me to work
                  with analytics, dashboard development, process automation and
                  data engineering solutions.

                  <br /><br />

                  Beyond professional experience, I continuously build personal
                  projects focused on analytics, BI and automation, exploring
                  end-to-end solutions involving Power BI, SQL, Python, ETL
                  processes and cloud technologies.

                  <br /><br />

                  I also had the opportunity to collaborate with international
                  teams in a global environment, communicating daily in English with
                  professionals from different countries and cultures. This
                  experience strengthened both my technical communication and my
                  ability to present complex information clearly to diverse
                  audiences.

                  <br /><br />

                  Today, my main focus is leveraging data to improve
                  decision-making, optimize processes and create scalable solutions
                  that generate real business value.
                </span>

              </p>

              {/* Botão "Read more / Read less" — só no mobile */}
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="lg:hidden mt-4 text-sm font-medium text-primary hover:text-primary/70 transition-colors"
              >
                {expanded ? "Read less ↑" : "Read more ↓"}
              </button>
            </div>
          </AnimatedCard>

          {/* ── MÉTRICAS ── */}

          {/* Desktop: coluna vertical (igual ao original) */}
          <div className="hidden lg:flex flex-col gap-5 shrink-0 w-[180px]">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} {...m} delay={250 + i * 100} />
            ))}
          </div>

          {/* Mobile: grid 2×2 */}
          <div className="lg:hidden w-full grid grid-cols-2 gap-6 place-items-center">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} {...m} delay={250 + i * 100} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};