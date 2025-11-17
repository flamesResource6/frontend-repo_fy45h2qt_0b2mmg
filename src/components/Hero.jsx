import { motion } from 'framer-motion'

export default function Hero({ onLead }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Votre assistant IA pour l'immobilier professionnel
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-5 text-lg md:text-xl text-blue-100/90">
            Captez plus de mandats, répondez 24/7, qualifiez les leads automatiquement. Une expérience moderne, fiable et conforme RGPD.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onLead} className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20">Demander une démo</button>
            <a href="#features" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10">Découvrir les fonctionnalités</a>
          </motion.div>
          <div className="mt-6 text-blue-200/80 text-sm">Essayez notre version démo en 2 minutes. Sans carte bancaire.</div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-xl" />
          <div className="relative rounded-2xl border border-white/10 p-4 bg-slate-900/40">
            <img src="/dashboard-preview.png" alt="aperçu" className="rounded-lg border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
