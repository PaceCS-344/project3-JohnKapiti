import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [repoDetails, setRepoDetails] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Plastic Prophet',
      description: 'Credit card recommendation app that determines the best card to use at nearby merchants using location services and merchant classification.',
      tech: ['SwiftUI', 'MapKit', 'Core Location', 'AWS Lambda', 'PostgreSQL', 'OpenAI API'],
      image: '/PLASTIC_PROPHET_LOGO_V1_WHITE.png',
      github: 'https://github.com/JaRappa/PlasticProphet',
      demo: '',
      repoOwner: 'JaRappa',
      repoName: 'PlasticProphet',
    },
  ];

  // Fetch repo details and contributors from GitHub API
  const fetchRepoDetails = async () => {
    if (repoDetails) {
      setIsFlipped(!isFlipped);
      return;
    }

    setLoading(true);
    try {
      const repoResponse = await fetch('https://api.github.com/repos/JaRappa/PlasticProphet');
      const repoData = await repoResponse.json();
      setRepoDetails(repoData);

      const contributorsResponse = await fetch('https://api.github.com/repos/JaRappa/PlasticProphet/contributors');
      let contributorsData = await contributorsResponse.json();
      
      // Filter out "copilot"
      contributorsData = contributorsData.filter(c => c.login !== 'copilot');
      
      // Check if John Kapiti is already in the list
      const hasJohnKapiti = contributorsData.some(c => c.login === 'JohnKapiti');
      if (!hasJohnKapiti) {
        // Fetch John Kapiti's user data to get the correct avatar
        try {
          const userResponse = await fetch('https://api.github.com/users/JohnKapiti');
          const userData = await userResponse.json();
          contributorsData.unshift({
            login: userData.login,
            avatar_url: userData.avatar_url
          });
        } catch (err) {
          console.error('Error fetching user data:', err);
          // Fallback if user data fetch fails
          contributorsData.unshift({
            login: 'JohnKapiti',
            avatar_url: 'https://avatars.githubusercontent.com/u/JohnKapiti?v=4'
          });
        }
      }
      
      setContributors(contributorsData);

      setIsFlipped(true);
    } catch (error) {
      console.error('Error fetching repo details:', error);
    } finally {
      setLoading(false);
    }
  };

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
              className="max-w-2xl w-full"
              style={{ perspective: '1000px', minHeight: '600px' }}
            >
              {/* Flip Card Container */}
              <div
                className="relative w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  minHeight: '600px',
                }}
              >
                {/* Front of Card */}
                <div
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Project Image - Clickable */}
                  <div
                    className="h-64 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center p-8 cursor-pointer hover:from-purple-300 hover:to-purple-400 transition-all"
                    onClick={fetchRepoDetails}
                    title="Click to see more details"
                  >
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
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed text-lg flex-1">
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

                    {/* Flip Hint */}
                    <p className="text-center text-gray-500 text-sm mt-6 cursor-pointer hover:text-purple-600">
                      Click the logo to see more details →
                    </p>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg overflow-hidden shadow-md p-8 absolute inset-0 flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div
                    onClick={fetchRepoDetails}
                    className="h-full flex flex-col cursor-pointer"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Repository Stats
                    </h3>

                    {loading ? (
                      <div className="flex items-center justify-center flex-1">
                        <div className="text-white text-lg">Loading...</div>
                      </div>
                    ) : repoDetails ? (
                      <div className="space-y-4 flex-1">
                        {/* Top Stats Row */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                            <p className="text-white text-2xl font-bold">
                              {repoDetails.stargazers_count || 0}
                            </p>
                            <p className="text-white text-xs font-semibold">
                              Stars
                            </p>
                          </div>

                          <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                            <p className="text-white text-2xl font-bold">
                              {repoDetails.watchers_count || 0}
                            </p>
                            <p className="text-white text-xs font-semibold">
                              Watchers
                            </p>
                          </div>

                          <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                            <p className="text-white text-2xl font-bold">
                              {repoDetails.open_issues_count || 0}
                            </p>
                            <p className="text-white text-xs font-semibold">
                              Issues
                            </p>
                          </div>
                        </div>

                        {/* Language */}
                        {repoDetails.language && (
                          <div className="bg-white bg-opacity-20 rounded-lg p-3">
                            <p className="text-white text-xs font-semibold mb-1">
                              Primary Language
                            </p>
                            <p className="text-white text-lg font-bold">
                              {repoDetails.language}
                            </p>
                          </div>
                        )}

                        {/* Contributors */}
                        {contributors && contributors.length > 0 && (
                          <div className="bg-white bg-opacity-20 rounded-lg p-4 flex-1 flex flex-col">
                            <p className="text-white text-xs font-semibold mb-3">
                              Contributors ({contributors.length})
                            </p>
                            <div className="grid grid-cols-2 gap-3 overflow-y-auto">
                              {contributors.map((contributor, index) => (
                                <div
                                  key={index}
                                  className="flex flex-col items-center gap-2 bg-white bg-opacity-10 rounded p-3 hover:bg-opacity-20 transition-all"
                                >
                                  <img
                                    src={contributor.avatar_url}
                                    alt={contributor.login}
                                    className="w-10 h-10 rounded-full flex-shrink-0"
                                  />
                                  <p className="text-white text-xs font-semibold text-center break-words">
                                    {contributor.login}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}

                    <p className="text-white text-sm mt-6 text-center opacity-75">
                      ← Click to go back
                    </p>
                  </div>
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
