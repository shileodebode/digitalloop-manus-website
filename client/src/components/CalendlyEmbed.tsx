import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  height?: string;
}

export default function CalendlyEmbed({ 
  url, 
  className = '', 
  height = '600px' 
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const calendlyScript = document.querySelector('script[src*="calendly"]');
      if (calendlyScript) {
        calendlyScript.remove();
      }
    };
  }, [url]);

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: '100%', height }}
    />
  );
}
