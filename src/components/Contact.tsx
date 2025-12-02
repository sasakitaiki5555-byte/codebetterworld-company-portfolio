import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // This would connect to your backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let's discuss your project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="p-8 border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Name</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={6}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-slate-900 hover:bg-slate-800">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg mb-2">Email Us</h3>
              <p className="text-slate-600">contact@codebetterworld.com</p>
            </Card>
            
            <Card className="p-6 border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg mb-2">Call Us</h3>
              <p className="text-slate-600">+1 (555) 123-4567</p>
            </Card>
            
            <Card className="p-6 border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg mb-2">Visit Us</h3>
              <p className="text-slate-600">123 Tech Street, San Francisco, CA 94105</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}