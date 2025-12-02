import { Button } from "./ui/button";
import { ArrowRight, Award, Users, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
            <Award className="h-4 w-4 text-slate-700" />
            <span className="text-sm text-slate-700">Professional Software Development & QA Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-slate-900">
            Building Better
            <span className="block text-slate-700">Software Solutions</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Custom software development, QA testing, and digital solutions designed for your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-white">
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Code2 className="h-5 w-5 text-slate-600" />
                <span className="text-3xl text-slate-900">500+</span>
              </div>
              <p className="text-sm text-slate-600">Projects</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-slate-600" />
                <span className="text-3xl text-slate-900">200+</span>
              </div>
              <p className="text-sm text-slate-600">Clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Award className="h-5 w-5 text-slate-600" />
                <span className="text-3xl text-slate-900">15+</span>
              </div>
              <p className="text-sm text-slate-600">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}