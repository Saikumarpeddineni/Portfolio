export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 reveal">Work Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6 reveal">
        <div className="bg-white rounded-lg shadow p-6 text-left">
          <h3 className="text-xl font-semibold text-slate-900">Developer Intern</h3>
          <p className="text-sm text-slate-500 mb-2">May 2024 - Nov 2024 | Oppo and OnePlus Research & Development Centre, Hyderabad</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Built web applications using React, Node, SQL for optimized performance.</li>
            <li>Developed Android applications improving UX and functionality.</li>
            <li>Automated internal processes with custom Python tools.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}