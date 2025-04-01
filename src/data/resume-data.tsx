import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vasyl Hartaver",
  initials: "VH",
  location: "Szczecin, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Szczecin",
  personalWebsiteUrl: "https://telkdev.github.io/cv/",
  about:
    "Detail-oriented Senior Front-end Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Experienced Front-end Engineer with 7+ years of expertise in
      Vue.js(composition, options), Nuxt.js, and JavaScript/TypeScript
      ecosystems. Specializing in high-performance web applications, scalable UI
      architecture (DDD, Feature-Sliced Design), and SEO & accessibility
      (WCAG/ADA compliance). Proficient in full-stack development using Node.js,
      GraphQL, and PostgreSQL. Strong background in CI/CD pipelines,
      unit/integration testing (Vitest/Jest), and agile methodologies.
      Passionate about optimizing web performance, improving user experience,
      and collaborating in cross-functional teams.{" "}
      <b>Notice period - 1 week. English level - C1.</b>
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
      company: "EyeC GmbH",
      link: "https://https://www.eyec.com/",
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
      end: null,
      description: (
        <>
          Engineered a high-performance web application for print inspection
          systems using Vue.js, significantly enhancing system maintainability
          and modularity while ensuring 97% test coverage to minimize production
          bugs.
          <ul className="list-inside list-disc">
            <li>
              Integrated Feature-Sliced Design (FSD) into project structure,
              enhancing scalability, maintainability, and modularity while
              reducing tech debt.
            </li>
            <li>
              Led migration from Vue 2 (Options API) to Vue 3 (Composition API),
              improving performance, developer experience (DX), and code
              maintainability.
            </li>
            <li>
              Designed and implemented a state machine for PDF comparison,
              ensuring efficient document processing and improved user
              experience.
            </li>
            <li>
              Increased page load speed by 40% by implementing virtual scrolling
              with dynamic item height calculation, optimizing UX for large
              datasets.
            </li>
            <li>
              Optimized GraphQL API integration, reducing payload size by 35%
              and improving response time for faster data retrieval.
            </li>
            <li>
              Achieved 97% test coverage with unit and integration tests
              (Vitest, Jest), decreasing production bugs by 50% and improving
              code reliability.
            </li>
            <li>
              Developed custom NPM packages for cross-project code reuse,
              enhancing efficiency and reducing redundancy.
            </li>
            <li>
              Implemented performance monitoring and profiling tools
              (Lighthouse, Web Vitals) to ensure high Google PageSpeed scores
              (90+) and better SEO rankings.
            </li>
            <li>
              Improved WCAG 2.1 accessibility compliance, making the application
              more inclusive and user-friendly.
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
          {" "}
          Successfully transitioned from front-end to full-stack development
          while managing various projects.
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
              page load speeds (lazy loading, tree shaking, and code splitting).
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
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
          As a solo front-end developer, I was responsible for building custom
          web applications from scratch. For every project I put emphasis on
          performance, accessibility and maintainability.
          <ul className="list-inside list-disc">
            <li>
              Built the front-end architecture from scratch using Vue.js and
              vanilla JavaScript, ensuring a scalable and maintainable codebase.
            </li>
            <li>
              Collaborated with UX designers, back-end engineers, and product
              teams to refine UI/UX, enhancing user experience.
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
    "JavaScript, 7y / TypeScript, 7y",
    "Vue.js, 7y",
    "Nuxt.js, 5y",
    "CSS/Scss/Tailwind CSS, 7y",
    "Node.js, 4y",
    "Express.js, 4y",
    "GraphQL/Apollo Gateway, 5y",
    "React, 2y / Next.js, 2y",
    "Docker, 2y",
    "Svelte, 2y",
    "PostgreSQL, 4y",
    "MongoDB, 3y",
    "Figma(creating designs), 3y",
    "Design Systems/Architecture",
    "Clean Code",
    "Domain Driven Design",
    "Vitest/Jest, 4y",
    "Ionic, 4y",
    "Quasar, 5y",
    "Bulma, 5y",
    "Bootstrap, 5y",
    "Rest API 5y",
    "Vite/Webpack, 5y",
    "CI/CD (GitHub Actions, GitLab CI)",
    "WebSockets",
    "Semantic HTML",
    "WCAG/ADA",
    "SEO",
    "Problem Solving",
    "Agile/Scrum",
    "Teamwork",
    "Communication",
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
        "Blog about history, technologies and other stuff that we like. For now it is a pet project where I can try out interesting stuff for me. Currently rewriting it in Nuxt, Nest, Strapi to manage content more efficiently.",
      link: {
        label: "newerest.space/",
        href: "https://newerest.space/",
      },
    },
    {
      title: "Platinum Dental",
      techStack: ["TypeScript", "Nuxt.js", "Tailwind CSS"],
      description:
        "Project was established for my friend as a gift in honor of the clinic opening. The feature of the project is telegram bot for doctor appointment scheduling.",
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
        "Project was designed from scratch for the volunteer organisation 'United ukrainians' that was designed to fund some projects with categories.",
      link: {
        label: "united-ukrainians",
        href: "https://united-ukrainians.vercel.app/",
      },
    },
  ],
} as const;
