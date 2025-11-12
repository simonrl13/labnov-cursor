"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
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
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {open && (
        <nav
          className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg"
          aria-label="Mobile navigation"
        >
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm font-medium transition-colors hover:text-ufcg-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ufcg-blue focus-visible:ring-offset-2 rounded-sm",
                  pathname === item.href
                    ? "text-ufcg-blue"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

