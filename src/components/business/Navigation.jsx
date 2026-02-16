import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink } from 'lucide-react';

const solutions = [
  {
    title: 'EstateSync',
    description: 'Real estate portfolio management',
    link: 'https://estatesync.app/',
    isExternal: true,
  },
  {
    title: 'Website & Landing Pages',
    description: 'Professional web presence solutions',
    link: '/WebsiteLandingPageServices',
    isExternal: false,
  },
  {
    title: 'Automated Phone Service',
    description: 'AI-powered phone automation',
    link: '/AutomatedPhoneService',
    isExternal: false,
  },
];

export default function Navigation({ scrollToSection }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-semibold text-slate-900 tracking-tight"
          >
            Summit Software Solutions LLC
          </button>

          <nav className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                onClick={() => scrollToSection('solutions')}
                className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full right-0 mt-2 w-72 bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden transition-all duration-200 origin-top ${
                  dropdownOpen
                    ? 'opacity-100 scale-y-100 translate-y-0'
                    : 'opacity-0 scale-y-95 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="p-2">
                  {solutions.map((solution) =>
                    solution.isExternal ? (
                      <a
                        key={solution.title}
                        href={solution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 px-3 py-3 rounded-md hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                              {solution.title}
                            </span>
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {solution.description}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <Link
                        key={solution.title}
                        to={solution.link}
                        className="flex items-start gap-3 px-3 py-3 rounded-md hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                            {solution.title}
                          </span>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {solution.description}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
