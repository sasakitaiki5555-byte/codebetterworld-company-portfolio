import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { findFeaturedResource, resourceCategories } from "./KnowledgeCenter";

interface KnowledgeResourceDetailProps {
  categoryId: string;
  slug: string;
}

export function KnowledgeResourceDetail({ categoryId, slug }: KnowledgeResourceDetailProps) {
  const navigate = useNavigate();
  const resource = findFeaturedResource(categoryId, slug);
  const categoryMeta = resourceCategories.find((c) => c.id === categoryId);

  const backHref =
    categoryId === "blog"
      ? "/blog"
      : categoryMeta
        ? `/${categoryId}`
        : "/knowledge-center";

  const backLabel =
    categoryId === "blog"
      ? "Back to Dev & QA Tips"
      : categoryMeta
        ? `Back to ${categoryMeta.title}`
        : "Back to Knowledge Center";

  if (!resource) {
    return (
      <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Button type="button" variant="ghost" className="mb-6" onClick={() => navigate(backHref)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backLabel}
          </Button>
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">Resource not found</h1>
          <p className="text-slate-600">This item may have moved or the link is incorrect.</p>
        </div>
      </section>
    );
  }

  return (
    <article className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button
          type="button"
          variant="ghost"
          className="mb-8 -ml-2 text-slate-700 hover:text-slate-900"
          onClick={() => navigate(backHref)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backLabel}
        </Button>

        <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-800">
          {resource.type}
        </Badge>
        <h1 className="text-4xl md:text-5xl mb-4">{resource.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mb-8">
          <Badge variant="outline" className="border-slate-200">
            {resource.category}
          </Badge>
          <span>{resource.readTime}</span>
        </div>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-10 border border-slate-200">
          <ImageWithFallback
            src={resource.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xl text-slate-600 mb-8">{resource.description}</p>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">{resource.content}</p>
        </div>
      </div>
    </article>
  );
}
