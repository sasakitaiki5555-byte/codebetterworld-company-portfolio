import { Link } from "react-router-dom";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Link to="/" className="inline-block">
                <Logo />
              </Link>
            </div>
            <p className="text-slate-400 mb-6">
              Building better software with global talent. Custom development and QA testing services for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@codebetterworld.com" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/codebetterworld" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.me/15798996222" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Our Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/journey" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/our-team" className="hover:text-white transition-colors">Working With Us</Link></li>
              <li><Link to="/journey" className="hover:text-white transition-colors">Our Guarantee</Link></li>
              <li><Link to="/leadership" className="hover:text-white transition-colors">Our Leadership</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Why CodeBetterWorld</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Quality Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Software Testing & QA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Test Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Performance Testing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Testing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Testing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@codebetterworld.com" className="hover:text-white transition-colors">
                  contact@codebetterworld.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/15798996222" className="hover:text-white transition-colors">
                  WhatsApp: 15798996222
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Global Offices:</div>
                  <div className="text-sm">USA • Canada • Ukraine • Pakistan</div>
                  <div className="text-sm">Remote Teams in 4+ Countries</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} CodeBetterWorld. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 md:justify-end">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}