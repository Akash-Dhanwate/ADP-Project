import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import CharacterSection from "@/components/CharacterSection";
import ActorSection from "@/components/ActorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InfoCards />
      <CharacterSection />
      <ActorSection />
      <Footer />
    </div>
  );
};

export default Index;
