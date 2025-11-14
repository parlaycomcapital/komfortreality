"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { type Locale, createTranslator } from "@/i18n/config";

interface TestimonialsProps {
  lang: Locale;
  translations: any;
}

export default function Testimonials({ lang, translations }: TestimonialsProps) {
  const t = createTranslator(translations);
  const testimonials = [
    {
      name: "Michael & Sarah Thompson",
      role: "Villa Buyers",
      location: "Prague 6",
      rating: 5,
      text: "Exceptional service from start to finish. The team helped us find our dream villa and handled all the complexities of the purchase. Truly professional and trustworthy.",
      initials: "MT",
    },
    {
      name: "Elena Novotná",
      role: "Property Seller",
      location: "Prague 1",
      rating: 5,
      text: "Sold our penthouse in just 3 weeks at an excellent price. The marketing was world-class and the negotiation expertise was invaluable. Highly recommended!",
      initials: "EN",
    },
    {
      name: "David Chen",
      role: "Investment Client",
      location: "Prague 2",
      rating: 5,
      text: "As an international investor, I needed reliable local expertise. Komfort Reality delivered beyond expectations with their market knowledge and legal support.",
      initials: "DC",
    },
    {
      name: "Anna & Tomáš Svoboda",
      role: "First-Time Buyers",
      location: "Prague 7",
      rating: 5,
      text: "The team made our first property purchase stress-free. They explained everything clearly, guided us through financing, and found us the perfect apartment.",
      initials: "AS",
    },
    {
      name: "Robert Williams",
      role: "Luxury Estate Buyer",
      location: "Prague 5",
      rating: 5,
      text: "Unmatched professionalism and attention to detail. They understood exactly what we were looking for and delivered a property that exceeded our expectations.",
      initials: "RW",
    },
    {
      name: "Petra Marková",
      role: "Property Developer",
      location: "Prague 3",
      rating: 5,
      text: "We've worked with many agencies over the years, but Komfort Reality stands out for their integrity, market expertise, and results-driven approach.",
      initials: "PM",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primaryGold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accentTeal/5 rounded-full blur-[120px]" />

      <div className="page-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primaryGold/12 border border-primaryGold/30 rounded-pill text-primaryGold text-xs font-semibold uppercase tracking-[0.16em] mb-6">
            {t('testimonials.eyebrow')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-6 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-surface border border-borderSubtle rounded-xl p-8 h-full hover:border-primaryGold/65 transition-all duration-300 hover:-translate-y-1 shadow-subtle hover:shadow-soft flex flex-col relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-primaryGold" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primaryGold fill-primaryGold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-textSecondary leading-relaxed mb-6 flex-grow relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-borderSubtle relative z-10">
                  {/* Avatar with Initials */}
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-textOnGold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <div className="font-semibold text-textPrimary">
                      {testimonial.name}
                    </div>
                    <div className="text-textMuted text-sm">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-surface border border-borderSubtle rounded-xl px-10 py-6 shadow-subtle">
            <div className="text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">
                4.9/5.0
              </div>
              <div className="text-textMuted text-sm">Google Rating</div>
            </div>
            <div className="w-px h-12 bg-borderSubtle" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">
                200+
              </div>
              <div className="text-textMuted text-sm">Client Reviews</div>
            </div>
            <div className="w-px h-12 bg-borderSubtle" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">
                98%
              </div>
              <div className="text-textMuted text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

