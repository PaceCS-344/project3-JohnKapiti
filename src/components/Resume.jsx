import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto"></div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '900px' }}>
          <iframe
            src="/John-Kapiti-Software-Developer-Resume.pdf"
            className="w-full h-full border-none"
            title="Resume"
          />
        </div>

        {/* Download Button */}
        <div className="mt-12 flex justify-center">
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
