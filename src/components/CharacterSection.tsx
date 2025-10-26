import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import suitImage from "@/assets/ironman-suit.jpg";

const CharacterSection = () => {
  return (
    <section className="bg-muted/30 px-4 py-20">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border-4 border-primary/40 shadow-2xl">
              <img
                src={suitImage}
                alt="Iron Man Suit"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in order-1 space-y-6 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl font-black tracking-wide md:text-5xl">
              <span className="text-glow">
                THE ARMORED HERO
              </span>
            </h2>
            
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              Iron Man is a superhero appearing in Marvel Comics and the Marvel Cinematic Universe. 
              Created by writer-editor Stan Lee, the character is the alter ego of Tony Stark, 
              a wealthy industrialist and genius inventor who creates a powered suit of armor to save 
              his life and protect the world as Iron Man.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              The Iron Man armor grants Tony superhuman strength and durability, flight capabilities, 
              and an array of weapons including repulsor rays and missiles. Powered by the Arc Reactor, 
              a revolutionary energy source that keeps him alive, Tony Stark has become one of Earth's 
              mightiest heroes and a founding member of the Avengers.
            </p>

            <Button
              className="hover-glow group mt-6 border-2 border-primary bg-gradient-iron px-8 py-6 text-lg font-bold"
              asChild
            >
              <a
                href="https://en.wikipedia.org/wiki/Iron_Man"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
