import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    items: [
      "Vue 3 (Composition API)",
      "Vue 2 (Options API)",
      "Nuxt (SSR, SSG)",
      "Pinia",
      "Vuex",
      "Vue Router",
      "TypeScript",
      "JavaScript (ES2022+)",
      "Tailwind CSS",
    ],
  },
  {
    category: "Architecture & performance",
    items: [
      "Vue 2 to Vue 3 and Vuex to Pinia migrations",
      "Micro-frontends",
      "Feature-Sliced Design",
      "DDD",
      "Core Web Vitals",
      "Lighthouse",
      "WCAG 2.1 accessibility",
    ],
  },
  {
    category: "APIs & backend",
    items: ["GraphQL", "Apollo", "REST", "Node.js", "Express"],
  },
  {
    category: "Testing",
    items: [
      "Vitest",
      "Jest",
      "Vue Test Utils",
      "Playwright (E2E, visual regression)",
    ],
  },
  {
    category: "Tooling & CI",
    items: [
      "Vite",
      "Webpack",
      "Docker",
      "GitHub Actions",
      "GitLab CI",
      "Sentry",
    ],
  },
  {
    category: "AI tooling",
    items: [
      "Claude Code (agents, subagents, hooks)",
      "MCP servers",
      "OpenAI API",
      "LLM streaming UI (SSE, NDJSON, WebSocket)",
    ],
  },
] as const;

