"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Properties", href: "#properties" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-borderStrong shadow-soft"
          : "bg-background/95 backdrop-blur-md border-b border-borderStrong/80"
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-[4.25rem]">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Komfort Reality"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="hidden md:block font-display text-xl font-bold text-textPrimary tracking-tight">
              KOMFORT REALITY
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-textSecondary hover:text-textPrimary transition-colors duration-default text-[0.95rem] font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-emphasized" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-textSecondary hover:text-primaryGold transition-colors duration-default"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+420 123 456 789</span>
            </a>
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-textSecondary hover:text-textPrimary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-borderSubtle bg-surface/95 backdrop-blur-xl"
      >
        <nav className="page-container py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-textSecondary hover:text-primaryGold transition-colors duration-default text-lg font-medium py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-borderSubtle flex flex-col gap-3">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-textSecondary hover:text-primaryGold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+420 123 456 789</span>
            </a>
            <a
              href="mailto:info@komfort-reality.com"
              className="flex items-center gap-3 text-textSecondary hover:text-primaryGold transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@komfort-reality.com</span>
            </a>
            <a href="#contact" className="btn-primary mt-2 text-center">
              Contact Us
            </a>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}

