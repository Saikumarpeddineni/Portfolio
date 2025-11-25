export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold text-white tracking-tighter">SKP.</span>
          <p className="mt-2 text-sm">Building digital experiences with passion.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Saikumarpeddineni" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/saikumarpeddineni/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saikumarpeddineni18@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Gmail
          </a>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Sai Kumar Peddineni. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}