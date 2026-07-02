import { compliancePoints } from "@/lib/site";

export function ComplianceBlock() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">Aviso de publicidade</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Transparencia antes de qualquer clique.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Este site pode conter links de afiliados e publicidade. Podemos receber comissao quando um usuario se cadastra ou realiza uma acao elegivel por meio desses links.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {compliancePoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm leading-6 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
