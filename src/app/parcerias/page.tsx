import type { Metadata } from "next";

import { PartnerCTA } from "@/components/PartnerCTA";

export const metadata: Metadata = {
  title: "Parcerias",
};

export default function PartnershipsPage() {
  return (
    <main className="pb-6 pt-8">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Parcerias comerciais</p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Contato para midia, afiliacao e campanhas.</h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            FATRO Tips atua como comunidade de conteudo, alertas pre-jogo e informacao editorial. Se a proposta envolver publicidade, parceria ou midia, use os canais abaixo.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Mantemos +18, jogo responsavel e aviso claro de publicidade em toda a comunicacao.
          </p>
        </div>
      </section>

      <PartnerCTA />
    </main>
  );
}
