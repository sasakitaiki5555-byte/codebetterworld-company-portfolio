import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "John Smith",
    company: "TechCorp Inc.",
    role: "CEO",
    content: "Working with CodeBetterWorld has been transformative for our business. They delivered a solution that exceeded our expectations in both quality and timeline. The team's expertise in both development and QA ensured a flawless product launch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    project: "Enterprise ERP System"
  },
  {
    name: "Lisa Wang",
    company: "InnovateLabs",
    role: "Product Manager",
    content: "Their technical expertise and communication throughout the project were outstanding. They truly understand modern software development and delivered our AI-powered platform on time and within budget. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    project: "AI Analytics Platform"
  },
  {
    name: "James Brown",
    company: "StartupXYZ",
    role: "Founder",
    content: "From ideation to deployment, they were with us every step of the way. The final product has helped us scale rapidly. Their QA team caught critical issues before launch, saving us thousands in potential losses.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    project: "Mobile Marketplace App"
  },
  {
    name: "Sarah Johnson",
    company: "HealthTech Solutions",
    role: "CTO",
    content: "The team's deep understanding of healthcare compliance and security was invaluable. They built a HIPAA-compliant telemedicine platform that our doctors and patients love. Exceptional work!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    project: "Telemedicine Platform"
  },
  {
    name: "Michael Chen",
    company: "FinanceFlow",
    role: "VP of Engineering",
    content: "We needed a team that could handle complex fintech requirements. CodeBetterWorld delivered beyond expectations with robust security, seamless integrations, and excellent performance under load.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    project: "Payment Processing System"
  },
  {
    name: "Emily Davis",
    company: "EduTech Global",
    role: "Director of Product",
    content: "Our e-learning platform serves millions of students worldwide. The scalable architecture and intuitive UX that CodeBetterWorld created has been key to our growth. True partners in every sense!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    project: "E-Learning Platform"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Powerful Client Testimonials</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <Quote className="h-8 w-8 text-slate-300 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-slate-900 text-slate-900" />
                ))}
              </div>
              <p className="text-slate-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</div>
                  <div className="text-xs text-slate-400 mt-1">{testimonial.project}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-2">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-2">4.9/5</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-2">95%</div>
            <div className="text-slate-600">Repeat Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-2">20+</div>
            <div className="text-slate-600">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
}