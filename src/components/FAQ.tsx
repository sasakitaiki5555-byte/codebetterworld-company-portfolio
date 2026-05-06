import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "./ui/card";

const faqs = [
  {
    question: "What services does CodeBetterWorld offer?",
    answer: "We offer comprehensive software development services including custom web and mobile app development, AI/ML solutions, cloud architecture, DevOps, and extensive QA testing services. We specialize in building scalable, secure applications for startups to enterprise clients."
  },
  {
    question: "How does your remote development team work?",
    answer: "Our global team operates across 4+ countries with 24/7 coverage. We use agile methodologies with bi-weekly sprints, daily standups, and transparent communication through tools like Slack, Jira, and video conferencing. You'll have a dedicated project manager ensuring seamless coordination."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical MVP takes 3-4 months, while enterprise applications can take 6-18 months. We provide detailed timelines during the discovery phase and maintain transparency throughout development with regular progress updates."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in eCommerce, Fintech, EdTech, Healthcare, and Fitness industries. Our team has delivered 20+ projects across these sectors, understanding their unique regulatory requirements, security standards, and business models."
  },
  {
    question: "How do you ensure code quality?",
    answer: "We maintain high code quality through automated testing (unit, integration, e2e), code reviews, static analysis, continuous integration/deployment pipelines, and comprehensive QA testing. Every project includes dedicated QA engineers and follows industry best practices."
  },
  {
    question: "What engagement models do you offer?",
    answer: "We offer flexible engagement models: Fixed Price (clearly defined scope), Time & Materials (evolving requirements), and Dedicated Team (long-term projects). We'll recommend the best fit based on your project needs and budget."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! All projects include post-launch support. We offer maintenance packages covering bug fixes, security updates, performance monitoring, and feature enhancements. We're committed to long-term partnerships beyond just development."
  },
  {
    question: "How do you handle intellectual property rights?",
    answer: "All code, designs, and deliverables are 100% owned by you. We sign NDAs and IP assignment agreements before starting any project. Your intellectual property is completely protected and transferred to you upon project completion."
  },
  {
    question: "What is your pricing structure?",
    answer: "Pricing depends on project scope, technology stack, and team size. We provide detailed estimates after understanding your requirements. Our rates are competitive with transparent breakdown of costs. We can work within various budget ranges from startups to enterprise."
  },
  {
    question: "How do you handle security and compliance?",
    answer: "Security is built into every phase of development. We follow OWASP guidelines, implement encryption, secure authentication, and regular security audits. For regulated industries, we ensure compliance with HIPAA, GDPR, PCI-DSS, and other relevant standards."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely! We have extensive experience integrating with legacy systems, third-party APIs, cloud services, and databases. We'll assess your current infrastructure and design seamless integrations that don't disrupt your operations."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with modern tech stacks including React, Node.js, Python, Java, .NET, Flutter, React Native, AWS, Azure, Docker, Kubernetes, and more. We choose the right technology based on your specific requirements, not a one-size-fits-all approach."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600 mb-4">Still have questions?</p>
          <a href="#contact" className="text-slate-900 hover:underline">
            Contact us and we'll be happy to help →
          </a>
        </div>
      </div>
    </section>
  );
}
