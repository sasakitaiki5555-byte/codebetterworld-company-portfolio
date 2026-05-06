import { databaseSoftwareProjects } from "./databasePortfolioData";

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  duration: string;
  teamSize: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  stats: {
    label: string;
    value: string;
    icon: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  link?: string;
  featured?: boolean;
}

const baseCustomSoftwareProjects: PortfolioProject[] = [
  {
    id: 'highiq',
    title: "AI Voice and SMS",
    subtitle: "High iQ is a robust AI operating system that emphasizes Voice and SMS outreach for sales and marketing teams.",
    description: "YOUR DIGITAL-FUTURE PARTNER - At HighIQ.ai, we specialize in delivering custom AI solutions to meet your the unique needs of your business.",
    longDescription: "We built a sophisticated AI voice operating system that automates every stage of sales and marketing outreach. Our system uses human-like AI conversations to engage leads instantly via voice, SMS, and email, enabling aggressive, personalized follow up at scale. With built-in multilingual support, intelligent CRM updates, and automated appointment setting, High iQ transforms lead engagement into revenue growth while freeing teams from repetitive tasks.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85",
    category: "AI-driven sales and marketing automation",
    technologies: ["ElevenLabs", "Deepgram", "OpenAI", "Twilio", "React", "Express", "Python", "Google API", "OpenGraph", "AWS", "Vimeo"],
    duration: "2 years",
    teamSize: "8 developers",
    client: "highiq",
    challenge: "Slow response times to leads, Manual follow-up drudgery, Lack of personalization and scale, Administrative overload, Inefficient appointment setting, Customer support and HR gaps",
    solution: "We developed a robust AI operating system tailored for sales and marketing teams that handles lead engagement, follow-up, qualification, and appointment setting. The solution features AI-driven voice and SMS outreach capable of contacting 100+ prospects simultaneously in 27 languages, managing complex workflows including call routing, calendar and CRM integrations, and live lead transfers. It automates administrative tasks like call summaries and customer support handling, delivering fast responses within 5 minutes and reducing cost per close by up to 33%.",
    results: [
      "Engages prospects within 5 minutes, boosting connection chances 21x via instant AI texts/calls.",
      "Handles 18+ contact attempts automatically, reactivating stale leads and reducing cost per close by up to 33%.",
      "Delivers customized, human-like conversations in 27 languages, talking to 100+ people simultaneously while controlling tone/speed.",
      "Auto-adds call summaries, notes, tags, and CRM updates, freeing teams for revenue tasks.",
      "Books meetings via text, live transfers qualified leads, and supports round-robin assignment/calendar integrations.",
      "Manages inquiries, screens resumes, interviews applicants, and handles tickets before they escalate."
    ],
    stats: [
      { label: "Speed to Lead", value: "21x", icon: "TrendingUp", description: "Engages prospects within 5 minutes, boosting connection chances 21 times." },
      { label: "Cost Reduction", value: "33%", icon: "TrendingDown", description: "Decreases cost per close by up to 33% through automated organization." },
      { label: "Contact Attempts Automation", value: "18+", icon: "Repeat", description: "Handles 18+ contact attempts automatically to qualify conversations." },
      { label: "Personalization Boost", value: "40%", icon: "Heart", description: "Increases engagement by more than 40% with customized AI conversations in 27 languages." },
      { label: "Administrative Load Reduction", value: "90%", icon: "CheckCircle", description: "Automates call summaries, notes, tags and CRM updates to free team capacity." },
      { label: "Appointment Setting Efficiency", value: "50+", icon: "Calendar", description: "Books over 50 appointments on autopilot including calendar integration and live transfers." },
      { label: "Customer Support Automation", value: "Level 1-3", icon: "Headphones", description: "Handles customer support inquiries, screens resumes, and manages tickets before escalation." }
    ],
    testimonial: {
      quote: "We've been working with them for three years, and they've been an incredibly consistent and talented team. They've provided us with basically everything we needed, and it wasn't just about resources or building AI agents. It was literally all thanks to the diverse resources they have on their team. We're grateful for the trust, teamwork, and partnership that continues to grow!",
      author: "Michael Hopkins",
      role: "founder of highiq"
    },
    link: "https://highiq.io/",
    featured: true
  },
  {
    id: 'aiflowpro',
    title: "AI Workflow-powered by Minck",
    subtitle: "AI Workflow is a digital ecosystem hosting six AI-powered applications make it up to 30% faster and more efficient.",
    description: "The platform emphasizes ease of use, quick setup, process optimization, and custom AI apps for companies or individuals, with features like LLM Search for database integration and tools such as AI for Meetings and Chat2Doc.",
    longDescription: "AI-Flow Pro (aiflowpro.io) is an AI-powered platform that serves as a digital ecosystem hosting six AI applications to automate repetitive and administrative tasks, making workflows up to 30% faster and more efficient. It enables users to search multiple online sources, process information from URLs, user-uploaded documents, and multimedia, while delivering analytical summaries, scores, and insights across various domains. The platform emphasizes ease of use, quick setup, process optimization, and custom AI apps for companies or individuals, with features like LLM Search for database integration and tools such as AI for Meetings and Chat2Doc.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    category: "AI-powered workflow automation and productivity tools",
    technologies: ["Google API", "OpenGraph", "AWS", "Vimeo", "React JS", "Python", "LangChain", "LangGraph", "Express", "PostGres"],
    duration: "1 year",
    teamSize: "4 developers",
    client: "minck",
    challenge: "Excessive meeting time (15% of company hours), ineffective meetings (89% employee complaints), and email overload (up to 8.8 hours weekly with 50% irrelevant).",
    solution: "We address challenges such as ineffective meetings, excessive administrative tasks, and communication inefficiencies by leveraging AI-driven automation, meeting intelligence, and workflow optimization technologies to save time and boost productivity.",
    results: [
      "Engaging prospects quickly and boosting connection chances by enabling instant AI-driven texts and calls, allowing follow-ups within minutes to significantly increase engagement.",
      "Automatically handling numerous contact attempts (18+), which helps reactivate stale leads and reduces cost per close by up to 33%, improving sales efficiency.",
      "Automatically adding call summaries, notes, tags, and updating CRM systems, which frees teams to focus more on revenue-generating activities rather than manual data entry.",
      "Booking meetings through text, enabling live transfer of qualified leads, and supporting round-robin assignments and calendar integrations to streamline scheduling.",
      "Managing inquiries, screening resumes, conducting initial interviews, and handling support tickets before escalation, improving operational workflow."
    ],
    stats: [
      { label: "Workflow Speed", value: "30%", icon: "TrendingUp", description: "Boosts workflows up to 30% faster by automating repetitive tasks with six AI apps." },
      { label: "Meeting Time Savings", value: "15%", icon: "TrendingDown", description: "Reduces wasted meeting time from 15% of company hours via AI transcription and summaries." },
      { label: "Email Overload Reduction", value: "50%", icon: "Repeat", description: "Cuts irrelevant emails (50%) and handles up to 8.8 hours weekly through automation." },
      { label: "Process Optimization", value: "30%", icon: "Heart", description: "Improves efficiency by 30% with customizable AI for insights in multiple domains." },
      { label: "Administrative Automation", value: "90%", icon: "CheckCircle", description: "Automates summaries, notes, and updates similar to 90% admin load reduction in AI tools." },
      { label: "Productivity Gain", value: "25%", icon: "Calendar", description: "Delivers 25% sales productivity increase via AI meeting intelligence and integrations." },
      { label: "Task Handling Levels", value: "Level 1-3", icon: "Headphones", description: "Manages inquiries, workflows, and escalations with AI for meetings, search, and docs." }
    ],
    testimonial: {
      quote: "Our team leverages AI every day to rapidly prototype and test product features. As a developer, your role is crucial in turning these ideas into smooth and impactful applications. I rely on your expertise to refine the designs and decide which features best serve our users. By focusing on user value and prioritizing based on data-driven insights, we build products that truly help users and grow our business. Your craftsmanship and collaboration are what bring our vision to life and unlock efficiency gains for our customers.",
      author: "Owner/Founder of aiflowpro.io",
      role: "Leading AI workflow development, prototyping, product management, and collaboration with developers to deliver user-focused AI solutions."
    },
    link: "https://aiflowpro.io/",
    featured: true
  },
  {
    id: 'ecommerce-marketplace',
    title: "E-Commerce Marketplace Platform",
    subtitle: "Multi-vendor marketplace handling 1M+ monthly transactions with real-time inventory management",
    description: "A scalable e-commerce platform connecting thousands of vendors with millions of customers worldwide.",
    longDescription: "We built a comprehensive multi-vendor marketplace platform that handles the complete e-commerce lifecycle from product listing to order fulfillment. The platform features intelligent search and recommendation engines, real-time inventory synchronization, secure payment processing, vendor analytics dashboards, and automated fraud detection. The system is designed to scale horizontally, handling traffic spikes during peak shopping seasons while maintaining sub-second response times.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjI3MTQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "E-commerce Development",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Elasticsearch", "Node.js", "AWS", "CloudFlare"],
    duration: "14 months",
    teamSize: "10 developers",
    client: "MarketHub Inc",
    challenge: "The client needed a platform to compete with major marketplaces while handling thousands of vendors, millions of products, complex inventory management, multiple payment methods, fraud prevention, and maintaining performance during traffic spikes up to 10x normal load.",
    solution: "We developed a highly scalable marketplace using Next.js for optimal SEO and performance, implemented real-time inventory tracking with Redis caching, integrated Stripe for secure multi-vendor payments with automatic splits, built an AI-powered search and recommendation engine, created vendor dashboards with sales analytics and inventory management, and implemented fraud detection using machine learning algorithms.",
    results: [
      "Successfully processing 1M+ transactions monthly with 99.99% payment success rate.",
      "Achieved average page load time of 1.2 seconds even during peak traffic.",
      "Reduced fraud incidents by 85% through ML-based detection systems.",
      "Onboarded 5,000+ vendors in the first year with automated verification processes.",
      "Increased customer retention to 68% through personalized recommendations.",
      "Maintained sub-second search response times across 10M+ product listings."
    ],
    stats: [
      { label: "Monthly Transactions", value: "1M+", icon: "ShoppingCart", description: "Processing over 1 million transactions monthly." },
      { label: "Page Load Time", value: "1.2s", icon: "Zap", description: "Lightning-fast page loads even during peak traffic." },
      { label: "Fraud Reduction", value: "85%", icon: "Shield", description: "Reduced fraud through ML-based detection." },
      { label: "Active Vendors", value: "5,000+", icon: "Store", description: "Onboarded vendors with automated verification." },
      { label: "Customer Retention", value: "68%", icon: "Heart", description: "High retention through personalization." },
      { label: "Product Listings", value: "10M+", icon: "Package", description: "Fast search across millions of products." }
    ],
    testimonial: {
      quote: "This platform exceeded our expectations. We launched with confidence knowing it could handle our growth ambitions. The technical architecture is solid, and the team's attention to both vendor and customer experience shows in every detail.",
      author: "David Park",
      role: "CEO, MarketHub Inc"
    },
    link: "https://markethub.example.com"
  },
  {
    id: 'telemedicine-app',
    title: "Telemedicine Mobile Application",
    subtitle: "HIPAA-compliant telemedicine platform connecting 10,000+ patients with healthcare providers",
    description: "A secure, user-friendly telemedicine solution enabling virtual consultations and remote patient monitoring.",
    longDescription: "We created a comprehensive telemedicine platform that brings healthcare to patients' fingertips. The application features HD video consultations with built-in medical tools, secure messaging with end-to-end encryption, electronic health records integration, prescription management, appointment scheduling, and remote monitoring of vital signs through connected devices. The platform is fully HIPAA-compliant with robust security measures and audit trails.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2OTc0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Healthcare Solution",
    technologies: ["React Native", "Firebase", "WebRTC", "HIPAA", "Node.js", "PostgreSQL", "AWS", "Twilio"],
    duration: "12 months",
    teamSize: "9 developers",
    client: "HealthConnect",
    challenge: "Healthcare providers needed a HIPAA-compliant platform to offer remote consultations during the pandemic and beyond. Key challenges included ensuring data security and privacy, providing reliable HD video quality, integrating with existing EHR systems, managing prescriptions electronically, and supporting patients across different devices and connectivity levels.",
    solution: "We built a HIPAA-compliant mobile and web application with end-to-end encryption for all communications. The platform features WebRTC-based video consultations with adaptive bitrate streaming, HL7 FHIR integration for EHR interoperability, e-prescription system integrated with pharmacy networks, automated appointment reminders via SMS and push notifications, and offline-first architecture for areas with poor connectivity.",
    results: [
      "Facilitated 50,000+ virtual consultations in the first year with 98% satisfaction rating.",
      "Reduced no-show rates by 45% through automated reminders and easy rescheduling.",
      "Achieved 99.7% video call connection success rate across various network conditions.",
      "Decreased patient wait times from days to hours for non-emergency consultations.",
      "Enabled healthcare access for rural patients with limited transportation options.",
      "Maintained perfect HIPAA compliance with zero security incidents."
    ],
    stats: [
      { label: "Virtual Consultations", value: "50K+", icon: "Video", description: "Consultations completed in the first year." },
      { label: "Patient Satisfaction", value: "98%", icon: "Heart", description: "High satisfaction rating from patients." },
      { label: "Connection Success", value: "99.7%", icon: "Wifi", description: "Reliable video calls across networks." },
      { label: "No-Show Reduction", value: "45%", icon: "Calendar", description: "Reduced no-shows with reminders." },
      { label: "HIPAA Compliance", value: "100%", icon: "Shield", description: "Perfect compliance with zero incidents." },
      { label: "Active Users", value: "10K+", icon: "Users", description: "Patients using the platform regularly." }
    ],
    testimonial: {
      quote: "This platform has revolutionized how we deliver care to our patients. The technical execution is flawless, and the team's understanding of healthcare regulations and patient needs is exceptional. It's become an indispensable tool for our practice.",
      author: "Dr. Amanda Foster",
      role: "Chief Medical Officer, HealthConnect"
    }
  },
  {
    id: 'digital-banking',
    title: "Digital Banking Platform",
    subtitle: "Secure banking application with real-time transactions, fraud detection, and AI-powered insights",
    description: "A modern digital banking platform offering seamless financial services with advanced security.",
    longDescription: "We developed a next-generation digital banking platform that combines user-friendly design with enterprise-grade security. The application offers real-time account management, instant transfers, bill payments, investment tracking, and personalized financial insights powered by AI. The platform features multi-factor authentication, biometric login, transaction monitoring, and fraud detection systems that analyze patterns in real-time to protect customers.",
    image: "https://images.unsplash.com/photo-1726137065566-153debe32a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NjI3Njc5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "FinTech Solution",
    technologies: ["Vue.js", "Python", "Kubernetes", "AI/ML", "PostgreSQL", "Redis", "Kafka", "AWS"],
    duration: "16 months",
    teamSize: "14 developers",
    client: "NeoBank Financial",
    challenge: "Traditional banking infrastructure couldn't meet modern customer expectations for instant services, mobile-first experiences, personalized insights, and real-time fraud protection. The client needed to build a digital-first platform while ensuring regulatory compliance and security standards.",
    solution: "We architected a cloud-native banking platform with microservices for scalability and resilience. Implemented real-time transaction processing with Kafka streaming, developed ML models for fraud detection and spending insights, integrated with core banking systems and payment networks, built a mobile-first responsive UI with offline capabilities, and ensured compliance with PSD2, GDPR, and banking regulations.",
    results: [
      "Onboarded 250,000+ customers in the first year with 4.8/5 app store rating.",
      "Processing 2M+ transactions monthly with average settlement time under 30 seconds.",
      "Detected and prevented $2.5M in fraudulent transactions using AI algorithms.",
      "Reduced customer support inquiries by 60% through intuitive UX and AI chatbot.",
      "Achieved 99.98% platform uptime with zero data breaches since launch.",
      "Increased customer engagement with personalized insights, averaging 12 logins per month."
    ],
    stats: [
      { label: "Customer Base", value: "250K+", icon: "Users", description: "Customers onboarded in first year." },
      { label: "Transaction Speed", value: "<30s", icon: "Zap", description: "Average transaction settlement time." },
      { label: "Fraud Prevention", value: "$2.5M", icon: "Shield", description: "Fraudulent transactions prevented." },
      { label: "App Rating", value: "4.8/5", icon: "Star", description: "High customer satisfaction rating." },
      { label: "Platform Uptime", value: "99.98%", icon: "Activity", description: "Exceptional reliability and uptime." },
      { label: "Monthly Logins", value: "12", icon: "TrendingUp", description: "High engagement per customer." }
    ],
    testimonial: {
      quote: "The platform has positioned us as a true digital-first bank. Our customers love the experience, and the robust architecture gives us confidence to scale. The team's expertise in fintech and security was crucial to our success.",
      author: "Robert Kumar",
      role: "CTO, NeoBank Financial"
    }
  },
  {
    id: 'crm-real-estate',
    title: "Custom CRM for Real Estate",
    subtitle: "Tailored CRM solution automating lead management and property listing workflows",
    description: "An intelligent CRM system designed specifically for real estate agencies to manage leads, properties, and deals.",
    longDescription: "We built a specialized CRM platform for real estate professionals that streamlines the entire sales pipeline from lead capture to deal closure. The system features automated lead scoring, property matching algorithms, integrated communication tools, document management, virtual tour integration, and comprehensive analytics. The platform integrates with major real estate portals, social media platforms, and email marketing tools to provide a unified workspace.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI3NDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "CRM Development",
    technologies: ["Angular", "Django", "MySQL", "Salesforce", "AWS", "Twilio", "SendGrid", "Stripe"],
    duration: "10 months",
    teamSize: "8 developers",
    client: "Premier Realty Group",
    challenge: "Real estate agents were managing leads across multiple spreadsheets, email threads, and disconnected tools. They needed a centralized system to track leads, automate follow-ups, match properties to buyer preferences, manage documents and contracts, and provide insights into sales performance.",
    solution: "We developed a comprehensive CRM with AI-powered lead scoring and property matching, automated email and SMS campaigns based on user behavior, integrated calendar for property viewings and appointments, document storage with e-signature capabilities, mobile app for on-the-go access, and analytics dashboards tracking conversion rates and agent performance.",
    results: [
      "Increased lead conversion rate by 35% through automated follow-ups and scoring.",
      "Reduced time to match properties to buyers from days to minutes using AI.",
      "Improved agent productivity by 50% with automated workflows and mobile access.",
      "Achieved 90% reduction in missed follow-ups through intelligent reminders.",
      "Enabled paperless transactions with integrated document management and e-signatures.",
      "Grew revenue by 28% in first year through better lead management and insights."
    ],
    stats: [
      { label: "Conversion Rate Increase", value: "35%", icon: "TrendingUp", description: "Higher conversion through automation." },
      { label: "Property Matching", value: "Minutes", icon: "Home", description: "Fast AI-powered property matching." },
      { label: "Productivity Gain", value: "50%", icon: "Clock", description: "Improved agent productivity." },
      { label: "Follow-up Improvement", value: "90%", icon: "CheckCircle", description: "Reduced missed follow-ups." },
      { label: "Revenue Growth", value: "28%", icon: "DollarSign", description: "Revenue increase in first year." },
      { label: "Active Agents", value: "200+", icon: "Users", description: "Real estate agents using the platform." }
    ],
    testimonial: {
      quote: "This CRM has transformed our business operations. We're closing more deals faster, and our agents can focus on building relationships instead of administrative tasks. The ROI has been phenomenal.",
      author: "Lisa Martinez",
      role: "Managing Director, Premier Realty Group"
    }
  },
  {
    id: 'iot-fleet',
    title: "IoT Fleet Management System",
    subtitle: "Real-time tracking and management platform for 5,000+ vehicles with predictive maintenance",
    description: "A comprehensive IoT solution for fleet operators to monitor, manage, and optimize vehicle operations.",
    longDescription: "We engineered a sophisticated IoT fleet management platform that provides real-time visibility into vehicle locations, driver behavior, fuel consumption, and maintenance needs. The system collects data from GPS trackers, OBD-II devices, and various sensors to provide actionable insights. Features include route optimization, geofencing, driver scorecards, predictive maintenance alerts, fuel management, and compliance reporting for regulatory requirements.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjI3NjIyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "IoT Solution",
    technologies: ["React", "MQTT", "TimescaleDB", "Azure", "Node.js", "Python", "TensorFlow", "Grafana"],
    duration: "14 months",
    teamSize: "11 developers",
    client: "LogiTrans Corporation",
    challenge: "The client managed a large fleet without real-time visibility, leading to inefficient routes, unexpected breakdowns, excessive fuel costs, poor driver behavior monitoring, and difficulty ensuring regulatory compliance. Manual processes made it impossible to optimize operations at scale.",
    solution: "We built an IoT platform ingesting data from 5,000+ vehicles in real-time via MQTT. Implemented machine learning models for predictive maintenance and route optimization, created real-time dashboards showing fleet status, location, and alerts, developed driver behavior scoring system with gamification, integrated with fuel cards and maintenance management systems, and built compliance reporting for DOT and safety regulations.",
    results: [
      "Reduced fuel costs by 18% through route optimization and driver behavior monitoring.",
      "Decreased vehicle downtime by 42% with predictive maintenance alerts.",
      "Improved on-time delivery rate from 82% to 96% through better route planning.",
      "Reduced accident rates by 35% through driver behavior tracking and training.",
      "Automated compliance reporting saving 200+ hours monthly for operations team.",
      "Achieved ROI in 8 months through operational efficiencies and cost savings."
    ],
    stats: [
      { label: "Fuel Cost Reduction", value: "18%", icon: "TrendingDown", description: "Savings through optimization." },
      { label: "Downtime Reduction", value: "42%", icon: "Wrench", description: "Less downtime with predictive maintenance." },
      { label: "On-Time Delivery", value: "96%", icon: "Clock", description: "Improved delivery performance." },
      { label: "Accident Reduction", value: "35%", icon: "Shield", description: "Safer driving through monitoring." },
      { label: "Fleet Size", value: "5,000+", icon: "Truck", description: "Vehicles managed by the platform." },
      { label: "ROI Timeline", value: "8 months", icon: "DollarSign", description: "Fast return on investment." }
    ],
    testimonial: {
      quote: "The visibility and control we now have over our fleet is incredible. The predictive maintenance alone has saved us hundreds of thousands in unexpected repairs. This platform is mission-critical for our operations.",
      author: "Carlos Mendez",
      role: "VP of Operations, LogiTrans Corporation"
    }
  },
  {
    id: 'saas-pm-tool',
    title: "SaaS Project Management Tool",
    subtitle: "Collaborative project management platform serving 50,000+ users across 100+ companies",
    description: "A modern project management solution built for distributed teams to plan, track, and deliver projects efficiently.",
    longDescription: "We created a comprehensive project management platform that combines simplicity with powerful features. The tool offers kanban boards, Gantt charts, time tracking, resource allocation, custom workflows, real-time collaboration, file sharing, and integrations with popular tools like Slack, GitHub, and Jira. Built with a focus on user experience, the platform adapts to different methodologies including Agile, Scrum, and Waterfall.",
    image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyNzI1NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "SaaS Development",
    technologies: ["React", "GraphQL", "PostgreSQL", "Docker", "Redis", "Node.js", "WebSockets", "AWS"],
    duration: "12 months",
    teamSize: "10 developers",
    client: "TaskFlow Inc",
    challenge: "Teams struggled with fragmented project management tools that didn't scale with their growth. They needed a platform that could handle multiple projects simultaneously, support various project methodologies, provide real-time collaboration features, integrate with existing tools, offer granular permissions and security, and deliver a great user experience.",
    solution: "We built a multi-tenant SaaS platform with real-time collaboration using WebSockets, flexible project views (kanban, list, timeline, calendar), custom automation and workflows without coding, time tracking with reporting and invoicing features, granular role-based access control, and 50+ integrations via REST and GraphQL APIs.",
    results: [
      "Acquired 50,000+ users across 100+ companies within 18 months of launch.",
      "Achieved 92% user retention rate through continuous product improvements.",
      "Reduced average project delivery time by 25% for teams using the platform.",
      "Maintained 99.97% uptime with horizontally scalable architecture.",
      "Generated $2M ARR in first year with freemium-to-paid conversion rate of 12%.",
      "Received 4.7/5 rating on software review platforms with 500+ reviews."
    ],
    stats: [
      { label: "Active Users", value: "50K+", icon: "Users", description: "Users across enterprise clients." },
      { label: "User Retention", value: "92%", icon: "Heart", description: "High retention through great UX." },
      { label: "Delivery Speed", value: "+25%", icon: "Zap", description: "Faster project delivery." },
      { label: "Platform Uptime", value: "99.97%", icon: "Activity", description: "Reliable cloud infrastructure." },
      { label: "Annual Revenue", value: "$2M", icon: "DollarSign", description: "ARR in first year." },
      { label: "Platform Rating", value: "4.7/5", icon: "Star", description: "Highly rated by users." }
    ],
    testimonial: {
      quote: "We've tried many project management tools, but this one finally got it right. It's powerful without being overwhelming, and the team's responsiveness to feedback has been outstanding. It's become the central hub for all our work.",
      author: "Alex Johnson",
      role: "Head of Product, TaskFlow Inc"
    },
    link: "https://taskflow.example.com"
  },
  {
    id: "food-delivery",
    title: "Food Delivery Mobile App",
    subtitle: "On-demand food delivery platform with real-time tracking and smart routing algorithms",
    description: "A comprehensive food delivery solution connecting restaurants, delivery partners, and hungry customers.",
    longDescription: "We developed a three-sided marketplace app for restaurants, delivery partners, and customers. The platform features intelligent order routing, real-time GPS tracking, dynamic pricing, restaurant management dashboards, driver apps with turn-by-turn navigation, and customer apps with seamless ordering experiences. The system uses ML algorithms to optimize delivery times and routes while maintaining food quality.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mobile Development",
    technologies: ["Flutter", "Node.js", "Google Maps", "Stripe", "Firebase", "MongoDB", "Redis", "AWS"],
    duration: "11 months",
    teamSize: "9 developers",
    client: "QuickBite",
    challenge: "The food delivery market demanded a solution that could handle peak ordering times, optimize delivery routes for efficiency, provide accurate delivery time estimates, manage restaurant inventory in real-time, process payments securely and quickly, and ensure great user experience across all stakeholder apps.",
    solution: "We created a Flutter-based cross-platform app suite with smart order batching and routing algorithms, real-time order tracking with push notifications, integrated payment processing with split payments for group orders, restaurant dashboard for menu and order management, driver app with earnings tracking and navigation, and AI-powered delivery time estimation based on traffic and historical data.",
    results: [
      "Launched with 500+ restaurant partners and 1,000+ delivery drivers in first 3 months.",
      "Processing 15,000+ orders daily with average delivery time of 28 minutes.",
      "Achieved 89% on-time delivery rate through optimized routing algorithms.",
      "Maintained 4.6/5 average customer rating across 50,000+ orders.",
      "Reduced customer support tickets by 55% through real-time tracking and notifications.",
      "Generated $500K monthly GMV within 6 months of launch in single city."
    ],
    stats: [
      { label: "Daily Orders", value: "15K+", icon: "ShoppingBag", description: "Orders processed daily." },
      { label: "Delivery Time", value: "28 min", icon: "Clock", description: "Average delivery duration." },
      { label: "On-Time Rate", value: "89%", icon: "CheckCircle", description: "Reliable delivery performance." },
      { label: "Customer Rating", value: "4.6/5", icon: "Star", description: "High customer satisfaction." },
      { label: "Restaurant Partners", value: "500+", icon: "Store", description: "Active restaurant partners." },
      { label: "Monthly GMV", value: "$500K", icon: "DollarSign", description: "Gross merchandise value." }
    ],
    testimonial: {
      quote: "The platform's reliability during peak hours is impressive. The routing intelligence saves us significant time and fuel costs, and our customers love the transparency of real-time tracking. It's been a game-changer for our business.",
      author: "Priya Sharma",
      role: "COO, QuickBite"
    }
  },
  {
    id: 'legacy-modernization',
    title: "Legacy System Modernization",
    subtitle: "Migrated legacy mainframe application to modern microservices architecture without downtime",
    description: "A complex migration project transforming decades-old systems into cloud-native, scalable architecture.",
    longDescription: "We executed a phased migration of a critical legacy mainframe system to modern microservices architecture. The project involved analyzing and documenting the existing system, designing a cloud-native architecture, implementing a strangler fig pattern for gradual migration, ensuring data consistency across old and new systems, training teams on new technologies, and achieving zero downtime during the entire transition period.",
    image: "https://images.unsplash.com/photo-1599652749620-e45b7f38988e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjI4MjYxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "System Migration",
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "Kafka", "AWS", "Jenkins"],
    duration: "24 months",
    teamSize: "15 developers",
    client: "Enterprise Financial Services",
    challenge: "The client's 30-year-old mainframe system was expensive to maintain, difficult to modify, lacked modern security features, couldn't scale to meet growing demands, and made it hard to recruit developers. They needed to modernize without disrupting critical business operations running 24/7.",
    solution: "We implemented a strangler fig migration pattern, gradually replacing mainframe modules with microservices. Created APIs to interface between legacy and new systems during transition, migrated data incrementally with comprehensive validation, built CI/CD pipelines for automated testing and deployment, containerized all new services for portability and scalability, and provided extensive training and documentation for internal teams.",
    results: [
      "Completed migration of 15 core modules over 24 months with zero downtime.",
      "Reduced infrastructure costs by 60% by moving from mainframe to cloud.",
      "Improved system response time by 10x through modern architecture.",
      "Enabled continuous deployment with 20+ releases per week vs. quarterly before.",
      "Reduced bug fix time from weeks to hours with modern development practices.",
      "Positioned company for innovation with API-first, cloud-native architecture."
    ],
    stats: [
      { label: "Cost Reduction", value: "60%", icon: "TrendingDown", description: "Lower infrastructure costs." },
      { label: "Performance Gain", value: "10x", icon: "Zap", description: "Faster system response times." },
      { label: "Release Frequency", value: "20+/week", icon: "GitBranch", description: "Continuous deployment enabled." },
      { label: "Migration Period", value: "24 months", icon: "Calendar", description: "Phased migration timeline." },
      { label: "System Uptime", value: "100%", icon: "Activity", description: "Zero downtime during migration." },
      { label: "Modules Migrated", value: "15", icon: "Package", description: "Core modules modernized." }
    ],
    testimonial: {
      quote: "This was the most critical project in our company's history, and the execution was flawless. We're now positioned for the next decade of growth with a modern, scalable platform. The team's expertise in both legacy and modern systems was essential to our success.",
      author: "Thomas Wright",
      role: "SVP of Technology, Enterprise Financial Services"
    }
  }
];

