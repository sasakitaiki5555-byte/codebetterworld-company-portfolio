import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Briefcase, Clock, Users, Code, Rocket, Target, Heart } from "lucide-react";
import { cn } from "./ui/utils";

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote (US, EU, Asia)",
    type: "Full-time",
    experience: "5+ years",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    description: "Join our team to build cutting-edge web applications for global clients."
  },
  {
    title: "QA Automation Engineer",
    location: "Remote (Worldwide)",
    type: "Full-time",
    experience: "3+ years",
    technologies: ["Selenium", "Pytest", "Jenkins", "Appium"],
    description: "Lead test automation efforts for enterprise-scale applications."
  },
  {
    title: "AI/ML Engineer",
    location: "Remote (US, EU)",
    type: "Full-time",
    experience: "4+ years",
    technologies: ["Python", "TensorFlow", "PyTorch", "LangChain"],
    description: "Build innovative AI solutions that transform business processes."
  },
  {
    title: "Mobile Developer (iOS/Android)",
    location: "Remote (Worldwide)",
    type: "Full-time",
    experience: "3+ years",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    description: "Create beautiful mobile experiences for millions of users."
  },
  {
    title: "DevOps Engineer",
    location: "Remote (US, EU)",
    type: "Full-time",
    experience: "4+ years",
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform"],
    description: "Build and maintain scalable infrastructure for high-traffic applications."
  },
  {
    title: "UI/UX Designer",
    location: "Remote (Worldwide)",
    type: "Full-time",
    experience: "3+ years",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    description: "Design intuitive interfaces that delight users and drive engagement."
  }
];

const benefits = [
  {
    icon: MapPin,
    iconColor: "text-sky-600",
    wrapBg: "bg-sky-50",
    title: "Work from Anywhere",
    description: "100% remote-first company. Work from anywhere in the world with flexible hours."
  },
  {
    icon: Rocket,
    iconColor: "text-orange-600",
    wrapBg: "bg-orange-50",
    title: "Career Growth",
    description: "Clear career path with mentorship, training budget, and conference attendance."
  },
  {
    icon: Users,
    iconColor: "text-indigo-600",
    wrapBg: "bg-indigo-50",
    title: "Collaborative Team",
    description: "Work with talented engineers from around the globe on challenging projects."
  },
  {
    icon: Code,
    iconColor: "text-emerald-600",
    wrapBg: "bg-emerald-50",
    title: "Latest Technologies",
    description: "Work with cutting-edge tech stack and contribute to technical decisions."
  },
  {
    icon: Target,
    iconColor: "text-rose-600",
    wrapBg: "bg-rose-50",
    title: "Impactful Projects",
    description: "Build products that are used by millions and make a real difference."
  },
  {
    icon: Heart,
    iconColor: "text-pink-600",
    wrapBg: "bg-pink-50",
    title: "Work-Life Balance",
    description: "Competitive salary, health benefits, generous PTO, and wellness programs."
  }
];

const teamValues = [
  {
    title: "Team-Driven Learning",
    description: "We learn new technologies through a team-driven roadmap. Every engineer contributes to our collective knowledge and technical direction."
  },
  {
    title: "Exceptional Technical Skills",
    description: "Each engineer possesses exceptional technical skills honed through years of experience across diverse projects and industries."
  },
  {
    title: "Extensive Experience",
    description: "Our team members bring extensive experience from previous projects and leading companies, ensuring high-quality delivery."
  },
  {
    title: "Global Perspective",
    description: "With engineers across multiple continents, we bring diverse perspectives and 24/7 capability to every project."
  }
];

export function Careers() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Join Our Global Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Build the future of software with a team of exceptional engineers from around the world
          </p>
        </div>

        {/* What Makes Us Better */}
        <div className="mb-20">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-center">What Makes CodeBetterWorld Better?</h2>
            <p className="text-xl text-slate-700 text-center mb-12 max-w-3xl mx-auto">
              It's the team. We learn new technologies through a team-driven roadmap, and each engineer possesses exceptional technical skills with extensive experience from previous projects and companies.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {teamValues.map((value, index) => (
                <Card key={index} className="p-6 border-slate-200 bg-white">
                  <h3 className="text-xl mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Why Join Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={cn("p-3 rounded-lg", benefit.wrapBg)}>
                      <IconComponent className={cn("h-6 w-6", benefit.iconColor)} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Developer Locations */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Global Team</h2>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🌎</div>
                <div className="text-3xl mb-2">13+</div>
                <div className="text-slate-600">Engineers Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <div className="text-3xl mb-2">4+</div>
                <div className="text-slate-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🕐</div>
                <div className="text-3xl mb-2">24/7</div>
                <div className="text-slate-600">Global Coverage</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl mb-4 text-center">Developer Locations</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["United States", "Canada", "Ukraine", "Pakistan", "Japan", "Philippines"].map((location, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2">
                    <MapPin className="h-4 w-4 mr-2 inline" />
                    {location}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="text-2xl mb-3">{position.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase className="h-4 w-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Don't See Your Role?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let's talk!
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            Send Us Your Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
