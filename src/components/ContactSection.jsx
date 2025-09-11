export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-100 text-center reveal">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-8">Get In Touch</h2>
        <p className="text-lg text-slate-600 mb-6">
          I am open to new opportunities. Feel free to connect or send me a message.
        </p>
        <a href="mailto:saikumarpeddineni18@gmail.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          saikumarpeddineni18@gmail.com
        </a>
        <p className="mt-6 text-slate-600 font-medium">+91 7893611989</p>
      </div>
    </section>
  );
}