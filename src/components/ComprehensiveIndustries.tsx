import { Card } from "./ui/card";
import {
  Plane, Building2, Shield, Heart, DollarSign, Pill, ShoppingCart,
  GraduationCap, Scale, Home, Store, Package, Palmtree, Car,
  Film, Zap, Fuel, Utensils, Bike, Users, TrendingUp, Dna,
  Phone, Coffee, Tv, Code, Database, Smartphone, Cloud
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { cn } from "./ui/utils";

const INDUSTRY_ICON_COLORS = [
  "text-sky-600",
  "text-blue-600",
  "text-emerald-600",
  "text-rose-600",
  "text-amber-600",
  "text-violet-600",
  "text-cyan-600",
  "text-orange-600",
  "text-teal-600",
  "text-indigo-600",
  "text-fuchsia-600",
  "text-lime-700",
];

const industries = [
  {
    id: "aviation",
    icon: Plane,
    title: "Aviation",
    description: "Flight management systems, booking platforms, and maintenance tracking solutions",
    image: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "banking",
    icon: Building2,
    title: "Banking",
    description: "Digital banking platforms, payment processing, and fraud detection systems",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "insurtech",
    icon: Shield,
    title: "InsurTech",
    description: "Insurance platforms, claims processing, and risk assessment solutions",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    description: "Telemedicine, EHR systems, patient management, and medical imaging solutions",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Financial Services",
    description: "Investment platforms, lending systems, payment solutions, and open banking",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "pharmaceutical",
    icon: Pill,
    title: "Pharmaceutical",
    description: "Drug discovery platforms, clinical trial management, and supply chain tracking",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Multi-vendor marketplaces, B2B/B2C platforms, and inventory management",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "edtech",
    icon: GraduationCap,
    title: "Education & E-learning",
    description: "LMS platforms, virtual classrooms, assessment tools, and student management",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "legaltech",
    icon: Scale,
    title: "Legal Tech",
    description: "Case management, document automation, and legal research platforms",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    description: "Property management, listing platforms, and real estate tokenization",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "retail",
    icon: Store,
    title: "Retail",
    description: "POS systems, customer loyalty programs, and omnichannel retail solutions",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "supplychain",
    icon: Package,
    title: "Supply Chain",
    description: "Logistics optimization, warehouse management, and tracking systems",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "travel",
    icon: Palmtree,
    title: "Travel & Hospitality",
    description: "Booking systems, hotel management, and travel planning platforms",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "automotive",
    icon: Car,
    title: "Automotive",
    description: "Connected vehicles, fleet management, and automotive manufacturing solutions",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "entertainment",
    icon: Film,
    title: "Media & Entertainment",
    description: "Streaming platforms, content management, and digital rights management",
    image: "https://images.unsplash.com/photo-1574267432644-f74f47c02b0e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Oil/Gas",
    description: "Smart grid systems, energy management, and petrochemical solutions",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "food-delivery",
    icon: Utensils,
    title: "Food Delivery",
    description: "Restaurant ordering, delivery management, and QSR solutions",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "taxi-booking",
    icon: Bike,
    title: "Taxi & Ride Sharing",
    description: "Ride-hailing platforms, driver management, and route optimization",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "hrm",
    icon: Users,
    title: "Human Capital Management",
    description: "HR platforms, recruitment systems, and workforce management",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "sports",
    icon: TrendingUp,
    title: "Sports",
    description: "Sports analytics, fan engagement platforms, and fitness tracking",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "lifesciences",
    icon: Dna,
    title: "Life Sciences",
    description: "Research platforms, biotech solutions, and laboratory management",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "telecom",
    icon: Phone,
    title: "Telecom",
    description: "Network management, billing systems, and customer service platforms",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
  }
];

export function ComprehensiveIndustries() {
  return (
    <section className="py-20 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep domain expertise across 20+ industries with specialized software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const iconFg = INDUSTRY_ICON_COLORS[index % INDUSTRY_ICON_COLORS.length];
            return (
              <Card key={industry.id} className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <IconComponent className={cn("h-6 w-6", iconFg)} />
                    </div>
                    <h3 className="text-xl text-white">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600">{industry.description}</p>
                  <button className="mt-4 text-slate-900 hover:underline">
                    Learn More →
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Don't See Your Industry?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We have experience across many more sectors. Contact us to discuss your specific needs.
          </p>
          <button className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
