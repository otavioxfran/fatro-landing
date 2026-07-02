import Link from "next/link";

import { legalLinks, siteName } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <div className="text-sm font-semibold tracking-[0.24em] text-white/90">{siteName}</div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Conteudo +18, jogo responsavel, e aviso claro de publicidade e afiliados.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300 sm:grid-cols-3">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
