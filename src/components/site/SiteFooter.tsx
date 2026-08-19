import { brand, navSections } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-gc flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img src={brand.logo} alt={`${brand.name} logo`} className="h-12 w-12 object-contain" />
            <span className="font-display text-sm font-extrabold">GADGET CENTRAL SDN BHD</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {brand.tagline}. Registration No. {brand.regNo}.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="container-gc flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>{brand.addressLines.join(" ")}</p>
        </div>
      </div>
    </footer>
  );
}
