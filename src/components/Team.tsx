import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Code, Award, TrendingUp, CheckCircle2 } from "lucide-react";

const teamStats = [
  {
    icon: Users,
    value: "150+",
    label: "Software Developers",
    description: "Experienced professionals"
  },
  {
    icon: Code,
    value: "50+",
    label: "QA Engineers",
    description: "Testing specialists"
  },
  {
    icon: Award,
    value: "12+",
    label: "Years Average Experience",
    description: "Senior expertise"
  },
  {
    icon: TrendingUp,
    value: "500+",
    label: "Projects Delivered",
    description: "Successfully completed"
  }
];

const developmentTeams = [
  {
    name: "Frontend Development",
    count: 45,
    color: "blue",
    skills: [
      "React.js", "Vue.js", "Angular", "Next.js",
      "TypeScript", "JavaScript", "HTML5/CSS3",
      "Tailwind CSS", "Material UI", "Redux"
    ]
  },
  {
    name: "Backend Development",
    count: 50,
    color: "purple",
    skills: [
      "Node.js", "Python", "Java", "C#/.NET",
      "PHP", "Ruby on Rails", "Go", "Rust",
      "RESTful APIs", "GraphQL", "Microservices"
    ]
  },
  {
    name: "Mobile Development",
    count: 30,
    color: "green",
    skills: [
      "React Native", "Flutter", "iOS (Swift)",
      "Android (Kotlin)", "Xamarin", "Ionic",
      "Progressive Web Apps", "Mobile UI/UX"
    ]
  },
  {
    name: "DevOps & Cloud",
    count: 25,
    color: "cyan",
    skills: [
      "AWS", "Azure", "Google Cloud", "Docker",
      "Kubernetes", "CI/CD", "Jenkins", "GitLab",
      "Terraform", "Ansible", "Monitoring"
    ]
  }
];

const qaTeams = [
  {
    name: "Manual QA Testing",
    count: 20,
    color: "orange",
    skills: [
      "Test Case Design", "Regression Testing",
      "Exploratory Testing", "UAT", "Smoke Testing",
      "Integration Testing", "Sanity Testing"
    ]
  },
  {
    name: "Automation Testing",
    count: 30,
    color: "red",
    skills: [
      "Selenium", "Cypress", "Playwright", "Jest",
      "TestNG", "JUnit", "PyTest", "Appium",
      "API Testing (Postman)", "Performance Testing"
    ]
  }
];

const specializedSkills = [
  {
    category: "Database & Data",
    specialists: 28,
    technologies: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "Elasticsearch", "Oracle", "SQL Server",
      "Data Modeling", "Database Optimization"
    ]
  },
  {
    category: "AI & Machine Learning",
    specialists: 15,
    technologies: [
      "TensorFlow", "PyTorch", "Scikit-learn",
      "Natural Language Processing", "Computer Vision",
      "Deep Learning", "Model Deployment"
    ]
  },
  {
    category: "Security & Performance",
    specialists: 18,
    technologies: [
      "Security Auditing", "Penetration Testing",
      "OWASP Standards", "Load Testing",
      "Performance Optimization", "Code Review"
    ]
  },
  {
    category: "UI/UX Design",
    specialists: 22,
    technologies: [
      "Figma", "Adobe XD", "Sketch",
      "User Research", "Wireframing", "Prototyping",
      "Design Systems", "Responsive Design"
    ]
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  red: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" }
};

export function Team() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Team</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Skilled professionals across the entire software development lifecycle
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {teamStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center border-slate-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 mb-4">
                  <Icon className="h-6 w-6 text-slate-700" />
                </div>
                <div className="text-3xl mb-2">{stat.value}</div>
                <div className="mb-1">{stat.label}</div>
                <p className="text-sm text-slate-600">{stat.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Development Teams */}
        <div className="mb-12">
          <h3 className="text-3xl text-center mb-8">Development Teams</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {developmentTeams.map((team, index) => (
              <Card key={index} className="p-6 border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl">{team.name}</h4>
                  <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
                    {team.count} Developers
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {team.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* QA Teams */}
        <div className="mb-12">
          <h3 className="text-3xl text-center mb-8">QA Testing Teams</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {qaTeams.map((team, index) => (
              <Card key={index} className="p-6 border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl">{team.name}</h4>
                  <Badge className="bg-slate-100 text-slate-700 border border-slate-200">
                    {team.count} Engineers
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {team.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialized Skills */}
        <div>
          <h3 className="text-3xl text-center mb-8">Specialized Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedSkills.map((specialty, index) => (
              <Card key={index} className="p-6 border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg">{specialty.category}</h4>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200">
                    {specialty.specialists}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {specialty.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      {tech}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}