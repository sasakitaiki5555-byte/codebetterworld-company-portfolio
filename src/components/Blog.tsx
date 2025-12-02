import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const softwareBlogPosts = [
  {
    title: "The Future of Custom Software Development in 2024",
    excerpt: "Explore the emerging trends and technologies shaping custom software development, from AI integration to low-code platforms.",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MzM2ODkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Sarah Chen",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    category: "Development Trends",
    tags: ["AI", "Custom Development", "Innovation"]
  },
  {
    title: "Building Scalable Cloud-Native Applications",
    excerpt: "Learn best practices for developing applications that leverage cloud infrastructure for maximum scalability and reliability.",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjk2NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Michael Rodriguez",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Scalability", "Architecture"]
  },
  {
    title: "Agile Development: Best Practices for Modern Teams",
    excerpt: "Discover how agile methodologies can improve team collaboration, product quality, and time-to-market for your software projects.",
    image: "https://images.unsplash.com/photo-1732209556962-df3c1334bc47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjMzNjg5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Emily Thompson",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    category: "Methodologies",
    tags: ["Agile", "Scrum", "Team Management"]
  },
  {
    title: "Mobile App Development: iOS vs Android Strategies",
    excerpt: "A comprehensive guide to choosing the right mobile development approach for your business needs and target audience.",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjMyOTQ4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "David Park",
    date: "Oct 28, 2024",
    readTime: "12 min read",
    category: "Mobile Development",
    tags: ["iOS", "Android", "Mobile"]
  },
  {
    title: "Microservices Architecture: When and How to Implement",
    excerpt: "Understanding the benefits and challenges of microservices architecture and when it's the right choice for your project.",
    image: "https://images.unsplash.com/photo-1629409669372-e326fb4253c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcGlwZWxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2MzM2ODkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Alex Johnson",
    date: "Oct 22, 2024",
    readTime: "9 min read",
    category: "Architecture",
    tags: ["Microservices", "Backend", "DevOps"]
  },
  {
    title: "API Design Best Practices for Modern Applications",
    excerpt: "Learn how to design robust, scalable, and developer-friendly APIs that stand the test of time.",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MzM2ODkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Lisa Martinez",
    date: "Oct 15, 2024",
    readTime: "7 min read",
    category: "API Development",
    tags: ["API", "REST", "GraphQL"]
  }
];

const qaBlogPosts = [
  {
    title: "Test Automation: ROI and Implementation Strategies",
    excerpt: "Discover how to maximize return on investment in test automation and implement effective strategies for your QA team.",
    image: "https://images.unsplash.com/photo-1599652749620-e45b7f38988e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjMzNjg5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Jennifer Wang",
    date: "Nov 12, 2024",
    readTime: "11 min read",
    category: "Test Automation",
    tags: ["Automation", "ROI", "Strategy"]
  },
  {
    title: "Security Testing in the Age of Cyber Threats",
    excerpt: "Essential security testing practices to protect your applications from modern cyber threats and vulnerabilities.",
    image: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlc3RpbmclMjBjeWJlcnxlbnwxfHx8fDE3NjMzNjg5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Robert Kumar",
    date: "Nov 8, 2024",
    readTime: "10 min read",
    category: "Security Testing",
    tags: ["Security", "Penetration Testing", "Vulnerabilities"]
  },
  {
    title: "Performance Testing: Ensuring Your App Can Scale",
    excerpt: "Learn how to conduct effective performance testing to ensure your application can handle peak traffic and user loads.",
    image: "https://images.unsplash.com/photo-1584188335984-7781d3194e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGJ1ZyUyMHRlc3Rpbmd8ZW58MXx8fHwxNzYzMzY4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Amanda Foster",
    date: "Nov 3, 2024",
    readTime: "9 min read",
    category: "Performance Testing",
    tags: ["Performance", "Load Testing", "Optimization"]
  },
  {
    title: "Continuous Testing in DevOps Pipelines",
    excerpt: "Integrate continuous testing into your DevOps workflow for faster releases and higher quality software.",
    image: "https://images.unsplash.com/photo-1629409669372-e326fb4253c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcGlwZWxpbmUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2MzM2ODkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Carlos Mendez",
    date: "Oct 30, 2024",
    readTime: "8 min read",
    category: "DevOps Testing",
    tags: ["CI/CD", "DevOps", "Automation"]
  },
  {
    title: "Mobile App Testing: Challenges and Solutions",
    excerpt: "Navigate the complexities of mobile app testing across different devices, platforms, and network conditions.",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjMyOTQ4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Priya Sharma",
    date: "Oct 25, 2024",
    readTime: "10 min read",
    category: "Mobile Testing",
    tags: ["Mobile", "Cross-Platform", "Testing"]
  },
  {
    title: "AI-Powered Testing: The Future of QA",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing software testing and quality assurance.",
    image: "https://images.unsplash.com/photo-1599652749620-e45b7f38988e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjMzNjg5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Thomas Wright",
    date: "Oct 18, 2024",
    readTime: "12 min read",
    category: "AI Testing",
    tags: ["AI", "Machine Learning", "Innovation"]
  }
];

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

interface BlogProps {
  onBlogClick: (post: BlogPost) => void;
}

export function Blog({ onBlogClick }: BlogProps) {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Latest Insights</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert insights in software development and QA testing
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
                      
                      <Button variant="ghost" size="sm" className="text-slate-900 hover:text-slate-700">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
                      
                      <Button variant="ghost" size="sm" className="text-slate-900 hover:text-slate-700">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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