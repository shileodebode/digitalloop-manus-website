import { useEffect } from 'react';

export default function TidioChat() {
  useEffect(() => {
    // Load Tidio chat widget
    const script = document.createElement('script');
    script.src = 'https://code.tidio.co/YOUR_TIDIO_PROJECT_ID.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const tidioScript = document.querySelector('script[src*="tidio"]');
      if (tidioScript) {
        tidioScript.remove();
      }
    };
  }, []);

  return null;
}
