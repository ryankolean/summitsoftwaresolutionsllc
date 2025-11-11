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
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, solutions.length]);

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
          <p className="text-slate-600 text-sm">
            Auto-rotating carousel • Hover to pause
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
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

          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-200 rounded-full p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-200 rounded-full p-2 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Next solution"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

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

          {isPaused && isAutoPlaying && (
            <div className="absolute top-4 right-4 bg-slate-800/75 text-white text-xs px-2 py-1 rounded">
              Paused
            </div>
          )}
        </div>
      </div>
    </section>
  );
}