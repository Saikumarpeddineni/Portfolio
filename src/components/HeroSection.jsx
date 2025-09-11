import passport from '../resources/passport.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-indigo-100 text-center px-4 sm:px-6 lg:px-8">
      <img
        src={passport}
        alt="Sai Kumar Peddineni"
        className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full shadow-lg border-4 border-white"
      />

      <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 sm:mt-6 reveal">
        Sai Kumar Peddineni
      </h1>

      <p className="mt-3 text-lg sm:text-xl text-slate-600 max-w-xl mx-auto reveal">
        Computer Science Graduate passionate about innovative software solutions.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 reveal">
        <a
          href="mailto:saikumarpeddineni18@gmail.com"
          className="btn btn-primary w-full sm:w-auto text-center"
        >
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/saikumarpeddineni/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary w-full sm:w-auto text-center"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}