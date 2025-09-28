import React from 'react';
import { useLanguage } from '@/components/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-neutral-600 hover:text-neutral-900">
          <Languages className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setLanguage('en')} disabled={language === 'en'}>
          {t('lang_en')}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('es')} disabled={language === 'es'}>
          {t('lang_es')}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage('ru')} disabled={language === 'ru'}>
          {t('lang_ru')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}