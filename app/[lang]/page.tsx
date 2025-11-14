import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { type Locale, getTranslations, createTranslator } from "@/i18n/config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const translations = await getTranslations(params.lang);
  const t = createTranslator(translations);
  
  return (
    <main className="relative">
      <Header lang={params.lang} translations={translations} />
      <Hero lang={params.lang} translations={translations} />
      <FeaturedProperties lang={params.lang} translations={translations} />
      <WhyChooseUs lang={params.lang} translations={translations} />
      <Services lang={params.lang} translations={translations} />
      <Testimonials lang={params.lang} translations={translations} />
      <CTABanner lang={params.lang} translations={translations} />
      <Footer lang={params.lang} translations={translations} />
    </main>
  );
}

