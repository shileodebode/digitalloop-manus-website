import { useEffect } from 'react';

interface OpenGraphMetaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
}

export default function OpenGraphMeta({
  title,
  description,
  url,
  image = 'https://digital-loop.manus.space/og-image.png',
  type = 'website',
}: OpenGraphMetaProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) ||
                    document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        const isProperty = name.startsWith('og:');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:url', url);
    updateMeta('og:image', image);
    updateMeta('og:type', type);
    updateMeta('og:site_name', 'Digital Loop Int\'l Limited');

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:site', '@digitalloop');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, url, image, type]);

  return null;
}
