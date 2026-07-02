export const siteName = "FATRO Tips";

export const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/seucanal";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@seudominio.com";

export const legalLinks = [
  { href: "/termos", label: "Termos de uso" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "/jogo-responsavel", label: "Jogo responsavel" },
  { href: "/publicidade", label: "Publicidade" },
  { href: "/parcerias", label: "Parcerias" },
] as const;

export const howItWorks = [
  "Monitoramos mercados e movimentos de odds.",
  "Filtramos oportunidades com criterio editorial.",
  "Revisamos manualmente antes de publicar.",
  "Entregamos alertas com aviso claro de responsabilidade.",
] as const;

export const contentTypes = [
  "Odds de mercado",
  "Superodds manuais",
  "Bet builders",
  "Duplas",
  "Props recreativas",
] as const;

export const compliancePoints = [
  "Nao garantimos lucro.",
  "Nao fazemos promessas de resultado.",
  "Nao incentivamos recuperar perdas.",
  "Nao operamos conta de terceiros.",
  "Este site pode conter links de afiliados e publicidade.",
] as const;

export const responsibleGamingPoints = [
  "+18 apenas.",
  "Aposte apenas valores que pode perder.",
  "Defina limites de tempo e dinheiro.",
  "Odds podem mudar a qualquer momento.",
  "Se perder o controle, pare e procure apoio.",
] as const;
