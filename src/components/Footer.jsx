import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-card border-t border-border mt-12">

      {/* Texto centralizado */}
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} - Luis Felipe Porto. All rights reserved.
      </p>

      {/* Botão voltar ao topo */}
      <a
        href="#hero"
        className="
          absolute
          right-6
          top-1/2
          -translate-y-1/2
          p-2
          rounded-full
          bg-primary/10
          hover:bg-primary/20
          text-primary
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <ArrowUp size={20} />
      </a>

    </footer>
  );
};