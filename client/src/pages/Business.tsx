import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { PrimaryCTA, SecondaryCTA } from '@/components/CTAButtons';
import { BRAND_COLORS } from '@shared/constants';
import { ArrowRight, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Business() {
  const services = [
    {
      icon: '🤖',
      title: 'AI Strategy & Consulting',
      description: 'Develop a comprehensive AI roadmap tailored to your business goals and industry challenges.',
      features: ['Market analysis', 'Technology assessment', 'Implementation roadmap'],
    },
    {
      icon: '👥',
      title: 'Team Training & Upskilling',
      description: 'Equip your team with AI skills through customized workshops and hands-on training programs.',
      features: ['Custom curriculum', 'On-site training', 'Ongoing support'],
    },
    {
      icon: '⚙️',
      title: 'Custom AI Solutions',
      description: 'Build production-ready AI systems that solve your specific business problems and drive ROI.',
      features: ['End-to-end development', 'Integration support', 'Maintenance & monitoring'],
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understand your business, challenges, and goals' },
    { step: '02', title: 'Assessment', desc: 'Evaluate current capabilities and identify opportunities' },
    { step: '03', title: 'Strategy', desc: 'Develop a tailored AI implementation plan' },
    { step: '04', title: 'Execution', desc: 'Build and deploy AI solutions with your team' },
    { step: '05', title: 'Training', desc: 'Upskill your team to manage AI systems independently' },
    { step: '06', title: 'Optimization', desc: 'Monitor, measure, and continuously improve results' },
  ];

  const caseStudies = [
    {
      title: 'E-Commerce Platform',
      challenge: 'Reduce customer churn and improve retention',
      result: '35% increase in customer lifetime value',
      industry: 'Retail',
    },
    {
      title: 'Financial Services',
      challenge: 'Automate fraud detection and reduce false positives',
      result: '92% fraud detection accuracy',
      industry: 'Finance',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-12 md:py-20">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: BRAND_COLORS.accent }}
            >
              Transform Your Business With AI
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted mb-8"
            >
              Strategic consulting, team training, and custom AI solutions designed to drive measurable business impact and competitive advantage.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4">
              <PrimaryCTA href="#services">Explore Services</PrimaryCTA>
              <SecondaryCTA href="#contact">Schedule Consultation</SecondaryCTA>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-lightBg" id="services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
              Our Services
            </h2>
            <p className="text-lg text-muted">
              End-to-end AI solutions for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: BRAND_COLORS.accent }}>
                  {service.title}
                </h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} style={{ color: BRAND_COLORS.primary }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
              Our Process
            </h2>
            <p className="text-lg text-muted">
              A proven 6-step methodology for successful AI implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="p-6 bg-lightBg rounded-lg border border-border hover:border-primary transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-4"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND_COLORS.accent }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 md:py-16 bg-lightBg border-y border-border">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted mb-8">
            Trusted by leading African companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, idx) => (
              <div
                key={idx}
                className="h-12 bg-white rounded-lg flex items-center justify-center text-sm font-medium text-muted"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
              Case Study Highlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <p className="text-sm font-semibold text-primary mb-2">{study.industry}</p>
                <h3 className="text-2xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
                  {study.title}
                </h3>
                <div className="mb-6">
                  <p className="text-sm text-muted mb-2">Challenge:</p>
                  <p className="text-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-2">Result:</p>
                  <p className="text-lg font-bold" style={{ color: BRAND_COLORS.primary }}>
                    {study.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly CTA */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: BRAND_COLORS.accent }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our team to discuss your AI strategy and how we can help your business succeed.
            </p>
            <PrimaryCTA href="#calendly" className="bg-white text-accent hover:bg-gray-100">
              Schedule Free Consultation
            </PrimaryCTA>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
