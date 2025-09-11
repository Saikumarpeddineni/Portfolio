export default function EducationSection() {
  const education = [
    {
      title: "B. Tech, CSE",
      institution: "VNR VJIET, Hyderabad",
      duration: "2021 - 2025",
      cgpa: "8.98"
    },
    {
      title: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      duration: "2019 - 2021",
      cgpa: "9.72"
    },
    {
      title: "Secondary School",
      institution: "Sri Chaitanya School",
      duration: "2018 - 2019",
      cgpa: "9.7"
    }
  ];

  return (
    <section id="education" className="py-24 bg-white reveal">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-slate-900">{edu.title}</h3>
              <p className="text-slate-600">{edu.institution}</p>
              <p className="text-sm text-slate-500 mt-2">{edu.duration} | CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
