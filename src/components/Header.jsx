// components/Header.jsx
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#home" className="text-2xl font-bold text-slate-800">SKP.</a>

        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="text-slate-600 hover:text-blue-600 font-medium">{section}</a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-6">
          {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="block py-2 text-slate-600 hover:text-blue-600" onClick={() => setOpen(false)}>
              {section}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
