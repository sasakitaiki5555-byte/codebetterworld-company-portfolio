import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  resourceCategories,
  featuredResources,
  hrefForFeaturedResource,
} from "./KnowledgeCenter";

export type KnowledgeCenterDetailCategoryId =
  | "case-studies"
  | "webinars"
  | "whitepapers"
  | "guides"
  | "industry-insights";

const RESOURCE_TYPE_BY_CATEGORY: Record<KnowledgeCenterDetailCategoryId, string[]> = {
  "case-studies": ["Case Study"],
  webinars: ["Webinar"],
  whitepapers: ["White Paper"],
  guides: ["Guide"],
  "industry-insights": ["Industry Insight"],
};

interface KnowledgeCenterCategoryDetailProps {
  categoryId: KnowledgeCenterDetailCategoryId;
}

export function KnowledgeCenterCategoryDetail({
  categoryId,
}: KnowledgeCenterCategoryDetailProps) {
  const navigate = useNavigate();
  const meta = resourceCategories.find((c) => c.id === categoryId);
  const title = meta?.title ?? categoryId;
  const description = meta?.description ?? "";
  const types = RESOURCE_TYPE_BY_CATEGORY[categoryId];
  const items = featuredResources.filter((r) => types.includes(r.type));

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button
          type="button"
          variant="ghost"
          className="mb-8 -ml-2 text-slate-700 hover:text-slate-900"
          onClick={() => navigate("/knowledge-center")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Knowledge Center
        </Button>

        <div className="mb-12">
          <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-800">
            Knowledge Center
          </Badge>
          <h1 className="text-4xl md:text-5xl mb-4">{title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl">{description}</p>
          {meta && (
            <p className="mt-4 text-slate-600">
              Featured {title.toLowerCase()} from our library—curated highlights below.
            </p>
          )}
        </div>

        {items.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((resource, index) => (
              <Card
                key={index}
                role="button"
                tabIndex={0}
                className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
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
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-slate-900">{resource.type}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                      {resource.category}
                    </Badge>
                    <span className="text-xs text-slate-500">{resource.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
                  <p className="text-sm text-slate-600">{resource.description}</p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-slate-600 text-center py-12 border border-dashed border-slate-200 rounded-xl">
            More resources in this category are on the way.
          </p>
        )}
      </div>
    </section>
  );
}
