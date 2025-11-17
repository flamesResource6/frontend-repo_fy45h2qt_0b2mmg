export default function Pricing({ onLead }) {
  const plans = [
    {
      name: "Starter",
      price: "69€",
      period: "/mois",
      features: [
        "Widget chat IA",
        "100 conversations/mois",
        "1 site web",
        "Support email",
      ],
      cta: "Commencer",
      popular: false,
    },
    {
      name: "Pro",
      price: "149€",
      period: "/mois",
      features: [
        "Tous Starter",
        "1000 conversations/mois",
        "Intégrations CRM",
        "SLA 99.9%",
      ],
      cta: "Choisir Pro",
      popular: true,
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      period: "",
      features: [
        "Volume illimité",
        "SAML/SSO",
        "On-prem/UE",
        "Support dédié",
      ],
      cta: "Parler à un expert",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Des offres simples et transparentes</h2>
          <p className="text-blue-200/80 mt-3">Sans engagement. Annulation à tout moment.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${p.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'} bg-gradient-to-b from-white/5 to-transparent`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-white font-semibold text-xl">{p.name}</h3>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-blue-200/80 ml-1">{p.period}</span>
              </div>
              <ul className="mt-5 space-y-2 text-blue-200/80">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={onLead} className={`mt-6 w-full py-3 rounded-lg font-semibold ${p.popular ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'} transition`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
