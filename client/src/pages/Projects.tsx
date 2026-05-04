import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { BRAND_COLORS } from '@shared/constants';
import { X, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Customer Analytics',
    category: 'Analytics',
    image: 'placeholder-1',
    description: 'Predictive customer behavior analysis for an e-commerce platform',
    challenge: 'The client needed to understand customer behavior patterns and predict churn before it happened.',
    solution: 'We built a machine learning model that analyzes customer interactions and predicts churn with 89% accuracy.',
    results: [
      '35% reduction in customer churn',
      '45% increase in customer lifetime value',
      'Real-time intervention system deployed',
    ],
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'React'],
  },
  {
    id: 2,
    title: 'Intelligent Document Processing',
    category: 'Automation',
    image: 'placeholder-2',
    description: 'Automated invoice and document processing system',
    challenge: 'Manual document processing was taking 40 hours per week and causing errors.',
    solution: 'Implemented OCR and NLP-based automation to extract and process documents automatically.',
    results: [
      '95% automation rate',
      '40 hours/week time savings',
      '99.2% accuracy in data extraction',
    ],
    technologies: ['Python', 'OCR', 'NLP', 'AWS'],
  },
  {
    id: 3,
    title: 'Demand Forecasting Engine',
    category: 'Forecasting',
    image: 'placeholder-3',
    description: 'AI-powered demand prediction for supply chain optimization',
    challenge: 'Inventory management was inefficient, leading to stockouts and overstock situations.',
    solution: 'Built a time-series forecasting model using historical sales data and external factors.',
    results: [
      '28% reduction in inventory costs',
      '92% forecast accuracy',
      'Improved supply chain efficiency',
    ],
    technologies: ['Python', 'Scikit-learn', 'Tableau', 'SQL'],
  },
  {
    id: 4,
    title: 'Chatbot for Customer Support',
    category: 'NLP',
    image: 'placeholder-4',
    description: 'AI chatbot handling 70% of customer inquiries',
    challenge: 'Customer support team was overwhelmed with repetitive inquiries.',
    solution: 'Deployed a conversational AI chatbot with intent recognition and multi-language support.',
    results: [
      '70% of inquiries handled by bot',
      '24/7 customer support availability',
      '40% reduction in support costs',
    ],
    technologies: ['NLP', 'Python', 'Dialogflow', 'Firebase'],
  },
  {
    id: 5,
    title: 'Image Recognition System',
    category: 'Computer Vision',
    image: 'placeholder-5',
    description: 'Quality control automation using computer vision',
    challenge: 'Manual quality inspection was slow and prone to human error.',
    solution: 'Implemented deep learning model for real-time defect detection on production line.',
    results: [
      '96% defect detection accuracy',
      '50% faster inspection time',
      'Zero critical defects in production',
    ],
    technologies: ['TensorFlow', 'OpenCV', 'Python', 'Edge Computing'],
  },
  {
    id: 6,
    title: 'Fraud Detection System',
    category: 'Security',
    image: 'placeholder-6',
    description: 'Real-time fraud detection for financial transactions',
    challenge: 'Fraudulent transactions were costing the business millions annually.',
    solution: 'Built ensemble ML model analyzing transaction patterns in real-time.',
    results: [
      '92% fraud detection rate',
      '0.5% false positive rate',
      '$2.3M fraud prevented annually',
    ],
    technologies: ['Python', 'XGBoost', 'Real-time Processing', 'Kafka'],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              Our Work
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-accent/80 mb-8"
            >
              Real projects, real results. Explore how we've helped businesses across Africa leverage AI to solve complex challenges and drive growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden mb-4 border border-border group-hover:border-primary transition-all">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-accent/80">
                      <p className="text-sm">{project.image}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink size={32} className="text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>

                <p className="text-sm font-semibold text-primary mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors" className="text-accent">
                  {project.title}
                </h3>
                <p className="text-accent/80 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 hover:bg-lightBg rounded-lg transition-colors"
              >
                <X size={24} />
              </button>

              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-8 flex items-center justify-center border border-border">
                <div className="text-center text-accent/80">
                  <p className="text-sm">{selectedProject.image}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-sm font-semibold text-primary mb-2">{selectedProject.category}</p>
              <h2 className="text-3xl font-bold mb-6" className="text-accent">
                {selectedProject.title}
              </h2>

              {/* Challenge */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3" className="text-accent">
                  Challenge
                </h3>
                <p className="text-accent/80">{selectedProject.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3" className="text-accent">
                  Solution
                </h3>
                <p className="text-accent/80">{selectedProject.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3" className="text-accent">
                  Results
                </h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: BRAND_COLORS.primary }}
                      />
                      <span className="text-accent/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-bold mb-3" className="text-accent">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-lightBg rounded-full text-sm font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
}
