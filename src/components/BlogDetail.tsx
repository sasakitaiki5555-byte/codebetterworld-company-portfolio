import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

export function BlogDetail({ post, onBack }: BlogDetailProps) {
  // Mock full article content
  const fullContent = [
    {
      type: "paragraph",
      content: post.excerpt
    },
    {
      type: "heading",
      content: "Introduction"
    },
    {
      type: "paragraph",
      content: "In today's rapidly evolving technological landscape, staying ahead of the curve is essential for businesses looking to maintain a competitive edge. This article explores the key insights and practical strategies that have proven successful across numerous projects and implementations."
    },
    {
      type: "heading",
      content: "Key Insights"
    },
    {
      type: "paragraph",
      content: "Through extensive research and hands-on experience, we've identified several critical factors that contribute to success in this domain. Understanding these principles is fundamental to achieving optimal results and avoiding common pitfalls that many organizations encounter."
    },
    {
      type: "list",
      items: [
        "Strategic planning and clear objectives are essential from the outset",
        "Team collaboration and communication drive better outcomes",
        "Continuous learning and adaptation to new technologies",
        "Measuring success through meaningful metrics and KPIs",
        "Balancing innovation with practical implementation"
      ]
    },
    {
      type: "heading",
      content: "Best Practices"
    },
    {
      type: "paragraph",
      content: "Implementing these best practices can significantly improve your project outcomes and team efficiency. Our experience has shown that organizations following these guidelines achieve better results faster and with fewer complications along the way."
    },
    {
      type: "paragraph",
      content: "One of the most important aspects is maintaining flexibility while adhering to core principles. This balance allows teams to adapt to changing requirements without losing sight of their primary objectives."
    },
    {
      type: "heading",
      content: "Conclusion"
    },
    {
      type: "paragraph",
      content: "As we look to the future, the importance of these principles will only continue to grow. By staying informed, embracing new methodologies, and learning from both successes and challenges, organizations can position themselves for long-term success in an increasingly competitive market."
    }
  ];

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
              src={post.image}
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
                  {post.author} is a technology expert and thought leader with years of experience in software development and quality assurance. They regularly contribute insights on industry best practices and emerging trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
