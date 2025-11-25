export default function ProjectsSection() {
  const projects = [
    {
      title: "Blogs Application",
      description: "Full-stack app for blog management with React, Node, MongoDB.",
      techStack: ["React", "Node", "MongoDB"],
      link: "https://blogsapp-zeta.vercel.app/"
    },
    {
      title: "Queue Scheduler",
      description: "Multi-level queue scheduling algorithm implementation in C++.",
      techStack: ["C++", "Algorithms"],
      link: null
    },
    {
      title: "Student Registration",
      description: "Linked-list based CLI system in C++ to manage student data.",
      techStack: ["C++", "Data Structures"],
      link: null
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-indigo-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4">
            Featured <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and algorithmic implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group hover:-translate-y-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-slate-400 bg-slate-100 rounded-xl cursor-not-allowed"
                  >
                    Internal Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}