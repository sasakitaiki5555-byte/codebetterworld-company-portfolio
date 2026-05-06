/**
 * Brand / semantic Tailwind color classes for technology labels (icons use currentColor).
 * Keys mirror `TECH_ICONS` in TechIcon.tsx.
 */
export const TECH_ICON_COLOR: Record<string, string> = {
  // Backend
  "Node.js": "text-[#339933]",
  Python: "text-[#3776AB]",
  PHP: "text-[#777BB4]",
  Golang: "text-[#00ADD8]",
  ".NET": "text-[#512BD4]",
  Java: "text-[#ED8B00]",
  SQL: "text-[#4479A1]",
  Django: "text-[#092E20]",
  "Express.js": "text-[#000000]",
  "Spring Boot": "text-[#6DB33F]",

  // Frontend
  "React.js": "text-[#149ECA]",
  React: "text-[#149ECA]",
  "React JS": "text-[#149ECA]",
  Angular: "text-[#DD0031]",
  "Vue.js": "text-[#4FC08D]",
  JavaScript: "text-yellow-600",
  TypeScript: "text-[#3178C6]",
  "Next.js": "text-[#000000]",
  HTML5: "text-[#E34F26]",
  CSS3: "text-[#663399]",
  "Tailwind CSS": "text-[#06B6D4]",

  // Mobile
  "iOS App Development": "text-[#000000]",
  "Android App Development": "text-[#3DDC84]",
  Flutter: "text-[#02569B]",
  "React Native": "text-[#61DAFB]",
  Kotlin: "text-[#7F52FF]",
  Xamarin: "text-[#3498DB]",
  Swift: "text-[#FA7343]",
  "Objective-C": "text-[#000000]",

  // DevOps & Cloud
  AWS: "text-[#FF9900]",
  "Google Cloud": "text-[#4285F4]",
  Azure: "text-[#0078D4]",
  "Hybrid Cloud": "text-sky-500",
  Jenkins: "text-[#D24939]",
  Selenium: "text-[#43B02A]",
  Docker: "text-[#2496ED]",
  Kubernetes: "text-[#326CE5]",
  Terraform: "text-[#7B42BC]",
  "CI/CD": "text-[#2088FF]",

  // AI & Automation
  "Machine Learning": "text-violet-600",
  "Deep Learning": "text-purple-600",
  "Natural Language Processing": "text-cyan-600",
  "Robotic process automation": "text-teal-600",
  "AI-based chatbot solutions": "text-green-600",
  "AI-based smart security": "text-emerald-600",
  "Custom Large Language Models": "text-fuchsia-600",
  "AI-Driven Customer Care Analytics": "text-blue-600",
  "AI-based pose detection for MSK rehab": "text-rose-600",
  "AI for digital physiotherapy": "text-pink-600",

  // Generative AI
  "Generative AI Development": "text-violet-500",
  "Generative AI Integration": "text-violet-500",
  "Generative AI Consulting": "text-violet-500",
  "Adaptive AI Development": "text-indigo-600",
  "Transformer Model Development": "text-orange-600",
  "LLM Development": "text-[#10A37F]",
  "Stable Diffusion Model": "text-amber-600",
  "ChatGPT Solutions": "text-[#10A37F]",
  "GPT-4 Integration": "text-[#10A37F]",
  LangChain: "text-[#1C3C3C]",
  LangGraph: "text-[#1C3C3C]",

  // Blockchain
  "Blockchain Development": "text-[#627EEA]",
  "Smart Contracts": "text-orange-600",
  Cryptocurrency: "text-amber-500",
  "NFT Development": "text-purple-600",
  Web3: "text-emerald-500",
  DeFi: "text-blue-600",
  Metaverse: "text-cyan-600",
  "CRC20 Token Development": "text-[#627EEA]",
  "Asset Tokenization": "text-indigo-600",
  "Real Estate Tokenization": "text-amber-700",
  "BEP20 Token Development": "text-[#627EEA]",
  "Ethereum Token Development": "text-[#627EEA]",

  // Platforms & CMS
  Salesforce: "text-[#00A1E0]",
  ServiceNow: "text-[#81B5A1]",
  Odoo: "text-[#714B67]",
  Magento: "text-[#EE672F]",
  Shopify: "text-[#7AB55C]",
  WordPress: "text-[#21759B]",
  Strapi: "text-[#4945FF]",
  Drupal: "text-[#0678BE]",
  "MS PowerApps": "text-[#742774]",
  "Power BI": "text-[#F2C811]",
  "Power Automate": "text-[#0066FF]",

  // Databases
  PostgreSQL: "text-[#4169E1]",
  MongoDB: "text-[#47A248]",
  MySQL: "text-[#4479A1]",
  Redis: "text-[#DC382D]",
  Cassandra: "text-[#1287B1]",
  Snowflake: "text-[#29B5E8]",
  Databricks: "text-[#FF3621]",
  "Apache Spark": "text-[#E25A1C]",
  Hadoop: "text-[#FF652F]",
  ElasticSearch: "text-[#FEC514]",

  // Specialized
  "Field Service Management": "text-blue-600",
  "Firmware Development": "text-amber-700",
  "Fraud Protection": "text-red-600",
  "Middleware Development": "text-indigo-600",
  "Sales Management": "text-emerald-600",
  "C++": "text-[#00599C]",
  "C#": "text-[#239120]",
  Scala: "text-[#DC322F]",
  "Ruby on Rails": "text-[#CC0000]",
  Perl: "text-[#39457E]",

  // Hire / misc
  TensorFlow: "text-[#FF6F00]",
  PyTorch: "text-[#EE4C2C]",
  "Computer Vision": "text-fuchsia-600",
  NLP: "text-sky-600",
  LLM: "text-[#10A37F]",
  "MERN Stack": "text-emerald-600",
  "MEAN Stack": "text-lime-600",
  "Python/Django": "text-[#092E20]",
  "Java/Spring": "text-[#6DB33F]",
  Solidity: "text-[#363636]",
  NFT: "text-purple-600",
  "iOS (Swift)": "text-[#FA7343]",
  "Android (Kotlin)": "text-[#7F52FF]",
};

const DEFAULT_TECH_COLOR = "text-teal-600";

export function getTechIconColorClass(name: string): string {
  const k = name.trim();
  if (TECH_ICON_COLOR[k]) return TECH_ICON_COLOR[k];
  const lower = k.toLowerCase();
  for (const [key, val] of Object.entries(TECH_ICON_COLOR)) {
    if (key.toLowerCase() === lower) return val;
  }
  return DEFAULT_TECH_COLOR;
}
