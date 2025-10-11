// src/components/Footer.tsx
import logoLightUrl from "@/assets/logo-light.png";

function SocialIcon({
  name,
  href,
}: {
  name: "fb" | "tw" | "in";
  href: string;
}) {
  const base =
    "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition";
  switch (name) {
    case "fb":
      return (
        <a aria-label="Facebook" href={href} target="_blank" rel="noreferrer" className={base}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M13 22v-8h3l1-4h-4V7.5A1.5 1.5 0 0 1 14.5 6H17V2h-3.5A5.5 5.5 0 0 0 8 7.5V10H5v4h3v8h5z" />
          </svg>
        </a>
      );
    case "tw":
      return (
        <a aria-label="Twitter/X" href={href} target="_blank" rel="noreferrer" className={base}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M3 3h4.6l5 6.8L18.4 3H21l-6.9 8.5L21 21h-4.6l-5.3-7.2L5.6 21H3l7.1-8.8L3 3z" />
          </svg>
        </a>
      );
    case "in":
      return (
        <a aria-label="LinkedIn" href={href} target="_blank" rel="noreferrer" className={base}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.62-1.18 2.14-2.42 4.41-2.42 4.72 0 5.59 3.11 5.59 7.15V24h-5v-6.9c0-1.65-.03-3.76-2.29-3.76-2.29 0-2.64 1.79-2.64 3.64V24h-5V8z" />
          </svg>
        </a>
      );
  }
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-x py-10 md:py-12">
        {/* Top row: Logo + Contact */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            {/* BIG LOGO */}
            <img
              src={logoLightUrl}
              alt="Shri Khushal Das University"
              className="h-24 w-auto md:h-50"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Contact block */}
          <div className="md:text-right">
            <div className="text-[14px] font-semibold tracking-wide text-white/90">
              CONTACT US
            </div>
            <div className="mt-2 text-[18px] font-extrabold">08071296479</div>

            <div className="mt-4 flex gap-3 md:justify-end">
              <SocialIcon name="fb" href="#" />
              <SocialIcon name="tw" href="#" />
              <SocialIcon name="in" href="#" />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-8 max-w-4xl text-sm text-white/80">
          Chak 7STG, Khushal Nagar, Suratgarh - Hanumangarh Rd, Near Toll Plaza, Rajasthan 335801
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-white/10" />

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-white/70">
          © 2025 SKDU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
