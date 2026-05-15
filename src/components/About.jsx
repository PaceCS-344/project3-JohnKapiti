import React, { useState, useRef, useEffect } from 'react';

const About = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const hoverTimeoutRef = useRef(null);

  // Fetch GitHub user data
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/JohnKapiti');
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowEasterEgg(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowEasterEgg(false);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile & Stats */}
          <div className="flex flex-col items-center">
            {/* Profile Photo with Easter Egg */}
            <div
              className="relative w-56 h-56 cursor-pointer mb-8 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="/temppicturepfp.jpg"
                alt="John Kapiti"
                className={`w-full h-full rounded-full object-cover transition-opacity duration-300 ${
                  showEasterEgg ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Easter Egg Video Container */}
              {showEasterEgg && (
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full rounded-full object-cover"
                  onEnded={(e) => e.currentTarget.play()}
                >
                  <source src="/spongebob-thinking.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* GitHub Stats Cards */}
            {!loading && githubData ? (
              <div className="w-full space-y-3">
                <a
                  href={githubData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  View GitHub Profile
                </a>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
                    <p className="text-purple-600 text-3xl font-bold">
                      {githubData.public_repos}
                    </p>
                    <p className="text-gray-600 text-sm font-semibold mt-1">
                      Public Repos
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
                    <p className="text-purple-600 text-3xl font-bold">
                      {githubData.followers}
                    </p>
                    <p className="text-gray-600 text-sm font-semibold mt-1">
                      Followers
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
                    <p className="text-purple-600 text-3xl font-bold">
                      {githubData.following}
                    </p>
                    <p className="text-gray-600 text-sm font-semibold mt-1">
                      Following
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
                    <p className="text-purple-600 text-3xl font-bold">
                      {githubData.public_gists}
                    </p>
                    <p className="text-gray-600 text-sm font-semibold mt-1">
                      Gists
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  {githubData.location && (
                    <div className="bg-white rounded-lg p-4 border-2 border-green-100 text-center">
                      <p className="text-green-700 font-bold text-lg">
                        📍 {githubData.location}
                      </p>
                    </div>
                  )}

                  {githubData.company && (
                    <div className="bg-white rounded-lg p-4 border-2 border-blue-100 text-center">
                      <p className="text-blue-700 font-bold text-lg">
                        💼 {githubData.company}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-sm">Loading GitHub data...</div>
            )}
          </div>

          {/* Right Column - Bio */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Computer Science Student & Developer
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am a Computer Science student at Pace University graduating in the spring of 2026. I am the President of the Coding Club and I like fostering a community of creativity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Currently working as an IT Support Technician, where I solve L1 and L2 user issues and help optimize our IT infrastructure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My interests span databases, cloud infrastructure, and backend systems. I'm passionate about building scalable solutions and working with data and numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
