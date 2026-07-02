import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Jogo responsavel",
};

export default function ResponsibleGamingPage() {
  return (
    <LegalPage
      title="Jogo Responsavel"
      intro="Conteudo destinado apenas a maiores de 18 anos, com limites claros e postura conservadora."
    >
      <h2>+18</h2>
      <p>Este conteudo e destinado apenas a maiores de 18 anos.</p>

      <h2>Principios</h2>
      <ul>
        <li>Nao aposte para recuperar perdas.</li>
        <li>Defina limites de tempo e dinheiro.</li>
        <li>Nao aposte sob pressao emocional.</li>
        <li>Considere que perdas podem ocorrer.</li>
      </ul>

      <h2>Ajuda</h2>
      <p>
        Se voce sente que perdeu o controle, procure apoio profissional e interrompa o uso imediatamente.
      </p>
    </LegalPage>
  );
}
