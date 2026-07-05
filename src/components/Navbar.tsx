import { Sun, Moon, Globe, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick: (section: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  lang: 'en' | 'ar';
  toggleLang: () => void;
}

export default function Navbar({ onNavClick, theme, toggleTheme, lang, toggleLang }: NavbarProps) {
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    // @ts-ignore
    await installPrompt.prompt();
    setIsInstalled(true);
    setInstallPrompt(null);
  };

  const navText = {
    en: {
      home: 'Home',
      creator: 'The Creator',
      product: 'The Product',
      slides: 'Slides',
      contact: 'Reach Us',
      cta: 'Begin Journey',
      install: 'Install App',
    },
    ar: {
      home: 'الرئيسية',
      creator: 'عن المبتكر',
      product: 'المنتج',
      slides: 'الشرائح',
      contact: 'اتصل بنا',
      cta: 'ابدأ الرحلة',
      install: 'نزّل التطبيق',
    }
  }[lang];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-100 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <a 
          href="#" 
          className="text-3xl tracking-tight font-display font-normal text-black dark:text-white"
          onClick={(e) => { e.preventDefault(); onNavClick('home'); }}
        >
          Aura<sup>®</sup>
        </a>

        {/* Menu Items */}
        <div className={`hidden md:flex items-center ${lang === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
          <a href="#home" className="text-sm font-medium text-black dark:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('home'); }}>{navText.home}</a>
          <a href="#creator" className="text-sm font-medium text-[#6F6F6F] dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('creator'); }}>{navText.creator}</a>
          <a href="#product" className="text-sm font-medium text-[#6F6F6F] dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('product'); }}>{navText.product}</a>
          <a href="#slides" className="text-sm font-medium text-[#6F6F6F] dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('slides'); }}>{navText.slides}</a>
          <a href="#contact" className="text-sm font-medium text-[#6F6F6F] dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}>{navText.contact}</a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">

          {/* PWA Install Button - only shows when browser supports installation */}
          {installPrompt && !isInstalled && (
            <button
              onClick={handleInstall}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-md text-xs font-bold animate-pulse"
              title={navText.install}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{navText.install}</span>
            </button>
          )}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center gap-1 text-xs font-semibold"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}
          >
            {navText.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
