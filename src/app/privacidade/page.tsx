import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacidade",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politica de Privacidade"
      intro="Veja como tratamos dados de contato, navegacao e eventuais interacoes comerciais."
    >
      <h2>Dados coletados</h2>
      <ul>
        <li>Dados de contato enviados voluntariamente.</li>
        <li>Dados de navegacao basicos.</li>
        <li>Eventos de analytics, quando habilitados.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Podemos utilizar cookies e identificadores similares para analise e funcionamento basico da pagina.
      </p>

      <h2>Contato</h2>
      <p>
        Se voce entrar em contato por email ou formulario, poderemos armazenar a mensagem para responder e registrar o historico.
      </p>

      <h2>Links externos e afiliados</h2>
      <p>
        Este site pode conter links externos e links de afiliados. Ao sair do site, as regras de privacidade do operador passam a valer.
      </p>
    </LegalPage>
  );
}
