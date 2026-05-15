import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-purple-600 mb-8 flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              Education
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-purple-600 pl-6 pb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-purple-600 font-semibold mb-1">Pace University</p>
                <p className="text-sm text-gray-500">Expected Graduation: Spring 2026</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-purple-600 mb-8 flex items-center gap-2">
              <span className="text-3xl">💼</span>
              Experience
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-purple-600 pl-6 pb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  IT Support Technician
                </h4>
                <p className="text-purple-600 font-semibold mb-1">Pace University IT Department</p>
                <p className="text-sm text-gray-500">Current</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  President, Coding Club
                </h4>
                <p className="text-purple-600 font-semibold mb-1">Pace University</p>
                <p className="text-sm text-gray-500">Current</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/John-Kapiti-Software-Developer-Resume.pdf"
            download
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            📄 Download Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
