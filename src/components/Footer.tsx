// src/components/Footer.tsx
import logoLightUrl from "@/assets/logo-light.png";

function SocialIcon({
  name,
  href,
}: {
  name: "fb" | "tw" | "in" | "insta" | "youtube";
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
    case "insta":
      return (
        <a aria-label="Instagram" href={href} target="_blank" rel="noreferrer" className={base}>
          <svg fill="currentColor" className="bi bi-instagram h-4 w-4" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>
      );
    case "youtube":
      return (
        <a aria-label="youtube" href={href} target="_blank" rel="noreferrer" className={base}>          
          <svg fill="currentColor" className="bi bi-youtube h-4 w-4" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
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
              className="h-22 w-auto md:h-22"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Contact block */}
          <div className="md:text-right">
            <div className="text-[14px] font-semibold tracking-wide text-white/90">
              CONTACT US
            </div>
            <div>
              <a href="tel://008875132111" className="contact-icon">(+91) 8875 132 111 </a>
              <br />
              <a href="tel://008875134111" className="contact-icon">(+91) 8875 134 111</a>
            </div>


            <div className="mt-4 flex gap-3 md:justify-end">
              <SocialIcon name="fb" href="https://www.facebook.com/skduniversity" />
              <SocialIcon name="tw" href="https://x.com/SKDU_Official" />
              <SocialIcon name="in" href="https://www.linkedin.com/company/shri-khushal-das-university/" />
              <SocialIcon name="insta" href="https://www.instagram.com/skduniversityofficial/" />
              <SocialIcon name="youtube" href="https://www.youtube.com/channel/UCJEPY6HuKG0EOfFMXbqeUnA" />              
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
