export default function SkillsSection() {
  const skills = [
    "C", "C++", "Python", "Java", "SQL", "HTML", "CSS", "ReactJS",
    "NodeJS", "ExpressJS", "MongoDB", "MySQL", "SQLite",
    "Data Structures", "Algorithms", "Operating Systems", "VS Code", "Android Studio"
  ];

  return (
    <section id="skills" className="py-24 reveal">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-12">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
