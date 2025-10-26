const Footer = () => {
  return (
    <footer className="border-t border-primary/30 bg-card/50 px-4 py-8 backdrop-blur-sm">
      <div className="container mx-auto text-center">
        <p className="animate-glow-pulse text-xl font-bold tracking-wide md:text-2xl">
          <span className="text-glow">
            Iron Man World
          </span>
          <span className="mx-3 text-muted-foreground">—</span>
          <span className="text-foreground">
            Made by{" "}
            <span className="text-arc-glow font-black">
              Om Jadhav
            </span>
          </span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          PRN: 2125UDSM1051
        </p>
      </div>
    </footer>
  );
};

export default Footer;
