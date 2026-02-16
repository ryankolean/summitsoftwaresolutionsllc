import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Automated Phone Service', to: '/AutomatedPhoneService' },
  { label: 'Website & Landing Pages', to: '/WebsiteLandingPageServices' },
];

const externalLinks = [
  {
    label: 'EstateSync',
    href: 'https://estatesync.app/',
  },
];

export default function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    if (location.pathname === '/' || location.pathname === '/Home') {
      const el = document.getElementById('contact');
      if (el) {
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <div className="lg:col-span-1">
            <Link to="/" className="text-lg font-semibold text-white tracking-tight inline-block mb-4 hover:text-blue-400 transition-colors">
              Summit Software Solutions
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Custom software solutions that help businesses automate, grow, and stand out online.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Pages</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-3">
              {externalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors duration-200 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/AutomatedPhoneService"
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Automated Phone Service
                </Link>
              </li>
              <li>
                <Link
                  to="/WebsiteLandingPageServices"
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Website & Landing Pages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12488829055"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 group"
                  aria-label="Call us at (248) 882-9055"
                >
                  <Phone className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  (248) 882-9055
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@summitsoftwaresolutions.com"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 group"
                  aria-label="Email us at info@summitsoftwaresolutions.com"
                >
                  <Mail className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  info@summitsoftwaresolutions.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ryankolean/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 group"
                  aria-label="Visit our LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} Summit Software Solutions LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/ryankolean/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
