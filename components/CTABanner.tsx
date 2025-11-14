"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="section-padding bg-gradient-cta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primaryGold/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentTeal/20 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(224,178,79,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(224,178,79,1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-surface/60 backdrop-blur-xl border border-borderSubtle rounded-3xl p-12 md:p-16 shadow-floating relative overflow-hidden">
            {/* Inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-card opacity-50" />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primaryGold/12 border border-primaryGold/30 rounded-pill text-primaryGold text-xs font-semibold uppercase tracking-[0.16em] mb-8"
              >
                <span className="w-2 h-2 bg-primaryGold rounded-full animate-pulse" />
                Let&apos;s Start Your Journey
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-6 tracking-tight"
              >
                Ready to Make Your
                <span className="block mt-2 gradient-text">Next Move?</span>
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-textSecondary text-xl leading-relaxed max-w-2xl mx-auto mb-10"
              >
                Whether you&apos;re buying your dream home or selling your property, our expert team is here to guide you every step of the way.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <a href="#contact-form" className="btn-primary group">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+420123456789" className="btn-secondary">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-textMuted"
              >
                <a 
                  href="tel:+420123456789"
                  className="flex items-center gap-2 hover:text-primaryGold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+420 123 456 789</span>
                </a>
                <span className="hidden sm:block">•</span>
                <a 
                  href="mailto:info@komfort-reality.com"
                  className="flex items-center gap-2 hover:text-primaryGold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@komfort-reality.com</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Additional trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
          >
            <div className="flex items-center gap-2 text-textMuted">
              <div className="w-2 h-2 bg-primaryGold rounded-full" />
              <span className="text-sm">Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-textMuted">
              <div className="w-2 h-2 bg-primaryGold rounded-full" />
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center gap-2 text-textMuted">
              <div className="w-2 h-2 bg-primaryGold rounded-full" />
              <span className="text-sm">No obligation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

