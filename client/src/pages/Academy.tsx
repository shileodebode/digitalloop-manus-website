import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { PrimaryCTA, SecondaryCTA } from '@/components/CTAButtons';
import { BRAND_COLORS } from '@shared/constants';
import { ChevronDown, CheckCircle, Users, Clock, Award } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Academy() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const courses = [
    {
      title: 'AI Fundamentals Bootcamp',
      outcome: 'Master core AI concepts and build your first ML model',
      duration: '8 weeks',
      level: 'Beginner',
      price: '₦50,000 / $35',
      features: ['Live classes', 'Project-based learning', 'Career support'],
    },
    {
      title: 'Advanced Machine Learning',
      outcome: 'Build production-ready ML systems and deploy to cloud',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '₦75,000 / $50',
      features: ['Advanced algorithms', 'Real datasets', 'Mentorship'],
    },
    {
      title: 'AI for Business Leaders',
      outcome: 'Understand AI strategy and lead digital transformation',
      duration: '6 weeks',
      level: 'All Levels',
      price: '₦40,000 / $30',
      features: ['Strategy focus', 'Case studies', 'Executive network'],
    },
  ];

  const faqs = [
    {
      question: 'What are the prerequisites for the AI Fundamentals course?',
      answer: 'Basic programming knowledge is helpful but not required. We cover Python basics in the first week. What matters most is your commitment to learning.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! We offer flexible payment plans for all courses. Contact our team to discuss options that work for your budget.',
    },
    {
      question: 'What happens after I complete the course?',
      answer: 'You get lifetime access to course materials, job placement support, and access to our alumni community for networking and collaboration.',
    },
    {
      question: 'Are the courses self-paced or live?',
      answer: 'We offer both! Live cohorts run monthly with interactive sessions, but you can also access recorded content at your own pace.',
    },
    {
      question: 'What if I need to pause my learning?',
      answer: 'Life happens! You can pause your enrollment for up to 3 months without losing access to your progress or materials.',
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
              className="text-accent"
            >
              Learn AI. Master Your Future.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-accent/80 mb-8"
            >
              Structured, outcome-focused courses designed to transform you into an AI professional. From fundamentals to advanced applications.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4">
              <PrimaryCTA href="#courses">Browse Courses</PrimaryCTA>
              <SecondaryCTA href="#contact">Schedule Demo</SecondaryCTA>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Path Visual */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" className="text-accent">
              Your Learning Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Foundations', desc: 'Python & AI basics' },
                { title: 'Core Concepts', desc: 'ML algorithms' },
                { title: 'Hands-On Projects', desc: 'Real-world problems' },
                { title: 'Career Launch', desc: 'Job-ready skills' },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="p-6 bg-white rounded-lg border-2 border-border text-center hover:border-primary transition-all">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3"
                      style={{ backgroundColor: BRAND_COLORS.primary }}
                    >
                      {idx + 1}
                    </div>
                    <h3 className="font-bold mb-2" className="text-accent">
                      {step.title}
                    </h3>
                    <p className="text-sm text-accent/80">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <div
                        className="w-8 h-1 rounded-full"
                        style={{ backgroundColor: BRAND_COLORS.primary }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16 md:py-24" id="courses">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" className="text-accent">
              Our Courses
            </h2>
            <p className="text-lg text-accent/80">
              Outcome-first curriculum designed for real-world impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-lightBg rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2" className="text-accent">
                        {course.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-4">
                        {course.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} style={{ color: BRAND_COLORS.primary }} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award size={16} style={{ color: BRAND_COLORS.primary }} />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} style={{ color: BRAND_COLORS.primary }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-2xl font-bold mb-6" style={{ color: BRAND_COLORS.primary }}>
                    {course.price}
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <PrimaryCTA href="#enroll" className="w-full text-center">
                    Enroll Now
                  </PrimaryCTA>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" className="text-accent">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="bg-white rounded-lg border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-lightBg transition-colors"
                  >
                    <span className="font-semibold text-left" className="text-accent">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{
                        color: BRAND_COLORS.primary,
                        transform: expandedFAQ === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s',
                      }}
                    />
                  </button>

                  {expandedFAQ === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 bg-lightBg border-t border-border text-accent/80"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Join our next cohort and transform your career. Limited seats available.
            </p>
            <PrimaryCTA href="#enroll" className="bg-white text-accent hover:bg-gray-100">
              Enroll Now - Next Cohort June 2026
            </PrimaryCTA>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
