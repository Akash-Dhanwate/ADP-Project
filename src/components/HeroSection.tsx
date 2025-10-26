import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-ironman.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 animate-fade-in text-5xl font-black tracking-wider md:text-7xl lg:text-8xl">
          <span className="text-glow">
            IRON MAN
          </span>
        </h1>
        <p className="mb-12 animate-fade-in text-xl font-semibold tracking-wide md:text-3xl" style={{ animationDelay: "0.2s" }}>
          <span className="text-glow">The Armored Avenger</span>
        </p>
        
        {/* Scroll Down Button */}
        <button
          onClick={scrollToContent}
          className="group animate-float cursor-pointer"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-12 w-12 text-primary transition-transform group-hover:translate-y-2" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
