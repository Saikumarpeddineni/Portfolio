export default function SkillsSection() {
  const skills = ['C', 'C++', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'ReactJS', 'NodeJS', 'ExpressJS', 'Spring Boot', 'AWS', 'MongoDB', 'MySQL', 'Git', 'Docker'];

  return (
    <section id="skills" className="py-20 bg-slate-50 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 reveal">Technical Skills</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 reveal">
        {skills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
}