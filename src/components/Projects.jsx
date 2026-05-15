import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Plastic Prophet',
      description: 'Credit card recommendation app that determines the best card to use at nearby merchants using location services and merchant classification.',
      tech: ['SwiftUI', 'MapKit', 'Core Location', 'AWS Lambda', 'PostgreSQL', 'OpenAI API'],
      image: '/PLASTIC_PROPHET_LOGO_V1_WHITE.png',
      github: 'https://github.com/JaRappa/PlasticProphet',
      demo: '',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Featured Project
        </h2>

        <div className="flex justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow max-w-2xl w-full"
            >
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center p-8">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-center text-purple-600 font-semibold">
                    [Project Image]
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github || '#'}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo || '#'}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
