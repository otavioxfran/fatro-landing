import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de uso",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      intro="Este site e o conteudo associado sao informativos e publicitarios."
    >
      <h2>Uso permitido</h2>
      <p>
        O acesso e destinado exclusivamente a maiores de 18 anos. Ao usar o site, voce confirma que tem idade legal e que entende os riscos associados.
      </p>

      <h2>Sem garantia de resultado</h2>
      <p>
        Nao prestamos consultoria financeira nem garantia de resultado. As odds podem mudar a qualquer momento e os usuarios devem conferir os termos do operador antes de qualquer acao.
      </p>

      <h2>Responsabilidade individual</h2>
      <p>
        O usuario reconhece que decide por conta propria e assume a responsabilidade por suas escolhas.
      </p>
    </LegalPage>
  );
}
