import Button from "@/components/ui/Button";
import logoLight from "@/assets/logo-light.png";

export default function Header() {
  return (
    // absolute so it sits over the hero background
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      {/* full-width fluid padding (same as full-width hero) */}
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Left: big logo + word */}
          <a href="#" className="flex items-center gap-3 mt-1">
            <img
              src={logoLight}
              alt="SKDU"
              className="h-30 w-auto md:h-30"
              loading="lazy"
              decoding="async"
            />
        
          </a>

   
        </div>
      </div>
    </header>
  );
}
