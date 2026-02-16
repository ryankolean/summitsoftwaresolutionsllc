
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg text-slate-600">
            Ready to transform your business with custom software solutions? Get in touch to discuss your project and discover how Summit Software Solutions LLC can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for your interest. We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input id="name" name="name" type="text" placeholder="Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Email" required />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">Company</label>
                  <Input id="company" name="company" type="text" placeholder="Company" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" name="message" placeholder="Message" rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <a href="tel:+12488829055" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-slate-500" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">(248) 882-9055</h4>
                <p className="text-sm text-slate-600">Experience our automated call handling system by calling us directly</p>
              </div>
            </a>
            <a href="mailto:info@summitsoftwaresolutions.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-slate-500" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">info@summitsoftwaresolutions.com</h4>
                <p className="text-sm text-slate-600">Send us an email anytime</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/summit-software-solutions-llc/about/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-slate-500" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Follow us on LinkedIn</h4>
                <p className="text-sm text-slate-600">Company Page</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
