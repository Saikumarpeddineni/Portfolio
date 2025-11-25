export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ['C', 'C++', 'Python', 'Java']
    },
    {
      title: "Frontend",
      skills: ['HTML', 'CSS', 'ReactJS']
    },
    {
      title: "Backend",
      skills: ['NodeJS', 'ExpressJS', 'Spring Boot']
    },
    {
      title: "Database",
      skills: ['SQL', 'MongoDB', 'MySQL']
    },
    {
      title: "DevOps & Tools",
      skills: ['AWS', 'Git', 'Docker']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-indigo-100 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4">
            Technical <span className="text-indigo-600">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100 group-hover:border-indigo-100 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}