import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Our Solutions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto border border-slate-200 rounded-lg p-10">
          <h3 className="text-2xl font-bold mb-4">
            EstateSync - Real Estate Portfolio Management Platform
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Comprehensive real estate portfolio management solution that streamlines property tracking, assists with MLS data collection, and provides valuable insights for real estate professionals.
          </p>
          <Button asChild variant="outline">
            <a href="https://estatesync.app/" target="_blank" rel="noopener noreferrer">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}