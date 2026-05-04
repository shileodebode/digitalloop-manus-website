import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { BRAND_COLORS } from '@shared/constants';
import { CheckCircle, Heart, Zap, Users } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  const beliefs = [
    {
      icon: Zap,
      title: 'AI is for Everyone',
      description: 'Artificial intelligence should not be limited to tech companies. Every professional should understand and leverage AI.',
    },
    {
      icon: Heart,
      title: 'Impact Over Profit',
      description: 'We measure success by the positive impact we create for our students and clients, not just revenue.',
    },
    {
      icon: Users,
      title: 'Community Matters',
      description: 'Learning is better together. We build supportive communities where professionals grow and help each other succeed.',
    },
  ];

  const teamMembers = [
    {
      name: 'Founder Name',
      role: 'Founder & CEO',
      bio: 'AI visionary with 15+ years in tech and education',
      image: 'team-1',
    },
    {
      name: 'Team Member 2',
      role: 'Head of Curriculum',
      bio: 'Former ML researcher with passion for education',
      image: 'team-2',
    },
    {
      name: 'Team Member 3',
      role: 'Lead Instructor',
      bio: 'Industry expert with 10+ years of AI implementation',
      image: 'team-3',
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
              About Digital Loop
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-accent/80 mb-8"
            >
              We're on a mission to democratize AI education and empower African professionals to lead the digital revolution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" className="text-accent">
                Our Founder's Story
              </h2>

              <div className="space-y-6 text-accent/80 leading-relaxed">
                <p>
                  Digital Loop was founded with a simple observation: artificial intelligence is transforming every industry, but most professionals in Africa lack access to quality AI education.
                </p>

                <p>
                  Our founder spent years working in tech and education, seeing the gap between the demand for AI skills and the supply of quality training. That's when Digital Loop was born—to bridge this gap and empower thousands of professionals.
                </p>

                <p>
                  Today, we've helped hundreds of professionals transition into AI careers, trained teams at leading African companies, and built custom AI solutions that drive real business impact.
                </p>

                <p>
                  But we're just getting started. Our vision is to make AI education accessible to every professional in Africa and beyond.
                </p>
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-border">
              <div className="text-center text-accent/80">
                <p className="text-sm">Founder Photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" className="text-accent">
              What We Believe In
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((belief, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-lightBg rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <belief.icon size={32} className="mb-4" style={{ color: BRAND_COLORS.primary }} />
                <h3 className="text-xl font-bold mb-3" className="text-accent">
                  {belief.title}
                </h3>
                <p className="text-accent/80">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" className="text-accent">
              Our Team
            </h2>
            <p className="text-lg text-accent/80">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-b border-border">
                  <div className="text-center text-accent/80">
                    <p className="text-sm">{member.image}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" className="text-accent">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                  <p className="text-accent/80 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" className="text-accent">
              Our Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Students Trained' },
              { number: '50+', label: 'Companies Served' },
              { number: '100+', label: 'AI Projects Delivered' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-8 bg-lightBg rounded-xl border border-border"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: BRAND_COLORS.primary }}>
                  {stat.number}
                </div>
                <p className="text-accent/80 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" className="text-accent">
              Our Values
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Excellence',
                  description: 'We maintain the highest standards in everything we do—from curriculum design to student support.',
                },
                {
                  title: 'Accessibility',
                  description: 'Quality AI education should be accessible to everyone, regardless of background or location.',
                },
                {
                  title: 'Innovation',
                  description: 'We stay at the forefront of AI trends and continuously update our programs to reflect industry changes.',
                },
                {
                  title: 'Integrity',
                  description: 'We are transparent, honest, and committed to doing the right thing for our students and clients.',
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-lg border border-border"
                >
                  <CheckCircle size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND_COLORS.primary }} />
                  <div>
                    <h3 className="font-bold mb-2" className="text-accent">
                      {value.title}
                    </h3>
                    <p className="text-accent/80 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
