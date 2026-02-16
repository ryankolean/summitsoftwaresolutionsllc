import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Phone,
  Clock,
  DollarSign,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  HeadphonesIcon,
  Zap,
  Building2,
  Mail,
  MessageSquare
} from 'lucide-react';
import Footer from '@/components/business/Footer';

export default function AutomatedPhoneService() {

  const pricingTiers = [
    {
      name: 'Starter',
      price: 149,
      setupFee: 500,
      description: 'Perfect entry point for sole and small businesses',
      features: [
        'Unlimited calls',
        'Basic call routing',
        'Voicemail transcription',
        'Email notifications',
        'Business hours coverage',
        '24/7 call logging'
      ],
      icon: Users,
      popular: false
    },
    {
      name: 'Business',
      price: 249,
      setupFee: 750,
      description: 'Most popular choice for scaling operations',
      subtitle: 'Growing businesses (10-50 employees)',
      features: [
        'Unlimited calls',
        'Advanced call routing',
        'Voicemail transcription',
        'SMS & email notifications',
        'Extended hours coverage',
        'CRM integration',
        'Custom greetings',
        'Call analytics dashboard'
      ],
      icon: TrendingUp,
      popular: true
    },
    {
      name: 'Professional',
      price: 399,
      setupFee: 1000,
      description: 'Comprehensive solution for complex needs',
      subtitle: 'Established companies (50+ employees)',
      features: [
        'Unlimited calls',
        'Priority call routing',
        'Multi-language support',
        'Advanced CRM integration',
        '24/7 coverage',
        'Dedicated account manager',
        'Custom workflows',
        'Advanced analytics',
        'API access'
      ],
      icon: Building2,
      popular: false
    },
    {
      name: 'Enterprise',
      price: 599,
      setupFee: 1500,
      description: 'Premium solution for enterprise-level requirements',
      subtitle: 'Multi-location operations and franchises',
      features: [
        'Unlimited calls',
        'Enterprise call routing',
        'Multi-location support',
        'White-label solution',
        '24/7 premium coverage',
        'Dedicated success team',
        'Custom AI training',
        'Advanced security features',
        'SLA guarantees',
        'Priority support'
      ],
      icon: Sparkles,
      popular: false
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Never Miss a Call',
      description: '24/7 availability ensures every customer reaches you, even outside business hours.',
      impact: 'Capture 40% more leads from after-hours inquiries'
    },
    {
      icon: DollarSign,
      title: 'Reduce Operational Costs',
      description: 'Save on hiring, training, and managing reception staff while maintaining professional service.',
      impact: 'Average savings of $35,000 annually per receptionist replaced'
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get your AI phone service running in days, not weeks or months.',
      impact: 'Live within 3-5 business days with full customization'
    },
    {
      icon: HeadphonesIcon,
      title: 'Consistent Professional Service',
      description: 'Every caller receives the same high-quality experience, customized to your brand.',
      impact: '95% customer satisfaction rating across all interactions'
    },
    {
      icon: Users,
      title: 'Intelligent Call Routing',
      description: 'Smart routing ensures calls reach the right person or department instantly.',
      impact: 'Reduce call transfer time by 70%'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with HIPAA, PCI-DSS, and SOC 2 standards.',
      impact: 'Complete data protection and regulatory compliance'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'Most businesses are up and running within 3-5 business days. After signup, we\'ll schedule a consultation call to understand your needs, configure your system, and train the AI on your specific business requirements. Simple setups can go live even faster.'
    },
    {
      question: 'Will the AI sound robotic?',
      answer: 'No! Our AI uses advanced natural language processing to sound natural and conversational. We customize the voice, tone, and personality to match your brand. Most callers don\'t realize they\'re speaking with an AI assistant.'
    },
    {
      question: 'What happens if the AI can\'t handle a call?',
      answer: 'The system intelligently recognizes when a call requires human intervention and seamlessly transfers to your designated staff members. You maintain full control over escalation rules and can monitor all interactions in real-time.'
    },
    {
      question: 'Can I customize what the AI says?',
      answer: 'Absolutely! You have complete control over greetings, responses, and workflows. We work with you during setup to ensure the AI reflects your business processes and communication style. Updates can be made anytime through your dashboard.'
    },
    {
      question: 'Are there really unlimited calls included?',
      answer: 'Yes! All of our plans include unlimited calls with no overage fees or hidden charges. Whether you receive 10 calls or 10,000 calls per month, your pricing stays the same. This gives you complete peace of mind as your business grows.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use enterprise-grade encryption, undergo regular security audits, and comply with HIPAA, PCI-DSS, and SOC 2 standards. Your data is stored in secure, redundant data centers and never shared with third parties.'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! We integrate with popular CRMs (Salesforce, HubSpot, Zoho), scheduling tools, and business software. Custom integrations are available for Professional and Enterprise plans. Our API allows you to build custom connections.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'We offer month-to-month contracts with no long-term commitment. You can cancel anytime with 30 days notice. Setup fees are non-refundable, but there are no cancellation penalties. We\'re confident you\'ll love the service.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">AI-Powered Phone Solutions</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Never Miss Another Call
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your phone system with AI technology that answers every call professionally,
              routes intelligently, and works 24/7—all customized specifically for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Request Demo
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 justify-center text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Setup in 3-5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>24/7 availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              The Problem with Traditional Phone Systems
            </h2>
            <p className="text-lg text-slate-600">
              Most businesses struggle with missed calls, high staffing costs, and inconsistent customer service.
              Our AI-powered solution eliminates these pain points.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-red-200 bg-white">
              <CardHeader>
                <CardTitle className="text-red-600">Traditional Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✕</span>
                  <span className="text-slate-700">Missed calls during busy periods or off-hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✕</span>
                  <span className="text-slate-700">High hiring and training costs for reception staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✕</span>
                  <span className="text-slate-700">Inconsistent customer experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✕</span>
                  <span className="text-slate-700">Slow implementation and setup times</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✕</span>
                  <span className="text-slate-700">Limited scalability during growth</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-600">Our AI Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Every call answered instantly, 24/7/365</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Save $35K+ annually per receptionist position</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Professional, consistent service every time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Live in just 3-5 business days</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Scales effortlessly as your business grows</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Powerful Features That Drive Results
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to deliver exceptional phone service and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="text-sm font-semibold text-blue-900">Business Impact:</p>
                    <p className="text-sm text-blue-700 mt-1">{feature.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600">
              Choose the plan that fits your business size and needs. All plans include core features,
              with no hidden fees or surprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.popular
                    ? 'border-blue-500 shadow-xl scale-105'
                    : 'border-slate-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-slate-900">
                      ${tier.price}
                      <span className="text-lg font-normal text-slate-600">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      ${tier.setupFee} setup fee
                    </div>
                  </div>
                  <CardDescription className="text-sm font-medium">{tier.description}</CardDescription>
                  {tier.subtitle && (
                    <p className="text-xs text-slate-500 mt-2">{tier.subtitle}</p>
                  )}
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${tier.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Need a custom solution?</p>
            <Button variant="link" className="text-blue-600" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact us for enterprise pricing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about our automated phone service.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Ready to Transform Your Phone System?
            </h2>
            <p className="text-lg text-slate-600">
              Get in touch with our team directly. We&apos;ll show you how our AI phone service
              can work for your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call us now</h3>
              <p className="text-blue-600 font-semibold text-lg mb-3">(248) 882-9055</p>
              <p className="text-sm text-slate-500">Experience our automated call handling system by calling us directly</p>
              <p className="text-xs text-slate-400 mt-3">Best for demos and sales inquiries</p>
              <a
                href="tel:+12488829055"
                className="inline-block mt-5 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                Call Now
              </a>
            </div>

            <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
                <MessageSquare className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Text us</h3>
              <p className="text-blue-600 font-semibold text-lg mb-3">(248) 882-9055</p>
              <p className="text-sm text-slate-500">Send a quick text and we&apos;ll get back to you</p>
              <p className="text-xs text-slate-400 mt-3">Best for quick questions</p>
              <a
                href="sms:+12488829055"
                className="inline-block mt-5 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                Send Text
              </a>
            </div>

            <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Send us an email</h3>
              <p className="text-sm text-slate-500">We typically respond within one business day</p>
              <p className="text-xs text-slate-400 mt-3">Best for detailed project requirements</p>
              <a
                href="mailto:info@summitsoftwaresolutions.com"
                className="inline-block mt-5 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm">PCI-DSS Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
