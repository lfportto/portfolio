import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Título*/}
        <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Subtítulo - Ajustado dinamicamente para o mobile */}
        <p className="text-center text-base md:text-xl text-muted-foreground mb-12">
          Feel free to reach out through any of the channels below!
        </p>

        {/* Ícones de contato - Gap otimizado para evitar quebra de linha no mobile */}
        <div className="flex flex-row justify-center gap-5 md:gap-10 max-w-full mx-auto">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luis-felipe-porto/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 md:gap-3 hover:text-primary transition-all duration-300 hover:scale-110 flex-1 md:flex-initial"
          >
            <Linkedin className="text-primary w-7 h-7 md:w-9 md:h-9" />
            <span className="text-xs md:text-sm whitespace-nowrap">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/lfportto"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 md:gap-3 hover:text-primary transition-all duration-300 hover:scale-110 flex-1 md:flex-initial"
          >
            <Github className="text-primary w-7 h-7 md:w-9 md:h-9" />
            <span className="text-xs md:text-sm whitespace-nowrap">GitHub</span>
          </a>

          {/* E-mail */}
          <a
            href="mailto:luisfelipeporto.lfp@gmail.com"
            className="flex flex-col items-center gap-2 md:gap-3 hover:text-primary transition-all duration-300 hover:scale-110 flex-1 md:flex-initial"
          >
            <Mail className="text-primary w-7 h-7 md:w-9 md:h-9" />
            <span className="text-xs md:text-sm whitespace-nowrap">Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5512982295206"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 md:gap-3 hover:text-primary transition-all duration-300 hover:scale-110 flex-1 md:flex-initial"
          >
            <MessageCircle className="text-primary w-7 h-7 md:w-9 md:h-9" />
            <span className="text-xs md:text-sm whitespace-nowrap">WhatsApp</span>
          </a>

        </div>

      </div>
    </section>
  );
};