import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClientsSection from '../components/ClientsSection';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}

export default Home;

