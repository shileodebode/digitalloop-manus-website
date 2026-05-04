import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { PrimaryCTA } from '@/components/CTAButtons';
import { BRAND_COLORS, CONTACT_INFO } from '@shared/constants';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Contact() {
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
              Get in Touch
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-accent/80 mb-8"
            >
              Have questions? Want to explore how we can help your business? We'd love to hear from you. Reach out using any method below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: CONTACT_INFO.email,
                link: `mailto:${CONTACT_INFO.email}`,
              },
              {
                icon: Phone,
                title: 'Phone',
                value: CONTACT_INFO.phone,
                link: `tel:${CONTACT_INFO.phone}`,
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                value: 'Chat with us',
                link: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`,
              },
            ].map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all text-center group"
              >
                <method.icon
                  size={32}
                  className="mx-auto mb-4 group-hover:text-primary transition-colors"
                  style={{ color: BRAND_COLORS.primary }}
                />
                <h3 className="text-lg font-bold mb-2" className="text-accent">
                  {method.title}
                </h3>
                <p className="text-accent/80 group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" className="text-accent">
              Send us a Message
            </h2>

            <div className="bg-lightBg p-8 rounded-xl border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2" className="text-accent">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" className="text-accent">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors">
                    <option>Select a subject</option>
                    <option>AI Training Inquiry</option>
                    <option>Business Consulting</option>
                    <option>Partnership Opportunity</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" className="text-accent">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PrimaryCTA href="#" className="w-full text-center">
                    Send Message
                  </PrimaryCTA>
                </motion.div>

                <p className="text-xs text-accent/80 text-center">
                  We'll get back to you within 24 hours. Thank you for reaching out!
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" className="text-accent">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-accent/80">
              Prefer to book a call directly? Schedule a free consultation with our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white p-8 rounded-xl border border-border">
              <p className="text-center text-accent/80 mb-6">
                Calendly embed will be placed here. This allows visitors to book directly.
              </p>
              <div className="text-center">
                <PrimaryCTA href="https://calendly.com/digitalloop">
                  Open Calendly
                </PrimaryCTA>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" className="text-accent">
                Visit Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND_COLORS.primary }} />
                  <div>
                    <h3 className="font-bold mb-1" className="text-accent">
                      Office Address
                    </h3>
                    <p className="text-accent/80">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND_COLORS.primary }} />
                  <div>
                    <h3 className="font-bold mb-1" className="text-accent">
                      Phone
                    </h3>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-accent/80 hover:text-primary transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={24} className="flex-shrink-0 mt-1" style={{ color: BRAND_COLORS.primary }} />
                  <div>
                    <h3 className="font-bold mb-1" className="text-accent">
                      Email
                    </h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent/80 hover:text-primary transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-border">
              <div className="text-center text-accent/80">
                <p className="text-sm">Google Map Embed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 md:py-24 bg-lightBg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12" className="text-accent">
              Quick Links
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { title: 'Browse Courses', link: '/academy' },
                { title: 'View Projects', link: '/projects' },
                { title: 'Free Masterclass', link: '/masterclass' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
                >
                  <span className="font-semibold hover:text-primary transition-colors" className="text-accent">
                    {item.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
