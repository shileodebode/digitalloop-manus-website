import { Button } from '@/components/ui/button';
import { BRAND_COLORS } from '@shared/constants';

interface PrimaryCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function PrimaryCTA({ children, onClick, href, className = '' }: PrimaryCTAProps) {
  const baseClasses = `rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={{ backgroundColor: BRAND_COLORS.primary }}
      >
        {children}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={baseClasses}
      style={{ backgroundColor: BRAND_COLORS.primary }}
    >
      {children}
    </Button>
  );
}

interface SecondaryCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function SecondaryCTA({ children, onClick, href, className = '' }: SecondaryCTAProps) {
  const baseClasses = `rounded-lg px-6 py-3 font-semibold transition-all duration-300 border-2 hover:shadow-lg ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={{
          borderColor: BRAND_COLORS.secondary,
          color: BRAND_COLORS.secondary,
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      variant="outline"
      className={baseClasses}
      style={{
        borderColor: BRAND_COLORS.secondary,
        color: BRAND_COLORS.secondary,
      }}
    >
      {children}
    </Button>
  );
}
