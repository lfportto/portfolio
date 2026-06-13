import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-7xl mx-auto z-10">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 pt-24 lg:pt-0">

          {/* ====================================== */}
          {/* TEXTO */}
          {/* ====================================== */}

          <div className="max-w-3xl text-center lg:text-left space-y-6">

            <h1 className="font-bold tracking-tight">

              {/* Mobile: "Hi, I'm" em linha menor separada / Desktop: inline normal */}
              <span className="block text-2xl lg:inline lg:text-6xl opacity-0 animate-fade-in">
                Hi, I'm
              </span>

              {/* Mobile: nome em linha própria / Desktop: continua na mesma linha */}
              <span className="block text-4xl lg:inline lg:text-6xl text-primary opacity-0 animate-fade-in-delay-1">
                <span className="lg:hidden"> </span>Luis Felipe Porto
              </span>

            </h1>

            <h2 className="text-xl md:text-3xl font-semibold opacity-0 animate-fade-in-delay-3">
              Data Analyst | BI | Data Engineering
            </h2>

            {/* Parágrafo — fonte reduzida + Scroll indicator mobile logo abaixo */}
            <div className="opacity-0 animate-fade-in-delay-4">
              <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                Building end-to-end data solutions through analytics,
                automation and business intelligence. Passionate about
                transforming data into actionable insights and scalable
                solutions.
              </p>

              {/* SCROLL INDICATOR — visível só no mobile, logo abaixo do parágrafo */}
              <div className="flex lg:hidden flex-col items-center mt-5 animate-bounce">
                <span className="text-sm text-muted-foreground mb-1">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
              </div>
            </div>

            {/* BOTÕES */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-fade-in-delay-4">

              <a
                href="#projects"
                className="cosmic-button px-6 py-3 rounded-full border border-primary/40 hover:border-primary transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-primary/40 hover:border-primary transition-all duration-300"
              >
                Contact Me
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1VQzidK1aXoq9Y8RUL-htAGWC7DFRWVZ9"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-primary/40 hover:border-primary transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>

            </div>

          </div>

          {/* ====================================== */}
          {/* FOTO */}
          {/* ====================================== */}

          <div className="relative opacity-0 animate-fade-in-delay-4">

            {/* GLOW externo */}
            <div
              className="absolute inset-0 rounded-full blur-3xl scale-110"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }}
            />

            {/* ANEL GIRANDO 1 */}
            <div
              className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin"
              style={{ animationDuration: "12s" }}
            />

            {/* ANEL GIRANDO 2 */}
            <div
              className="absolute -inset-8 rounded-full border border-primary/10 animate-spin"
              style={{ animationDuration: "18s", animationDirection: "reverse" }}
            />

            {/* CONTAINER circular */}
            <div
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/40"
              style={{ boxShadow: "0 0 50px rgba(139,92,246,0.45)" }}
            >
              {/* FUNDO ANIMADO */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle at 50% 55%, #5c7aff 0%, #2e3fa3 25%, #222B62 55%, #0d1230 100%)`,
                  animation: "heroBgPulse 5s ease-in-out infinite",
                }}
              />

              {/* CAMADA de brilho rotativo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, transparent 50%, rgba(139,92,246,0.55) 68%, rgba(100,140,255,0.35) 75%, transparent 88%)`,
                  animation: "heroBgRotate 6s linear infinite",
                }}
              />

              {/* CAMADA de reflexo fixo no topo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle at 50% 10%, rgba(180,200,255,0.18) 0%, transparent 55%)`,
                }}
              />

              {/* FOTO PNG */}
              <img
                src="/profile_pic_png.png"
                alt="Luis Felipe Porto"
                className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* BADGE dentro do container — sobrepõe a foto, canto superior direito */}
              <div className="absolute top-3 right-3 z-20 bg-card/80 backdrop-blur-md border border-primary/30 rounded-xl px-3 py-1 shadow-lg">
                <span className="text-sm font-semibold text-primary">
                  2.5+ Years XP
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR — visível só no desktop, posição absoluta original */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes heroBgPulse {
          0%, 100% {
            background: radial-gradient(circle at 50% 55%, #5c7aff 0%, #2e3fa3 25%, #222B62 55%, #0d1230 100%);
            opacity: 1;
          }
          50% {
            background: radial-gradient(circle at 50% 50%, #7b9aff 0%, #3a52cc 20%, #1e2d80 50%, #080e22 100%);
            opacity: 0.9;
          }
        }

        @keyframes heroBgRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  );
};