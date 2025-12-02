import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Users, Globe, TrendingUp, Award, Star } from "lucide-react";

const customers = [
  {
    name: "TechCorp Global",
    industry: "Technology",
    employees: "10,000+",
    projects: 15,
    logo: "TC"
  },
  {
    name: "FinanceFlow Inc",
    industry: "Finance",
    employees: "5,000+",
    projects: 8,
    logo: "FF"
  },
  {
    name: "HealthCare Plus",
    industry: "Healthcare",
    employees: "15,000+",
    projects: 12,
    logo: "HC"
  },
  {
    name: "RetailMax Solutions",
    industry: "Retail",
    employees: "8,000+",
    projects: 10,
    logo: "RM"
  },
  {
    name: "EduTech Academy",
    industry: "Education",
    employees: "3,000+",
    projects: 7,
    logo: "EA"
  },
  {
    name: "LogiTrack Systems",
    industry: "Logistics",
    employees: "6,000+",
    projects: 9,
    logo: "LT"
  },
  {
    name: "MediaStream Pro",
    industry: "Media",
    employees: "4,000+",
    projects: 11,
    logo: "MS"
  },
  {
    name: "GreenEnergy Corp",
    industry: "Energy",
    employees: "7,000+",
    projects: 6,
    logo: "GE"
  },
  {
    name: "AutoDrive Industries",
    industry: "Automotive",
    employees: "12,000+",
    projects: 14,
    logo: "AD"
  },
  {
    name: "CloudNine Technologies",
    industry: "Cloud Services",
    employees: "5,500+",
    projects: 13,
    logo: "CN"
  },
  {
    name: "SmartHome Innovations",
    industry: "IoT",
    employees: "2,500+",
    projects: 8,
    logo: "SH"
  },
  {
    name: "TravelHub Connect",
    industry: "Travel",
    employees: "4,500+",
    projects: 9,
    logo: "TH"
  }
];

const stats = [
  {
    icon: Building2,
    value: "150+",
    label: "Enterprise Clients",
    color: "blue"
  },
  {
    icon: Globe,
    value: "45+",
    label: "Countries Served",
    color: "green"
  },
  {
    icon: Users,
    value: "500K+",
    label: "End Users Impacted",
    color: "purple"
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction",
    color: "orange"
  }
];

const industryColors: Record<string, string> = {
  "Technology": "bg-blue-100 text-blue-700 border-blue-200",
  "Finance": "bg-green-100 text-green-700 border-green-200",
  "Healthcare": "bg-red-100 text-red-700 border-red-200",
  "Retail": "bg-purple-100 text-purple-700 border-purple-200",
  "Education": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "Logistics": "bg-indigo-100 text-indigo-700 border-indigo-200",
  "Media": "bg-pink-100 text-pink-700 border-pink-200",
  "Energy": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Automotive": "bg-slate-100 text-slate-700 border-slate-200",
  "Cloud Services": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "IoT": "bg-orange-100 text-orange-700 border-orange-200",
  "Travel": "bg-teal-100 text-teal-700 border-teal-200"
};

const logoGradients: Record<string, string> = {
  "TC": "from-blue-500 to-blue-600",
  "FF": "from-green-500 to-green-600",
  "HC": "from-red-500 to-red-600",
  "RM": "from-purple-500 to-purple-600",
  "EA": "from-yellow-500 to-yellow-600",
  "LT": "from-indigo-500 to-indigo-600",
  "MS": "from-pink-500 to-pink-600",
  "GE": "from-emerald-500 to-emerald-600",
  "AD": "from-slate-500 to-slate-600",
  "CN": "from-cyan-500 to-cyan-600",
  "SH": "from-orange-500 to-orange-600",
  "TH": "from-teal-500 to-teal-600"
};

export function Customers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Customers</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by leading companies across diverse industries
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center border-slate-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 mb-4">
                  <Icon className="h-6 w-6 text-slate-700" />
                </div>
                <div className="text-3xl mb-2">{stat.value}</div>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Customer Logos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {customers.map((customer, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow border-slate-200">
              <div className="flex flex-col items-center text-center">
                {/* Logo */}
                <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
                  <span className="text-white text-xl">{customer.logo}</span>
                </div>
                
                {/* Company Name */}
                <h3 className="text-lg mb-2">{customer.name}</h3>
                
                {/* Industry Badge */}
                <Badge variant="secondary" className="mb-3 border bg-slate-100 text-slate-700 border-slate-200">
                  {customer.industry}
                </Badge>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-slate-600 w-full justify-around pt-3 border-t border-slate-100">
                  <div className="flex flex-col items-center">
                    <Users className="h-4 w-4 mb-1 text-slate-400" />
                    <span className="text-xs">{customer.employees}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingUp className="h-4 w-4 mb-1 text-slate-400" />
                    <span className="text-xs">{customer.projects} Projects</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}