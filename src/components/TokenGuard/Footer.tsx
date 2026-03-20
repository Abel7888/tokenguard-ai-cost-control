import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="font-heading text-sm font-bold text-foreground">Cypress Partner MSP</span>
            <span className="font-mono text-xs text-muted-foreground">© 2026 Cypress Partner MSP</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <button onClick={() => setPrivacyOpen(true)} className="transition-colors hover:text-foreground">Privacy</button>
            <span>·</span>
            <button onClick={() => setTermsOpen(true)} className="transition-colors hover:text-foreground">Terms</button>
            <span>·</span>
            <a href="mailto:info@tokenguard.xyz" className="transition-colors hover:text-foreground">info@tokenguard.xyz</a>
          </div>
          <span className="font-mono text-xs text-muted-foreground">Washington, DC 🇺🇸</span>
        </div>
      </footer>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-h-[80vh] overflow-y-auto border-border bg-background text-foreground">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">Privacy Policy</DialogTitle>
            <DialogDescription className="sr-only">Cypress Partner MSP privacy policy</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 font-mono text-sm text-muted-foreground">
            <p><strong className="text-foreground">Effective Date:</strong> January 1, 2026</p>
            <p>Cypress Partner MSP ("we", "us") is committed to protecting your privacy. This policy explains how we handle your information.</p>
            <h3 className="text-foreground font-bold">Information We Collect</h3>
            <p>We collect only the information you voluntarily provide, such as your email address when requesting early access. We do not store, log, or retain any prompts, API calls, or model outputs that pass through our proxy.</p>
            <h3 className="text-foreground font-bold">How We Use Your Information</h3>
            <p>Your email is used solely to communicate with you about Cypress Partner MSP product updates, early access, and launch information. We will never sell, rent, or share your personal information with third parties.</p>
            <h3 className="text-foreground font-bold">Data Security</h3>
            <p>All data is encrypted in transit (TLS 1.3) and at rest. Our infrastructure is designed with zero prompt storage — we never retain the content of your AI API calls.</p>
            <h3 className="text-foreground font-bold">Contact</h3>
            <p>Questions? Reach us at <a href="mailto:info@tokenguard.xyz" className="text-primary hover:underline">info@tokenguard.xyz</a>.</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-h-[80vh] overflow-y-auto border-border bg-background text-foreground">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">Terms of Service</DialogTitle>
            <DialogDescription className="sr-only">Cypress Partner MSP terms of service</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 font-mono text-sm text-muted-foreground">
            <p><strong className="text-foreground">Effective Date:</strong> January 1, 2026</p>
            <p>By accessing or using Cypress Partner MSP's website and services, you agree to these terms.</p>
            <h3 className="text-foreground font-bold">Intellectual Property</h3>
            <p>All content, designs, code, logos, and materials on this website are the intellectual property of Cypress Partner MSP. You may not reproduce, distribute, or create derivative works without our written permission.</p>
            <h3 className="text-foreground font-bold">Use of Service</h3>
            <p>Cypress Partner MSP provides AI API cost monitoring and optimisation tools. You agree to use the service only for lawful purposes and in accordance with these terms.</p>
            <h3 className="text-foreground font-bold">Limitation of Liability</h3>
            <p>Cypress Partner MSP is provided "as is". We are not liable for any indirect, incidental, or consequential damages arising from use of our platform. Savings estimates are based on averages and are not guaranteed.</p>
            <h3 className="text-foreground font-bold">Changes</h3>
            <p>We may update these terms at any time. Continued use of the service constitutes acceptance of any changes.</p>
            <h3 className="text-foreground font-bold">Contact</h3>
            <p>Questions? Reach us at <a href="mailto:info@tokenguard.xyz" className="text-primary hover:underline">info@tokenguard.xyz</a>.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
