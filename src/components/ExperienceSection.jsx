export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 reveal">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Work Experience</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
          <h3 className="text-2xl font-semibold text-slate-900">Developer Intern</h3>
          <p className="text-slate-600">OPLUS R&D Centre, Hyderabad</p>
          <p className="text-sm text-slate-500 mb-4">May 2024 - Nov 2024</p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Built dynamic web apps using React, Node, and SQL.</li>
            <li>Developed Android applications improving functionality and UX.</li>
            <li>Automated internal processes using Python tools.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
