import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, Users, Globe, Award, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { cn } from "./ui/utils";
import { Link } from "react-router-dom";

const companyValues = [
  {
    icon: Users,
    iconColor: "text-blue-600",
    wrapBg: "bg-blue-50",
    title: "Team Excellence",
    description: "Our team of 13+ engineers across 4 countries brings diverse expertise and perspectives to every project."
  },
  {
    icon: Globe,
    iconColor: "text-emerald-600",
    wrapBg: "bg-emerald-50",
    title: "Global Reach",
    description: "We serve clients worldwide with 24/7 coverage and deep understanding of different markets and cultures."
  },
  {
    icon: Award,
    iconColor: "text-amber-600",
    wrapBg: "bg-amber-50",
    title: "Quality First",
    description: "We maintain the highest standards in code quality, security, and performance through rigorous processes."
  },
  {
    icon: TrendingUp,
    iconColor: "text-violet-600",
    wrapBg: "bg-violet-50",
    title: "Continuous Innovation",
    description: "We stay ahead of technology trends and continuously learn new frameworks and methodologies."
  },
  {
    icon: Shield,
    iconColor: "text-teal-600",
    wrapBg: "bg-teal-50",
    title: "Trusted Partner",
    description: "Long-term partnerships built on transparency, reliability, and delivering exceptional results."
  }
];

const stats = [
  { number: "13+", label: "Engineers" },
  { number: "4+", label: "Countries" },
  { number: "20+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "7+", label: "Years Experience" },
  { number: "24/7", label: "Support" }
];

const guarantees = [
  "100% transparent communication throughout the project lifecycle",
  "Dedicated project manager for seamless coordination",
  "Agile methodology with bi-weekly sprints and demos",
  "Code quality assurance with automated testing and reviews",
  "On-time delivery with flexible engagement models",
  "Post-launch support and maintenance included",
  "IP rights and confidentiality guaranteed",
  "Scalable team size based on project needs"
];

const leadership = [
  {
    name: "Charles Gagnon",
    role: "CEO & Co-Founder",
    bio: "15+ years in software development and business strategy. Former CTO at betted startups."
  },
  {
    name: "Volodymyr Berezhok",
    role: "CTO & Co-Founder",
    bio: "Expert in AI/ML and cloud architecture. Led engineering teams at top tech companies."
  },
  {
    name: "Sasaki Taiki",
    role: "VP of Engineering",
    bio: "20+ years building and scaling engineering organizations. Passionate about team development."
  },
  {
    name: "Jack Hoff",
    role: "VP of Quality Assurance",
    bio: "QA expert with deep experience in test automation and quality processes across industries."
  }
];

function AboutCta() {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
      <h2 className="text-3xl md:text-4xl mb-4">Ready to Work Together?</h2>
      <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
        Let's discuss your project and see how we can help you achieve your goals.
      </p>
      <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
        Get Started Today
      </Button>
    </div>
  );
}

function LeadershipCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {leadership.map((leader, index) => (
        <Card key={index} className="p-6 border-slate-200 text-center">
          <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="h-12 w-12 text-slate-600" />
          </div>
          <h3 className="text-xl mb-1">{leader.name}</h3>
          <p className="text-slate-600 mb-3">{leader.role}</p>
          <p className="text-sm text-slate-600">{leader.bio}</p>
        </Card>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">About CodeBetterWorld</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn who we are and explore each part of our story through dedicated About pages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Leadership Team",
              description: "Meet the leaders guiding our technical and business direction.",
              href: "/leadership",
              image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Our Tech Talent",
              description: "Explore our engineering capabilities, processes, and expertise.",
              href: "/tech-talent",
              image:
                "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Team Culture",
              description: "See our values, guarantees, and the way we work together.",
              href: "/culture",
              image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "FAQ",
              description: "Find quick answers to common questions from clients and partners.",
              href: "/faq",
              image:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Careers",
              description: "Explore open roles and grow your career with our distributed team.",
              href: "/careers",
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Contact Us",
              description: "Reach out to discuss your project requirements and next steps.",
              href: "/contact",
              image:
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Tech Blog",
              description: "Read engineering insights, updates, and practical implementation guides.",
              href: "/tech-blog",
              image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Our E-books",
              description: "Browse downloadable resources and deep-dive learning materials.",
              href: "/ebooks",
              image:
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Our Journey",
              description: "See how CodeBetterWorld has grown and evolved over time.",
              href: "/journey",
              image:
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
            },
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-label={`${item.title}: ${item.description}`}
              className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              style={{
                height: "clamp(18rem, 38vw, 24rem)",
                minHeight: "18rem",
              }}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="relative z-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-0 z-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div
                  className="absolute left-0 right-0 px-4 py-4 text-left"
                  style={{ bottom: 0 }}
                >
                  <div
                    className="rounded-xl border-2 border-white bg-slate-900 px-6 py-4 shadow-xl"
                    style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.65)" }}
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
            </Link>
          ))}
        </div>

        <AboutCta />
      </div>
    </section>
  );
}

export function AboutLeadershipPage() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">Leadership Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the people driving our strategy, engineering excellence, and delivery standards.
          </p>
        </div>
        <div className="mb-16">
          <LeadershipCards />
        </div>
        <AboutCta />
      </div>
    </section>
  );
}

export function AboutTechTalentPage() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">Our Tech Talent</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A global team of engineers, QA specialists, and delivery experts focused on outcomes.
          </p>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-slate-200">
                <div className="text-3xl md:text-4xl mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Working With Us</h2>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-6">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">1</div>
                    <div>
                      <h4 className="text-lg mb-1">Discovery & Planning</h4>
                      <p className="text-slate-600">We understand your business goals and technical requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">2</div>
                    <div>
                      <h4 className="text-lg mb-1">Design & Architecture</h4>
                      <p className="text-slate-600">We create detailed technical specifications and user experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">3</div>
                    <div>
                      <h4 className="text-lg mb-1">Development & Testing</h4>
                      <p className="text-slate-600">Agile sprints with continuous testing and quality assurance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">4</div>
                    <div>
                      <h4 className="text-lg mb-1">Deployment & Support</h4>
                      <p className="text-slate-600">Smooth launch with ongoing maintenance and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-6">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Proven track record with 20+ successful projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Expert team with average 7+ years experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Transparent communication and project management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Competitive pricing with flexible engagement models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Latest technologies and best practices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">24/7 global coverage and support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutCta />
      </div>
    </section>
  );
}

export function AboutCulturePage() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-6">Team Culture</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Values, collaboration, and quality-focused delivery culture that scales with your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl mb-6">Your Digital-Future Partner</h2>
              <p className="text-lg text-slate-700 mb-4">
                We build cutting-edge software solutions that transform businesses. Our team of expert engineers, designers, and QA professionals work together to deliver exceptional digital products.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Founded on the principle that great software requires both technical excellence and deep business understanding, we've grown into a trusted partner for companies ranging from startups to Fortune 500 enterprises.
              </p>
              <p className="text-lg text-slate-700">
                Our remote-first culture allows us to tap into the best talent worldwide, giving our clients access to exceptional expertise regardless of geography.
              </p>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
                alt="Product and engineering team in a live working session"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={cn("p-3 rounded-lg", value.wrapBg)}>
                      <IconComponent className={cn("h-6 w-6", value.iconColor)} />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Guarantee</h2>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-slate-900 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AboutCta />
      </div>
    </section>
  );
}
