import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MegaNavigation } from "./components/MegaNavigation";
import { ComprehensiveServices } from "./components/ComprehensiveServices";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BlogDetail } from "./components/BlogDetail";
import { PortfolioDetail } from "./components/PortfolioDetail";
import { Careers } from "./components/Careers";
import {
  About,
  AboutCulturePage,
  AboutLeadershipPage,
  AboutTechTalentPage,
} from "./components/About";
import { ComprehensiveIndustries } from "./components/ComprehensiveIndustries";
import { FAQ } from "./components/FAQ";
import { TechnologiesPage } from "./components/TechnologiesPage";
import { KnowledgeCenter } from "./components/KnowledgeCenter";
import {
  KnowledgeCenterCategoryDetail,
  type KnowledgeCenterDetailCategoryId,
} from "./components/KnowledgeCenterCategoryDetail";
import { KnowledgeResourceDetail } from "./components/KnowledgeResourceDetail";
import type { PortfolioProject } from "./data/portfolioData";
import type { BlogPost } from "./components/Blog";
import { resolveRoute } from "./routeUtils";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const { activeTab, portfolioProject, blogPost, knowledgeResource } = useMemo(
    () => resolveRoute(location.pathname),
    [location.pathname]
  );

  const isHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    document.title =
      "Code Better World - Custom Software Development & QA Testing Services";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const handleBlogClick = (post: BlogPost) => {
    navigate(`/blog/post/${encodeURIComponent(post.title)}`);
  };

  const handlePortfolioClick = (
    project: PortfolioProject,
    fromTab?: "software" | "figma" | "mobile" | "qa"
  ) => {
    const tabQuery = fromTab && fromTab !== "software" ? `?tab=${fromTab}` : "";
    navigate(`/portfolio/${encodeURIComponent(project.id)}${tabQuery}`);
  };

  const goBackOrFallback = (fallbackPath: string) => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(fallbackPath);
  };

  const handleBackFromBlog = () => {
    const prefersQaTab = blogPost?.category.toLowerCase().includes("testing");
    goBackOrFallback(prefersQaTab ? "/blog?tab=qa" : "/blog");
  };

  const handleBackFromPortfolio = () => {
    const tabParam = new URLSearchParams(location.search).get("tab");
    const isValidTab =
      tabParam === "software" ||
      tabParam === "figma" ||
      tabParam === "mobile" ||
      tabParam === "qa";
    goBackOrFallback(isValidTab && tabParam !== "software" ? `/portfolio?tab=${tabParam}` : "/portfolio");
  };

  const homeNavigationItems = [
    {
      title: "Services",
      path: "/services",
      description: "Custom software, QA testing, AI, and digital solutions.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Industries",
      path: "/industries",
      description: "Solutions by domain: healthcare, fintech, retail, and more.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
      description: "See our delivered projects and real client outcomes.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Technologies",
      path: "/technologies",
      description: "Frameworks, platforms, and tools used by our team.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Blog",
      path: "/blog",
      description: "Articles, engineering insights, and company updates.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Contact",
      path: "/contact",
      description: "Talk to our team about your project requirements.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50">
      <MegaNavigation />

      <main className="pt-16">
        {/* Home Section */}
        {isHome && (
          <section className="mx-auto max-w-7xl px-6 py-16 md:py-32">
            <div className="mb-20 text-center">
              <h1
                className="text-4xl text-slate-900 md:text-6xl"
                style={{ fontWeight: 700, lineHeight: 1.08 }}
              >
                Explore Code Better World
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-slate-600">
                If you think you have great ideas and marketing skills, please
                contact us. Working with excellent business people is our main
                principle.
              </p>
            </div>

            <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {homeNavigationItems.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => navigate(item.path)}
                  aria-label={`${item.title}: ${item.description}`}
                  className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  style={{
                    padding: 0,
                    height: "clamp(18rem, 42vw, 28rem)",
                    minHeight: "18rem",
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="relative z-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  {/* Fade in on hover — uses utilities present in bundled index.css */}
                  <div
                    className="pointer-events-none absolute inset-0 z-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
                      aria-hidden
                    />
                    <div
                      className="absolute left-0 right-0 px-4 py-4 text-left"
                      style={{ bottom: 0 }}
                    >
                      <div
                        className="rounded-xl border-2 border-white bg-slate-900 px-6 py-4 shadow-xl"
                        style={{
                          boxShadow: "0 8px 32px rgba(0,0,0,0.65)",
                        }}
                      >
                        <p className="text-2xl leading-tight text-white md:text-3xl">
                          <strong>{item.title}</strong>
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-white md:text-lg">
                          {item.description}
                        </p>
                        <p
                          className="mt-3 text-lg underline"
                          style={{
                            color: "#fde68a",
                            textDecorationThickness: "2px",
                            textUnderlineOffset: "5px",
                            textDecorationColor: "rgba(253, 224, 147, 0.9)",
                          }}
                        >
                          Go to {item.title} →
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Team Section */}
        {activeTab === "team" && <Team />}
        {activeTab === "our-team" && <Team />}
        {activeTab === "careers" && <Careers />}
        {activeTab === "contact" && <Contact />}
        {(activeTab === "blog" || activeTab === "tech-blog") &&
          !blogPost &&
          !knowledgeResource && <Blog onBlogClick={handleBlogClick} />}
        {activeTab === "ebooks" && <KnowledgeCenter />}
        {activeTab === "journey" && <About />}

        {/* Industries Section */}
        {(activeTab === "industries" ||
          [
            "aviation",
            "banking",
            "insurtech",
            "healthcare",
            "finance",
            "pharmaceutical",
            "ecommerce",
            "edtech",
            "legaltech",
            "realestate",
            "retail",
            "supplychain",
            "travel",
            "automotive",
            "entertainment",
            "energy",
            "telecom",
            "lifesciences",
          ].includes(activeTab)) && <ComprehensiveIndustries />}

        {/* Technologies Section */}
        {(activeTab === "technologies" ||
          [
            "backend",
            "frontend",
            "mobile",
            "devops",
            "ai-automation",
            "blockchain",
            "platforms",
            "generative-ai",
          ].includes(activeTab)) && (
          <TechnologiesPage
            selectedTech={
              [
                "backend",
                "frontend",
                "mobile",
                "devops",
                "ai-automation",
                "blockchain",
                "platforms",
                "generative-ai",
              ].includes(activeTab)
                ? activeTab
                : undefined
            }
          />
        )}

        {/* Services Section */}
        {(activeTab === "services" ||
          [
            "software-engineering",
            "ai-innovation",
            "quality-engineering",
            "testing-services",
            "business-digitalization",
            "strategy-advisory",
            "cybersecurity",
            "operations-support",
            "design-services",
            "iot-services",
          ].includes(activeTab)) && (
          <ComprehensiveServices
            selectedService={
              [
                "software-engineering",
                "ai-innovation",
                "quality-engineering",
                "testing-services",
                "business-digitalization",
                "strategy-advisory",
                "cybersecurity",
                "operations-support",
                "design-services",
                "iot-services",
              ].includes(activeTab)
                ? activeTab
                : undefined
            }
          />
        )}

        {/* Portfolio Section */}
        {activeTab === "portfolio" &&
          (portfolioProject ? (
            <PortfolioDetail
              project={portfolioProject}
              onBack={handleBackFromPortfolio}
            />
          ) : (
            <Portfolio onProjectClick={handlePortfolioClick} />
          ))}

        {/* Knowledge Center hub */}
        {activeTab === "knowledge-center" && <KnowledgeCenter />}

        {/* Knowledge Center category listing */}
        {(activeTab === "case-studies" ||
          activeTab === "webinars" ||
          activeTab === "whitepapers" ||
          activeTab === "guides" ||
          activeTab === "industry-insights") &&
          !knowledgeResource && (
            <KnowledgeCenterCategoryDetail
              categoryId={activeTab as KnowledgeCenterDetailCategoryId}
            />
          )}

        {/* Featured resource detail (slug under category or /blog/:slug) */}
        {knowledgeResource && (
          <KnowledgeResourceDetail
            categoryId={knowledgeResource.categoryId}
            slug={knowledgeResource.slug}
          />
        )}

        {/* About Section */}
        {activeTab === "about" && <About />}
        {activeTab === "leadership" && <AboutLeadershipPage />}
        {activeTab === "tech-talent" && <AboutTechTalentPage />}
        {activeTab === "culture" && <AboutCulturePage />}
        {activeTab === "faq" && <FAQ />}

        {/* Blog Detail */}
        {blogPost && (
          <BlogDetail post={blogPost} onBack={handleBackFromBlog} />
        )}
      </main>

      <Footer />
    </div>
  );
}
