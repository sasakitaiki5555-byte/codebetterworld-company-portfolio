import { Button } from "./ui/button";
import { ArrowRight, Code, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-slate-900 text-white rounded-full text-sm">
              🌍 Remote Development Teams Worldwide
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Build Better Software with Global Talent
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Harness the power of remote development teams across 4+ countries. We deliver custom software development and comprehensive QA testing services that transform your business.
            </p>
            <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-2xl border-l-4 border-slate-900 pl-5 py-1 mb-8">
              We deliver high-quality work and support projects until startup companies are ready to build their own internal development teams.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300">
                View Our Work
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-lg">
                  <Users className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <div className="text-2xl">13+</div>
                  <div className="text-sm text-slate-600">Engineers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-lg">
                  <Globe className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <div className="text-2xl">4+</div>
                  <div className="text-sm text-slate-600">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-lg">
                  <Code className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <div className="text-2xl">20+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=85"
                alt="Remote development team collaborating in a live workshop"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl mb-1">98%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl mb-1">24/7</div>
              <div className="text-sm text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}