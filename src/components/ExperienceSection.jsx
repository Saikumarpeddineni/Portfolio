export default function ExperienceSection() {
  const experiences = [
    {
      role: "Developer Intern",
      company: "Oppo and OnePlus Research & Development Centre",
      location: "Hyderabad",
      period: "May 2024 - Nov 2024",
      description: [
        "Built web applications using React, Node, SQL for optimized performance.",
        "Developed Android applications improving UX and functionality.",
        "Automated internal processes with custom Python tools."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4">
            Work <span className="text-indigo-600">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and the impact I've made in the industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="relative border-l-4 border-indigo-200 ml-4 md:ml-0 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md"></div>

                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-slate-500 text-sm mt-2 md:mt-0 font-medium bg-slate-100 px-3 py-1 rounded-full inline-block">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <svg className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}