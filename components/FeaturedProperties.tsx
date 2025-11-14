"use client";

import { motion } from "framer-motion";
import { MapPin, Maximize2, Bed, Bath, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { type Locale, createTranslator } from "@/i18n/config";

interface FeaturedPropertiesProps {
  lang: Locale;
  translations: any;
}

export default function FeaturedProperties({ lang, translations }: FeaturedPropertiesProps) {
  const t = createTranslator(translations);
  const properties = [
    {
      id: 1,
      title: "Luxury Modern Villa",
      location: "Prague 6, Nebušice",
      price: "€ 2,450,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      beds: 5,
      baths: 4,
      area: "420 m²",
      type: "Villa",
    },
    {
      id: 2,
      title: "Penthouse with Panoramic Views",
      location: "Prague 1, Old Town",
      price: "€ 1,890,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      beds: 4,
      baths: 3,
      area: "280 m²",
      type: "Penthouse",
    },
    {
      id: 3,
      title: "Contemporary Apartment",
      location: "Prague 2, Vinohrady",
      price: "€ 890,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      beds: 3,
      baths: 2,
      area: "140 m²",
      type: "Apartment",
    },
    {
      id: 4,
      title: "Riverside Estate",
      location: "Prague 5, Smíchov",
      price: "€ 3,200,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      beds: 6,
      baths: 5,
      area: "580 m²",
      type: "Estate",
    },
    {
      id: 5,
      title: "Designer Loft",
      location: "Prague 7, Holešovice",
      price: "€ 1,250,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      beds: 2,
      baths: 2,
      area: "165 m²",
      type: "Loft",
    },
    {
      id: 6,
      title: "Garden Villa Residence",
      location: "Prague 6, Střešovice",
      price: "€ 1,750,000",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      beds: 4,
      baths: 3,
      area: "350 m²",
      type: "Villa",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <section id="properties" className="section-padding bg-backgroundSoft relative overflow-hidden">
      {/* Decorative elements */}
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
            {t('properties.eyebrow')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-6 tracking-tight">
            {t('properties.title')}
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            {t('properties.subtitle')}
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-surface border border-borderSubtle rounded-xl overflow-hidden hover-lift shadow-subtle hover:shadow-floating hover:border-primaryGold/65 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Property Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-surface/90 backdrop-blur-md border border-primaryGold/30 rounded-pill text-primaryGold text-xs font-semibold uppercase tracking-wider">
                      {property.type}
                    </span>
                  </div>

                  {/* Bookmark Icon */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-surface/90 backdrop-blur-md border border-borderSubtle rounded-full flex items-center justify-center hover:border-primaryGold hover:bg-primaryGold/10 transition-all group/bookmark">
                    <Heart className="w-5 h-5 text-textMuted group-hover/bookmark:text-primaryGold group-hover/bookmark:fill-primaryGold transition-all" />
                  </button>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-display text-2xl font-bold text-textPrimary">
                      {property.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-textPrimary mb-2 group-hover:text-primaryGold transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-2 text-textMuted">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center gap-4 pt-4 border-t border-borderSubtle">
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-textSecondary">
                      <Maximize2 className="w-4 h-4" />
                      <span className="text-sm">{property.area}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full btn-secondary justify-center group/btn">
                    {t('properties.viewDetails')}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#all-properties" className="btn-primary group inline-flex">
            {t('properties.viewAll')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

