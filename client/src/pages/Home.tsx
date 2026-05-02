import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { PrimaryCTA, SecondaryCTA } from '@/components/CTAButtons';
import ExitIntentModal from '@/components/ExitIntentModal';
import { BRAND_COLORS } from '@shared/constants';
import { ArrowRight, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <ExitIntentModal />
      <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={containerVariants}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: BRAND_COLORS.accent }}
              >
                Transform Your Business With AI
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted mb-8 leading-relaxed"
              >
                Learn cutting-edge AI skills, implement AI solutions, and stay ahead of the digital revolution. Join thousands of African professionals transforming their careers and businesses.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <PrimaryCTA href="#programs">
                  Start Learning Today <ArrowRight className="inline ml-2" size={20} />
                </PrimaryCTA>
                <SecondaryCTA href="#contact">
                  Schedule a Consultation
                </SecondaryCTA>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden"
            >
              {/* Placeholder for hero image - Replace with Unsplash image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-muted">
                  <p className="text-sm">Hero Image Placeholder</p>
                  <p className="text-xs mt-2">Replace with Unsplash AI/Tech image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 md:py-12 bg-lightBg border-y border-border">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted mb-6">
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

      {/* The Shift Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: BRAND_COLORS.accent }}>
              The Shift Is Here
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Artificial Intelligence is no longer a future technology—it's reshaping industries, creating new opportunities, and defining the next generation of business leaders. Are you ready to lead the change?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Skills That Matter',
                description: 'Master AI tools and frameworks that companies are actively hiring for right now.',
              },
              {
                icon: Users,
                title: 'Community & Support',
                description: 'Learn alongside peers, get mentorship, and build your professional network.',
              },
              {
                icon: TrendingUp,
                title: 'Real-World Impact',
                description: 'Apply AI to solve actual business problems and see immediate results.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-lightBg rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <item.icon size={32} className="mb-4" style={{ color: BRAND_COLORS.primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: BRAND_COLORS.accent }}>
                  {item.title}
                </h3>
                <p className="text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Paths Section */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
              Choose Your Path
            </h2>
            <p className="text-lg text-muted">
              Whether you're an individual learner or a business, we have the right program for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'For Individuals',
                description: 'Upskill in AI and launch your career in tech',
                link: '/academy',
                icon: '👤',
              },
              {
                title: 'For Businesses',
                description: 'Transform your organization with AI solutions',
                link: '/business',
                icon: '🏢',
              },
              {
                title: 'See Our Work',
                description: 'Explore projects and case studies',
                link: '/projects',
                icon: '📊',
              },
            ].map((path, idx) => (
              <motion.a
                key={idx}
                href={path.link}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-xl border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{path.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ color: BRAND_COLORS.accent }}>
                  {path.title}
                </h3>
                <p className="text-muted mb-4">{path.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: BRAND_COLORS.accent }}>
              Featured Program
            </h2>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: BRAND_COLORS.primary }}>
                    AI Fundamentals Bootcamp
                  </h3>
                  <p className="text-lg text-muted mb-6 leading-relaxed">
                    Master the core concepts of AI, machine learning, and practical applications. Perfect for professionals looking to transition into AI roles.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Learn AI/ML fundamentals',
                      'Build real-world projects',
                      'Get job-ready skills',
                      'Lifetime community access',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle size={20} style={{ color: BRAND_COLORS.primary }} />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <PrimaryCTA href="/academy">
                    Enroll Now
                  </PrimaryCTA>
                </div>
                <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <div className="text-center text-muted">
                    <p className="text-sm">Program Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assess', desc: 'Evaluate your current skills' },
              { step: '02', title: 'Learn', desc: 'Follow structured curriculum' },
              { step: '03', title: 'Build', desc: 'Create real-world projects' },
              { step: '04', title: 'Launch', desc: 'Get hired or grow your business' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4"
                    style={{ backgroundColor: BRAND_COLORS.primary }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: BRAND_COLORS.accent }}>
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-2xl text-border">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_COLORS.accent }}>
              What Our Students Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-lightBg rounded-xl border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted mb-6 italic">
                  "This program completely transformed my career. The hands-on projects and mentorship were invaluable."
                </p>
                <div>
                  <p className="font-bold" style={{ color: BRAND_COLORS.accent }}>Student Name</p>
                  <p className="text-sm text-muted">Job Title, Company</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Join the next cohort and start your AI journey. Limited seats available.
            </p>
            <PrimaryCTA href="#enroll" className="bg-white text-accent hover:bg-gray-100">
              Enroll Now - Limited Seats Available
            </PrimaryCTA>
          </motion.div>
        </div>
      </section>
      </Layout>
    </>
  );
}
