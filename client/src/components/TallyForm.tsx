import { useEffect } from 'react';

interface TallyFormProps {
  formId: string;
  className?: string;
}

export default function TallyForm({ formId, className = '' }: TallyFormProps) {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const tallyScript = document.querySelector('script[src*="tally"]');
      if (tallyScript) {
        tallyScript.remove();
      }
    };
  }, [formId]);

  return (
    <div
      className={className}
      data-tally-embed={formId}
      style={{ minHeight: '500px' }}
    />
  );
}
