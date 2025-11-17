import { Sparkles, MessageSquare, ShieldCheck, Rocket, LineChart, Clock, Globe } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: MessageSquare, title: "Chat IA multicanal", desc: "Widget web, WhatsApp, Messenger. Réponses instantanées et contextualisées." },
    { icon: ShieldCheck, title: "Conformité & RGPD", desc: "Hébergement UE, chiffrement des données, consentements intégrés." },
    { icon: LineChart, title: "Qualification automatique", desc: "Notes de chaleur, priorisation des leads et intégration CRM." },
    { icon: Clock, title: "Dispo 24/7", desc: "Ne perdez plus aucun contact en dehors des horaires d'agence." },
    { icon: Rocket, title: "Onboarding express", desc: "Déployé en 48h sur votre site. Accompagnement inclus." },
    { icon: Globe, title: "Multilingue", desc: "Français, anglais, espagnol. Détection automatique de langue." },
  ]

  return (
    <section id="features" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Pensé pour les pros de l'immobilier</h2>
          <p className="text-blue-200/80 mt-3">Tout ce qu'il faut pour capter, qualifier et convertir</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-4">
                <item.icon />
              </div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
