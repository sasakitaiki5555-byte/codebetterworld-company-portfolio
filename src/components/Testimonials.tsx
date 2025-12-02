import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    company: "TechCorp Inc.",
    role: "CEO",
    content: "Working with this team has been transformative for our business. They delivered a solution that exceeded our expectations in both quality and timeline.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    company: "InnovateLabs",
    role: "Product Manager",
    content: "Their technical expertise and communication throughout the project were outstanding. They truly understand modern software development.",
    rating: 5,
  },
  {
    name: "James Brown",
    company: "StartupXYZ",
    role: "Founder",
    content: "From ideation to deployment, they were with us every step of the way. The final product has helped us scale rapidly.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Client Testimonials</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            What our clients say about us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-slate-200 bg-white">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-slate-900 text-slate-900" />
                ))}
              </div>
              <p className="text-slate-700 mb-4">{testimonial.content}</p>
              <div>
                <div className="text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}