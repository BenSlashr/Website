import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import Specialists from "@/components/Specialists";
import Process from "@/components/Process";
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
