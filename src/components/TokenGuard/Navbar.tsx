const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground">
          <span className="relative flex h-2.5 w-2.5">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary" />
          </span>
          Cypress Partner MSP
        </a>
        <a
          href="#early-access"
          className="glow-border glow-border-hover rounded-md px-5 py-2 font-mono text-sm text-primary transition-all duration-300"
        >
          Request Early Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
