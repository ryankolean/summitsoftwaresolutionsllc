import { Code2, Lightbulb, Users, Target } from 'lucide-react';

export default function About() {
  const services = [
    {
      title: "Custom Software Development",
      icon: Code2
    },
    {
      title: "Digital Product Innovation", 
      icon: Lightbulb
    },
    {
      title: "Strategic Technology Consulting",
      icon: Users
    },
    {
      title: "Results-Driven Solutions",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Accelerate Your Digital Strategy
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Summit Software Solutions LLC helps companies discover, define, design, and develop tomorrow&apos;s innovations. We create custom software solutions that meet ambitious business goals through user-centric design and cutting-edge development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}