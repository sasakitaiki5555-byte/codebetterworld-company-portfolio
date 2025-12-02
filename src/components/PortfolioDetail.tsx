import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, CheckCircle2, ExternalLink, User, TrendingUp, TrendingDown, Repeat, Heart, CheckCircle, Calendar as CalendarIcon, Headphones, DollarSign, Target, Shield, Zap, Users, Globe, ShoppingCart, Store, Package, Video, Wifi, Star, Activity, Home, Clock, Wrench, Truck, ShoppingBag, GitBranch, Bug, AlertTriangle, AlertOctagon, Check, Database } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import type { PortfolioProject } from "../data/portfolioData";

interface PortfolioDetailProps {
  project: PortfolioProject;
  onBack: () => void;
}

// Icon mapping for stats
const iconMap: Record<string, any> = {
  TrendingUp, TrendingDown, Repeat, Heart, CheckCircle, Calendar: CalendarIcon, 
  Headphones, DollarSign, Target, Shield, Zap, Users, Globe, ShoppingCart, 
  Store, Package, Video, Wifi, Star, Activity, Home, Clock, Wrench, Truck, 
  ShoppingBag, GitBranch, Bug, AlertTriangle, AlertOctagon, Check, Database
};

export function PortfolioDetail({ project, onBack }: PortfolioDetailProps) {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 -ml-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-slate-900 text-white">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
            <p className="text-xl text-slate-600 mb-4">{project.subtitle}</p>
            <p className="text-lg text-slate-700">{project.description}</p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Project Stats - Key Metrics */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6">Key Metrics & Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon] || Star;
                return (
                  <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-slate-700" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-900 mb-2">{stat.label}</div>
                        <div className="text-sm text-slate-600">{stat.description}</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-slate-200">
              <div className="text-sm text-slate-600 mb-2">Duration</div>
              <div className="text-2xl">{project.duration}</div>
            </Card>
            <Card className="p-6 border-slate-200">
              <div className="text-sm text-slate-600 mb-2">Team Size</div>
              <div className="text-2xl">{project.teamSize}</div>
            </Card>
            <Card className="p-6 border-slate-200">
              <div className="text-sm text-slate-600 mb-2">Client</div>
              <div className="text-2xl capitalize">{project.client}</div>
            </Card>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* About the Project */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6">About the Project</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6">The Challenge</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6">Our Solution</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6">Results & Impact</h2>
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-slate-900 flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6">Client Testimonial</h2>
            <Card className="p-8 border-slate-200 bg-slate-50">
              <div className="mb-6">
                <svg className="h-10 w-10 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed italic">
                "{project.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <div className="text-lg">{project.testimonial.author}</div>
                  <div className="text-sm text-slate-600">{project.testimonial.role}</div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-slate-900 rounded-xl text-white text-center">
            <h3 className="text-2xl md:text-3xl mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Contact Us
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              {project.link && (
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Visit Live Site
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
