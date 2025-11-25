export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                I'm a <span className="font-semibold text-indigo-600">Computer Science graduate</span> from VNR VJIET, Hyderabad, with a strong passion for building scalable and efficient software solutions. My journey in tech is driven by curiosity and a desire to solve real-world problems through code.
              </p>
              <p>
                I thrive in collaborative environments where I can apply my analytical thinking and creative problem-solving skills. Whether it's developing full-stack applications, optimizing algorithms, or exploring new technologies, I am always eager to learn and adapt to new challenges.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}