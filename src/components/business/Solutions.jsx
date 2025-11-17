import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: 'EstateSync - Real Estate Portfolio Management Platform',
      description: 'Comprehensive real estate portfolio management solution that streamlines property tracking, assists with MLS data collection, and provides valuable insights for real estate professionals.',
      link: 'https://estatesync.app/'
    },
    {
      id: 2,
      title: 'Custom Landing Page',
      description: 'Showcase your unique value and own your digital footprint—our custom landing pages help you captivate, convert, and grow your customer base!',
      link: null
    },
    {
      id: 3,
      title: 'Automated Phone Service',
      description: 'Service that is customized exactly for your business and your customers. Saves your time, money, and hassle! We have you up and running in days. Save on hiring and let us manage your phones for you!',
      link: null
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, solutions.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="solutions" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Our Solutions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative flex items-center gap-6">
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 bg-white hover:bg-slate-50 border border-slate-200 rounded-full p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          <div
            className="flex-1 relative"
            role="region"
            aria-label="Solutions carousel"
            aria-live="polite"
          >
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {solutions.map((solution, index) => (
                  <div
                    key={solution.id}
                    className="min-w-full p-10"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${index + 1} of ${solutions.length}`}
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                      {solution.description}
                    </p>
                    {solution.link && (
                      <Button asChild variant="outline">
                        <a
                          href={solution.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={currentIndex === index ? 0 : -1}
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="flex-shrink-0 bg-white hover:bg-slate-50 border border-slate-200 rounded-full p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Next solution"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex gap-2" role="tablist" aria-label="Solution indicators">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-blue-600'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to solution ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={toggleAutoPlay}
            className="ml-2 p-1.5 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label={isAutoPlaying ? 'Pause auto-rotation' : 'Resume auto-rotation'}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-slate-600" />
            ) : (
              <Play className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}