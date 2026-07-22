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
      about: 'About',
      howItWorks: 'How It Works',
      products: 'Products',
      sustainability: 'Sustainability',
      contact: 'Contact',
      cta: 'Explore Collection',
      install: 'Install App',
    },
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      howItWorks: 'طريقة الاستخدام',
      products: 'المنتجات',
      sustainability: 'الاستدامة',
      contact: 'تواصل معنا',
      cta: 'استكشف المنتجات',
      install: 'تثبيت التطبيق',
    }
  }[lang];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-5">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 text-2xl sm:text-3xl tracking-wider font-display font-semibold text-emerald-950 dark:text-emerald-400 hover:opacity-90 transition-opacity"
          onClick={(e) => { e.preventDefault(); onNavClick('home'); }}
        >
          <img src="/brand/logo_brand.jpg" alt="AURA Logo" className="w-10 h-10 object-cover rounded-full border border-emerald-500/30 shadow-sm" />
          <span>AURA<sup>®</sup></span>
        </a>

        {/* Commercial Brand Menu Items */}
        <div className={`hidden md:flex items-center ${lang === 'ar' ? 'space-x-reverse space-x-6 lg:space-x-8' : 'space-x-6 lg:space-x-8'}`}>
          <a href="#home" className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('home'); }}>{navText.home}</a>
          <a href="#about" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('about'); }}>{navText.about}</a>
          <a href="#how-it-works" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('how-it-works'); }}>{navText.howItWorks}</a>
          <a href="#products" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('products'); }}>{navText.products}</a>
          <a href="#sustainability" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('sustainability'); }}>{navText.sustainability}</a>
          <a href="#contact" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}>{navText.contact}</a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* PWA Install Button */}
          {installPrompt && !isInstalled && (
            <button
              onClick={handleInstall}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 transition-all duration-300 shadow-md text-xs font-bold"
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
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-700" />}
          </button>

          <a
            href="#products"
            className="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-emerald-950 transition-all duration-300 shadow-md"
            onClick={(e) => { e.preventDefault(); onNavClick('products'); }}
          >
            {navText.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