export const RESUME_DATA = {
  name: "Vasyl Hartaver",
  initials: "VH",
  location: "Szczecin, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Szczecin",
  personalWebsiteUrl: "https://telkdev.github.io/cv/",
  about:
    "Senior Front-end Engineer (Vue 3, Nuxt, TypeScript) with 8+ years of commercial experience. Polish residence permit (Karta pobytu); open to remote EU roles and relocation (EU Blue Card).",
  summary: (
    <>
      Almost all of my experience is in the Vue ecosystem. I make large, slow
      or legacy front-ends fast and maintainable without stopping feature
      work: led a production Vue 2 to Vue 3 migration, took a production
      app&apos;s mobile Lighthouse score from 15 to 90, and introduced testing
      to codebases that had none. I also build Claude Code agents for QA and
      code review. Fully remote with teams in Turkey, Germany and the USA.
    </>
  ),
  avatarUrl:
    "https://avatars.githubusercontent.com/u/43547844?s=400&u=7d932451c3af40fca22ecf206709ae006f5a1dd1&v=4",
  contact: {
    email: "telkontar44@gmail.com",
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
      location: "Remote · Turkey",
      badges: [
        "Vue.js",
        "TypeScript",
        "Micro-frontends",
        "Pinia",
        "Playwright",
        "Claude Code",
      ],
      title: "Senior Front-end Engineer",
      start: "May 2025",
      end: null,
      description: (
        <>
          B2B customer engagement platform (SaaS).
          <ul className="list-inside list-disc">
            <li>
              Improved the mobile Lighthouse score from 15 to 90 and cut LCP
              about 6x.
            </li>
            <li>
              Restructured the front-end into a layered micro-frontend
              architecture so teams could develop and release modules
              independently.
            </li>
            <li>
              Introduced unit testing to a codebase that had no tests; added
              Playwright visual regression tests to CI (Docker).
            </li>
            <li>
              Built a Claude Code QA agent that writes and runs Playwright tests
              for changed features and triages failing runs, plus agents for
              first-pass code review and boilerplate.
            </li>
            <li>
              Set up the team&apos;s agent harness: CLAUDE.md conventions,
              subagents, hooks and MCP integrations with internal tools, so
              agents follow team standards.
            </li>
            <li>
              Review code and mentor junior and mid-level developers.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "EyeC GmbH",
      link: "https://www.eyec.com/",
      location: "Remote · Germany",
      badges: ["Vue 2", "Vue 3", "TypeScript", "GraphQL", "Pinia", "Vitest"],
      title: "Senior Front-end Engineer",
      start: "Oct 2022",
      end: "May 2025",
      description: (
        <>
          Web application for print inspection systems in pharma and packaging.
          <ul className="list-inside list-disc">
            <li>
              Led the migration of the production app from Vue 2 (Options API,
              Vuex) to Vue 3 (Composition API, Pinia).
            </li>
            <li>
              Brought test coverage to 97% with Jest and Vitest; rewrote the PDF
              comparison logic as a state machine.
            </li>
            <li>
              Made pages with 10,000+ row tables load 40% faster with virtual
              scrolling and dynamic row heights.
            </li>
            <li>
              Cut GraphQL payloads by 35% and moved shared code into internal
              NPM packages.
            </li>
            <li>
              Moved the codebase to Feature-Sliced Design, fixed WCAG 2.1
              accessibility issues, mentored junior developers.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "MOST Programming",
      link: "https://most-us.com/",
      location: "Remote · USA",
      badges: ["Vue 3", "Nuxt", "TypeScript", "Node.js", "Pinia", "Tailwind CSS"],
      title: "Full Stack Developer",
      start: "Dec 2021",
      end: "Oct 2022",
      description: (
        <>
          Web applications for US clients.
          <ul className="list-inside list-disc">
            <li>
              Built the front-end of a new product from scratch with Vue 3,
              Pinia and a DDD-style structure, keeping business logic out of UI
              components.
            </li>
            <li>
              Implemented SSR and SSG with Nuxt for SEO and fast first load.
            </li>
            <li>
              Reduced bundle size with lazy loading and code splitting; set up
              Sentry.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "WorkConsult",
      link: "",
      location: "Ukraine",
      badges: ["Vue 2", "Nuxt 2", "TypeScript", "Node.js", "PHP"],
      title: "Full Stack Developer",
      start: "Apr 2021",
      end: "Dec 2021",
      description: (
        <>
          In-house CRM and client-facing apps.
          <ul className="list-inside list-disc">
            <li>
              Moved parts of a legacy PHP monolith into separate, independently
              deployable Vue 2 apps.
            </li>
            <li>
              Built client-facing apps with Nuxt 2 (SSR) and a component
              library for the CRM.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "ThinkMobiles",
      link: "https://thinkmobiles.com/",
      location: "Ukraine",
      badges: ["Vue.js", "JavaScript", "CSS", "Figma"],
      title: "Front-end Developer",
      start: "Sep 2019",
      end: "Apr 2021",
      description: (
        <>
          The only front-end developer on the team; shipped 3 client projects in
          Vue.js from Figma designs to production.
        </>
      ),
    },
    {
      company: "Freelance - Upwork",
      link: "https://upwork.com",
      location: "Remote",
      badges: ["Vue.js", "React", "Node.js", "TypeScript"],
      title: "Front-end Developer",
      start: "Jan 2018",
      end: "Sep 2019",
      description: (
        <>
          10+ Vue.js and React projects (e-commerce, SaaS, marketing sites). Top
          Rated, 100% Job Success.
        </>
      ),
    },
  ],
  skillGroups: SKILL_GROUPS,
  skills: SKILL_GROUPS.flatMap((group) => [...group.items]),
  projects: [
    {
      title: "AI Chat Lab",
      techStack: [
        "Nuxt 4",
        "Vue 3",
        "TypeScript",
        "Vitest",
        "Playwright",
        "Claude Code",
      ],
      description:
        "Open Nuxt 4 lab for the front-end side of LLM products: chat UI with SSE/NDJSON streaming, cancellation, retry and render batching, plus a reproducible harness (seeded mock model, fault-injecting proxy, throttled Playwright). Found that a naive stream parser loses 13-100% of text under real network chunking.",
    },
    {
      title: "Paideia",
      techStack: ["TypeScript", "Nuxt", "OpenAI API"],
      description:
        "English learning app that generates exercises with the OpenAI API.",
      link: {
        label: "paideia.space",
        href: "https://paideia.space/",
      },
    },
    {
      title: "Uafunds",
      techStack: ["TypeScript", "Nuxt", "Strapi"],
      description:
        "Fundraiser listing for small Ukrainian volunteer organisations.",
      link: {
        label: "uafunds.org",
        href: "https://uafunds.org/",
      },
    },
  ],
} as const;
