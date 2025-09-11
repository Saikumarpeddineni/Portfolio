export default function ProjectsSection() {
  const projects = [
    {
      title: "Blogs Application",
      description: "Full-stack app enabling blog creation with user authentication.",
      tech: ["ReactJS", "NodeJS", "MongoDB", "Vercel"],
      link: "https://blogsapp-zeta.vercel.app/",
      code: "https://github.com/Saikumarpeddineni/blogsapp"
    },
    {
      title: "Multi-level Queue Scheduling",
      description: "OS project implementing a Multi-Level Queue Scheduling algorithm.",
      tech: ["C++", "Data Structures", "Algorithms"]
    },
    {
      title: "Student Registration System",
      description: "Command-line tool for managing student records using linked lists.",
      tech: ["C++", "Linked Lists"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white reveal">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{proj.title}</h3>
                <p className="text-slate-600 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, tid) => (
                    <span key={tid} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              {proj.link && (
                <div className="mt-4 flex space-x-4">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">Live Demo</a>
                  {proj.code && (
                    <a href={proj.code} target="_blank" rel="noopener noreferrer" className="text-slate-600 font-semibold">Source Code</a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
