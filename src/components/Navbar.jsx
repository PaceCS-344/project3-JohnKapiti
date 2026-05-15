import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Scroll to skills section when user types
    if (term.trim() !== '') {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        setTimeout(() => {
          skillsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-[9999] bg-purple-600 shadow-md border-b border-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white">
              John Kapiti
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-center">
            {showSearch ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={handleSearch}
                  autoFocus
                  className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none w-80 text-base"
                />
                <button
                  onClick={() => {
                    setShowSearch(false);
                    setSearchTerm('');
                  }}
                  className="p-2 text-white hover:bg-purple-700 rounded-md transition-colors"
                  title="Close search"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-100 hover:bg-purple-700 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Search and Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search Icon */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Search Icon only - no dropdown */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-purple-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Search */}
            <div className="px-3 py-2 mt-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-3 py-2 rounded-lg text-gray-900 border-2 border-purple-400 focus:outline-none focus:border-purple-300"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
