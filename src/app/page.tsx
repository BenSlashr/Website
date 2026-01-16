import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import Specialists from "@/components/Specialists";
import Process from "@/components/Process";
import Methode from "@/components/Methode";
import Tools from "@/components/Tools";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Articles from "@/components/Articles";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";
import { caseStudies } from "@/lib/caseStudiesWP";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBanner />
      <Specialists />
      <Process />
      <Methode
        title="Le Search est devenu multicanal, notre approche aussi."
        description="Nous n'activons pas tous les leviers par défaut. Nous les priorisons selon votre marché, la maturité de votre marque, vos objectifs business, les moyens engagés."
        items={[
          { number: '01', title: 'SEO', description: 'Positionnez-vous durablement sur Google et captez un trafic qualifié.' },
          { number: '02', title: 'GEO / AI Search', description: 'Soyez recommandé par ChatGPT, Perplexity et les moteurs IA.' },
          { number: '03', title: 'Social Search', description: "Développez votre présence là où votre audience recherche et s'inspire." },
        ]}
        ctaText="Découvrir notre vision"
      />
      <Tools />
      <CaseStudies caseStudies={caseStudies} />
      <Team />
      <Partners />
      <Testimonials />
      <Resources />
      <Articles />
      <FAQ />
      <CTA />
      <Newsletter />
    </>
  );
}
