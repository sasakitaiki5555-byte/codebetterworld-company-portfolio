import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { Customers } from "./components/Customers";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BlogDetail } from "./components/BlogDetail";
import { PortfolioDetail } from "./components/PortfolioDetail";
import type { PortfolioProject } from "./data/portfolioData";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    document.title = "Code Better World - Custom Software Development & QA Testing Services";
  }, []);

  const handleBlogClick = (post: BlogPost) => {
    setSelectedBlogPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePortfolioClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromBlog = () => {
    setSelectedBlogPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromPortfolio = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-16">
        {activeTab === "home" && !selectedBlogPost && !selectedProject && (
          <>
            <Hero />
            <Customers />
            <Testimonials />
          </>
        )}
        
        {activeTab === "services" && !selectedBlogPost && !selectedProject && <Services />}
        
        {activeTab === "portfolio" && !selectedProject && !selectedBlogPost && (
          <Portfolio onProjectClick={handlePortfolioClick} />
        )}
        
        {activeTab === "portfolio" && selectedProject && (
          <PortfolioDetail project={selectedProject} onBack={handleBackFromPortfolio} />
        )}
        
        {activeTab === "team" && !selectedBlogPost && !selectedProject && <Team />}
        
        {activeTab === "blog" && !selectedBlogPost && !selectedProject && (
          <Blog onBlogClick={handleBlogClick} />
        )}
        
        {activeTab === "blog" && selectedBlogPost && (
          <BlogDetail post={selectedBlogPost} onBack={handleBackFromBlog} />
        )}
        
        {activeTab === "contact" && !selectedBlogPost && !selectedProject && <Contact />}
      </main>
      
      <Footer />
    </div>
  );
}