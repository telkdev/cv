import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vasyl Hartaver",
  initials: "VH",
  location: "Szczecin, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Szczecin",
  personalWebsiteUrl: "https://telkdev.github.io/cv/",
  about:
    "Senior Front-end Engineer with 7+ years building high-performance web applications, scalable UI architectures, and AI-powered developer workflows.",
  summary: (
    <>
      Senior Front-end Engineer specializing in Vue.js, Nuxt.js, and
      TypeScript ecosystems. I build high-performance web applications with
      scalable UI architecture (Feature-Sliced Design, DDD), strong test
      coverage, and accessibility compliance. Experienced across the full stack
      with Node.js, GraphQL, and PostgreSQL. Actively practicing agentic
      development — building AI-driven workflows with Claude Code, MCP servers,
      custom agents, and prompt engineering to ship faster and with higher
      quality.
    </>
  ),
  avatarUrl:
    "https://avatars.githubusercontent.com/u/43547844?s=400&u=7d932451c3af40fca22ecf206709ae006f5a1dd1&v=4",
  contact: {
    email: "vhartaver@gmail.com",
    tel: "+48452503354",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/telkdev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vasyl-hartaver-12b06b180/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "MSU",
      degree: "Bachelor's Degree",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Insider",
      link: "https://useinsider.com/",
      location: "Turkey",
      badges: [
        "Vue.js",
        "TypeScript",
        "React",
        "Micro-frontends",
        "Node.js",
        "Claude Code",
      ],
      title: "Senior Front-end Engineer",
      start: "May 2025",
      end: null,
      description: (
        <>
          Building AI-powered customer engagement and personalization platform
          serving 1,200+ enterprise clients (Samsung, IKEA, Toyota, Virgin)
          across 25+ countries. The platform processes 2.2 billion requests
          daily.
          <ul className="list-inside list-disc">
            <li>
              Refactored front-end architecture to a layered structure,
              improving modularity, separation of concerns, and long-term
              maintainability across micro-frontend modules.
            </li>
            <li>
              Introduced unit testing paradigm and established testing
              standards, increasing code reliability and developer confidence
              in deployments.
            </li>
            <li>
              Developing and maintaining cross-channel marketing UI components
              for web, app, email, and messaging personalization features.
            </li>
            <li>
              Working on the Customer Data Platform (CDP) frontend, enabling
              marketers to build individualized customer journeys at scale.
            </li>
            <li>
              Built and contributed custom Claude Code agents, skills, and MCP
              server integrations to automate development workflows, code
              reviews, and repetitive engineering tasks across the team.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "EyeC GmbH",
      link: "https://www.eyec.com/",
      location: "Germany",
      badges: [
        "Vue.js",
        "TypeScript",
        "GraphQL",
        "Scss",
        "Vitest",
        "Leaflet",
        "Pinia",
      ],
      title: "Senior Front-end Engineer",
      start: "Oct 2022",
      end: "May 2025",
      description: (
        <>
          Engineered a web application for print inspection systems used by
          pharmaceutical and packaging companies to detect print defects,
          ensuring regulatory compliance and product quality.
          <ul className="list-inside list-disc">
            <li>
              Integrated Feature-Sliced Design (FSD) into project structure,
              enhancing scalability and modularity while reducing tech debt.
            </li>
            <li>
              Led migration from Vue 2 (Options API) to Vue 3 (Composition API),
              improving performance and developer experience.
            </li>
            <li>
              Designed and implemented a state machine for PDF comparison,
              ensuring efficient document processing and improved user
              experience.
            </li>
            <li>
              Increased page load speed by 40% by implementing virtual scrolling
              with dynamic item height calculation for large datasets.
            </li>
            <li>
              Optimized GraphQL API integration, reducing payload size by 35%
              and improving response time.
            </li>
            <li>
              Achieved 97% test coverage with unit and integration tests
              (Vitest, Jest), significantly reducing production bugs.
            </li>
            <li>
              Developed custom NPM packages for cross-project code reuse.
            </li>
            <li>
              Improved WCAG 2.1 accessibility compliance and maintained
              Lighthouse scores above 90.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "MOST Programming",
      link: "https://most-us.com/",
      location: "USA",
      badges: ["Vue.js", "Nuxt.js", "TypeScript", "Node.js", "Tailwind CSS"],
      title: "Full Stack Developer",
      start: "Dec 2021",
      end: "Oct 2022",
      description: (
        <>
          Transitioned to full-stack development, building and shipping
          multiple client-facing web applications.
          <ul className="list-inside list-disc">
            <li>
              Architected the front-end from scratch using Clean Architecture
              (DDD) and Vue 3, ensuring scalability and maintainability.
            </li>
            <li>
              Implemented advanced design patterns (Adapter, Command, Dependency
              Injection) to improve code modularity and reusability.
            </li>
            <li>
              Improved Webpack configuration, reducing bundle size and improving
              page load speeds (lazy loading, tree shaking, code splitting).
            </li>
            <li>
              Implemented system-wide monitoring and security improvements.
            </li>
            <li>
              Collaborated closely with UX designers and back-end engineers,
              ensuring seamless integration between front-end and API layers.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "WorkConsult",
      link: "",
      location: "Ukraine",
      badges: ["Vue.js", "React", "TypeScript", "Nuxt.js", "Node.js", "PHP"],
      title: "Full Stack Developer",
      start: "Apr 2021",
      end: "Dec 2021",
      description: (
        <>
          Developed and maintained web applications for clients in various
          industries, created custom CRM system.
          <ul className="list-inside list-disc">
            <li>
              Refactored a legacy monolithic application into a modular
              microservices architecture using Vue 2, improving scalability and
              maintainability.
            </li>
            <li>
              Developed and enhanced UI components, ensuring consistency and
              responsiveness across devices.
            </li>
            <li>
              Enhanced front-end performance, reducing load times and improving
              UX.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "ThinkMobiles",
      link: "https://thinkmobiles.com/",
      location: "Ukraine",
      badges: ["Vue.js", "CSS", "Node.js", "HTML", "Figma"],
      title: "Front-end Developer",
      start: "Sep 2019",
      end: "Apr 2021",
      description: (
        <>
          As a solo front-end developer, built custom web applications from
          scratch with emphasis on performance, accessibility and
          maintainability.
          <ul className="list-inside list-disc">
            <li>
              Built the front-end architecture from scratch using Vue.js and
              vanilla JavaScript, ensuring a scalable and maintainable codebase.
            </li>
            <li>
              Collaborated with UX designers, back-end engineers, and product
              teams to refine UI/UX.
            </li>
            <li>
              Implemented accessibility best practices (WCAG), improving
              usability for diverse users using WAVE evaluation tools.
            </li>
            <li>
              Translated complex UI/UX elements and animations into
              high-quality, reusable HTML and CSS components.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance - Upwork",
      link: "https://upwork.com",
      location: "Ukraine",
      badges: [
        "Vue.js",
        "React",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "SCSS",
      ],
      title: "Front-end Developer",
      start: "Jan 2018",
      end: "Sep 2019",
      description:
        "Collaborated with clients to build custom web applications, focusing on performance, accessibility, and maintainability.",
    },
  ],
  skills: [
    "JavaScript / TypeScript",
    "Vue.js / Nuxt.js",
    "React / Next.js",
    "CSS / Scss / Tailwind CSS",
    "Node.js / Express.js",
    "GraphQL / Apollo",
    "PostgreSQL / MongoDB",
    "Docker",
    "Vitest / Jest",
    "Vite / Webpack",
    "CI/CD (GitHub Actions, GitLab CI)",
    "Feature-Sliced Design / DDD",
    "WCAG / Accessibility",
    "Agentic Development (Claude Code, MCP Servers)",
    "AI Agents / Multi-Agent Workflows",
    "Prompt Engineering / LLM Integration",
    "AI-Assisted Code Generation",
  ],
  projects: [
    {
      title: "Newerest",
      techStack: [
        "TypeScript",
        "Vue.js",
        "Nuxt.js",
        "Tailwind CSS",
        "Node.js",
        "Strapi",
        "SEO",
      ],
      description:
        "Blog platform about history and technology. Built with Nuxt, Nest, and Strapi for efficient content management.",
      link: {
        label: "newerest.space/",
        href: "https://newerest.space/",
      },
    },
    {
      title: "Platinum Dental",
      techStack: ["TypeScript", "Nuxt.js", "Tailwind CSS"],
      description:
        "Dental clinic website with Telegram bot integration for automated doctor appointment scheduling.",
      link: {
        label: "platinum",
        href: "https://platinum.biz.ua/",
      },
    },
    {
      title: "Uafunds",
      techStack: ["TypeScript", "Nuxt.js", "Tailwind CSS", "Vue.js", "Strapi"],
      description:
        "Project aggregator for small volunteer organisations to create and share fundraisers.",
      link: {
        label: "uafunds",
        href: "https://uafunds.org/",
      },
    },
    {
      title: "Paideia",
      techStack: ["HTML", "Scss", "JavaScript"],
      description:
        "English learning platform with a focus on vocabulary and grammar using AI tools.",
      link: {
        label: "paideia",
        href: "https://paideia.space/",
      },
    },
    {
      title: "United ukrainians",
      techStack: ["TypeScript", "Nuxt.js", "Tailwind CSS", "Vue.js"],
      description:
        "Fundraising platform for the volunteer organisation 'United Ukrainians' with categorized project funding.",
      link: {
        label: "united-ukrainians",
        href: "https://united-ukrainians.vercel.app/",
      },
    },
  ],
} as const;
