import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, Shield, Mail, FileText, UserCircle } from "lucide-react";
import { Button } from "../ui/button";

const tiers = [
  {
    name: "Basic",
    description: "Perfect for freelancers and solo founders starting out.",
    monthlyPrice: 800,
    features: [
      "Monthly bookkeeping (up to 50 txns)",
      "Basic income & expense tracking",
      "Annual income tax return (Individual)",
      "Email support (48hr response)"
    ]
  },
  {
    name: "Standard",
    description: "The sweet spot for growing VAT-registered SMEs.",
    monthlyPrice: 2500,
    popular: true,
    features: [
      "Monthly bookkeeping (up to 200 txns)",
      "VAT calculations & submissions",
      "Payroll administration (up to 5 staff)",
      "Monthly management reports",
      "Priority email & WhatsApp support"
    ]
  },
  {
    name: "Professional",
    description: "Full outsourced finance function for established teams.",
    monthlyPrice: 5000,
    features: [
      "Unlimited monthly bookkeeping",
      "Full tax compliance (VAT, PAYE)",
      "Payroll administration (up to 15 staff)",
      "Annual Financial Statements",
      "Quarterly advisory sessions",
      "Dedicated account manager"
    ]
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Transparent Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">No surprises. No hidden fees.</h3>
          <p className="text-muted-foreground text-lg mb-8">
            Choose a retainer that fits your volume, or contact us for a custom quote.
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-primary relative p-1 transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <motion.div 
                className="w-5 h-5 bg-white rounded-full shadow-sm"
                animate={{ x: isAnnual ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Annually</span>
            <span className="ml-2 bg-secondary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">Save 15%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {tiers.map((tier, index) => {
            const price = isAnnual ? Math.round(tier.monthlyPrice * 0.85) : tier.monthlyPrice;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative bg-white rounded-2xl border ${
                  tier.popular ? "border-primary shadow-xl" : "border-border shadow-sm"
                } p-8 flex flex-col group`}
              >
                {tier.popular && (
                  <>
                    <div className="absolute inset-0 rounded-2xl border-2 border-secondary/50 animate-pulse pointer-events-none" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  </>
                )}
                
                <div className="mb-6 mt-2">
                  <h4 className="text-xl font-bold text-foreground mb-2">{tier.name}</h4>
                  <p className="text-sm text-muted-foreground h-10">{tier.description}</p>
                </div>
                
                <div className="mb-6 flex flex-col justify-center min-h-[4.5rem]">
                  {isAnnual && (
                    <span className="text-sm text-muted-foreground line-through decoration-destructive decoration-2">
                      R{tier.monthlyPrice.toLocaleString()}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">R{price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                  {isAnnual && <span className="text-xs text-secondary font-medium mt-1">Billed annually at R{(price * 12).toLocaleString()}</span>}
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "default" : "outline"} 
                  className={`w-full ${tier.popular ? "shadow-md" : ""}`}
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                </Button>
              </motion.div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h4 className="text-center font-bold text-lg mb-6">Included in all plans</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: UserCircle, text: "Dedicated point of contact" },
              { icon: Shield, text: "Secure document portal" },
              { icon: FileText, text: "SARS correspondence management" },
              { icon: Mail, text: "Monthly financial summary email" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-xl border border-border shadow-sm">
                <item.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto border-t border-border pt-12">
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold text-foreground mb-2">Popular Once-Off Add-ons</h4>
            <p className="text-muted-foreground text-sm">Need a specific service? We handle these individually.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Company Registration", price: "R1,800" },
              { name: "CIPC Annual Return", price: "R650" },
              { name: "Tax Clearance", price: "R500" },
              { name: "BEE Affidavit", price: "R750" }
            ].map((addon, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white rounded-lg border border-border hover:border-primary transition-colors group">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{addon.name}</span>
                <span className="text-sm font-bold text-secondary">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
