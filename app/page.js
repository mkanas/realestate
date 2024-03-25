import FeatureProperty from "@/components/FeatureProperty";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <>
        <Header />
        <Hero />
        <HowItWorks />
        <FeatureProperty />
        <Services />
        <AboutUs />
        <Testimonials />
        <Faq />
        <Footer />
      </>
    </div>
  );
}
