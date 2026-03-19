const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <div className="flex items-center gap-4">
        <span className="font-heading text-sm font-bold text-foreground">TokenGuard</span>
        <span className="font-mono text-xs text-muted-foreground">© 2026 TokenGuard Inc.</span>
      </div>
      <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
        <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
        <span>·</span>
        <a href="#" className="transition-colors hover:text-foreground">Terms</a>
        <span>·</span>
        <a href="mailto:hello@tokenguard.io" className="transition-colors hover:text-foreground">hello@tokenguard.io</a>
      </div>
      <span className="font-mono text-xs text-muted-foreground">Toronto, Canada 🇨🇦</span>
    </div>
  </footer>
);

export default Footer;
