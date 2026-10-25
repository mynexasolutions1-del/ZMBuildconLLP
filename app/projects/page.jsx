import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBand from "@/components/CtaBand";
import { homes } from "@/lib/data";

export const metadata = {
  title: "Our Projects",
  description:
    "Explore bungalows, interiors, turnkey and construction projects by Z&M Buildcon LLP across Gujarat.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        title={
          <>
            Our Featured
            <br />
            Projects
          </>
        }
        subtitle="Bungalows, interiors and turnkey projects delivered with quality materials, honest pricing and on-time handover."
        image={homes[3].image}
      />
      <ProjectsGrid />
      <CtaBand
        title="Want your project to be our next success story?"
        text="Share your plot details and budget. We will suggest the best plan and give you a clear, transparent estimate."
      />
    </>
  );
}
