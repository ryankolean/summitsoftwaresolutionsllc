import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Building2, Globe, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 1,
    title: 'EstateSync',
    subtitle: 'Real Estate Portfolio Management Platform',
    description:
      'Comprehensive real estate portfolio management solution that streamlines property tracking, assists with MLS data collection, and provides valuable insights for real estate professionals.',
    icon: Building2,
    link: 'https://estatesync.app/',
    isExternal: true,
  },
  {
    id: 2,
    title: 'Website & Landing Pages',
    subtitle: 'Professional Web Presence Solutions',
    description:
      'Showcase your unique value and own your digital footprint. Our custom landing pages help you captivate, convert, and grow your customer base with modern, mobile-responsive design.',
    icon: Globe,
    link: '/WebsiteLandingPageServices',
    isExternal: false,
  },
  {
    id: 3,
    title: 'Automated Phone Service',
    subtitle: 'AI-Powered Phone Automation',
    description:
      'A service customized exactly for your business and your customers. Saves your time, money, and hassle. We have you up and running in days. Save on hiring and let us manage your phones for you.',
    icon: Phone,
    link: '/AutomatedPhoneService',
    isExternal: false,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Purpose-built software products and services designed to solve real
            business challenges and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative bg-white border border-slate-200 rounded-xl p-8 flex flex-col hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <solution.icon className="w-6 h-6 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {solution.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 mb-4">
                {solution.subtitle}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {solution.description}
              </p>

              {solution.isExternal ? (
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={solution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              ) : (
                <Button asChild variant="outline" className="w-full">
                  <Link to={solution.link}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
