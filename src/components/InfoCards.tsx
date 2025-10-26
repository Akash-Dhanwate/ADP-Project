import { Film, Zap, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoCards = () => {
  const cards = [
    {
      icon: Film,
      title: "Films",
      content: [
        "Iron Man (2008)",
        "Iron Man 2 (2010)",
        "The Avengers (2012)",
        "Iron Man 3 (2013)",
        "Avengers: Age of Ultron (2015)",
        "Captain America: Civil War (2016)",
        "Spider-Man: Homecoming (2017)",
        "Avengers: Infinity War (2018)",
        "Avengers: Endgame (2019)",
      ],
    },
    {
      icon: Zap,
      title: "Powers & Abilities",
      content: [
        "Superhuman strength & durability",
        "Flight capability",
        "Repulsor beam weapons",
        "Energy shield projection",
        "Advanced combat systems",
        "Enhanced reflexes",
        "Genius-level intellect",
        "Master engineer",
      ],
    },
    {
      icon: Cpu,
      title: "Technology",
      content: [
        "Arc Reactor power source",
        "JARVIS AI assistant",
        "Multiple suit iterations",
        "Nanotechnology armor",
        "Integrated weapons systems",
        "Holographic interface",
        "Remote suit control",
        "Self-repair systems",
      ],
    },
  ];

  return (
    <section id="content" className="bg-background px-4 py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-black tracking-wide text-foreground md:text-5xl">
          <span className="text-glow">IRON MAN DATABASE</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="card-hover border-2 border-primary/30 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-gradient-iron p-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-2xl font-bold tracking-wide text-primary">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-center text-foreground/90">
                    {card.content.map((item, i) => (
                      <li key={i} className="text-sm font-medium md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
