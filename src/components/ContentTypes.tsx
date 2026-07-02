import { contentTypes } from "@/lib/site";

export function ContentTypes() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200">O que publicamos</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {contentTypes.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-400">
          Conteudo editorial e publicitario, pensado para leitura rapida e contexto antes do jogo.
        </p>
      </div>
    </section>
  );
}
