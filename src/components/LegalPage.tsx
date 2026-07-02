import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">FATRO Tips</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">{intro}</p>
        <div className="prose mt-8 max-w-none">
          {children}
        </div>
      </article>
    </main>
  );
}
