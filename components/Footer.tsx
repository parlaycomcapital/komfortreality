"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
    ],
    services: [
      { label: "Buy Property", href: "#properties" },
      { label: "Sell Property", href: "#sell" },
      { label: "Property Valuation", href: "#valuation" },
      { label: "Mortgage Consulting", href: "#mortgage" },
    ],
    resources: [
      { label: "Blog", href: "#blog" },
      { label: "Market Reports", href: "#reports" },
      { label: "Guides", href: "#guides" },
      { label: "FAQ", href: "#faq" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Licenses", href: "#licenses" },
    ],
  };

  return (
    <footer className="bg-background border-t border-borderSubtle relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-primary text-textOnGold rounded-full flex items-center justify-center shadow-soft hover:shadow-floating hover:scale-110 transition-all duration-300 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="page-container">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="Komfort Reality"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-xl font-bold text-textPrimary tracking-tight">
                  KOMFORT REALITY
                </span>
              </div>

              <p className="text-textSecondary leading-relaxed mb-6 max-w-sm">
                Your trusted partner in luxury real estate. Delivering excellence since 2013 with integrity, expertise, and unmatched service.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+420123456789"
                  className="flex items-center gap-3 text-textSecondary hover:text-primaryGold transition-colors group"
                >
                  <div className="w-8 h-8 bg-surface border border-borderSubtle rounded-lg flex items-center justify-center group-hover:border-primaryGold/50 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+420 123 456 789</span>
                </a>
                <a 
                  href="mailto:info@komfort-reality.com"
                  className="flex items-center gap-3 text-textSecondary hover:text-primaryGold transition-colors group"
                >
                  <div className="w-8 h-8 bg-surface border border-borderSubtle rounded-lg flex items-center justify-center group-hover:border-primaryGold/50 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">info@komfort-reality.com</span>
                </a>
                <div className="flex items-start gap-3 text-textSecondary">
                  <div className="w-8 h-8 bg-surface border border-borderSubtle rounded-lg flex items-center justify-center mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">
                    Pařížská 123/28<br />
                    110 00 Praha 1<br />
                    Czech Republic
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3 mt-6">
                <a 
                  href="#facebook"
                  className="w-10 h-10 bg-surface border border-borderSubtle rounded-lg flex items-center justify-center hover:border-primaryGold hover:bg-primaryGold/10 transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-textMuted group-hover:text-primaryGold transition-colors" />
                </a>
                <a 
                  href="#instagram"
                  className="w-10 h-10 bg-surface border border-borderSubtle rounded-lg flex items-center justify-center hover:border-primaryGold hover:bg-primaryGold/10 transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-textMuted group-hover:text-primaryGold transition-colors" />
                </a>
                <a 
                  href="#linkedin"
                  className="w-10 h-10 bg-surface border border-borderSubtle rounded-lg flex items-center justify-center hover:border-primaryGold hover:bg-primaryGold/10 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-textMuted group-hover:text-primaryGold transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-display font-bold text-textPrimary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-textSecondary hover:text-primaryGold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-display font-bold text-textPrimary mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-textSecondary hover:text-primaryGold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-display font-bold text-textPrimary mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-textSecondary hover:text-primaryGold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="font-display font-bold text-textPrimary mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-textSecondary hover:text-primaryGold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-borderSubtle py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-textMuted text-sm"
            >
              © {new Date().getFullYear()} Komfort Reality. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="text-textMuted text-sm">Crafted with</span>
              <span className="text-primaryGold">✦</span>
              <span className="text-textMuted text-sm">for excellence</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

