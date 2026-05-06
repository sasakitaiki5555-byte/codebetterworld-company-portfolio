import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { navigationHighlightId, tabToPath } from "../routeUtils";

export function MegaNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeNavId = navigationHighlightId(location.pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      items: []
    },
    {
      id: "industries",
      label: "Industries",
      items: [
        { id: "aviation", label: "Aviation" },
        { id: "banking", label: "Banking" },
        { id: "insurtech", label: "InsurTech" },
        { id: "healthcare", label: "Healthcare" },
        { id: "finance", label: "Financial Services" },
        { id: "pharmaceutical", label: "Pharmaceutical" },
        { id: "ecommerce", label: "E-Commerce" },
        { id: "edtech", label: "Education & E-learning" },
        { id: "legaltech", label: "Legal Tech" },
        { id: "realestate", label: "Real Estate" },
        { id: "retail", label: "Retail" },
        { id: "supplychain", label: "Supply Chain" },
        { id: "travel", label: "Travel & Hospitality" },
        { id: "automotive", label: "Automotive" },
        { id: "entertainment", label: "Entertainment" },
        { id: "energy", label: "Energy & Oil/Gas" },
        { id: "telecom", label: "Telecom" },
        { id: "lifesciences", label: "Life Sciences" }
      ]
    },
    {
      id: "technologies",
      label: "Technologies",
      items: [
        { id: "backend", label: "Backend Development" },
        { id: "frontend", label: "Frontend Development" },
        { id: "mobile", label: "Mobile Development" },
        { id: "devops", label: "DevOps & Cloud" },
        { id: "ai-automation", label: "AI & Automation" },
        { id: "blockchain", label: "Blockchain & Web3" },
        { id: "platforms", label: "Platforms & CMS" },
        { id: "generative-ai", label: "Generative AI" }
      ]
    },
    {
      id: "services",
      label: "Services",
      items: [
        { id: "software-engineering", label: "Software Engineering" },
        { id: "ai-innovation", label: "AI & Innovation" },
        { id: "quality-engineering", label: "Quality Engineering" },
        { id: "testing-services", label: "Testing Services" },
        { id: "business-digitalization", label: "Business Digitalization" },
        { id: "strategy-advisory", label: "Strategy & Advisory" },
        { id: "cybersecurity", label: "CyberSecurity" },
        { id: "operations-support", label: "Operations & Support" },
        { id: "design-services", label: "Design Services" },
        { id: "iot-services", label: "IoT Services" }
      ]
    },
    {
      id: "portfolio",
      label: "Portfolio",
      items: []
    },
    {
      id: "knowledge-center",
      label: "Knowledge Center",
      items: [
        { id: "case-studies", label: "Case Studies" },
        { id: "blog", label: "Blog" },
        { id: "webinars", label: "Webinars" },
        { id: "whitepapers", label: "White Papers" },
        { id: "guides", label: "Guides & Reports" },
        { id: "industry-insights", label: "Industry Insights" }
      ]
    },
    {
      id: "about",
      label: "About",
      items: [
        { id: "leadership", label: "Leadership Team" },
        { id: "our-team", label: "Our Team" },
        { id: "tech-talent", label: "Our Tech Talent" },
        { id: "culture", label: "Team Culture" },
        { id: "careers", label: "Careers" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Contact Us" },
        { id: "tech-blog", label: "Tech Blog" },
        { id: "ebooks", label: "Our E-books" },
        { id: "journey", label: "Our Journey" }
      ]
    }
  ];

  const handleMouseEnter = (id: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 180);
  };

  const handleNavClick = (mainId: string, subId?: string) => {
    const tab = subId ?? mainId;
    navigate(tabToPath(tab));
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.items.length > 0 && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                    activeNavId === item.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                  {item.items.length > 0 && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.items.length > 0 && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-[240px] max-h-[480px] overflow-y-auto">
                    {item.items.map((subItem) => (
                      <button
                        type="button"
                        key={subItem.id}
                        onClick={() => handleNavClick(item.id, subItem.id)}
                        className="w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button type="button" className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Button
              type="button"
              className="bg-slate-900 hover:bg-slate-800"
              onClick={() => navigate(tabToPath("contact"))}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.id} className="mb-2">
                <button
                  type="button"
                  onClick={() => {
                    if (item.items.length === 0) {
                      handleNavClick(item.id);
                    } else {
                      setActiveDropdown(activeDropdown === item.id ? null : item.id);
                    }
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between ${
                    activeNavId === item.id ? "bg-slate-900 text-white" : "text-slate-700"
                  }`}
                >
                  {item.label}
                  {item.items.length > 0 && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.id ? "rotate-180" : ""
                    }`} />
                  )}
                </button>

                {item.items.length > 0 && activeDropdown === item.id && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.items.map((subItem) => (
                      <button
                        type="button"
                        key={subItem.id}
                        onClick={() => handleNavClick(item.id, subItem.id)}
                        className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-slate-200 mt-4">
              <Button
                type="button"
                className="w-full bg-slate-900 hover:bg-slate-800"
                onClick={() => {
                  navigate(tabToPath("contact"));
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
