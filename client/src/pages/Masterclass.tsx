import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { PrimaryCTA } from '@/components/CTAButtons';
import { BRAND_COLORS, MASTERCLASS_DATE } from '@shared/constants';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Masterclass() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = MASTERCLASS_DATE.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const learningPoints = [
    'AI fundamentals and real-world applications',
    'How to implement AI in your business',
    'Tools and frameworks used by professionals',
    'Career opportunities in AI',
    'Hands-on project walkthrough',
    'Q&A with industry experts',
  ];

  const targetAudience = [
    'Professionals looking to transition into AI',
    'Business leaders wanting to understand AI strategy',
    'Entrepreneurs building AI-powered products',
    'Students exploring AI career paths',
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
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4"
            >
              <span className="text-primary font-semibold text-sm">Free Masterclass</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
              className="text-accent"
            >
              AI for Everyone: From Basics to Business Impact
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-accent/80 mb-8"
            >
              Join us for an exclusive free masterclass where you'll learn AI fundamentals, discover real-world applications, and explore career opportunities in this rapidly growing field.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <PrimaryCTA href="#register">
                Register Now - It's Free!
              </PrimaryCTA>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8" className="text-accent">
              Next Masterclass Starts In:
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-4 bg-white rounded-lg border-2 border-primary"
                >
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: BRAND_COLORS.primary }}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-accent/80 mt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12" className="text-accent">
              What You'll Learn
            </h2>

            <div className="space-y-4">
              {learningPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-lightBg rounded-lg border border-border hover:border-primary transition-all"
                >
                  <CheckCircle size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND_COLORS.primary }} />
                  <span className="text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12" className="text-accent">
              Who This Is For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudience.map((audience, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-lg border border-border hover:border-primary transition-all"
                >
                  <div className="flex items-start gap-4">
                    <Users size={24} style={{ color: BRAND_COLORS.primary }} className="flex-shrink-0 mt-1" />
                    <span className="text-foreground">{audience}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Bio */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" className="text-accent">
              Your Instructor
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-border">
                <div className="text-center text-accent/80">
                  <p className="text-sm">Instructor Photo</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2" className="text-accent">
                  Expert Instructor
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">AI & Machine Learning Specialist</p>

                <p className="text-accent/80 mb-6 leading-relaxed">
                  With 10+ years of experience in AI and machine learning, our instructor has helped hundreds of professionals transition into AI careers and led successful AI implementations across various industries.
                </p>

                <div className="space-y-3">
                  {[
                    '10+ years in AI/ML industry',
                    'Led 50+ successful AI projects',
                    'Mentored 200+ professionals',
                    'Published researcher in AI',
                  ].map((credential, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} style={{ color: BRAND_COLORS.primary }} />
                      <span className="text-sm text-foreground">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24 bg-lightBg" id="register">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" className="text-accent">
              Register for Free
            </h2>

            <div className="bg-white p-8 rounded-xl border border-border">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    What's your main goal?
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none transition-colors">
                    <option>Select your goal</option>
                    <option>Learn AI fundamentals</option>
                    <option>Transition to AI career</option>
                    <option>Implement AI in business</option>
                    <option>Just curious</option>
                  </select>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PrimaryCTA href="#" className="w-full text-center">
                    Confirm Registration
                  </PrimaryCTA>
                </motion.div>

                <p className="text-xs text-accent/80 text-center">
                  We respect your privacy. You'll receive a confirmation email with the masterclass link.
                </p>
              </form>
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
              Don't Miss Out!
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Limited spots available. Secure your seat now and join hundreds of professionals learning AI.
            </p>
            <PrimaryCTA href="#register" className="bg-white text-accent hover:bg-gray-100">
              Register Now - It's Free!
            </PrimaryCTA>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
