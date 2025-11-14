"use client";

import { motion } from "framer-motion";
import { Home, TrendingUp, Scale, Calculator, FileText, Key } from "lucide-react";
import { type Locale, createTranslator } from "@/i18n/config";

interface ServicesProps {
  lang: Locale;
  translations: any;
}

export default function Services({ lang, translations }: ServicesProps) {
  const t = createTranslator(translations);
  const services = [
    {
      icon: Home,
      title: t('services.buying.title'),
      description: t('services.buying.description'),
      features: ["Property search", "Market analysis", "Negotiation support"],
    },
    {
      icon: TrendingUp,
      title: t('services.selling.title'),
      description: t('services.selling.description'),
      features: ["Property valuation", "Marketing campaign", "Buyer qualification"],
    },
    {
      icon: Scale,
      title: t('services.legal.title'),
      description: t('services.legal.description'),
      features: ["Contract review", "Title verification", "Legal documentation"],
    },
    {
      icon: Calculator,
      title: t('services.valuation.title'),
      description: t('services.valuation.description'),
      features: ["Market analysis", "Comparative study", "Investment advice"],
    },
    {
      icon: FileText,
      title: t('services.mortgage.title'),
      description: t('services.mortgage.description'),
      features: ["Loan comparison", "Application support", "Rate negotiation"],
    },
    {
      icon: Key,
      title: t('services.management.title'),
      description: t('services.management.description'),
      features: ["Tenant management", "Maintenance", "Financial reporting"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-backgroundSoft relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primaryGold/30 to-transparent" />

      <div className="page-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primaryGold/12 border border-primaryGold/30 rounded-pill text-primaryGold text-xs font-semibold uppercase tracking-[0.16em] mb-6">
            {t('services.eyebrow')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-6 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-surface border border-borderSubtle rounded-xl p-8 h-full hover:border-primaryGold/65 transition-all duration-300 hover:-translate-y-1 shadow-subtle hover:shadow-soft flex flex-col">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primaryGold/10 border border-primaryGold/30 rounded-xl mb-6 group-hover:bg-primaryGold/20 group-hover:border-primaryGold/50 transition-all">
                  <service.icon className="w-8 h-8 text-primaryGold" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-textPrimary mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-textSecondary leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="pt-4 border-t border-borderSubtle space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primaryGold rounded-full" />
                      <span className="text-textMuted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-textSecondary text-lg mb-6">
            Need a custom solution? Let&apos;s discuss your specific requirements.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

