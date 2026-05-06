import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FigmaIcon } from "./figma/FigmaIcon";
import { Badge } from "./ui/badge";
import { TechIcon } from "./TechIcon";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useSearchParams } from "react-router-dom";
import {
  customSoftwareProjects,
  figmaPortfolioProjects,
  getMobilePortfolioCardTitle,
  mobileAppPortfolioProjects,
  qaTestingProjects,
  type PortfolioProject,
} from "../data/portfolioData";

interface PortfolioProps {
  onProjectClick: (
    project: PortfolioProject,
    fromTab?: "software" | "figma" | "mobile" | "qa"
  ) => void;
}

function PortfolioProjectCard({
  project,
  onProjectClick,
  variant,
}: {
  project: PortfolioProject;
  onProjectClick: (project: PortfolioProject) => void;
  variant: "software" | "figma" | "mobile" | "qa";
}) {
  const showFigmaUrl = variant === "figma" && project.link;
  const cardTitle =
    variant === "mobile" ? getMobilePortfolioCardTitle(project) : project.title;

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-200"
      onClick={() => onProjectClick(project)}
    >
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={cardTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          <button
            type="button"
            className="px-6 py-2 bg-white text-slate-900 rounded-lg flex items-center gap-2"
          >
            View Project
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-slate-600 mb-2">{project.category}</div>
        <h3 className="text-xl mb-2">{cardTitle}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="secondary"
              className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 border border-slate-200"
            >
              <TechIcon name={tag} className="h-3.5 w-3.5 shrink-0" />
              <span>{tag}</span>
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge
              variant="secondary"
              className="bg-slate-100 text-slate-700 border border-slate-200"
            >
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
        {project.link && (
          <div className="mt-4 space-y-1">
            {showFigmaUrl ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Figma file"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-2.5 shadow-sm transition-colors hover:bg-slate-100 hover:border-slate-300"
                onClick={(e) => e.stopPropagation()}
              >
                <FigmaIcon className="h-6 w-6" />
              </a>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 underline underline-offset-2 hover:text-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                Project link
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Portfolio({ onProjectClick }: PortfolioProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const selectedTab: "software" | "figma" | "mobile" | "qa" =
    tabParam === "figma" || tabParam === "mobile" || tabParam === "qa"
      ? tabParam
      : "software";

  const handleTabChange = (value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value === "figma" || value === "mobile" || value === "qa") next.set("tab", value);
    else next.delete("tab");
    setSearchParams(next, { replace: true });
  };

  const handleProjectOpen = (project: PortfolioProject) => {
    onProjectClick(project, selectedTab);
  };

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Recent projects and success stories
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-12 bg-slate-100">
            <TabsTrigger
              value="software"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-xs sm:text-sm px-2"
            >
              AI Automation
            </TabsTrigger>
            <TabsTrigger
              value="figma"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-xs sm:text-sm px-2"
            >
              Figma Design
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-xs sm:text-sm px-2"
            >
              Mobile Apps
            </TabsTrigger>
            <TabsTrigger
              value="qa"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-xs sm:text-sm px-2"
            >
              QA Testing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customSoftwareProjects.map((project, index) => (
                <PortfolioProjectCard
                  key={project.id || index}
                  project={project}
                  onProjectClick={handleProjectOpen}
                  variant="software"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="figma">
            {figmaPortfolioProjects.length === 0 ? (
              <p className="text-center text-slate-600 py-12">
                No Figma projects in the database yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {figmaPortfolioProjects.map((project, index) => (
                  <PortfolioProjectCard
                    key={project.id || index}
                    project={project}
                    onProjectClick={handleProjectOpen}
                    variant="figma"
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="qa">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaTestingProjects.map((project, index) => (
                <PortfolioProjectCard
                  key={project.id || index}
                  project={project}
                  onProjectClick={handleProjectOpen}
                  variant="qa"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            {mobileAppPortfolioProjects.length === 0 ? (
              <p className="text-center text-slate-600 py-12">
                No mobile app portfolio entries yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mobileAppPortfolioProjects.map((project, index) => (
                  <PortfolioProjectCard
                    key={project.id || index}
                    project={project}
                    onProjectClick={handleProjectOpen}
                    variant="mobile"
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
