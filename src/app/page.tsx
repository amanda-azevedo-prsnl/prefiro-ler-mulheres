"use client";

import { useState } from "react";

const tiers = [
  {
    name: "Leitora",
    price: "Grátis",
    description: "Para quem quer descobrir",
    perks: [
      "Newsletter agregada",
      "Episódios do podcast",
      "Catálogo de autoras",
    ],
    highlight: false,
  },
  {
    name: "Leitora Ativa",
    price: "R$ 29/mês",
    description: "Para quem quer se aprofundar",
    perks: [
      "Tudo do plano Grátis",
      "Curadoria mensal direcionada",
      "Acervo de leituras críticas",
    ],
    highlight: true,
  },
  {
    name: "Leitora em Clube",
    price: "R$ 59/mês",
    description: "Para quem quer pertencer",
    perks: [
      "Tudo do plano Ativo",
      "Leituras conjuntas ao vivo",
      "Fórum exclusivo da comunidade",
    ],
    highlight: false,
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <main className="flex-1" style={{ fontFamily: "var(--font-inter)" }}>

      {/* Nav */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }} className="text-lg text-[#1C1C1C] tracking-tight">
          Prefiro Ler Mulheres
        </span>
        <a
          href="#lista"
          className="text-sm font-medium text-[#8B2E2E] hover:underline underline-offset-4 transition-all"
        >
          Entrar na lista →
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-28 max-w-4xl mx-auto text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-[#C4956A] mb-6">
          Em breve
        </p>
        <h1 style={{ fontFamily: "var(--font-playfair)" }} className="text-5xl md:text-7xl text-[#1C1C1C] leading-tight mb-8">
          Uma plataforma para{" "}
          <span style={{ fontStyle: "italic" }} className="text-[#8B2E2E]">mulheres que escrevem</span>
          <br />e mulheres que leem.
        </h1>
        <p className="text-lg text-[#555] max-w-2xl mx-auto leading-relaxed mb-12">
          Newsletters, podcasts, leituras conjuntas e curadoria direcionada —
          tudo reunido num só lugar, com foco na literatura escrita por mulheres.
        </p>

        {/* Email capture */}
        <div id="lista" className="max-w-md mx-auto">
          {submitted ? (
            <div className="rounded-2xl px-6 py-5" style={{ background: "rgba(139,46,46,0.08)", border: "1px solid rgba(139,46,46,0.2)" }}>
              <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }} className="text-[#8B2E2E] text-lg mb-1">
                Você está na lista.
              </p>
              <p className="text-sm text-[#555]">
                Avisamos assim que a plataforma estiver no ar.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-[#DDD] bg-white text-sm text-[#1C1C1C] placeholder:text-[#AAA] focus:outline-none focus:border-[#8B2E2E] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#8B2E2E] text-white text-sm font-medium rounded-xl hover:bg-[#7a2828] transition-colors disabled:opacity-60 whitespace-nowrap cursor-pointer"
              >
                {loading ? "Salvando..." : "Entrar na lista"}
              </button>
            </form>
          )}
          <p className="text-xs text-[#AAA] mt-3">
            Sem spam. Só avisamos quando estiver pronto.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#E8E3DC]" />
      </div>

      {/* What is it */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#C4956A] mb-4">
              O que é
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)" }} className="text-3xl md:text-4xl text-[#1C1C1C] leading-snug mb-6">
              Tudo que você já consome,{" "}
              <span style={{ fontStyle: "italic" }}>em um só lugar.</span>
            </h2>
            <p className="text-[#555] leading-relaxed">
              A plataforma reúne o podcast, a newsletter e os conteúdos exclusivos
              num espaço só seu — organizado, sem algoritmo, com a curadoria que
              você já confia.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { label: "Newsletter", desc: "Edições do Substack reunidas e pesquisáveis" },
              { label: "Podcast", desc: "Todos os episódios organizados por tema e autora" },
              { label: "Leitura Crítica", desc: "Análises aprofundadas de obras e autoras" },
              { label: "Leitura Conjunta", desc: "Encontros ao vivo para ler e discutir juntas" },
              { label: "Curadoria", desc: "Indicações direcionadas ao seu gosto literário" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B2E2E] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#1C1C1C] text-sm">{item.label}</p>
                  <p className="text-sm text-[#888] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#E8E3DC]" />
      </div>

      {/* Tiers */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-[#C4956A] mb-4">
            Planos
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)" }} className="text-3xl md:text-4xl text-[#1C1C1C] leading-snug">
            No seu ritmo de leitura.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-7 border transition-all ${
                tier.highlight
                  ? "text-white"
                  : "bg-white text-[#1C1C1C]"
              }`}
              style={tier.highlight ? { background: "#8B2E2E", borderColor: "#8B2E2E" } : { borderColor: "#E8E3DC" }}
            >
              <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${tier.highlight ? "text-[#EDADA9]" : "text-[#C4956A]"}`}>
                {tier.name}
              </p>
              <p style={{ fontFamily: "var(--font-playfair)" }} className={`text-2xl mb-1 ${tier.highlight ? "text-white" : "text-[#1C1C1C]"}`}>
                {tier.price}
              </p>
              <p className={`text-sm mb-6 ${tier.highlight ? "text-[#EDADA9]" : "text-[#888]"}`}>
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 flex-shrink-0 ${tier.highlight ? "text-[#EDADA9]" : "text-[#C4956A]"}`}>
                      ✦
                    </span>
                    <span className={tier.highlight ? "text-white/90" : "text-[#555]"}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-24" style={{ background: "#1C1C1C" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }} className="text-4xl md:text-5xl text-white mb-6 leading-tight">
            A literatura feminina<br />merece um espaço próprio.
          </h2>
          <p className="text-[#AAA] mb-10 leading-relaxed">
            Entra na lista e fica sabendo quando a plataforma abrir.
          </p>
          <a
            href="#lista"
            className="inline-block px-8 py-4 bg-[#8B2E2E] text-white text-sm font-medium rounded-xl hover:bg-[#7a2828] transition-colors"
          >
            Quero entrar na lista
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#E8E3DC]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }} className="text-[#1C1C1C]">
            Prefiro Ler Mulheres
          </span>
          <p className="text-xs text-[#AAA]">
            Em construção — {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </main>
  );
}
