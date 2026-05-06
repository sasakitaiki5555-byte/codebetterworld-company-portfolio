import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

const customers = [
  { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" },
  { name: "InnovateLabs", logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" },
  { name: "StartupXYZ", logo: "https://images.unsplash.com/photo-1635776062360-af423602aff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" },
  { name: "HealthTech", logo: "https://images.unsplash.com/photo-1597743928515-c11e63a0d2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" },
  { name: "FinanceFlow", logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" },
  { name: "EduTech", logo: "https://images.unsplash.com/photo-1616469829167-c0f6304a4e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" },
  { name: "RetailPro", logo: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" },
  { name: "CloudSystems", logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" }
];

export function Customers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Customers</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by leading companies across diverse industries
          </p>
        </div>

        {/* Customer Logos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {customers.map((customer, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow border-slate-200">
              <div className="flex flex-col items-center text-center">
                {/* Logo */}
                <ImageWithFallback
                  src={customer.logo}
                  alt={customer.name}
                  className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center mb-4"
                />
                
                {/* Company Name */}
                <h3 className="text-lg mb-2">{customer.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}