function isMobilePortfolioProject(project: PortfolioProject): boolean {
  const title = project.title.toLowerCase();
  const category = project.category.toLowerCase();
  const technologies = project.technologies.map((t) => t.toLowerCase());
  return (
    category.includes("mobile") ||
    title.includes("mobile app") ||
    technologies.includes("ios") ||
    technologies.includes("android") ||
    technologies.includes("react native") ||
    technologies.includes("flutter")
  );
}

const PLACEHOLDER_MOBILE_CARD_TITLE = /^(play\.google\.com|apps\.apple\.com)$/i;
const SIXT_MISIMPORT_BOILERPLATE = "250,000 cars";

function humanizeWordParts(s: string): string {
  return s
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function humanizeFromSlugSegment(slug: string): string {
  try {
    slug = decodeURIComponent(slug);
  } catch {
    /* ignore */
  }
  const spaced = slug
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z0-9])/g, "$1 $2")
    .replace(/([0-9])([a-zA-Z])/g, "$1 $2");
  return humanizeWordParts(spaced);
}

function titleFromStoreLink(link: string | undefined): string | null {
  if (!link?.trim()) return null;
  try {
    const u = new URL(link.trim());
    const host = u.hostname.replace(/^www\./i, "").toLowerCase();

    if (host === "play.google.com" && /\/store\/apps\/details\b/i.test(u.pathname)) {
      const packageId = u.searchParams.get("id");
      if (!packageId) return null;
      const parts = packageId.split(".").filter(Boolean);
      if (!parts.length) return null;
      const skipTail = new Set([
        "app",
        "android",
        "mobile",
        "ios",
        "free",
        "lite",
        "pro",
        "hd",
        "plus",
      ]);
      let i = parts.length - 1;
      while (i > 0 && skipTail.has(parts[i].toLowerCase())) i--;
      return humanizeFromSlugSegment(parts[i]);
    }

    if (host === "apps.apple.com") {
      const m = u.pathname.match(/\/app\/([^/]+)\//i);
      if (m?.[1]) return humanizeFromSlugSegment(m[1]);
    }
  } catch {
    return null;
  }
  return null;
}

function titleFromDatabaseMobileFolderId(id: string): string | null {
  const prefix = "db-mobile-";
  if (!id.startsWith(prefix)) return null;
  const slug = id.slice(prefix.length);
  return slug
    .split("-")
    .filter((w) => w.length > 0)
    .map((w) => humanizeWordParts(w))
    .join(" ");
}

/**
 * Card heading for the Mobile Apps tab: database imports sometimes use hostnames or
 * duplicated case-study copy as `title` while the store URL identifies the real app.
 */
export function getMobilePortfolioCardTitle(project: PortfolioProject): string {
  const t = project.title.trim();
  const badTitle =
    PLACEHOLDER_MOBILE_CARD_TITLE.test(t) ||
    t.includes(SIXT_MISIMPORT_BOILERPLATE) ||
    /^figma\.com$/i.test(t);

  if (badTitle) {
    const fromLink = titleFromStoreLink(project.link);
    if (fromLink) return fromLink;
    const fromId = titleFromDatabaseMobileFolderId(project.id);
    if (fromId) return fromId;
  }

  return t || "Mobile project";
}

/** Figma file references from Database — shown under the Figma Design tab only. */
export const figmaPortfolioProjects: PortfolioProject[] = databaseSoftwareProjects.filter(
  (p) => p.category === "Figma Design"
);

const databaseSoftwareProjectsExcludingFigmaAndMobile = databaseSoftwareProjects.filter(
  (p) => p.category !== "Figma Design" && p.category !== "Mobile Apps"
);

const softwarePortfolioPool: PortfolioProject[] = [
  ...baseCustomSoftwareProjects,
  ...databaseSoftwareProjectsExcludingFigmaAndMobile,
];

/** Mobile app items from both core portfolio and database imports. */
export const mobileAppPortfolioProjects: PortfolioProject[] = [
  ...softwarePortfolioPool.filter(isMobilePortfolioProject),
  ...databaseSoftwareProjects.filter((p) => p.category === "Mobile Apps"),
];

/** AI automation/software tab excludes mobile-focused projects. */
export const customSoftwareProjects: PortfolioProject[] = softwarePortfolioPool.filter(
  (p) => !isMobilePortfolioProject(p)
);

export const qaTestingProjects: PortfolioProject[] = [
  {
    id: 'ecommerce-qa',
    title: "E-Commerce QA Automation Suite",
    subtitle: "Comprehensive automation framework covering 5,000+ test cases, reducing testing time by 80%",
    description: "An extensive test automation framework ensuring quality across a complex e-commerce platform.",
    longDescription: "We designed and implemented a comprehensive QA automation framework for a large-scale e-commerce platform. The framework covers functional, regression, performance, and security testing across web, mobile, and API layers. Using a hybrid framework approach combining data-driven and keyword-driven methodologies, we created maintainable, scalable test suites with detailed reporting and CI/CD integration.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjI3MTQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Test Automation",
    technologies: ["Selenium", "Pytest", "Jenkins", "BrowserStack", "Appium", "JMeter", "TestNG", "Allure"],
    duration: "8 months",
    teamSize: "6 QA engineers",
    client: "ShopSphere",
    challenge: "Manual testing was consuming 200+ hours per release cycle, regression testing was incomplete due to time constraints, cross-browser and cross-device testing was limited, production defects were discovered too late, and test reporting lacked actionable insights for stakeholders.",
    solution: "We built a modular automation framework using Page Object Model design pattern, implemented parallel execution across multiple browsers and devices using BrowserStack, created data-driven tests for various user scenarios and edge cases, integrated with Jenkins for automated test execution on every commit, developed custom reporting with Allure for detailed test analytics, and set up automated performance testing for critical user flows.",
    results: [
      "Reduced regression testing time from 5 days to 6 hours through parallel automation.",
      "Achieved 85% test automation coverage across 5,000+ test scenarios.",
      "Detected 93% of critical bugs before production through comprehensive testing.",
      "Enabled daily releases with confidence through continuous testing integration.",
      "Reduced post-release defects by 67% through improved test coverage.",
      "Freed QA team to focus on exploratory and usability testing rather than repetitive tasks."
    ],
    stats: [
      { label: "Time Reduction", value: "80%", icon: "Clock", description: "Faster regression testing cycles." },
      { label: "Test Coverage", value: "85%", icon: "Target", description: "Comprehensive automation coverage." },
      { label: "Bug Detection", value: "93%", icon: "Bug", description: "Critical bugs caught pre-production." },
      { label: "Test Cases", value: "5,000+", icon: "CheckCircle", description: "Automated test scenarios." },
      { label: "Defect Reduction", value: "67%", icon: "TrendingDown", description: "Fewer production issues." },
      { label: "Release Frequency", value: "Daily", icon: "Zap", description: "Continuous delivery enabled." }
    ],
    testimonial: {
      quote: "The automation framework transformed our QA process. We now ship with confidence knowing our comprehensive test suite has our back. The ROI on this investment has been tremendous.",
      author: "Jennifer Wang",
      role: "VP of Engineering, ShopSphere"
    }
  },
  {
    id: 'banking-security',
    title: "Banking App Security Testing",
    subtitle: "Identified and remediated 47 security vulnerabilities in mobile banking application",
    description: "Comprehensive security assessment and penetration testing for a mobile banking platform.",
    longDescription: "We conducted an extensive security audit and penetration testing engagement for a mobile banking application. Our team performed OWASP-based security testing, code review, infrastructure assessment, social engineering tests, and compliance validation. We identified vulnerabilities ranging from authentication flaws to data exposure risks, providing detailed remediation guidance and retesting to ensure fixes were effective.",
    image: "https://images.unsplash.com/photo-1726137065566-153debe32a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NjI3Njc5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Security & Penetration Testing",
    technologies: ["OWASP", "Burp Suite", "Kali Linux", "VAPT", "Metasploit", "Nmap", "Wireshark", "SonarQube"],
    duration: "4 months",
    teamSize: "5 security specialists",
    client: "SecureBank Mobile",
    challenge: "The client needed to ensure their mobile banking app met stringent security requirements before public launch. Concerns included authentication and session management, secure data transmission and storage, protection against common mobile threats, API security vulnerabilities, and compliance with banking security standards.",
    solution: "We executed a comprehensive security testing program including OWASP Mobile Top 10 vulnerability assessment, penetration testing of iOS and Android applications, API security testing for backend services, source code security review and static analysis, threat modeling and security architecture review, and social engineering tests targeting customer support.",
    results: [
      "Identified 47 security vulnerabilities including 8 critical and 15 high-severity issues.",
      "Discovered authentication bypass allowing unauthorized account access.",
      "Found sensitive data exposure in application logs and temporary files.",
      "Detected insecure API endpoints vulnerable to parameter tampering.",
      "Provided detailed remediation guidance for all findings with code examples.",
      "Achieved 100% remediation of critical and high-severity vulnerabilities before launch."
    ],
    stats: [
      { label: "Vulnerabilities Found", value: "47", icon: "AlertTriangle", description: "Security issues identified." },
      { label: "Critical Issues", value: "8", icon: "AlertOctagon", description: "Critical vulnerabilities detected." },
      { label: "Remediation Rate", value: "100%", icon: "Shield", description: "All critical issues fixed." },
      { label: "Testing Duration", value: "4 months", icon: "Calendar", description: "Comprehensive assessment period." },
      { label: "Compliance Met", value: "100%", icon: "CheckCircle", description: "Banking standards achieved." },
      { label: "Retest Success", value: "100%", icon: "Check", description: "All fixes validated." }
    ],
    testimonial: {
      quote: "The security testing uncovered issues we never would have found ourselves. The team's expertise and detailed reporting gave us a clear roadmap to secure our application. We launched with complete confidence.",
      author: "Robert Kumar",
      role: "CISO, SecureBank Mobile"
    }
  },
  {
    id: 'healthcare-performance',
    title: "Healthcare App Performance Testing",
    subtitle: "Load testing for telemedicine platform handling 100,000 concurrent users during peak hours",
    description: "Performance and load testing ensuring scalability for a telemedicine application.",
    longDescription: "We designed and executed a comprehensive performance testing strategy for a telemedicine platform expected to handle massive concurrent usage. Our testing covered load testing, stress testing, endurance testing, and spike testing scenarios. We identified bottlenecks, optimized database queries, tuned application servers, and validated the infrastructure could handle projected growth.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2OTc0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Performance & Load Testing",
    technologies: ["JMeter", "Gatling", "New Relic", "Datadog", "Grafana", "Prometheus", "AWS CloudWatch", "LoadRunner"],
    duration: "5 months",
    teamSize: "4 performance engineers",
    client: "TeleHealth Plus",
    challenge: "The platform needed to handle 100,000 concurrent users during peak hours without performance degradation. Video consultation quality had to remain high under load, database performance needed optimization, and the infrastructure had to scale automatically. No performance baseline existed to measure against.",
    solution: "We created realistic load test scenarios simulating patient registrations, video consultations, prescription requests, and appointment bookings. Implemented progressive load testing ramping from 1,000 to 100,000 users, monitored all system components using APM tools, identified and resolved database query optimization opportunities, configured auto-scaling rules based on performance metrics, and established performance baselines and SLAs.",
    results: [
      "Successfully validated platform handling 100,000 concurrent users with sub-2s response times.",
      "Identified and resolved 23 performance bottlenecks before production launch.",
      "Reduced database query time by 75% through optimization and indexing.",
      "Improved video consultation quality by optimizing WebRTC settings under load.",
      "Reduced infrastructure costs by 30% through right-sizing and auto-scaling configuration.",
      "Established comprehensive performance monitoring and alerting system."
    ],
    stats: [
      { label: "Concurrent Users", value: "100K", icon: "Users", description: "Maximum load tested successfully." },
      { label: "Response Time", value: "<2s", icon: "Zap", description: "Fast response under peak load." },
      { label: "Query Optimization", value: "75%", icon: "Database", description: "Database performance improvement." },
      { label: "Bottlenecks Fixed", value: "23", icon: "Wrench", description: "Performance issues resolved." },
      { label: "Cost Reduction", value: "30%", icon: "DollarSign", description: "Infrastructure cost savings." },
      { label: "Video Quality", value: "HD", icon: "Video", description: "Maintained under load." }
    ],
    testimonial: {
      quote: "The performance testing gave us complete confidence in our infrastructure. When we experienced an unexpected surge in users, the system handled it flawlessly because of the thorough testing and optimization work.",
      author: "Amanda Foster",
      role: "CTO, TeleHealth Plus"
    }
  }
];