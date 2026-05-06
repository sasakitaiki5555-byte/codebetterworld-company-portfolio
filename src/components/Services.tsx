import {
  Code, Smartphone, Cloud, Palette, Database, ClipboardCheck,
  Zap, Globe, Settings, Boxes, RefreshCw, Gauge, Lock, TestTube,
  Activity, FileCode, Target, CheckCircle, GitBranch, Accessibility
} from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "./ui/utils";

const DEV_ICON_PALETTE = [
  { bg: "bg-blue-100", fg: "text-blue-600" },
  { bg: "bg-emerald-100", fg: "text-emerald-600" },
  { bg: "bg-violet-100", fg: "text-violet-600" },
  { bg: "bg-amber-100", fg: "text-amber-600" },
  { bg: "bg-rose-100", fg: "text-rose-600" },
  { bg: "bg-cyan-100", fg: "text-cyan-600" },
  { bg: "bg-sky-100", fg: "text-sky-600" },
  { bg: "bg-indigo-100", fg: "text-indigo-600" },
  { bg: "bg-fuchsia-100", fg: "text-fuchsia-600" },
  { bg: "bg-orange-100", fg: "text-orange-600" },
  { bg: "bg-teal-100", fg: "text-teal-600" },
  { bg: "bg-lime-100", fg: "text-lime-700" },
];

const QA_ICON_PALETTE = [
  { bg: "bg-teal-100", fg: "text-teal-600" },
  { bg: "bg-green-100", fg: "text-green-600" },
  { bg: "bg-blue-100", fg: "text-blue-600" },
  { bg: "bg-red-100", fg: "text-red-600" },
  { bg: "bg-purple-100", fg: "text-purple-600" },
  { bg: "bg-indigo-100", fg: "text-indigo-600" },
  { bg: "bg-cyan-100", fg: "text-cyan-600" },
  { bg: "bg-orange-100", fg: "text-orange-600" },
  { bg: "bg-pink-100", fg: "text-pink-600" },
  { bg: "bg-amber-100", fg: "text-amber-600" },
  { bg: "bg-violet-100", fg: "text-violet-600" },
  { bg: "bg-sky-100", fg: "text-sky-600" },
];

const customSoftwareServices = [
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Tailored web solutions built with React, Vue, Angular, and Node.js to meet your unique business requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
  },
  {
    icon: Boxes,
    title: "Enterprise Software Solutions",
    description: "Scalable enterprise-grade applications with robust architecture for large-scale business operations.",
  },
  {
    icon: Zap,
    title: "MVP & Product Development",
    description: "Rapid prototyping and MVP development to validate your ideas and get to market faster.",
  },
  {
    icon: FileCode,
    title: "API Development & Integration",
    description: "RESTful and GraphQL API design, development, and seamless third-party integrations.",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment gateways, inventory management, and analytics.",
  },
  {
    icon: Settings,
    title: "CRM & ERP Systems",
    description: "Custom CRM and ERP solutions to streamline your business processes and boost productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud-based Solutions",
    description: "AWS, Azure, and GCP cloud architecture, migration, and optimization services.",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Modernization",
    description: "Transform outdated systems with modern technologies while preserving critical business logic.",
  },
  {
    icon: GitBranch,
    title: "Microservices Architecture",
    description: "Design and implement scalable microservices for better performance and maintainability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Development",
    description: "User-centered design with beautiful interfaces that enhance engagement and conversion.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "Efficient database architecture with SQL and NoSQL solutions for optimal performance.",
  },
];

const qaTestingServices = [
  {
    icon: ClipboardCheck,
    title: "Manual Testing",
    description: "Comprehensive manual testing by experienced QA engineers to identify bugs and usability issues.",
  },
  {
    icon: Zap,
    title: "Test Automation",
    description: "Automated testing with Selenium, Cypress, Playwright, and custom frameworks for faster releases.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description: "Load, stress, and performance testing to ensure your application handles peak traffic.",
  },
  {
    icon: Lock,
    title: "Security Testing",
    description: "Vulnerability assessments, penetration testing, and security audits to protect your application.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Testing",
    description: "Comprehensive testing across devices, OS versions, and real-world conditions for iOS and Android.",
  },
  {
    icon: FileCode,
    title: "API Testing",
    description: "Automated API testing for RESTful and GraphQL endpoints to ensure reliability and performance.",
  },
  {
    icon: RefreshCw,
    title: "Regression Testing",
    description: "Continuous regression testing to catch issues early and maintain software quality.",
  },
  {
    icon: Activity,
    title: "Load & Stress Testing",
    description: "Simulate high-traffic scenarios to identify bottlenecks and optimize system performance.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Testing",
    description: "WCAG compliance testing to ensure your application is accessible to all users.",
  },
  {
    icon: TestTube,
    title: "Usability Testing",
    description: "User experience testing to optimize interface design and user satisfaction.",
  },
  {
    icon: Target,
    title: "Test Strategy & Planning",
    description: "Comprehensive test strategy development aligned with your business objectives.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Testing",
    description: "Continuous testing integration with your DevOps pipeline for automated quality gates.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive software development and QA testing services
          </p>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h3 className="text-3xl mb-12 text-center">Our Development Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-slate-50 rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">1</div>
                <h4 className="text-lg mb-3">Discovery & Planning</h4>
                <p className="text-slate-600 text-sm">Requirements gathering, technical consultation, and project roadmap creation</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-slate-200 rounded-full z-10"></div>
            </div>
            <div className="relative">
              <div className="bg-slate-50 rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">2</div>
                <h4 className="text-lg mb-3">Design & Architecture</h4>
                <p className="text-slate-600 text-sm">UI/UX design, system architecture, database design, and technical specifications</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-slate-200 rounded-full z-10"></div>
            </div>
            <div className="relative">
              <div className="bg-slate-50 rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">3</div>
                <h4 className="text-lg mb-3">Development & QA</h4>
                <p className="text-slate-600 text-sm">Agile sprints, code reviews, automated testing, and continuous integration</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-slate-200 rounded-full z-10"></div>
            </div>
            <div>
              <div className="bg-slate-50 rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">4</div>
                <h4 className="text-lg mb-3">Launch & Support</h4>
                <p className="text-slate-600 text-sm">Deployment, monitoring, maintenance, and continuous optimization</p>
              </div>
            </div>
          </div>
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
              {customSoftwareServices.map((service, index) => {
                const Icon = service.icon;
                const pal = DEV_ICON_PALETTE[index % DEV_ICON_PALETTE.length];
                return (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow border-slate-200">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                        pal.bg
                      )}
                    >
                      <Icon className={cn("h-6 w-6", pal.fg)} />
                    </div>
                    <h3 className="text-xl mb-2">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="qa">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaTestingServices.map((service, index) => {
                const Icon = service.icon;
                const pal = QA_ICON_PALETTE[index % QA_ICON_PALETTE.length];
                return (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow border-slate-200">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                        pal.bg
                      )}
                    >
                      <Icon className={cn("h-6 w-6", pal.fg)} />
                    </div>
                    <h3 className="text-xl mb-2">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}