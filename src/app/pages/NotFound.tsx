import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl text-pink-600 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Página no encontrada</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
        >
          <Home className="size-5" />
          {t.home}
        </Link>
      </div>
    </div>
  );
}
