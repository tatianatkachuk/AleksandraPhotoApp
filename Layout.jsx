import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Instagram, Mail, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageProvider, useLanguage } from "@/components/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  const navigationItems = [
    { title: t('nav_home'), url: createPageUrl("Home") },
    { title: t('nav_portfolio'), url: createPageUrl("Portfolio") },
    { title: t('nav_about'), url: createPageUrl("About") },
    { title: t('nav_contact'), url: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary: 20 14 16;
          --primary-foreground: 253 253 253;
          --muted: 245 245 245;
          --accent: 41 30 23;
          --accent-foreground: 253 253 253;
          --border: 229 229 229;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          letter-spacing: -0.01em;
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .elegant-transition {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
      
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 group">
              <Camera className="w-5 h-5 text-neutral-800 group-hover:text-neutral-600 elegant-transition" />
              <span className="font-medium text-neutral-800 group-hover:text-neutral-600 elegant-transition">
                {t('logo_text')}
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`text-sm font-light tracking-wide elegant-transition ${
                    location.pathname === item.url
                      ? 'text-neutral-900 border-b-2 border-neutral-900 pb-1'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Social Links & Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 elegant-transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <Link 
                to={createPageUrl("Contact")}
                className="text-neutral-600 hover:text-neutral-900 elegant-transition"
              >
                <Mail className="w-4 h-4" />
              </Link>
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col pt-20 pb-6 px-6">
            <div className="flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-light tracking-wide elegant-transition ${
                    location.pathname === item.url
                      ? 'text-neutral-900'
                      : 'text-neutral-600'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6 pt-8 mt-4 border-t border-neutral-100">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 elegant-transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Link 
                to={createPageUrl("Contact")}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-600 hover:text-neutral-900 elegant-transition"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <div className="ml-auto">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16 fade-in">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-neutral-500 font-light">
              {t('footer_copyright')}
            </p>
            <p className="text-xs text-neutral-400 mt-2">
              {t('footer_tagline')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <AppLayout>{children}</AppLayout>
    </LanguageProvider>
  );
}