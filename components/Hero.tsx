"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign, ArrowRight } from "lucide-react";
import Image from "next/image";
import { type Locale, createTranslator } from "@/i18n/config";

interface HeroProps {
  lang: Locale;
  translations: any;
}

export default function Hero({ lang, translations }: HeroProps) {
  const t = createTranslator(translations);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primaryGold/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accentTeal/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="page-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1, duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primaryGold/12 border border-primaryGold/30 rounded-pill text-primaryGold text-xs font-semibold uppercase tracking-[0.16em]">
                <span className="w-2 h-2 bg-primaryGold rounded-full animate-pulse" />
                {t('hero.eyebrow')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary leading-[1.08] tracking-tight"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-textSecondary text-lg md:text-xl leading-relaxed max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#properties" className="btn-primary group">
                {t('hero.primaryCta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                {t('hero.secondaryCta')}
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold gradient-text">{t('stats.experience.number')}</span>
                <span className="text-textMuted text-sm mt-1">{t('stats.experience.label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold gradient-text">{t('stats.transactions.number')}</span>
                <span className="text-textMuted text-sm mt-1">{t('stats.transactions.label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold gradient-text">{t('stats.rating.number')}</span>
                <span className="text-textMuted text-sm mt-1">{t('stats.rating.label')}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Floating Search Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-surface border border-borderSubtle rounded-xl shadow-floating p-8 space-y-6 backdrop-blur-xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-card rounded-xl opacity-50 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-textPrimary mb-6">
                  {t('hero.searchTitle')}
                </h3>

                {/* Search Form */}
                <div className="space-y-4">
                  {/* Location */}
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted" />
                    <input
                      type="text"
                      placeholder={t('hero.searchLocation')}
                      className="w-full bg-background border border-borderSubtle rounded-md pl-12 pr-4 py-3.5 text-textPrimary placeholder:text-textMuted focus:border-primaryGold focus:outline-none focus:ring-1 focus:ring-primaryGold/40 transition-all"
                    />
                  </div>

                  {/* Property Type */}
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted" />
                    <select className="w-full bg-background border border-borderSubtle rounded-md pl-12 pr-4 py-3.5 text-textPrimary focus:border-primaryGold focus:outline-none focus:ring-1 focus:ring-primaryGold/40 transition-all appearance-none cursor-pointer">
                      <option>{t('hero.searchType')}</option>
                      <option>Byt / Apartment</option>
                      <option>Rodinný dom / House</option>
                      <option>Vila / Villa</option>
                      <option>Pozemok / Land</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted" />
                    <select className="w-full bg-background border border-borderSubtle rounded-md pl-12 pr-4 py-3.5 text-textPrimary focus:border-primaryGold focus:outline-none focus:ring-1 focus:ring-primaryGold/40 transition-all appearance-none cursor-pointer">
                      <option>{t('hero.searchPrice')}</option>
                      <option>€50,000 - €100,000</option>
                      <option>€100,000 - €200,000</option>
                      <option>€200,000 - €500,000</option>
                      <option>€500,000+</option>
                    </select>
                  </div>

                  {/* Search Button */}
                  <button className="w-full btn-primary justify-center group">
                    <Search className="w-5 h-5" />
                    {t('hero.searchButton')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Quick filters */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-borderSubtle mt-6">
                  <span className="text-sm text-textMuted">{t('hero.popularLabel')}</span>
                  <button className="text-sm px-3 py-1 bg-surface border border-borderSubtle rounded-pill text-textSecondary hover:border-primaryGold hover:text-primaryGold transition-all">
                    Ružomberok
                  </button>
                  <button className="text-sm px-3 py-1 bg-surface border border-borderSubtle rounded-pill text-textSecondary hover:border-primaryGold hover:text-primaryGold transition-all">
                    Žilina
                  </button>
                  <button className="text-sm px-3 py-1 bg-surface border border-borderSubtle rounded-pill text-textSecondary hover:border-primaryGold hover:text-primaryGold transition-all">
                    Liptov
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primaryGold/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primaryGold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

