import { Sun, Moon, Globe, Download, ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick: (section: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  lang: 'en' | 'ar';
  toggleLang: () => void;
  cartCount?: number;
  onOpenCart?: () => void;
}

export default function Navbar({ onNavClick, theme, toggleTheme, lang, toggleLang, cartCount = 0, onOpenCart }: NavbarProps) {
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      about: 'عن أورا',
      howItWorks: 'طريقة الاستخدام',
      products: 'المجموعة',
      sustainability: 'الاستدامة',
      contact: 'تواصل معنا',
      cta: 'استكشف المجموعة',
      install: 'تثبيت التطبيق',
    }
  }[lang];

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#FDFBF7]/95 dark:bg-[#1A1918]/95 backdrop-blur-md border-b border-[#C5A059]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-3.5">
        
        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-[#F4EFE6] dark:bg-[#2A2928] text-[#1A1918] dark:text-[#FDFBF7] border border-[#C5A059]/30"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-[#C5A059]" /> : <Menu className="w-5 h-5 text-[#C5A059]" />}
        </button>

        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 text-xl sm:text-3xl tracking-widest font-serif font-bold text-[#1A1918] dark:text-[#FDFBF7] hover:opacity-90 transition-opacity"
          onClick={(e) => { e.preventDefault(); onNavClick('home'); setIsMobileMenuOpen(false); }}
        >
          <img src="/brand/logo_brand.jpg" alt="AURA Logo" className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-full border border-[#C5A059]/40 shadow-sm" />
          <span className="tracking-widest">AURA<sup>®</sup></span>
        </a>

        {/* Commercial Brand Menu Items (Desktop) */}
        <div className={`hidden md:flex items-center ${lang === 'ar' ? 'space-x-reverse space-x-6 lg:space-x-8' : 'space-x-6 lg:space-x-8'}`}>
          <a href="#home" className="text-sm font-semibold tracking-wide text-[#1A1918] dark:text-[#FDFBF7] hover:text-[#C5A059] transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('home'); }}>{navText.home}</a>
          <a href="#about" className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('about'); }}>{navText.about}</a>
          <a href="#how-it-works" className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('how-it-works'); }}>{navText.howItWorks}</a>
          <a href="#products" className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('products'); }}>{navText.products}</a>
          <a href="#sustainability" className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('sustainability'); }}>{navText.sustainability}</a>
          <a href="#contact" className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] transition-colors"
            onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}>{navText.contact}</a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* PWA Install Button */}
          {installPrompt && !isInstalled && (
            <button
              onClick={handleInstall}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C5A059] hover:bg-[#A37F38] text-white transition-all duration-300 shadow-md text-xs font-bold"
              title={navText.install}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{navText.install}</span>
            </button>
          )}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="px-2.5 sm:px-3 py-1.5 rounded-full bg-[#F4EFE6] dark:bg-[#2A2928] text-[#1A1918] dark:text-[#FDFBF7] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#C5A059]/30 shadow-sm flex items-center gap-1 text-xs font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#F4EFE6] dark:bg-[#2A2928] text-[#1A1918] dark:text-[#FDFBF7] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#C5A059]/30 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#C5A059]" /> : <Moon className="w-4 h-4 text-[#1A1918]" />}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full bg-[#F4EFE6] dark:bg-[#2A2928] text-[#1A1918] dark:text-[#FDFBF7] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#C5A059]/30 shadow-sm"
            aria-label="Open Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="#products"
            className="hidden lg:inline-flex rounded-full px-5 py-2 text-xs font-bold bg-[#1A1918] dark:bg-[#C5A059] text-[#FDFBF7] dark:text-[#1A1918] hover:bg-[#C5A059] dark:hover:bg-[#FDFBF7] transition-all duration-300 shadow-md tracking-wider uppercase"
            onClick={(e) => { e.preventDefault(); onNavClick('products'); }}
          >
            {navText.cta}
          </a>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#C5A059]/20 bg-[#FDFBF7] dark:bg-[#1A1918] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 text-[#1A1918] dark:text-[#FDFBF7] font-bold text-base">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavClick('home'); setIsMobileMenuOpen(false); }} className="py-2 border-b border-neutral-200 dark:border-neutral-800">{navText.home}</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); onNavClick('about'); setIsMobileMenuOpen(false); }} className="py-2 border-b border-neutral-200 dark:border-neutral-800">{navText.about}</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); onNavClick('how-it-works'); setIsMobileMenuOpen(false); }} className="py-2 border-b border-neutral-200 dark:border-neutral-800">{navText.howItWorks}</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); onNavClick('products'); setIsMobileMenuOpen(false); }} className="py-2 border-b border-neutral-200 dark:border-neutral-800">{navText.products}</a>
            <a href="#sustainability" onClick={(e) => { e.preventDefault(); onNavClick('sustainability'); setIsMobileMenuOpen(false); }} className="py-2 border-b border-neutral-200 dark:border-neutral-800">{navText.sustainability}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavClick('contact'); setIsMobileMenuOpen(false); }} className="py-2">{navText.contact}</a>
          </div>
          {installPrompt && !isInstalled && (
            <button
              onClick={handleInstall}
              className="w-full py-3 rounded-full bg-[#C5A059] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{navText.install}</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

