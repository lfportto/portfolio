import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Nome principal exibido na página */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">

            {/* Texto inicial */}
            <span className="opacity-0 animate-fade-in">
              Hi, I'm
            </span>

            {/* Primeiro nome */}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Luis Felipe
            </span>

            {/* Sobrenome */}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Porto
            </span>

          </h1>

          {/* Cargo / posicionamento profissional */}
          <h2 className="text-xl md:text-3xl font-semibold opacity-0 animate-fade-in-delay-3">
            Data Analyst | BI | Data Engineering
          </h2>

          {/* Breve resumo profissional */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Building end-to-end data solutions through analytics,
            automation and business intelligence. Passionate about
            transforming data into actionable insights and scalable
            solutions.
          </p>

          {/* Botão que leva até a seção de projetos */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>

        </div>
      </div>

      {/* Indicador para rolar a página */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">

        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />

      </div>
    </section>
  );
};