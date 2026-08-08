import { Link } from "wouter";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg leading-none">F</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">FutureCents</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-8 leading-relaxed">
              Smart. Simple. Solid Finance. South Africa's trusted accounting and compliance partner for growing small businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><button onClick={() => document.querySelector("#services")?.scrollIntoView()} className="hover:text-primary transition-colors">Monthly Bookkeeping</button></li>
              <li><button onClick={() => document.querySelector("#services")?.scrollIntoView()} className="hover:text-primary transition-colors">Tax Compliance</button></li>
              <li><button onClick={() => document.querySelector("#services")?.scrollIntoView()} className="hover:text-primary transition-colors">Payroll Administration</button></li>
              <li><button onClick={() => document.querySelector("#services")?.scrollIntoView()} className="hover:text-primary transition-colors">Annual Financial Statements</button></li>
              <li><button onClick={() => document.querySelector("#services")?.scrollIntoView()} className="hover:text-primary transition-colors">Business Advisory</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              <li><button onClick={() => document.querySelector("#why-us")?.scrollIntoView()} className="hover:text-primary transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => document.querySelector("#pricing")?.scrollIntoView()} className="hover:text-primary transition-colors">Pricing & Plans</button></li>
              <li><button onClick={() => document.querySelector("#contact")?.scrollIntoView()} className="hover:text-primary transition-colors">Contact Us</button></li>
            </ul>
            
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">We're registered with:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white border border-border rounded text-xs font-extrabold text-foreground shadow-sm">SARS</span>
              <span className="px-3 py-1.5 bg-white border border-border rounded text-xs font-extrabold text-foreground shadow-sm">CIPC</span>
              <span className="px-3 py-1.5 bg-white border border-border rounded text-xs font-extrabold text-foreground shadow-sm">SAICA</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} FutureCents (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-4 mb-2 md:mb-0 text-xs">
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">POPIA Compliance</a>
          </div>
          <p className="font-medium text-foreground">Built for South African SMEs</p>
        </div>
      </div>
    </footer>
  );
}
