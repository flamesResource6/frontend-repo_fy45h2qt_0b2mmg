import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setStatus({ ok: true, msg: 'Message envoyé. Nous revenons vers vous rapidement.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: "Impossible d'envoyer le message. Réessayez." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Parlez-nous de votre besoin</h2>
          <p className="text-blue-200/80 mt-3">Nous vous répondons sous 24h pour organiser une démo personnalisée.</p>
          {status && (
            <div className={`mt-4 p-3 rounded-lg ${status.ok ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>{status.msg}</div>
          )}
        </div>
        <form onSubmit={submit} className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-blue-200/80">Nom</label>
              <input name="name" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
            </div>
            <div>
              <label className="text-sm text-blue-200/80">Email</label>
              <input type="email" name="email" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-blue-200/80">Sujet</label>
            <input name="subject" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
          </div>
          <div className="mt-4">
            <label className="text-sm text-blue-200/80">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40" />
          </div>
          <button disabled={loading} className="mt-6 w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold disabled:opacity-60">
            {loading ? 'Envoi...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  )
}
