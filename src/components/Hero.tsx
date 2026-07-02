import Link from "next/link";

import { contactEmail, telegramUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_28%),linear-gradient(180deg,rgba(8,10,20,0.96),rgba(8,10,20,0.84))]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-200">
            +18 | jogo responsavel
          </div>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Alertas pre-jogo com revisao manual para futebol.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Conteudo +18, com foco em organizacao, analise e jogo responsavel. Sem promessa de lucro. O site pode conter links de afiliados e publicidade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Entrar no Telegram
            </a>
            <Link
              href="/parcerias"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Parcerias comerciais
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">revisao manual</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">alertas pre-jogo</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">conteudo editorial</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{contactEmail}</span>
          </div>
        </div>

        <div className="lg:pl-6">
          <div className="relative rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-slate-400">
              <span>painel editorial</span>
              <span className="text-amber-200">+18</span>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                ["Status", "alerta pre-jogo"],
                ["Metodo", "filtro + revisao manual"],
                ["Aviso", "sem garantia de resultado"],
                ["Responsavel", "jogo responsavel sempre visivel"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="text-sm font-medium text-white">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-100">
              Este canal e uma comunidade de conteudo, com possiveis links de afiliados e publicidade. Leia os termos antes de seguir qualquer recomendacao.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
