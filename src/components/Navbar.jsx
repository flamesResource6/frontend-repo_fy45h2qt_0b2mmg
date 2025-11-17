import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const NavLinks = ({ variant = 'desktop' }) => (
    <div className={`${variant === 'mobile' ? 'flex flex-col gap-4 p-4' : 'hidden md:flex items-center gap-8'}`}>
      <button onClick={() => scrollTo('features')} className="text-slate-300 hover:text-white transition">Fonctionnalités</button>
      <button onClick={() => scrollTo('how-it-works')} className="text-slate-300 hover:text-white transition">Comment ça marche</button>
      <button onClick={() => scrollTo('pricing')} className="text-slate-300 hover:text-white transition">Tarifs</button>
      <button onClick={() => scrollTo('contact')} className="text-slate-300 hover:text-white transition">Contact</button>
      <a href="/test" className="text-slate-300 hover:text-white transition">Test</a>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="logo" className="w-8 h-8" />
          <span className="text-white font-semibold text-lg">ChatImmo</span>
          <span className="text-xs text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/30 ml-2">Propulsé par IA</span>
        </div>
        <NavLinks />
        <div className="md:hidden">
          <button onClick={() => setOpen((o) => !o)} className="text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <NavLinks variant="mobile" />
        </div>
      )}
    </header>
  )
}
