import AnnouncementBar from './AnnouncementBar';
import Navigation from './Navigation';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';
import TidioChat from './TidioChat';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TidioChat />
      <AnnouncementBar />
      <Navigation />
      <main className="flex-1 pt-28 md:pt-28">
        {children}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
