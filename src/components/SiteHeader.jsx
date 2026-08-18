import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: '服務項目' },
  { href: '#about', label: '關於澤洛' },
  { href: '#work', label: '技術實績' },
  { href: '#contact', label: '聯絡我們' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="澤洛科技首頁">
          <span className="flex h-9 w-9 items-center justify-center bg-primary font-tech text-lg font-bold text-primary-foreground">Z</span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-wide">澤洛科技</span>
            <span className="block font-tech text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Zeluo Tech</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98] sm:flex">
            聯絡我們
          </a>
          <button type="button" aria-label="開啟選單" onClick={() => setOpen((v) => !v)} className="flex h-11 w-11 items-center justify-center border border-border text-foreground md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="mx-auto flex max-w-[90rem] flex-col px-6 py-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-border/60 py-4 text-base text-foreground last:border-0">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-3 mb-4 bg-primary py-4 text-center text-base font-medium text-primary-foreground">聯絡我們</a>
          </nav>
        </div>
      )}
    </header>
  );
}
