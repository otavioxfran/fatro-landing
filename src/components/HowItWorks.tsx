import { howItWorks } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Como funciona</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Fluxo simples, editorial e responsavel.</h2>
        </div>
        <p className="hidden max-w-md text-sm leading-6 text-slate-400 md:block">
          Publicamos conteudo com criterio de analise e aviso claro de responsabilidade. Nada de promessa de lucro.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {howItWorks.map((item, index) => (
          <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300/12 text-sm font-semibold text-amber-200">
              {index + 1}
            </div>
            <p className="text-sm leading-6 text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
