import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO, BRAND_COLORS } from '@shared/constants';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Hi%20Digital%20Loop%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: BRAND_COLORS.secondary }}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  );
}
