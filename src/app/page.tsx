import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - CV`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - CV`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    // images: [
    //   {
    //     url: "https://avatars.githubusercontent.com/u/43547844?s=400&u=7d932451c3af40fca22ecf206709ae006f5a1dd1&v=4",
    //     width: 1200,
    //     height: 630,
    //     alt: `${RESUME_DATA.name}'s profile picture`,
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: `${RESUME_DATA.name} - CV`,
  //   description: RESUME_DATA.about,
  //   images: [
  //     "https://avatars.githubusercontent.com/u/43547844?s=400&u=7d932451c3af40fca22ecf206709ae006f5a1dd1&v=4",
  //   ],
  // },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  return [
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s CV</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="CV Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />

          <Skills skills={RESUME_DATA.skills} />

          <WorkExperience work={RESUME_DATA.work} />

          {/* <Education education={RESUME_DATA.education} /> */}

          <Projects projects={RESUME_DATA.projects} />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
