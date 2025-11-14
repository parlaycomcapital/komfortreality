"use client";

import { motion } from "framer-motion";
import { Award, Users, Shield, TrendingUp, Star, CheckCircle } from "lucide-react";
import { type Locale, createTranslator } from "@/i18n/config";

interface WhyChooseUsProps {
  lang: Locale;
  translations: any;
}

export default function WhyChooseUs({ lang, translations }: WhyChooseUsProps) {
  const t = createTranslator(translations);
  const stats = [
    {
      icon: Award,
      number: t('stats.experience.number'),
      label: t('stats.experience.label'),
      description: t('stats.experience.description'),
    },
    {
      icon: Users,
      number: t('stats.transactions.number'),
      label: t('stats.transactions.label'),
      description: t('stats.transactions.description'),
    },
    {
      icon: Star,
      number: t('stats.rating.number'),
      label: t('stats.rating.label'),
      description: t('stats.rating.description'),
    },
    {
      icon: TrendingUp,
      number: "€50M+",
      label: t('stats.transactions.label'),
      description: t('stats.transactions.description'),
    },
  ];

  const features = [
    {
      icon: Shield,
      title: t('about.trusted.title'),
      description: t('about.trusted.description'),
    },
    {
      icon: Award,
      title: t('about.premium.title'),
      description: t('about.premium.description'),
    },
    {
      icon: Users,
      title: t('about.expert.title'),
      description: t('about.expert.description'),
    },
  ];

  return (
    <section id="about" className="section-padding bg-background relative">
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
            {t('about.eyebrow')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-surface border border-borderSubtle rounded-xl p-8 text-center hover:border-primaryGold/65 transition-all duration-300 hover:-translate-y-1 shadow-subtle hover:shadow-soft">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-card rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primaryGold/10 border border-primaryGold/30 rounded-xl mb-4">
                    <stat.icon className="w-7 h-7 text-primaryGold" />
                  </div>
                  <div className="font-display text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-textPrimary font-semibold mb-2">
                    {stat.label}
                  </div>
                  <p className="text-textMuted text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-surface border border-borderSubtle rounded-xl p-8 hover:border-primaryGold/65 transition-all duration-300 hover:-translate-y-1 shadow-subtle hover:shadow-soft h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card border border-primaryGold/20 rounded-xl mb-6 group-hover:border-primaryGold/50 transition-all">
                  <feature.icon className="w-8 h-8 text-primaryGold" />
                </div>
                <h3 className="font-display text-xl font-bold text-textPrimary mb-3">
                  {feature.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-surface via-surfaceElevated to-surface border border-borderSubtle rounded-2xl p-10 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primaryGold/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accentTeal/10 rounded-full blur-[100px]" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Your Trust is Our Foundation
              </h3>
              <p className="text-textSecondary text-lg leading-relaxed mb-6">
                Every client relationship is built on integrity, transparency, and exceptional service. We don&apos;t just sell properties—we create lasting partnerships.
              </p>
              <div className="space-y-3">
                {[
                  "Licensed & certified real estate professionals",
                  "Full legal advisory and documentation support",
                  "Transparent pricing with no hidden fees",
                  "24/7 dedicated client support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primaryGold mt-0.5 flex-shrink-0" />
                    <span className="text-textSecondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primaryGold/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-primary rounded-2xl p-10 text-center">
                  <div className="text-textOnGold font-display text-6xl font-bold mb-2">
                    100%
                  </div>
                  <div className="text-textOnGold font-semibold text-lg">
                    Client Satisfaction
                  </div>
                  <div className="text-textOnGold/80 text-sm mt-2">
                    Since 2013
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

