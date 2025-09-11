// components/HeroSection.jsx
import passport from '../resources/passport.jpg';
export default function HeroSection() {
  return (
    <section id="home" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-100 text-center">
      <img src={passport} alt="Sai Kumar Peddineni" className="w-40 h-40 mx-auto rounded-full shadow-lg border-4 border-white" />
      <h1 className="text-5xl font-extrabold mt-6 reveal">Sai Kumar Peddineni</h1>
      <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto reveal">Computer Science Graduate passionate about innovative software solutions.</p>
      <div className="mt-6 flex justify-center gap-4 reveal">
        <a href="mailto:saikumarpeddineni18@gmail.com" className="btn btn-primary">Contact Me</a>
        <a href="https://www.linkedin.com/in/saikumarpeddineni/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
