import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vasyl Hartaver",
  initials: "VH",
  location: "Szczecin, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Szczecin",
  personalWebsiteUrl: "https://github.com/telkdev",
  about:
    "Senior Front-end Engineer with 7+ years building high-performance web applications, scalable UI architectures, and AI-powered developer workflows.",
  summary: (
    <>
      Senior Front-end Engineer specializing in Vue.js, Nuxt.js, and TypeScript.
      I architect scalable UIs (Feature-Sliced Design, DDD, SSR/SSG), optimize
      Core Web Vitals, mentor developers, and drive technical decisions across
      distributed teams. Actively building AI-driven development workflows with
      Claude Code agents, MCP servers, and automated visual regression pipelines.
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
      school: "Mukachevo State University",
      degree: "Bachelor's Degree in Computer Science",
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
        "Pinia",
        "Claude Code",
      ],
      title: "Senior Front-end Engineer",
      start: "May 2025",
      end: null,
      description: (
        <>
          AI-powered customer engagement platform serving 1,200+ enterprise
          clients (Samsung, IKEA, Toyota) across 25+ countries, processing 2.2
          billion requests daily.
          <ul className="list-inside list-disc">
            <li>
              Improved mobile Core Web Vitals (Lighthouse) from 15 to 90,
              cutting LCP by 6x and eliminating layout shift across the
              platform.
            </li>
            <li>
              Refactored front-end to a layered architecture across
              micro-frontend modules, reducing cross-module coupling and
              unblocking parallel team development.
            </li>
            <li>
              Introduced unit testing standards from zero coverage, increasing
              code reliability and reducing post-deploy hotfixes.
            </li>
            <li>
              Mentored junior and mid-level developers on architecture
              patterns, micro-frontend best practices, and scalable component
              design.
            </li>
            <li>
              Built custom Claude Code agents, skills, and MCP server
              integrations to automate code reviews, boilerplate generation,
              and repetitive engineering tasks across the team.
            </li>
            <li>
              Implemented AI-powered CI/CD pipeline with Playwright visual
              regression testing in Docker, catching UI regressions
              automatically before production.
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
        "Pinia",
        "Vitest",
        "Leaflet",
        "Scss",
      ],
      title: "Senior Front-end Engineer",
      start: "Oct 2022",
      end: "May 2025",
      description: (
        <>
          Web application for print inspection systems used by pharmaceutical
          and packaging companies to detect print defects, ensuring regulatory
          compliance.
          <ul className="list-inside list-disc">
            <li>
              Led migration from Vue 2 (Options API) to Vue 3 (Composition
              API) with Pinia, improving runtime performance and developer
              experience.
            </li>
            <li>
              Integrated Feature-Sliced Design (FSD) into project structure,
              reducing tech debt and making the codebase navigable for new
              hires.
            </li>
            <li>
              Increased page load speed by 40% via virtual scrolling with
              dynamic item height calculation for datasets of 10,000+ rows.
            </li>
            <li>
              Optimized GraphQL queries, reducing payload size by 35% and
              cutting average response time.
            </li>
            <li>
              Achieved 97% test coverage (Vitest, Jest), reducing production
              bug rate significantly.
            </li>
            <li>
              Designed a state machine for PDF comparison workflow, replacing
              brittle imperative logic with predictable state transitions.
            </li>
            <li>
              Mentored junior developers on Vue 3, Composition API, and code
              review practices.
            </li>
            <li>
              Maintained Lighthouse scores above 90 and improved WCAG 2.1
              compliance.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "MOST Programming",
      link: "https://most-us.com/",
      location: "USA",
      badges: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "Node.js",
        "Pinia",
        "Tailwind CSS",
      ],
      title: "Full Stack Developer",
      start: "Dec 2021",
      end: "Oct 2022",
      description: (
        <>
          Built and shipped multiple client-facing web applications with SSR/SSG
          using Nuxt.js.
          <ul className="list-inside list-disc">
            <li>
              Architected the front-end from scratch using Clean Architecture
              (DDD), Vue 3, and Pinia for a greenfield product.
            </li>
            <li>
              Implemented SSR and SSG rendering with Nuxt.js, achieving
              sub-second initial page loads and strong SEO rankings.
            </li>
            <li>
              Applied advanced design patterns (Adapter, Command, Dependency
              Injection) to decouple business logic from UI layer.
            </li>
            <li>
              Reduced Webpack bundle size through lazy loading, tree shaking,
              and code splitting.
            </li>
            <li>
              Integrated Sentry error tracking and set up performance
              monitoring dashboards for production observability.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "WorkConsult",
      link: "",
      location: "Ukraine",
      badges: [
        "Vue.js",
        "React",
        "TypeScript",
        "Nuxt.js",
        "Node.js",
        "PHP",
      ],
      title: "Full Stack Developer",
      start: "Apr 2021",
      end: "Dec 2021",
      description: (
        <>
          Developed web applications for clients across multiple industries and
          built a custom CRM system.
          <ul className="list-inside list-disc">
            <li>
              Refactored a legacy monolithic PHP application into modular Vue 2
              micro-services, enabling independent deployments per feature.
            </li>
            <li>
              Implemented SSR with Nuxt.js for client-facing applications,
              improving SEO indexing and reducing time-to-interactive.
            </li>
            <li>
              Built a responsive component library ensuring cross-device
              consistency across the CRM platform.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "ThinkMobiles",
      link: "https://thinkmobiles.com/",
      location: "Ukraine",
      badges: ["Vue.js", "CSS", "Node.js", "JavaScript", "Figma"],
      title: "Front-end Developer",
      start: "Sep 2019",
      end: "Apr 2021",
      description: (
        <>
          Solo front-end developer responsible for building web applications
          end-to-end from Figma designs to production.
          <ul className="list-inside list-disc">
            <li>
              Established front-end architecture using Vue.js, delivering 3
              client projects from zero to production.
            </li>
            <li>
              Implemented WCAG accessibility standards using WAVE evaluation
              tools, achieving compliance for all delivered projects.
            </li>
            <li>
              Translated complex animations and UI interactions from Figma
              into performant, reusable CSS/JS components.
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
      description: (
        <>
          Built custom web applications for international clients on Upwork.
          <ul className="list-inside list-disc">
            <li>
              Delivered 10+ projects across e-commerce, SaaS, and marketing
              verticals using Vue.js and React.
            </li>
            <li>
              Maintained a top-rated freelancer profile with 100% job success
              score.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript / TypeScript",
    "Vue.js / Nuxt.js (SSR, SSG)",
    "React / Next.js",
    "Pinia / Vuex",
    "CSS / Scss / Tailwind CSS",
    "Node.js / Express.js",
    "GraphQL / Apollo",
    "PostgreSQL / MongoDB",
    "Docker",
    "Vitest / Jest / Playwright",
    "Vite / Webpack",
    "CI/CD (GitHub Actions, GitLab CI)",
    "Core Web Vitals / Performance",
    "Feature-Sliced Design / DDD",
    "WCAG / Accessibility",
    "Agentic Development (Claude Code, MCP Servers)",
    "AI Agents / Skills / Multi-Agent Workflows",
    "AI-Powered CI/CD & Visual Regression Testing",
    "Prompt Engineering / LLM Integration",
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
        label: "newerest.space",
        href: "https://newerest.space/",
      },
    },
    {
      title: "Platinum Dental",
      techStack: ["TypeScript", "Nuxt.js", "Tailwind CSS"],
      description:
        "Dental clinic website with Telegram bot integration for automated doctor appointment scheduling.",
      link: {
        label: "platinum.biz.ua",
        href: "https://platinum.biz.ua/",
      },
    },
    {
      title: "Uafunds",
      techStack: ["TypeScript", "Nuxt.js", "Tailwind CSS", "Vue.js", "Strapi"],
      description:
        "Project aggregator for small volunteer organisations to create and share fundraisers.",
      link: {
        label: "uafunds.org",
        href: "https://uafunds.org/",
      },
    },
    {
      title: "Paideia",
      techStack: ["TypeScript", "Nuxt.js", "OpenAI API", "Tailwind CSS"],
      description:
        "AI-powered English learning platform with vocabulary training and grammar exercises generated by LLMs.",
      link: {
        label: "paideia.space",
        href: "https://paideia.space/",
      },
    },
    {
      title: "United Ukrainians",
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
