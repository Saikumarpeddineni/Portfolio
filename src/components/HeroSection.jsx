import passport from '../resources/passport.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-8 relative inline-block reveal">
          <div className="absolute inset-0 bg-indigo-600 rounded-full blur opacity-20 animate-pulse"></div>
          <img
            src={passport}
            alt="Sai Kumar Peddineni"
            className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full shadow-2xl border-4 border-white relative z-10 object-cover"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 reveal">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Sai Kumar Peddineni</span>
        </h1>

        <p className="mt-4 text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed reveal">
          Computer Science Graduate passionate about building innovative software solutions and scalable applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 reveal">
          <a
            href="#projects"
            className="px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="https://www.linkedin.com/in/saikumarpeddineni/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-base font-semibold text-indigo-700 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-all border border-indigo-200 hover:-translate-y-1"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}