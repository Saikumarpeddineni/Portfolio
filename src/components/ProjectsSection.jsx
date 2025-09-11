export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 reveal">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto reveal">
        
        <div className="bg-slate-50 rounded-lg shadow p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Blogs Application</h3>
          <p className="text-slate-600 mb-4">Full-stack app for blog management with React, Node, MongoDB.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node</span>
            <span className="skill-tag">MongoDB</span>
          </div>
          <a href="https://blogsapp-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project
          </a>
        </div>

        <div className="bg-slate-50 rounded-lg shadow p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Queue Scheduler</h3>
          <p className="text-slate-600 mb-4">Multi-level queue scheduling algorithm implementation in C++.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">C++</span>
            <span className="skill-tag">Algorithms</span>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg shadow p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Student Registration</h3>
          <p className="text-slate-600 mb-4">Linked-list based CLI system in C++ to manage student data.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">C++</span>
            <span className="skill-tag">Data Structures</span>
          </div>
        </div>

      </div>
    </section>
  );
}