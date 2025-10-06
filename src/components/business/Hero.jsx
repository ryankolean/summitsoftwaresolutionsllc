import { Button } from '@/components/ui/button';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="pt-40 pb-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
          Custom Software Solutions for Modern Business Challenges
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
          Summit Software Solutions LLC integrates strategy, design, and engineering to create results-driven digital products that accelerate your business goals.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Contact Us
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('solutions')}
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            View Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}