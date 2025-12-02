import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    { id: "blog", label: "Blog" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <Button 
              onClick={() => handleTabClick("contact")} 
              className="ml-2 bg-slate-900 hover:bg-slate-800"
            >
              Contact Us
            </Button>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === tab.id
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <Button 
              onClick={() => handleTabClick("contact")} 
              className="w-full bg-slate-900 hover:bg-slate-800"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}