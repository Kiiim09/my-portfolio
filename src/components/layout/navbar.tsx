
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">

        {/* Logo */}
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-tight"
        >
          L.H<span className="text-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Contact */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 lg:inline-flex"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-[110] flex cursor-pointer items-center justify-center rounded-lg border border-border p-2 text-foreground transition hover:text-primary lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`absolute left-0 right-0 top-full z-[100] border-b border-border bg-background shadow-xl lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition hover:bg-card hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Let&apos;s Talk
          </a>

        </div>
      </nav>
    </header>
  );
}
