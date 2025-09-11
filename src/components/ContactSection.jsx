export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-100 to-slate-50 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 reveal">Get In Touch</h2>
      <p className="text-lg text-slate-600 max-w-xl mx-auto mb-6 reveal">
        I'm open to new opportunities. Let's connect if you have a project or role that suits my skills.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 reveal">
        <a href="mailto:saikumarpeddineni18@gmail.com" className="btn btn-primary w-full sm:w-auto text-center">
          saikumarpeddineni18@gmail.com
        </a>
        <p className="text-lg text-slate-600">+91 7893611989</p>
      </div>
    </section>
  );
}