# Website de Potfólio Profissional

## Descrição do Projeto
Este projeto consiste no desenvolvimento de um portfólio profissional responsivo para apresentação de experiência profissional, habilidades técnicas, projetos e informações de contato. A aplicação foi desenvolvida como uma página única (Single Page Application - SPA) utilizando principalmente React e TailwindCSS, com foco em navegação fluida, experiência do usuário e adaptação para diferentes dispositivos. O objetivo é centralizar e organizar informações profissionais, projetos e links relevantes em uma única plataforma.  
O site pode ser acessado clicando [aqui](https://portfolio-luis-felipe-porto.vercel.app/#contact).

## 🎯 Objetivo
O projeto foi desenvolvido com os seguintes objetivos:

* Apresentar experiência profissional e trajetória de carreira;
* Centralizar projetos desenvolvidos nas áreas de Dados, Business Intelligence e Automação;
* Disponibilizar currículo e canais de contato;
* Criar uma interface moderna e responsiva para visualização em desktop e dispositivos móveis;
* Servir como portfólio online para compartilhamento profissional.

## Página Inicial do Portfólio
![Portfolio Homepage](https://github.com/user-attachments/assets/23a57eea-a64a-4a67-bbad-3d1a478f2e3d)

## Tecnologias Utilizadas
### Front-end
* React
* Vite
* JavaScript
* Tailwind CSS

### Bibliotecas e Ferramentas
* Lucide React
* React Icons
* Git
* GitHub
* Vercel

## Principais Funcionalidades
### 🔹 Navegação em Página Única (SPA)
* Navegação por seções utilizando scroll suave;
* Menu responsivo para desktop e dispositivos móveis;
* Indicadores visuais de navegação.

### 🔹 Seção Inicial (Hero)
* Apresentação profissional;
* Links para projetos, contato e currículo;
* Elementos visuais animados.

### 🔹 Sobre
* Resumo profissional;
* Destaque para tecnologias utilizadas;
* Informações complementares sobre experiência e perfil profissional.

### 🔹 Projetos
* Exibição dos principais projetos desenvolvidos;
* Cards interativos com informações resumidas;
* Modais com descrição detalhada de cada projeto;
* Links para repositórios e dashboards publicados.

### 🔹 Experiência Profissional
* Timeline interativa com histórico profissional;
* Informações sobre cargos, empresas e responsabilidades;
* Destaque para tecnologias utilizadas em cada experiência.

### 🔹 Habilidades Técnicas
* Organização das competências por categorias;
* Exibição visual das principais ferramentas e tecnologias utilizadas.

### 🔹 Contato
* Links para LinkedIn, GitHub e e-mail;
* Acesso rápido aos canais profissionais.

### 🔹 Tema Claro e Escuro
* Alternância entre modo claro e escuro;
* Persistência da preferência do usuário entre sessões.

### 🔹 Responsividade
* Layout adaptado para desktop, tablets e smartphones;
* Ajustes de tipografia, espaçamento e componentes para diferentes tamanhos de tela.

## Estrutura do Projeto
```text
portfolio/
├── public/
│   ├── projects/
│   ├── profile_pic.jpeg
│   └── profile_pic_png.png
│
├── src/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## Desktop x Mobile
![Desktop & Mobile mockup](https://github.com/user-attachments/assets/f077775a-0bf2-4b4d-a468-b8a7719de5a7)

## Deploy
A aplicação está hospedada na Vercel e integrada ao GitHub para deploy contínuo.

Fluxo de atualização:
1. Alterações enviadas para o repositório GitHub;
2. Build automático realizado pela Vercel;
3. Publicação da nova versão em produção.

## 🚀 Possíveis Melhorias Futuras
Algumas funcionalidades que poderão ser incorporadas em versões futuras incluem:
- Opção do usuário alternar entre idiomas os Inglês e Português `(obs: atualmente suportando apenas Inglês)`
- Filtros para categorização de projetos
- Sistema de busca por tecnologias e competências

## Créditos
Este projeto foi inspirado em um template de portfólio open source desenvolvido por Pedro Machado.  
O projeto original serviu como base para a estrutura inicial e parte do design da aplicação. A partir dessa base, foram realizadas diversas adaptações, personalizações e implementações adicionais para adequar o portfólio aos objetivos profissionais e ao conteúdo apresentado.  
GitHub: https://github.com/machadop1407/beautiful-react-tailwind-portfolio  
Autor: Pedro Machado (https://github.com/machadop1407)  
