import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TechIcon } from "./TechIcon";
import { Code, Smartphone, Cloud, Cpu, Lock, Layout, Database, Layers } from "lucide-react";
import { cn } from "./ui/utils";

const technologyCategories = [
  {
    id: "backend",
    title: "Backend Development",
    icon: Code,
    iconAccent: "text-blue-600",
    color: "bg-blue-50 text-blue-700",
    technologies: ["Node.js", "Python", "PHP", "Golang", ".NET", "Java", "SQL", "Django", "Express.js", "Spring Boot"]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    iconAccent: "text-emerald-600",
    color: "bg-green-50 text-green-700",
    technologies: ["React.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    iconAccent: "text-violet-600",
    color: "bg-purple-50 text-purple-700",
    technologies: ["iOS App Development", "Android App Development", "Flutter", "React Native", "Kotlin", "Xamarin", "Swift", "Objective-C"]
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Cloud,
    iconAccent: "text-sky-600",
    color: "bg-orange-50 text-orange-700",
    technologies: ["AWS", "Google Cloud", "Azure", "Hybrid Cloud", "Jenkins", "Selenium", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: Cpu,
    iconAccent: "text-fuchsia-600",
    color: "bg-pink-50 text-pink-700",
    technologies: [
      "AI-based pose detection for MSK rehab",
      "AI for digital physiotherapy",
      "Robotic process automation",
      "AI-based chatbot solutions",
      "AI-based smart security",
      "Custom Large Language Models",
      "AI-Driven Customer Care Analytics",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing"
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    icon: Cpu,
    iconAccent: "text-indigo-600",
    color: "bg-indigo-50 text-indigo-700",
    technologies: [
      "Generative AI Development",
      "Generative AI Integration",
      "Generative AI Consulting",
      "Adaptive AI Development",
      "Transformer Model Development",
      "LLM Development",
      "Stable Diffusion Model",
      "ChatGPT Solutions",
      "GPT-4 Integration",
      "LangChain",
      "LangGraph"
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    icon: Lock,
    iconAccent: "text-amber-600",
    color: "bg-yellow-50 text-yellow-700",
    technologies: [
      "Blockchain Development",
      "Smart Contracts",
      "Cryptocurrency",
      "NFT Development",
      "Web3",
      "DeFi",
      "Metaverse",
      "CRC20 Token Development",
      "Asset Tokenization",
      "Real Estate Tokenization",
      "BEP20 Token Development",
      "Ethereum Token Development"
    ]
  },
  {
    id: "platforms",
    title: "Platforms & CMS",
    icon: Layers,
    iconAccent: "text-teal-600",
    color: "bg-teal-50 text-teal-700",
    technologies: ["Salesforce", "ServiceNow", "Odoo", "Magento", "Shopify", "WordPress", "Strapi", "Drupal", "MS PowerApps", "Power BI", "Power Automate"]
  },
  {
    id: "database",
    title: "Databases & Big Data",
    icon: Database,
    iconAccent: "text-red-600",
    color: "bg-red-50 text-red-700",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Cassandra", "Snowflake", "Databricks", "Apache Spark", "Hadoop", "ElasticSearch"]
  },
  {
    id: "specialized",
    title: "Specialized Technologies",
    icon: Cpu,
    iconAccent: "text-cyan-600",
    color: "bg-cyan-50 text-cyan-800",
    technologies: [
      "Field Service Management",
      "Firmware Development",
      "Fraud Protection",
      "Middleware Development",
      "Sales Management",
      "C++",
      "C#",
      "Scala",
      "Ruby on Rails",
      "Perl"
    ]
  }
];

interface TechnologiesPageProps {
  selectedTech?: string;
}

export function TechnologiesPage({ selectedTech }: TechnologiesPageProps) {
  const filteredCategories = selectedTech
    ? technologyCategories.filter(cat => cat.id === selectedTech)
    : technologyCategories;

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Our Technology Stack</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We work with cutting-edge technologies to build scalable, secure, and high-performance solutions
          </p>
        </div>

        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id}>
                <Card className="border-slate-200 overflow-hidden">
                  <div className={`${category.color} p-6 flex items-center gap-4`}>
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <IconComponent className={cn("h-8 w-8", category.iconAccent)} />
                    </div>
                    <h2 className="text-3xl">{category.title}</h2>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-3">
                      {category.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2 text-sm"
                        >
                          <TechIcon name={tech} className="h-4 w-4 shrink-0" />
                          <span>{tech}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Need a Custom Technology Solution?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts can help you choose the right technology stack for your project
          </p>
          <button className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">
            Consult Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
