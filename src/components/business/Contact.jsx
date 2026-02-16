import { Linkedin, Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg text-slate-600">
            Ready to transform your business with custom software solutions? Reach out directly and
            let&apos;s discuss how Summit Software Solutions LLC can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="tel:+12488829055"
            className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
              <Phone className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Call us now</h3>
            <p className="text-blue-600 font-semibold text-lg mb-3">(248) 882-9055</p>
            <p className="text-sm text-slate-500">Experience our automated call handling system by calling us directly</p>
            <p className="text-xs text-slate-400 mt-3">Best for sales inquiries and demos</p>
          </a>

          <a
            href="mailto:info@summitsoftwaresolutions.com"
            className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Send us an email</h3>
            <p className="text-blue-600 font-semibold mb-3">info@summitsoftwaresolutions.com</p>
            <p className="text-sm text-slate-500">We typically respond within one business day</p>
            <p className="text-xs text-slate-400 mt-3">Best for project details and proposals</p>
          </a>

          <a
            href="sms:+12488829055"
            className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
              <MessageSquare className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Text us</h3>
            <p className="text-blue-600 font-semibold text-lg mb-3">(248) 882-9055</p>
            <p className="text-sm text-slate-500">Send a quick text and we&apos;ll get back to you</p>
            <p className="text-xs text-slate-400 mt-3">Best for quick questions</p>
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.linkedin.com/company/summit-software-solutions-llc/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">Follow us on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
