import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { brand, navSections, navPrimary } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="container-gc flex h-18 items-center justify-between gap-4 py-3">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={brand.logo} alt={`${brand.name} logo`} className="h-11 w-11 object-contain" />
          <span className="hidden leading-tight sm:block">
            <span className="font-display block text-sm font-extrabold tracking-tight">
              GADGET CENTRAL
            </span>
            <span className="block text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Sdn Bhd
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navPrimary.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                  active === s.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[image:var(--gradient-brand)] transition-all duration-300",
                    active === s.id ? "opacity-100" : "scale-x-0 opacity-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Contact Us</a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-foreground xl:hidden"
          >
            <Menu
              className={cn(
                "absolute h-5 w-5 transition-all duration-300",
                open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
              )}
            />
            <X
              className={cn(
                "absolute h-5 w-5 transition-all duration-300",
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 xl:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container-gc grid gap-1 py-4">
          {navSections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${i * 25}ms` }}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  active === s.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/70",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li className="mt-2 grid gap-2">
            <Button asChild variant="hero" onClick={() => setOpen(false)}>
              <a href="#contact">Contact Us</a>
            </Button>
            <Button asChild variant="outlineBrand" onClick={() => setOpen(false)}>
              <a href="#products">Explore Our Solutions</a>
            </Button>
            <a
              href={`tel:${brand.phone1.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground"
            >
              <Phone className="h-4 w-4" /> {brand.phone1}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
