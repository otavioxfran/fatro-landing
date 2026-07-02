import { contactEmail, telegramUrl } from "@/lib/site";

export function PartnerCTA() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[30px] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(15,23,42,0.9)_45%,rgba(8,10,20,0.98))] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Parcerias</p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Espaco comercial para marcas, campanhas e operadores.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Se o objetivo for parceria, midia ou publicidade, fale conosco. Mantemos o posicionamento editorial: conteudo +18, jogo responsavel e transparencia sobre links afiliados.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Abrir Telegram
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
