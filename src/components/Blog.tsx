import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MAC_WORKSPACE_IMAGES as MAC } from "../data/macWorkspaceImages";
import { useSearchParams } from "react-router-dom";

const softwareBlogPosts = [
  {
    title: "Custom Software Development Trends in 2026",
    excerpt: "A practical look at the most impactful custom software trends in 2026, from AI-assisted delivery to platform engineering and faster release cycles.",
    image: MAC.macBookPurple,
    author: "Brandon Caron",
    date: "Apr 12, 2026",
    readTime: "8 min read",
    category: "Development Trends",
    tags: ["AI", "Custom Development", "Innovation"]
  },
  {
    title: "Building Scalable Cloud-Native Applications",
    excerpt: "Updated 2026 playbook for cloud-native delivery, covering autoscaling, observability, and resilient service design for high-growth products.",
    image: MAC.macBookDark,
    author: "Austin James",
    date: "Apr 8, 2026",
    readTime: "10 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Scalability", "Architecture"]
  },
  {
    title: "Agile Development: Best Practices for Modern Teams",
    excerpt: "Current agile practices for 2026 teams: outcome-based sprint goals, faster feedback loops, and predictable delivery across distributed squads.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
    author: "Mykola Bukhta",
    date: "Apr 4, 2026",
    readTime: "6 min read",
    category: "Methodologies",
    tags: ["Agile", "Scrum", "Team Management"]
  },
  {
    title: "Mobile App Development: iOS vs Android Strategies",
    excerpt: "A 2026 decision guide for iOS vs Android strategy, balancing market reach, release velocity, and long-term maintenance cost.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=85",
    author: "David Park",
    date: "Mar 30, 2026",
    readTime: "12 min read",
    category: "Mobile Development",
    tags: ["iOS", "Android", "Mobile"]
  },
  {
    title: "Microservices Architecture: When and How to Implement",
    excerpt: "Practical guidance on when microservices are worth it in 2026, including migration sequencing, service boundaries, and operational readiness.",
    image: MAC.macBookCode,
    author: "Alex Johnson",
    date: "Mar 25, 2026",
    readTime: "9 min read",
    category: "Architecture",
    tags: ["Microservices", "Backend", "DevOps"]
  },
  {
    title: "API Design Best Practices for Modern Applications",
    excerpt: "Modern API design standards for 2026 products: secure defaults, contract evolution, and developer-first integrations at scale.",
    image: MAC.macDevIde,
    author: "Lisa Martinez",
    date: "Mar 20, 2026",
    readTime: "7 min read",
    category: "API Development",
    tags: ["API", "REST", "GraphQL"]
  }
];

const qaBlogPosts = [
  {
    title: "Test Automation: ROI and Implementation Strategies",
    excerpt: "How QA leaders in 2026 measure automation ROI with stable pipelines, risk-based coverage, and faster release confidence.",
    image: MAC.macBookHands,
    author: "Jennifer Wang",
    date: "Apr 11, 2026",
    readTime: "11 min read",
    category: "Test Automation",
    tags: ["Automation", "ROI", "Strategy"]
  },
  {
    title: "Security Testing in the Age of Cyber Threats",
    excerpt: "2026 security testing priorities for product teams, from shift-left threat modeling to continuous validation of critical attack paths.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=85",
    author: "Robert Kumar",
    date: "Apr 7, 2026",
    readTime: "10 min read",
    category: "Security Testing",
    tags: ["Security", "Penetration Testing", "Vulnerabilities"]
  },
  {
    title: "Performance Testing: Ensuring Your App Can Scale",
    excerpt: "Current performance engineering approach for 2026 apps: realistic workload modeling, SLO-driven testing, and proactive bottleneck analysis.",
    image: MAC.iMacDesk,
    author: "Amanda Foster",
    date: "Apr 2, 2026",
    readTime: "9 min read",
    category: "Performance Testing",
    tags: ["Performance", "Load Testing", "Optimization"]
  },
  {
    title: "Continuous Testing in DevOps Pipelines",
    excerpt: "A practical 2026 framework for continuous testing in CI/CD, reducing flaky builds while improving release speed and quality.",
    image: MAC.macBookWood,
    author: "Carlos Mendez",
    date: "Mar 28, 2026",
    readTime: "8 min read",
    category: "DevOps Testing",
    tags: ["CI/CD", "DevOps", "Automation"]
  },
  {
    title: "Mobile App Testing: Challenges and Solutions",
    excerpt: "Field-tested 2026 strategies for mobile testing across fragmented devices, OS versions, and real-world network variability.",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1600&q=85",
    author: "Priya Sharma",
    date: "Mar 23, 2026",
    readTime: "10 min read",
    category: "Mobile Testing",
    tags: ["Mobile", "Cross-Platform", "Testing"]
  },
  {
    title: "AI-Powered Testing: The Future of QA",
    excerpt: "How teams are applying AI in QA in 2026 for smarter test generation, failure triage, and faster feedback cycles.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    author: "Thomas Wright",
    date: "Mar 18, 2026",
    readTime: "12 min read",
    category: "AI Testing",
    tags: ["AI", "Machine Learning", "Innovation"]
  }
];

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const allBlogPosts: BlogPost[] = [...softwareBlogPosts, ...qaBlogPosts];

interface BlogProps {
  onBlogClick: (post: BlogPost) => void;
}

export function Blog({ onBlogClick }: BlogProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const selectedTab = tabParam === "qa" ? "qa" : "software";

  const handleTabChange = (value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value === "qa") next.set("tab", "qa");
    else next.delete("tab");
    setSearchParams(next, { replace: true });
  };

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Latest Insights</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert insights in software development and QA testing
          </p>
        </div>
        
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
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
              {softwareBlogPosts.map((post, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-md transition-shadow group cursor-pointer border-slate-200"
                  onClick={() => onBlogClick(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-slate-900 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl mb-3 group-hover:text-slate-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <span className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700 text-xs border border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="qa">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaBlogPosts.map((post, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-md transition-shadow group cursor-pointer border-slate-200"
                  onClick={() => onBlogClick(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-slate-900 text-white">{post.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl mb-3 group-hover:text-slate-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <span className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700 text-xs border border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}