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
      Senior Front-end Engineer specializing in Vue.js, Nuxt.js, and TypeScript
      ecosystems. I build high-performance web applications with scalable UI
      architecture (Feature-Sliced Design, DDD, SSR/SSG), strong test coverage,
      and accessibility compliance. Proven track record of improving Core Web
      Vitals, mentoring developers, and driving architectural decisions across
      teams. Experienced across the full stack with Node.js, GraphQL, and
      PostgreSQL. Actively practicing agentic development — building AI-driven
      CI/CD pipelines, custom Claude Code agents and skills, MCP server
      integrations, and visual regression testing with Docker to ship faster and
      with higher quality.
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
        "Pinia",
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
              Mentored junior and mid-level developers on front-end
              architecture patterns, micro-frontend best practices, and
              scalable component design.
            </li>
            <li>
              Improved mobile Core Web Vitals (Lighthouse) score from 15 to
              90, dramatically enhancing page load performance, INP, and LCP
              across the platform.
            </li>
            <li>
              Developing and maintaining cross-channel marketing UI components
              for web, app, email, and messaging personalization features.
            </li>
            <li>
              Built and contributed custom Claude Code agents, skills, and MCP
              server integrations to automate development workflows, code
              reviews, and repetitive engineering tasks across the team.
            </li>
            <li>
              Implemented AI-powered CI/CD checks with visual regression
              testing in Docker pipelines, catching UI regressions
              automatically before code reaches production.
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
          Engineered a web application for print inspection systems used by
          pharmaceutical and packaging companies to detect print defects,
          ensuring regulatory compliance and product quality.
          <ul className="list-inside list-disc">
            <li>
              Integrated Feature-Sliced Design (FSD) into project structure,
              enhancing scalability and modularity while reducing tech debt.
            </li>
            <li>
              Led migration from Vue 2 (Options API) to Vue 3 (Composition
              API) with Pinia state management, improving performance and
              developer experience.
            </li>
            <li>
              Mentored junior developers on architectural patterns, code
              review best practices, and Vue 3 Composition API adoption.
            </li>
            <li>
              Designed and implemented a state machine for PDF comparison,
              ensuring efficient document processing and improved user
              experience.
            </li>
            <li>
              Increased page load speed by 40% by implementing virtual
              scrolling with dynamic item height calculation for large
              datasets.
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
          Built and shipped multiple client-facing web applications with SSR
          and SSG rendering strategies using Nuxt.js for optimal performance
          and SEO.
          <ul className="list-inside list-disc">
            <li>
              Architected the front-end from scratch using Clean Architecture
              (DDD), Vue 3, and Pinia, ensuring scalability and
              maintainability.
            </li>
            <li>
              Implemented SSR and SSG rendering strategies with Nuxt.js,
              achieving fast initial page loads and strong SEO performance.
            </li>
            <li>
              Implemented advanced design patterns (Adapter, Command,
              Dependency Injection) to improve code modularity and
              reusability.
            </li>
            <li>
              Improved Webpack configuration, reducing bundle size and
              improving page load speeds (lazy loading, tree shaking, code
              splitting).
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
          Developed and maintained web applications for clients in various
          industries, created custom CRM system with SSR using Nuxt.js.
          <ul className="list-inside list-disc">
            <li>
              Refactored a legacy monolithic application into a modular
              microservices architecture using Vue 2, improving scalability
              and maintainability.
            </li>
            <li>
              Developed and enhanced UI components, ensuring consistency and
              responsiveness across devices.
            </li>
            <li>
              Implemented server-side rendering (SSR) with Nuxt.js, improving
              SEO and initial load performance for client-facing
              applications.
            </li>
            <li>
              Enhanced front-end performance, reducing load times and
              improving UX.
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
              vanilla JavaScript, ensuring a scalable and maintainable
              codebase.
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
