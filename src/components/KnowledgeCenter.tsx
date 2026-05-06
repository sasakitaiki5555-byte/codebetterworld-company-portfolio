import { useNavigate } from "react-router-dom";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText, Video, BookOpen, TrendingUp, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MAC_WORKSPACE_IMAGES as MAC } from "../data/macWorkspaceImages";

export const resourceCategories = [
  {
    id: "case-studies",
    title: "Case Studies",
    icon: FileText,
    description: "Real-world success stories and project outcomes",
    count: 25
  },
  {
    id: "blog",
    title: "Dev & QA Tips",
    icon: BookOpen,
    description: "Technical insights and best practices",
    count: 150
  },
  {
    id: "webinars",
    title: "Webinars",
    icon: Video,
    description: "Live sessions and recorded presentations",
    count: 40
  },
  {
    id: "whitepapers",
    title: "White Papers",
    icon: FileText,
    description: "In-depth research and analysis",
    count: 20
  },
  {
    id: "guides",
    title: "Guides & Reports",
    icon: Download,
    description: "Comprehensive guides and industry reports",
    count: 35
  },
  {
    id: "industry-insights",
    title: "Industry Insights",
    icon: TrendingUp,
    description: "Market trends and analysis",
    count: 60
  }
];

export type KnowledgeResourceCategoryPath =
  | "case-studies"
  | "webinars"
  | "whitepapers"
  | "guides"
  | "industry-insights"
  | "blog";

export interface FeaturedResource {
  slug: string;
  type: string;
  title: string;
  description: string;
  /** Longer body shown on the resource detail page */
  content: string;
  image: string;
  category: string;
  readTime: string;
}

const TYPE_TO_CATEGORY: Record<string, KnowledgeResourceCategoryPath> = {
  "Case Study": "case-studies",
  "White Paper": "whitepapers",
  Guide: "guides",
  Webinar: "webinars",
  Blog: "blog",
  "Industry Insight": "industry-insights",
};

export function categoryPathForFeaturedType(type: string): KnowledgeResourceCategoryPath {
  return TYPE_TO_CATEGORY[type] ?? "case-studies";
}

export function hrefForFeaturedResource(resource: FeaturedResource): string {
  const cat = categoryPathForFeaturedType(resource.type);
  const enc = encodeURIComponent(resource.slug);
  return cat === "blog" ? `/blog/${enc}` : `/${cat}/${enc}`;
}

export const featuredResources: FeaturedResource[] = [
  {
    slug: "ai-workflow-automation-productivity",
    type: "Case Study",
    title: "AI Workflow Automation Increases Productivity by 30%",
    description: "How we helped a leading company automate workflows with AI-powered solutions",
    content:
      "This engagement combined workflow discovery, LLM-assisted task automation, and tight feedback loops with stakeholders. Teams reclaimed focused time for product work while repetitive coordination ran reliably in the background. We measured adoption, error rates, and cycle time to prove value and iterated weekly until targets were met.",
    image: MAC.macBookPurple,
    category: "AI & Automation",
    readTime: "8 min read",
  },
  {
    slug: "future-of-software-testing-2025",
    type: "White Paper",
    title: "The Future of Software Testing in 2025",
    description: "Comprehensive analysis of emerging QA trends and technologies",
    content:
      "Quality engineering is shifting toward risk-based automation, AI-assisted test design, and continuous validation in production-like environments. This paper summarizes patterns we see across regulated and high-velocity teams, with practical checklists for tooling, metrics, and org design.",
    image: MAC.macDevIde,
    category: "Quality Assurance",
    readTime: "15 min read",
  },
  {
    slug: "complete-guide-cloud-migration",
    type: "Guide",
    title: "Complete Guide to Cloud Migration",
    description: "Step-by-step strategies for successful cloud transformation",
    content:
      "Move confidently from assessment to cutover: inventory dependencies, define landing zones, automate infrastructure, and validate security and cost controls. We include sequencing for strangler-style refactors and how to keep teams aligned through each wave of migration.",
    image: MAC.macBookDark,
    category: "Cloud Computing",
    readTime: "12 min read",
  },
  {
    slug: "scalable-microservices-architecture-webinar",
    type: "Webinar",
    title: "Building Scalable Microservices Architecture",
    description: "Live session on designing and implementing microservices",
    content:
      "A structured walkthrough of service boundaries, synchronous vs asynchronous integration, observability, and deployment safety. We cover failure modes, scaling patterns, and how to avoid distributed monoliths while still shipping quickly.",
    image: MAC.macBookCode,
    category: "Software Architecture",
    readTime: "45 min",
  },
  {
    slug: "react-performance-best-practices",
    type: "Blog",
    title: "10 Best Practices for React Performance",
    description: "Optimize your React applications for better performance",
    content:
      "From memoization and list virtualization to bundle splitting and server components tradeoffs, this article lists ten high-impact practices we apply on production React codebases—with before/after notes and when not to over-optimize.",
    image: MAC.macBookWood,
    category: "Frontend Development",
    readTime: "6 min read",
  },
  {
    slug: "fintech-innovation-trends-2025",
    type: "Industry Insight",
    title: "FinTech Innovation Trends 2025",
    description: "Key technological advancements shaping the financial sector",
    content:
      "Embedded finance, real-time payments, and AI-driven compliance are reshaping product roadmaps. We highlight signals from the market, partnership models, and what engineering leaders should prepare for in security and data platforms.",
    image: MAC.macBookHands,
    category: "FinTech",
    readTime: "10 min read",
  },
];

export function findFeaturedResource(
  categoryPath: string,
  slug: string
): FeaturedResource | undefined {
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    /* keep raw */
  }
  return featuredResources.find(
    (r) => r.slug === decoded && categoryPathForFeaturedType(r.type) === categoryPath
  );
}

export function KnowledgeCenter() {
  const navigate = useNavigate();

  const goToCategory = (categoryId: string) => {
    if (categoryId === "blog") {
      navigate("/blog");
      return;
    }
    navigate(`/${categoryId}`);
  };

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Knowledge Center</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Insights, guides, and resources to help you stay ahead in technology and software development
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {resourceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                role="button"
                tabIndex={0}
                className="p-6 border-slate-200 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => goToCategory(category.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goToCategory(category.id);
                  }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    {category.count}
                  </Badge>
                </div>
                <h3 className="text-xl mb-2">{category.title}</h3>
                <p className="text-slate-600 text-sm">{category.description}</p>
                <span className="mt-4 inline-block text-slate-900 group-hover:underline text-sm">
                  Explore →
                </span>
              </Card>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card
                key={index}
                role="button"
                tabIndex={0}
                className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => navigate(hrefForFeaturedResource(resource))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(hrefForFeaturedResource(resource));
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-slate-900">
                      {resource.type}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                      {resource.category}
                    </Badge>
                    <span className="text-xs text-slate-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{resource.description}</p>
                  <span className="text-slate-900 group-hover:underline text-sm">Read More →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Stay Updated</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, tips, and industry trends
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <Button className="bg-white text-slate-900 hover:bg-slate-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
