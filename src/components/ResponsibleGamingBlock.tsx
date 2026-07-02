import { responsibleGamingPoints } from "@/lib/site";

export function ResponsibleGamingBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-emerald-400/15 bg-emerald-400/10 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">Jogo responsavel</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">+18, limites e postura conservadora.</h2>
          <p className="mt-4 text-sm leading-6 text-emerald-50/85">
            O conteudo e destinado apenas a maiores de 18 anos. Aposte com responsabilidade e interrompa o uso se sentir perda de controle.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {responsibleGamingPoints.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
