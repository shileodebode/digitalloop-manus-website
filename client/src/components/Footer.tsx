import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS, BRAND_COLORS } from '@shared/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white mt-20">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/manus-storage/digital-loop-logo_1c12b9f9.png"
              alt="Digital Loop"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-gray-300">
              Empowering African businesses with AI education and consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/academy" className="text-sm text-gray-300 hover:text-primary transition-colors">AI Training</a></li>
                <li><a href="/business" className="text-sm text-gray-300 hover:text-primary transition-colors">Business Consulting</a></li>
                <li><a href="/projects" className="text-sm text-gray-300 hover:text-primary transition-colors">Custom Solutions</a></li>
                <li><a href="/masterclass" className="text-sm text-gray-300 hover:text-primary transition-colors">Workshops</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-gray-300 hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-gray-300 hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} Digital Loop Int'l Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
