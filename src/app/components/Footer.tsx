import { Camera, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="size-8 text-pink-500" />
              <span className="text-xl font-semibold">ADolgaia Art</span>
            </div>
            <p className="text-gray-400">
              {t.heroSubtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.servicesTitle}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t.photography}</li>
              <li>{t.facePainting}</li>
              <li>{t.design}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">{t.followMe}</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/adartfotografia"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://facebook.com/ADartfoto"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} ADolgaia Art. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
