import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { customSoftwareProjects, qaTestingProjects, type PortfolioProject } from "../data/portfolioData";

interface PortfolioProps {
  onProjectClick: (project: PortfolioProject) => void;
}

export function Portfolio({ onProjectClick }: PortfolioProps) {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Recent projects and success stories
          </p>
        </div>
        
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-100">
            <TabsTrigger value="software" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white">
              Software Development
            </TabsTrigger>
            <TabsTrigger value="qa" className="data-[state=active]:bg-slate-900 data-[state=active]:text-white">
              QA Testing
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="software">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customSoftwareProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-200"
                  onClick={() => onProjectClick(project)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <button className="px-6 py-2 bg-white text-slate-900 rounded-lg flex items-center gap-2">
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-slate-600 mb-2">{project.category}</div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="qa">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaTestingProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-200"
                  onClick={() => onProjectClick(project)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <button className="px-6 py-2 bg-white text-slate-900 rounded-lg flex items-center gap-2">
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-slate-600 mb-2">{project.category}</div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
