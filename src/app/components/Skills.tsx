import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type SkillGroups = (typeof RESUME_DATA)["skillGroups"];

interface SkillsProps {
  skillGroups: SkillGroups;
  className?: string;
}

/**
 * Skills section component
 * Renders skills as plain-text "Category: a, b, c" lines so ATS parsers
 * read each skill as a separate, comma-delimited token.
 */
export function Skills({ skillGroups, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <ul
        className={cn("list-none space-y-1 p-0")}
        aria-labelledby="skills-section"
      >
        {skillGroups.map((group) => (
          <li
            key={group.category}
            className="text-sm text-foreground/80 print:text-[10px]"
          >
            <span className="font-semibold text-foreground">
              {group.category}:
            </span>{" "}
            {group.items.join(", ")}
          </li>
        ))}
      </ul>
    </Section>
  );
}
