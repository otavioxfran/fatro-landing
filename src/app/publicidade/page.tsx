import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Publicidade",
};

export default function AdvertisingPage() {
  return (
    <LegalPage
      title="Aviso de Publicidade"
      intro="Transparencia sobre links afiliados, comissao e criterios editoriais."
    >
      <p>
        Este site pode conter links de afiliados e publicidade.
      </p>
      <p>
        Podemos receber comissao quando um usuario se cadastra ou realiza uma acao elegivel por meio desses links.
      </p>
      <p>
        A comissao nao altera o custo para o usuario, mas pode influenciar a forma como destacamos operadores.
      </p>
      <p>
        Cada operador possui seus proprios termos, regras e criterios de elegibilidade.
      </p>
    </LegalPage>
  );
}
