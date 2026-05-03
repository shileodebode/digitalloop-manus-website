import { BRAND_COLORS, CONTACT_INFO } from '@shared/constants';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Digital Loop',
    url: 'https://digitalloop.com',
    logo: 'https://digitalloop.com/logo.png',
    description: 'AI education and consulting company empowering African professionals',
    sameAs: [
      'https://twitter.com/digitalloop',
      'https://linkedin.com/company/digitalloop',
      'https://facebook.com/digitalloop',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address,
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone,
      contactType: 'Customer Support',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Digital Loop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Digital Loop is an AI education and consulting company that helps African professionals learn AI skills and businesses implement AI solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who can join the AI Academy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anyone interested in learning AI, from beginners to advanced professionals. No prior experience required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the masterclass really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the free masterclass is completely free and includes live sessions with industry experts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What payment methods do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept payments via Paystack (NGN) and Stripe (USD) for our paid courses and services.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'AI Fundamentals Masterclass',
    description: 'Learn AI fundamentals and real-world applications from industry experts',
    provider: {
      '@type': 'Organization',
      name: 'Digital Loop',
    },
    instructor: {
      '@type': 'Person',
      name: 'AI Expert Instructor',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
