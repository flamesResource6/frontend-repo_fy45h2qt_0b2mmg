import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  const [showLead, setShowLead] = useState(false)
  const [leadStatus, setLeadStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submitLead = async (e) => {
    e.preventDefault()
    setLoading(true)
    setLeadStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = {
      full_name: form.get('full_name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      company: form.get('company') || undefined,
      message: form.get('message') || undefined,
      source: 'landing-hero'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setLeadStatus({ ok: true, msg: 'Merci ! Nous vous recontactons très vite.' })
      e.currentTarget.reset()
    } catch (err) {
      setLeadStatus({ ok: false, msg: "Impossible d'enregistrer votre demande." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero onLead={() => setShowLead(true)} />
      {showLead && (
        <section className="bg-slate-950 py-10">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white text-2xl font-semibold">Demander une démo</h3>
              {leadStatus && (
                <div className={`mt-3 p-3 rounded-lg ${leadStatus.ok ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>{leadStatus.msg}</div>
              )}
              <form onSubmit={submitLead} className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-blue-200/80">Nom complet</label>
                  <input name="full_name" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-sm text-blue-200/80">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-sm text-blue-200/80">Téléphone</label>
                  <input name="phone" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div>
                  <label className="text-sm text-blue-200/80">Société</label>
                  <input name="company" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-blue-200/80">Message</label>
                  <textarea name="message" rows="4" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white" />
                </div>
                <div className="md:col-span-2 flex gap-3">
                  <button disabled={loading} className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold disabled:opacity-60">{loading ? 'Envoi...' : 'Envoyer'}</button>
                  <button type="button" onClick={() => setShowLead(false)} className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white">Annuler</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
      <Features />
      <Pricing onLead={() => setShowLead(true)} />
      <Contact />
      <footer className="bg-slate-950 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-blue-200/70">© {new Date().getFullYear()} ChatImmo. Tous droits réservés.</div>
          <div className="flex items-center gap-6 text-blue-200/70">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
