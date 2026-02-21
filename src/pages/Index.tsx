import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import LivePayouts from "@/components/LivePayouts";
import PartnersStrip from "@/components/PartnersStrip";
import PricingSection from "@/components/PricingSection";
import AccountModels from "@/components/AccountModels";
import PayoutCertificates from "@/components/PayoutCertificates";
import WhyTradersLoveUs from "@/components/WhyTradersLoveUs";
import FastSecureRewards from "@/components/FastSecureRewards";
import TradingInstruments from "@/components/TradingInstruments";
import HowItWorks from "@/components/HowItWorks";
import DashboardPreview from "@/components/DashboardPreview";
import VideoSection from "@/components/VideoSection";
import OurNumbers from "@/components/OurNumbers";
import Testimonials from "@/components/Testimonials";
import HomeFAQ from "@/components/HomeFAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <LivePayouts />
      <PartnersStrip />
      <SectionDivider />
      <AccountModels />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <PayoutCertificates />
      <SectionDivider />
      <WhyTradersLoveUs />
      <SectionDivider />
      <FastSecureRewards />
      <SectionDivider />
      <TradingInstruments />
      <SectionDivider />
      <HowItWorks />
      <DashboardPreview />
      <SectionDivider />
      <VideoSection />
      <SectionDivider />
      <OurNumbers />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <HomeFAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
