import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MAC_WORKSPACE_IMAGES } from "../data/macWorkspaceImages";

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

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

function resolveBlogHeaderImage(post: BlogPost) {
  if (post.title === "Mobile App Development: iOS vs Android Strategies") {
    return "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=85";
  }
  return post.image;
}

function getBlogArticleContent(post: BlogPost) {
  const softwareContentByTitle: Record<string, Array<Record<string, unknown>>> = {
    "Custom Software Development Trends in 2026": [
      { type: "paragraph", content: post.excerpt },
      { type: "heading", content: "What Is Changing Fast" },
      {
        type: "paragraph",
        content:
          "Custom software programs are shifting from long release cycles to continuous delivery. Teams now combine AI-assisted development, platform engineering, and product analytics to ship value faster and reduce rework.",
      },
      {
        type: "list",
        items: [
          "AI copilots accelerate code generation and test scaffolding",
          "Composable architecture reduces vendor lock-in risk",
          "Platform teams improve consistency across multiple products",
          "Product analytics drive roadmap decisions with real usage data",
        ],
      },
      { type: "heading", content: "Execution Priorities for Teams" },
      {
        type: "paragraph",
        content:
          "Start with measurable outcomes instead of tooling trends. Successful engineering leaders align architecture with business goals, invest in developer experience, and keep security integrated in every pipeline step.",
      },
    ],
    "Building Scalable Cloud-Native Applications": [
      { type: "paragraph", content: post.excerpt },
      { type: "heading", content: "Design for Elastic Growth" },
      {
        type: "paragraph",
        content:
          "Scalable cloud-native systems are built around stateless services, event-driven communication, and infrastructure automation. This approach allows products to handle traffic spikes without degrading user experience.",
      },
      {
        type: "list",
        items: [
          "Use autoscaling and horizontal pod strategies by workload profile",
          "Separate read/write paths for high-throughput APIs",
          "Design idempotent jobs to handle retries safely",
          "Track SLOs and error budgets per service boundary",
        ],
      },
      { type: "heading", content: "Reliability as a Feature" },
      {
        type: "paragraph",
        content:
          "Cloud-native success depends on observability and resilience patterns. Circuit breakers, graceful degradation, and proactive incident practice help teams maintain uptime while shipping quickly.",
      },
    ],
    "Agile Development: Best Practices for Modern Teams": [
      { type: "paragraph", content: post.excerpt },
      { type: "heading", content: "From Process to Product Outcomes" },
      {
        type: "paragraph",
        content:
          "High-performing agile teams focus less on ceremonies and more on customer outcomes. They keep feedback loops short, prioritize cross-functional ownership, and continuously refine backlog quality.",
      },
      {
        type: "list",
        items: [
          "Define sprint goals tied to measurable customer value",
          "Break epics into slices that can be validated quickly",
          "Use retrospectives to improve one team habit every sprint",
          "Include QA and design in planning from day one",
        ],
      },
      { type: "heading", content: "Scaling Without Losing Agility" },
      {
        type: "paragraph",
        content:
          "As teams grow, alignment becomes the main challenge. Shared definitions of done, stable release cadence, and transparent dependency tracking keep delivery predictable without introducing heavy bureaucracy.",
      },
    ],
    "Mobile App Development: iOS vs Android Strategies": [
      { type: "paragraph", content: post.excerpt },
      { type: "heading", content: "Choosing the Right Starting Point" },
      {
        type: "paragraph",
        content:
          "Platform strategy should be driven by market, users, and business constraints. iOS often leads in monetization in some regions, while Android can provide broader reach and hardware diversity.",
      },
      {
        type: "list",
        items: [
          "Validate audience device distribution before implementation",
          "Set platform-specific performance budgets and crash goals",
          "Align release plans with App Store and Play Store policies",
          "Use shared domain logic only where it reduces real complexity",
        ],
      },
      { type: "heading", content: "Native, Cross-Platform, or Hybrid" },
      {
        type: "paragraph",
        content:
          "There is no universal best choice. Native offers deeper platform integration, while cross-platform can reduce duplicate effort. Teams should evaluate long-term maintenance cost, UX expectations, and roadmap speed.",
      },
    ],
    "Microservices Architecture: When and How to Implement": [
      { type: "paragraph", content: post.excerpt },
      { type: "heading", content: "When Microservices Make Sense" },
      {
        type: "paragraph",
        content:
          "Microservices are effective when teams need independent deployability, varied scaling profiles, or bounded domain ownership. They are less useful when product scope is still volatile and team size is small.",
      },
      {
        type: "list",
        items: [
          "Start from clear domain boundaries, not technical layers",
          "Introduce async messaging for loose coupling where appropriate",
          "Standardize service contracts and versioning rules",
          "Invest early in observability and operational playbooks",
        ],
      },
      { type: "heading", content: "Migration Approach" },
      {
        type: "paragraph",
        content:
          "A strangler pattern reduces migration risk: extract one domain at a time, monitor performance and error rates, then expand. This keeps user-facing stability while modernizing incrementally.",
      },
    ],
    "API Design Best Practices for Modern Applications": [
      { type: "paragraph", content: post.excerpt },
      { type: "heading", content: "Design for Consumers First" },
      {
        type: "paragraph",
        content:
          "Great APIs are predictable, secure, and easy to evolve. Teams should optimize for real client workflows with clear naming, stable contracts, and meaningful errors that speed up integration.",
      },
      {
        type: "list",
        items: [
          "Keep resource models consistent across services",
          "Version intentionally and deprecate with clear timelines",
          "Provide pagination, filtering, and idempotency by default",
          "Use structured error codes and actionable messages",
        ],
      },
      { type: "heading", content: "Operational Excellence" },
      {
        type: "paragraph",
        content:
          "API reliability requires rate limiting, auth hardening, and contract testing in CI. Publish concise documentation and examples so partners can integrate quickly with minimal support overhead.",
      },
    ],
  };

  return (
    softwareContentByTitle[post.title] ?? [
      { type: "paragraph", content: post.excerpt },
      { type: "heading", content: "Introduction" },
      {
        type: "paragraph",
        content:
          "In today's rapidly evolving technological landscape, staying ahead of the curve is essential for businesses looking to maintain a competitive edge.",
      },
      { type: "heading", content: "Key Insights" },
      {
        type: "list",
        items: [
          "Build clear goals and measurable outcomes",
          "Encourage cross-functional collaboration",
          "Continuously improve delivery and quality practices",
        ],
      },
    ]
  );
}

