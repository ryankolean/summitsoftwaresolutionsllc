import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Layout,
  Smartphone,
  TrendingUp,
  Palette,
  Search,
  BarChart3,
  Globe,
  Rocket
} from 'lucide-react';

export default function WebsiteLandingPageServices() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    tier: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const pricingTiers = [
    {
      name: 'Simple',
      setupFee: 100,
      monthlyFee: 30,
      turnaround: '1-2 weeks',
      description: 'Perfect for getting your business online quickly and affordably',
      subtitle: 'Small businesses without an online presence',
      features: [
        'Single professional landing page',
        'Mobile-responsive design',
        'Basic contact form with email notifications',
        'Custom domain setup (domain fee additional)',
        'Hosting & maintenance included',
        'SSL certificate included',
        'Simple revisions and edits',
        'Modern React framework',
        'Fast turnaround time'
      ],
      icon: Layout,
      popular: false
    },
    {
      name: 'Professional',
      setupFee: 500,
      monthlyFee: 100,
      turnaround: '2-3 weeks',
      description: 'Expand your reach with a complete multi-page website and SEO optimization',
      subtitle: 'Growing businesses looking to increase online presence',
      features: [
        'Everything in Simple, PLUS:',
        '3-5 custom pages (Home, About, Services, Contact, etc.)',
        'SEO optimization for search engines',
        'Google Business Profile integration',
        'Google Analytics setup and dashboard',
        'Social media integration',
        'Enhanced contact forms with lead capture',
        'Content organization and site structure',
        'Standard turnaround time'
      ],
      icon: TrendingUp,
      popular: true
    },
    {
      name: 'Enterprise',
      setupFee: 1000,
      monthlyFee: 200,
      turnaround: '4-6 weeks',
      description: 'Full-service website solution with all the bells and whistles',
      subtitle: 'Established businesses wanting a complete package',
      features: [
        'Everything in Professional, PLUS:',
        '5-10 fully custom pages',
        'Full agency creative services',
        'Priority support (faster response times)',
        'Advanced SEO implementation',
        'Custom animations and interactions',
        'Blog/news section capability',
        'Advanced form functionality',
        'Email marketing integration ready',
        'Unlimited minor revisions during development'
      ],
      icon: Sparkles,
      popular: false
    },
    {
      name: 'Custom',
      setupFee: null,
      monthlyFee: null,
      turnaround: 'Custom timeline',
      description: 'Tailored solutions for unique business needs',
      subtitle: 'Start with any tier and customize',
      features: [
        'Additional pages beyond tier limits',
        'E-commerce store setup',
        'Custom API integrations (CRM, payments, etc.)',
        'Advanced SEO package',
        'Content writing services',
        'Logo & branding design',
        'Full agency services',
        'Custom web applications',
        'Multi-language support',
        'Premium support package'
      ],
      icon: Rocket,
      popular: false,
      isCustom: true
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Every website is built with mobile users in mind, ensuring perfect display across all devices.',
      impact: 'Over 60% of web traffic comes from mobile devices'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Built with modern React framework for optimal speed and user experience.',
      impact: 'Pages load in under 2 seconds for better conversions'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Professional and Enterprise tiers include comprehensive SEO to help customers find you online.',
      impact: 'Improve search rankings and organic traffic'
    },
    {
      icon: Shield,
      title: 'Secure & Maintained',
      description: 'All plans include secure hosting, SSL certificates, and regular maintenance updates.',
      impact: 'Protected against threats with 99.9% uptime guarantee'
    },
    {
      icon: Palette,
      title: 'Professional Design',
      description: 'Custom designs that reflect your brand and engage your target audience effectively.',
      impact: 'Stand out from competitors with unique branding'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track visitor behavior and measure success with integrated analytics tools.',
      impact: 'Make data-driven decisions to grow your business'
    }
  ];

  const addOns = [
    {
      title: 'Additional Pages',
      description: 'Add more pages beyond your tier limits',
      pricing: 'Starting at $150 per page'
    },
    {
      title: 'E-commerce Store',
      description: 'Full online store with product catalog and checkout',
      pricing: 'Custom quote based on catalog size'
    },
    {
      title: 'Custom API Integrations',
      description: 'Connect to CRM, payment processors, and other tools',
      pricing: 'Starting at $500 per integration'
    },
    {
      title: 'Advanced SEO Package',
      description: 'Comprehensive SEO strategy with ongoing optimization',
      pricing: '$800 one-time + $200/month maintenance'
    },
    {
      title: 'Content Writing Services',
      description: 'Professional copywriting for all pages',
      pricing: '$200-$400 per page'
    },
    {
      title: 'Logo & Branding Design',
      description: 'Complete brand identity package',
      pricing: 'Starting at $1,200'
    },
    {
      title: 'Custom Web Applications',
      description: 'Interactive tools, calculators, booking systems',
      pricing: 'Custom quote based on requirements'
    },
    {
      title: 'Multi-language Support',
      description: 'Reach international audiences',
      pricing: '$300 per additional language'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build my website?',
      answer: 'Simple tier projects typically take 1-2 weeks, Professional tier 2-3 weeks, and Enterprise tier 4-6 weeks from contract signing. Custom projects have timelines established during consultation. These timelines assume prompt feedback and content delivery from you.'
    },
    {
      question: 'What\'s included in the monthly maintenance fee?',
      answer: 'Your monthly fee covers secure hosting, regular software and security updates, technical support for site issues, minor content updates (based on tier), performance monitoring, backup and recovery services, and SSL certificate renewal. You never have to worry about the technical aspects of keeping your site running.'
    },
    {
      question: 'Do I need to purchase a domain name separately?',
      answer: 'Yes, custom domain registration is billed separately and typically costs $10-$20 per year depending on the extension (.com, .net, etc.). We handle the setup and configuration for you. Premium domain names may have variable pricing.'
    },
    {
      question: 'Can I update my website content myself?',
      answer: 'Minor content updates are included in your monthly maintenance fee based on your tier. For frequent updates, we can implement a content management system or provide training for you to make updates yourself. Additional revisions beyond tier limits are available at competitive hourly rates.'
    },
    {
      question: 'What happens if I want to make changes after launch?',
      answer: 'Each tier includes a specified number of revisions during development. After launch, minor updates are included in your monthly maintenance. Major changes or redesigns require a new project quote. We\'re always here to help your site evolve with your business.'
    },
    {
      question: 'Will my website work on mobile phones and tablets?',
      answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring they look great and function perfectly on smartphones, tablets, laptops, and desktop computers. We test across all major devices and browsers.'
    },
    {
      question: 'Do you provide hosting, or do I need my own server?',
      answer: 'Hosting is included in all our monthly plans! You don\'t need to worry about finding a hosting provider or managing servers. We handle everything, including security, backups, and performance optimization.'
    },
    {
      question: 'Can you integrate my website with other tools I use?',
      answer: 'Yes! We can integrate with popular CRMs, email marketing platforms, scheduling tools, payment processors, and more. Professional and Enterprise tiers include standard integrations. Custom integrations are available as add-ons for any tier.'
    },
    {
      question: 'What if I need e-commerce functionality?',
      answer: 'We can add full e-commerce capabilities to any tier as a custom add-on. This includes product catalogs, shopping cart, secure checkout, inventory management, and payment processing. Pricing depends on your catalog size and specific requirements.'
    },
    {
      question: 'Will my website be optimized for search engines?',
      answer: 'Professional and Enterprise tiers include SEO optimization to help your site rank well in search results. This includes technical SEO, meta tags, site structure, and more. We also offer an Advanced SEO Package for ongoing optimization and strategy.'
    },
    {
      question: 'Can I cancel my monthly service?',
      answer: 'Yes, we offer month-to-month contracts with no long-term commitment. You can cancel anytime with 30 days notice. Setup fees are non-refundable. If you cancel, you\'ll need to arrange alternative hosting or your site will go offline.'
    },
    {
      question: 'Do you offer website design if I already have hosting?',
      answer: 'Yes! We can create a custom website solution that works with your existing hosting. Contact us for a custom quote. However, our all-inclusive packages with hosting and maintenance provide the best value and peace of mind.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Website & Landing Page Solutions</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Professional Website & Landing Page Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Launch your online presence with modern, mobile-responsive websites built on React.
              From single landing pages to complete enterprise websites—hosting, maintenance, and support all included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Schedule Free Consultation
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 justify-center text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Hosting included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Mobile-responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Fast turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Why Choose Our Website Solutions?
            </h2>
            <p className="text-lg text-slate-600">
              We combine modern technology with professional design to create websites
              that not only look great but drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-blue-600">Our Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Modern React framework for fast, responsive websites</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Mobile-first design approach for all devices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">All hosting and maintenance included in monthly pricing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Quick turnaround times for Tier 1-2 projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Scalable solutions that grow with your business</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Professional design with full creative agency capabilities</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-600">What You Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Custom design that reflects your brand</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Secure hosting with SSL certificates</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Regular security updates and maintenance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SEO-friendly architecture for better rankings</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Ongoing technical support and assistance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Peace of mind knowing experts manage your site</span>
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
              Everything you need to establish a professional online presence and grow your business.
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
                    <p className="text-sm font-semibold text-blue-900">Why It Matters:</p>
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
              Choose the plan that fits your business size and needs. All plans include hosting,
              maintenance, and support with no hidden fees.
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
                    {tier.isCustom ? (
                      <div className="text-2xl font-bold text-slate-900">
                        Contact for Quote
                      </div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-slate-900">
                          ${tier.monthlyFee}
                          <span className="text-lg font-normal text-slate-600">/mo</span>
                        </div>
                        <div className="text-sm text-slate-500 mt-1">
                          ${tier.setupFee} setup fee
                        </div>
                      </>
                    )}
                    <div className="text-xs text-slate-500 mt-2">
                      {tier.turnaround}
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
                    {tier.isCustom ? 'Contact Us' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-3xl font-bold tracking-tight mb-4">
                Custom Add-Ons Available
              </h3>
              <p className="text-lg text-slate-600">
                Enhance any tier with additional features and services tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {addOns.map((addOn, index) => (
                <Card key={index} className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{addOn.title}</CardTitle>
                    <CardDescription className="text-sm">{addOn.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-blue-600">{addOn.pricing}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-slate-600 space-y-2">
              <p>
                <strong>Note:</strong> Custom domain registration and renewal fees are billed separately (typically $10-$20/year).
              </p>
              <p>
                Domain privacy protection ($8-$12/year) and premium domain names are available at variable pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              What's Included in Your Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-slate-200">
              <CardHeader>
                <Globe className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>Technology Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>• Modern React framework</p>
                <p>• Mobile-first, responsive design</p>
                <p>• Secure hosting with SSL</p>
                <p>• Regular security updates</p>
                <p>• Fast loading times</p>
                <p>• SEO-friendly architecture</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <Shield className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>Monthly Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>• Secure hosting on reliable servers</p>
                <p>• Regular software & security patches</p>
                <p>• Technical support for site issues</p>
                <p>• Minor content updates (based on tier)</p>
                <p>• Performance monitoring</p>
                <p>• Backup and recovery services</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <Zap className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>Revision Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>• Revision limits set at contract signing</p>
                <p>• Additional revisions at hourly rates</p>
                <p>• Major scope changes require new quote</p>
                <p>• Simple: 1-2 weeks turnaround</p>
                <p>• Professional: 2-3 weeks</p>
                <p>• Enterprise: 4-6 weeks</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about our website and landing page services.
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

      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Ready to Launch Your Website?
            </h2>
            <p className="text-lg text-slate-600">
              Schedule a free consultation with our team. We'll discuss your goals, recommend the best
              tier for your needs, and answer any questions you have.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Get Started Today</CardTitle>
              <CardDescription>
                Fill out the form below and we'll be in touch within 24 hours to schedule your free consultation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Business Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Business"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tier">Which tier are you interested in? *</Label>
                  <select
                    id="tier"
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  >
                    <option value="">Select a tier...</option>
                    <option value="simple">Simple - $30/month</option>
                    <option value="professional">Professional - $100/month</option>
                    <option value="enterprise">Enterprise - $200/month</option>
                    <option value="custom">Custom - Contact for Quote</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What are your goals for this website? Do you have existing branding? Any specific features you need?"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Request Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by our team regarding your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Questions? Call us or send an email and we'll respond promptly.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-medium">
                (555) 123-4567
              </a>
              <a href="mailto:info@summitsoftwaresolutions.dev" className="text-blue-600 hover:text-blue-700 font-medium">
                info@summitsoftwaresolutions.dev
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>&copy; 2025 Summit Software Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
