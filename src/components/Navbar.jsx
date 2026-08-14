import { useState } from "react";
import logo from "../assets/logo.jpg";

const navigationLinks = [
  { href: "#insights", label: "AI Creator Insights" },
  { href: "#pricing", label: "Pricing" },
  { href: "#community", label: "Community" },
];

const linkStyles = "text-sm font-medium text-white/70 transition-colors duration-150 hover:text-white";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative flex min-h-[64px] items-center bg-[#050505] px-5 py-2.5 text-white sm:min-h-[68px] sm:px-[clamp(24px,3vw,48px)] sm:py-3">
      <a className="flex shrink-0 items-center" href="/" aria-label="Vieworat home">
        <img className="block w-[120px] sm:w-[138px]" src={logo} alt="Vieworat" />
      </a>

      <nav className="mx-auto hidden gap-[clamp(24px,3vw,46px)] lg:flex" aria-label="Primary navigation">
        {navigationLinks.map(({ href, label }) => (
          <a key={href} className={linkStyles} href={href}>{label}</a>
        ))}
      </nav>

      <div className="ml-auto hidden shrink-0 items-center gap-6 lg:flex">
        <a className={linkStyles} href="#sign-in">Sign In</a>
        <a className="rounded-full bg-[#ff2d2d] px-5 py-2.5 text-sm font-medium shadow-[0_6px_20px_rgba(255,45,45,0.23)] transition duration-150 hover:-translate-y-px hover:bg-[#e92323]" href="#create-account">Create Account</a>
      </div>

      <button
        type="button"
        className="ml-auto inline-flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="sr-only">Menu</span>
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {isMenuOpen ? <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {isMenuOpen && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full z-10 flex flex-col gap-1 border-t border-white/10 bg-[#050505] px-5 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation">
          {navigationLinks.map(({ href, label }) => (
            <a key={href} className="rounded-md px-3 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white" href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="rounded-md px-3 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white" href="#sign-in" onClick={closeMenu}>Sign In</a>
          <a className="mt-2 rounded-full bg-[#ff2d2d] px-5 py-2.5 text-center text-sm font-medium shadow-[0_6px_20px_rgba(255,45,45,0.23)] transition duration-150 hover:bg-[#e92323]" href="#create-account" onClick={closeMenu}>Create Account</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
