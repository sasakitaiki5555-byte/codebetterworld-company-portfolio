import type { IconType } from "react-icons";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import {
  SiAndroid,
  SiAngular,
  SiApachecassandra,
  SiApachehadoop,
  SiApachespark,
  SiAndroidstudio,
  SiApple,
  SiCplusplus,
  SiCss,
  SiDatabricks,
  SiDocker,
  SiDotnet,
  SiDrupal,
  SiDjango,
  SiElasticsearch,
  SiEthereum,
  SiExpress,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiKotlin,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOdoo,
  SiOpenai,
  SiOpenjdk,
  SiPerl,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiScala,
  SiSelenium,
  SiSnowflake,
  SiSpring,
  SiSpringboot,
  SiStrapi,
  SiSwift,
  SiSolidity,
  SiTensorflow,
  SiPytorch,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
  SiSalesforce,
  SiShopify,
} from "react-icons/si";
import {
  Activity,
  BarChart3,
  Blocks,
  Bot,
  Box,
  Brain,
  Briefcase,
  Cloud,
  Cpu,
  FileCode2,
  Fingerprint,
  Globe,
  Layers,
  MessageSquare,
  RefreshCw,
  Server,
  Shield,
  ShoppingBag,
  Scan,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "./ui/utils";
import { getTechIconColorClass } from "./techIconColors";

type AnyIcon = IconType | LucideIcon;

const wrapSi = (I: IconType): AnyIcon => I;

/** Exact labels from TechnologiesPage + common portfolio variants */
const TECH_ICONS: Record<string, AnyIcon> = {
  // Backend
  "Node.js": wrapSi(SiNodedotjs),
  Python: wrapSi(SiPython),
  PHP: wrapSi(SiPhp),
  Golang: wrapSi(SiGo),
  ".NET": wrapSi(SiDotnet),
  Java: wrapSi(SiOpenjdk),
  SQL: wrapSi(SiMysql),
  Django: wrapSi(SiDjango),
  "Express.js": wrapSi(SiExpress),
  "Spring Boot": wrapSi(SiSpringboot),

  // Frontend
  "React.js": wrapSi(SiReact),
  React: wrapSi(SiReact),
  "React JS": wrapSi(SiReact),
  Angular: wrapSi(SiAngular),
  "Vue.js": wrapSi(SiVuedotjs),
  JavaScript: wrapSi(SiJavascript),
  TypeScript: wrapSi(SiTypescript),
  "Next.js": wrapSi(SiNextdotjs),
  HTML5: wrapSi(SiHtml5),
  CSS3: wrapSi(SiCss),
  "Tailwind CSS": wrapSi(SiTailwindcss),

  // Mobile
  "iOS App Development": wrapSi(SiApple),
  "Android App Development": wrapSi(SiAndroid),
  Flutter: wrapSi(SiFlutter),
  "React Native": wrapSi(SiReact),
  Kotlin: wrapSi(SiKotlin),
  Xamarin: wrapSi(SiAndroidstudio),
  Swift: wrapSi(SiSwift),
  "Objective-C": wrapSi(SiApple),

  // DevOps & Cloud
  AWS: FaAws,
  "Google Cloud": wrapSi(SiGooglecloud),
  Azure: FaMicrosoft,
  "Hybrid Cloud": Cloud,
  Jenkins: wrapSi(SiJenkins),
  Selenium: wrapSi(SiSelenium),
  Docker: wrapSi(SiDocker),
  Kubernetes: wrapSi(SiKubernetes),
  Terraform: wrapSi(SiTerraform),
  "CI/CD": wrapSi(SiGithubactions),

  // AI & Automation (generic + specific)
  "Machine Learning": Brain,
  "Deep Learning": Brain,
  "Natural Language Processing": MessageSquare,
  "Robotic process automation": Workflow,
  "AI-based chatbot solutions": Bot,
  "AI-based smart security": Shield,
  "Custom Large Language Models": Sparkles,
  "AI-Driven Customer Care Analytics": BarChart3,
  "AI-based pose detection for MSK rehab": Activity,
  "AI for digital physiotherapy": Activity,

  // Generative AI
  "Generative AI Development": Sparkles,
  "Generative AI Integration": Sparkles,
  "Generative AI Consulting": Sparkles,
  "Adaptive AI Development": Sparkles,
  "Transformer Model Development": Cpu,
  "LLM Development": wrapSi(SiOpenai),
  "Stable Diffusion Model": Sparkles,
  "ChatGPT Solutions": wrapSi(SiOpenai),
  "GPT-4 Integration": wrapSi(SiOpenai),
  LangChain: wrapSi(SiLangchain),
  LangGraph: wrapSi(SiLanggraph),

  // Blockchain
  "Blockchain Development": wrapSi(SiEthereum),
  "Smart Contracts": FileCode2,
  Cryptocurrency: Blocks,
  "NFT Development": Layers,
  Web3: Globe,
  DeFi: BarChart3,
  Metaverse: Globe,
  "CRC20 Token Development": wrapSi(SiEthereum),
  "Asset Tokenization": Layers,
  "Real Estate Tokenization": Briefcase,
  "BEP20 Token Development": wrapSi(SiEthereum),
  "Ethereum Token Development": wrapSi(SiEthereum),

  // Platforms & CMS
  Salesforce: wrapSi(SiSalesforce),
  ServiceNow: Server,
  Odoo: wrapSi(SiOdoo),
  Magento: ShoppingBag,
  Shopify: wrapSi(SiShopify),
  WordPress: wrapSi(SiWordpress),
  Strapi: wrapSi(SiStrapi),
  Drupal: wrapSi(SiDrupal),
  "MS PowerApps": FaMicrosoft,
  "Power BI": BarChart3,
  "Power Automate": RefreshCw,

  // Databases
  PostgreSQL: wrapSi(SiPostgresql),
  MongoDB: wrapSi(SiMongodb),
  MySQL: wrapSi(SiMysql),
  Redis: wrapSi(SiRedis),
  Cassandra: wrapSi(SiApachecassandra),
  Snowflake: wrapSi(SiSnowflake),
  Databricks: wrapSi(SiDatabricks),
  "Apache Spark": wrapSi(SiApachespark),
  Hadoop: wrapSi(SiApachehadoop),
  ElasticSearch: wrapSi(SiElasticsearch),

  // Specialized
  "Field Service Management": Briefcase,
  "Firmware Development": Cpu,
  "Fraud Protection": Fingerprint,
  "Middleware Development": Layers,
  "Sales Management": BarChart3,
  "C++": wrapSi(SiCplusplus),
  "C#": wrapSi(SiDotnet),
  Scala: wrapSi(SiScala),
  "Ruby on Rails": wrapSi(SiRubyonrails),
  Perl: wrapSi(SiPerl),

  // Hire / misc labels
  TensorFlow: wrapSi(SiTensorflow),
  PyTorch: wrapSi(SiPytorch),
  "Computer Vision": Scan,
  NLP: MessageSquare,
  LLM: wrapSi(SiOpenai),
  "MERN Stack": Layers,
  "MEAN Stack": Layers,
  "Python/Django": wrapSi(SiDjango),
  "Java/Spring": wrapSi(SiSpring),
  Solidity: wrapSi(SiSolidity),
  NFT: Layers,
  "iOS (Swift)": wrapSi(SiSwift),
  "Android (Kotlin)": wrapSi(SiKotlin),
};

const FALLBACK = Box;

/** Resolve icon for a technology label (exact match, then case-insensitive). */
export function resolveTechIcon(name: string): AnyIcon {
  const k = name.trim();
  if (TECH_ICONS[k]) return TECH_ICONS[k];
  const lower = k.toLowerCase();
  for (const [key, Icon] of Object.entries(TECH_ICONS)) {
    if (key.toLowerCase() === lower) return Icon;
  }
  return FALLBACK;
}

export function TechIcon({
  name,
  className = "h-4 w-4 shrink-0",
}: {
  name: string;
  className?: string;
}) {
  const Icon = resolveTechIcon(name);
  return (
    <Icon
      className={cn(getTechIconColorClass(name), className)}
      aria-hidden
    />
  );
}
