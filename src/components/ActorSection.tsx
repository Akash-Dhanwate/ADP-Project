import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import actorImage from "@/assets/robert-downey-jr.jpg";

const ActorSection = () => {
  return (
    <section className="bg-background px-4 py-20">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="animate-fade-in space-y-6">
            <h2 className="text-4xl font-black tracking-wide md:text-5xl">
              <span className="text-arc-glow">
                ROBERT DOWNEY JR.
              </span>
            </h2>
            
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              Robert Downey Jr. brought Tony Stark to life with his charismatic performance, 
              transforming Iron Man into one of cinema's most iconic characters. His portrayal 
              launched the Marvel Cinematic Universe in 2008 and defined the character for over 
              a decade.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              Downey's interpretation of Tony Stark combined wit, vulnerability, and heroism, 
              making him the heart of the MCU. His performances earned critical acclaim and made 
              Iron Man a global phenomenon, culminating in an unforgettable journey that inspired 
              millions of fans worldwide.
            </p>

            <Button
              className="hover-glow group mt-6 border-2 border-accent bg-gradient-arc px-8 py-6 text-lg font-bold"
              asChild
            >
              <a
                href="https://en.wikipedia.org/wiki/Robert_Downey_Jr."
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="overflow-hidden rounded-2xl border-4 border-accent/40 shadow-2xl">
              <img
                src={actorImage}
                alt="Robert Downey Jr. as Tony Stark"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorSection;
