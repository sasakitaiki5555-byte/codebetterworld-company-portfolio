import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today and let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              <Card className="p-6 border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">Email</h3>
                    <a href="mailto:contact@codebetterworld.com" className="text-slate-600 hover:text-slate-900">
                      contact@codebetterworld.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">WhatsApp</h3>
                    <a href="https://wa.me/14188019845" className="text-slate-600 hover:text-slate-900">
                      14188019845
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">Locations</h3>
                    <div className="text-slate-600">
                      <div className="mb-1">USA • United Kingdom</div>
                      <div className="mb-1">Germany • India</div>
                      <div className="text-sm">Remote teams in 4+ countries</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg mb-4">Business Hours</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM (Your Timezone)</span>
                </div>
                <div className="flex justify-between">
                  <span>24/7 Support:</span>
                  <span>Emergency hotline available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl mb-8">Send Us a Message</h2>
            <Card className="p-8 border-slate-200">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Your Name *</label>
                  <Input placeholder="John Doe" className="border-slate-300" />
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Email Address *</label>
                  <Input type="email" placeholder="john@company.com" className="border-slate-300" />
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <Input type="tel" placeholder="(555) 555-0123" className="border-slate-300" />
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Company</label>
                  <Input placeholder="Your Company Name" className="border-slate-300" />
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Service Interested In</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg">
                    <option>Custom Software Development</option>
                    <option>Mobile App Development</option>
                    <option>QA Testing Services</option>
                    <option>Cloud Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Project Details *</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, timeline, and budget..." 
                    rows={5}
                    className="border-slate-300"
                  />
                </div>
                
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}