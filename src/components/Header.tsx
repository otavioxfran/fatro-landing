import Link from "next/link";

import { legalLinks, siteName, telegramUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-300/10 text-sm font-semibold text-amber-200 shadow-[0_0_0_1px_rgba(251,191,36,0.1)]">
            FT
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.28em] text-white/90">{siteName}</div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-400">alertas pre-jogo +18</div>
          </div>
        </div>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-300 sm:inline-flex">
            +18
          </span>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Telegram
          </a>
        </div>
      </div>
    </header>
  );
}