export function BlogDetail({ post, onBack }: BlogDetailProps) {
  const fullContent = getBlogArticleContent(post);

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 -ml-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-slate-900 text-white">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-slate-300">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src={resolveBlogHeaderImage(post)}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-slate max-w-none">
            {fullContent.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h2 key={index} className="text-3xl mt-12 mb-4">
                    {section.content}
                  </h2>
                );
              }
              if (section.type === "figure" && "src" in section && section.src) {
                return (
                  <figure key={index} className="my-10 not-prose">
                    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                      <ImageWithFallback
                        src={section.src}
                        alt="MacBook workspace with modern development setup"
                        className="w-full h-auto max-h-[420px] object-cover"
                      />
                    </div>
                    {"caption" in section && section.caption ? (
                      <figcaption className="mt-3 text-center text-sm text-slate-500">
                        {section.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }
              if (section.type === "paragraph") {
                return (
                  <p key={index} className="text-lg text-slate-700 mb-6 leading-relaxed">
                    {section.content}
                  </p>
                );
              }
              if (section.type === "list" && section.items) {
                return (
                  <ul key={index} className="mb-8 space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-lg text-slate-700 flex items-start gap-3">
                        <span className="text-slate-400 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl mb-2">About {post.author}</h3>
                <p className="text-slate-600">
                  {post.author} shares practical guidance from recent software delivery and QA engagements, with a focus on modern engineering practices teams are applying today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
