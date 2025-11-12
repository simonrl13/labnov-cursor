"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const t = getTranslations(language);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: "/membros", label: t.nav.members },
    { href: "/parceiros", label: t.nav.partners },
    { href: "/publicacoes", label: t.nav.publications },
    { href: "/contato", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="LABNOV Home">
          <span className="text-xl font-bold text-ufcg-blue">LABNOV</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ufcg-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ufcg-blue focus-visible:ring-offset-2 rounded-sm",
                pathname === item.href
                  ? "text-ufcg-blue"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            aria-label={
              language === "pt" ? "Switch to English" : "Mudar para Português"
            }
            className="flex items-center"
          >
            <Globe className="h-5 w-5" aria-hidden="true" />
            <span className="ml-2 text-sm">{language.toUpperCase()}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

