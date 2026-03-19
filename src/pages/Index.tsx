import Navbar from "@/components/TokenGuard/Navbar";
import HeroSection from "@/components/TokenGuard/HeroSection";
import SocialProof from "@/components/TokenGuard/SocialProof";
import ProblemSection from "@/components/TokenGuard/ProblemSection";
import HowItWorks from "@/components/TokenGuard/HowItWorks";
import FeaturesGrid from "@/components/TokenGuard/FeaturesGrid";
import SavingsCalculator from "@/components/TokenGuard/SavingsCalculator";
import TrustSection from "@/components/TokenGuard/TrustSection";
import EarlyAccessCTA from "@/components/TokenGuard/EarlyAccessCTA";
import Footer from "@/components/TokenGuard/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <SocialProof />
    <ProblemSection />
    <HowItWorks />
    <FeaturesGrid />
    <SavingsCalculator />
    <TrustSection />
    <EarlyAccessCTA />
    <Footer />
  </div>
);

export default Index;
