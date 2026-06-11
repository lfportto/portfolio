import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Título */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-lg md:text-xl text-muted-foreground mb-12">
          Feel free to reach out through any of the channels below!
        </p>

        {/* Ícones de contato */}
        <div className="flex flex-wrap justify-center gap-10">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luis-felipe-porto/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={36} />
            <span className="text-sm">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/lfportto"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Github size={36} />
            <span className="text-sm">GitHub</span>
          </a>

          {/* E-mail */}
          <a
            href="mailto:luisfelipeporto.lfp@gmail.com"
            className="flex flex-col items-center gap-3 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Mail size={36} />
            <span className="text-sm">Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5512982295206"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <MessageCircle size={36} />
            <span className="text-sm">WhatsApp</span>
          </a>

        </div>

      </div>
    </section>
  );
};