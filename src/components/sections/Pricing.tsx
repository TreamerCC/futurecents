import { motion } from "framer-motion";
import { ArrowRight, Check, FileText, Mail, Shield, UserCircle } from "lucide-react";

const checkoutLinks = {
  taxLite: "https://whop.com/future-cents/tax-lite/",
  bookkeepingLite: "https://whop.com/future-cents/bookkeeping-lite/",
  fullSmeSupport: "https://whop.com/future-cents/full-sme-support/",
  companySetup: "https://whop.com/future-cents/company-setup-registrations/",
};

const packages = [
  {
    name: "Tax Lite",
    description:
      "Essential tax support for individuals, freelancers, and small businesses.",
    price: 11100,
    billing: "month",
    checkoutUrl: checkoutLinks.taxLite,
    features: [
      "SARS due-date reminders",
      "One annual tax return",
      "One consultation per quarter",
      "WhatsApp support during business hours",
    ],
  },
  {
    name: "Bookkeeping Lite",
    description:
      "Practical monthly bookkeeping for businesses that need clearer financial records.",
    price: 2500,
    billing: "month",
    checkoutUrl: checkoutLinks.bookkeepingLite,
    features: [
      "Four hours of bookkeeping",
      "Monthly income statement",
      "Quarterly tax estimate",
      "Expense categorisation",
      "Twenty invoice captures",
    ],
  },
  {
    name: "Full SME Support",
    description:
      "A complete outsourced finance service for growing small and medium businesses.",
    price: 5500,
    billing: "month",
    checkoutUrl: checkoutLinks.fullSmeSupport,
    features: [
      "Full bookkeeping up to 50 transactions",
      "Monthly management reports",
      "Tax calculations",
      "Payroll for up to eight employees",
      "Annual tax return",
      "Priority WhatsApp support",
      "Free templates, cash-flow tools, and tax pack",
    ],
  },
];

const quoteServices = [
  {
    name: "Company Amendments",
    price: "Quote",
    description: "Changes and updates based on your company requirements.",
  },
  {
    name: "Annual Financial Statements",
    price: "Quote",
    description: "Financial statements prepared according to your business needs.",
  },
  {
    name: "Tax Return / ITR14",
    price: "Quote",
    description: "Tax return support with pricing based on the complexity of your return.",
  },
  {
    name: "Monthly Payroll",
    price: "Quote",
    description: "Payroll support priced according to your employee and payroll requirements.",
  },
];

function formatZar(amount: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function scrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({
    behavior: "smooth",
  });
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            FutureCents packages
          </p>

          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Choose the support your business needs.
          </h2>

          <p className="text-lg leading-8 text-muted-foreground">
            Select a monthly service package and pay securely online through
            Whop. If you need a tailored service, request a quote from our
            team.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground">
                  {pkg.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground">
                  {pkg.description}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-primary">
                    {formatZar(pkg.price)}
                  </span>
                  <span className="pb-1 text-sm font-semibold text-muted-foreground">
                    /{pkg.billing}
                  </span>
                </div>

                <div className="mt-7 border-t border-border pt-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">
                    Included
                  </p>

                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={pkg.checkoutUrl}
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Pay online
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                Secure checkout hosted by Whop
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: UserCircle, text: "Dedicated point of contact" },
            { icon: Shield, text: "Secure document handling" },
            { icon: FileText, text: "SARS correspondence support" },
            { icon: Mail, text: "Monthly financial summary" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm"
              >
                <Icon className="h-6 w-6 text-primary" />
                <span className="text-xs font-semibold text-foreground">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-24 max-w-5xl border-t border-border pt-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              One-off services
            </p>

            <h3 className="text-3xl font-extrabold text-foreground">
              Need something more specific?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Request a quote for services that depend on your company size,
              records, employee count, or filing requirements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {quoteServices.map((service) => (
              <div
                key={service.name}
                className="flex flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 shadow-sm md:flex-row md:items-center"
              >
                <div>
                  <h4 className="text-lg font-bold text-foreground">
                    {service.name}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
                  <span className="text-lg font-extrabold text-secondary-foreground">
                    {service.price}
                  </span>

                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Request a quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}