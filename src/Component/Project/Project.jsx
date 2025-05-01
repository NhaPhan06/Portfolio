import GradientText from "../../lib/GradientText/GradientText";
import ProjectCard from "./ProjectCard";
import { ChevronRight, ChevronsRight } from "lucide-react";

export default function Project() {
  return (
    <section
      id="project"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-10"
    >
      <div>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="custom-class text-3xl md:text-6xl mb-6 md:mb-10 text-center"
        >
          Project
        </GradientText>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        <ProjectCard
          title="Document Management System"
          description="An internal tool to create, manage, and archive documents for notary offices."
          technologies={[".NET 8", "WPF", "MySQL", "Docker", "Python"]}
          imageUrl="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop"
          link="https://github.com/yourprojectrepo"
        />
        <ProjectCard
          title="Document Management System"
          description="An internal tool to create, manage, and archive documents for notary offices."
          technologies={[".NET 8", "WPF", "MySQL", "Docker", "Python"]}
          imageUrl="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop"
          link="https://github.com/yourprojectrepo"
        />
        <ProjectCard
          title="Document Management System"
          description="An internal tool to create, manage, and archive documents for notary offices."
          technologies={[".NET 8", "WPF", "MySQL", "Docker", "Python"]}
          imageUrl="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop"
          link="https://github.com/yourprojectrepo"
        />
      </div>
    </section>
  );
}
