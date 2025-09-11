export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 reveal">Education</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto reveal">
        
        <div className="bg-slate-50 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">B. Tech, CSE</h3>
          <p>VNR VJIET, Hyderabad</p>
          <p className="text-sm text-slate-500 mt-2">2021–2025 | CGPA: 8.98</p>
        </div>

        <div className="bg-slate-50 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Intermediate</h3>
          <p>Sri Chaitanya Junior College</p>
          <p className="text-sm text-slate-500 mt-2">2019–2021 | CGPA: 9.72</p>
        </div>

        <div className="bg-slate-50 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Secondary School</h3>
          <p>Sri Chaitanya School</p>
          <p className="text-sm text-slate-500 mt-2">2018–2019 | CGPA: 9.7</p>
        </div>

      </div>
    </section>
  );
}