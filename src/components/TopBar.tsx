interface TopBarProps {
  lang: 'en' | 'ar';
}

export default function TopBar({ lang }: TopBarProps) {
  const content = {
    en: [
      '🌿 100% Natural Plant-Based Formula',
      '🚛 Fast Delivery Across Egypt',
      '♻️ Zero Single-Use Plastic Waste',
      '🇪🇬 Proudly Made in Egypt',
    ],
    ar: [
      '🌿 تركيبة طبيعية ونباتية 100%',
      '🚛 شحن سريع لجميع محافظات مصر',
      '♻️ صفر بلاستيك أحادي الاستخدام',
      '🇪🇬 صنع بكل فخر في مصر',
    ],
  }[lang];

  return (
    <div className="bg-[#1A1918] dark:bg-[#0F0E0D] text-[#C5A059] text-xs font-semibold py-2.5 px-4 border-b border-[#C5A059]/20 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex justify-center sm:justify-between items-center text-center">
        <div className="flex items-center gap-6 mx-auto sm:mx-0">
          <span className="flex items-center gap-1.5">{content[0]}</span>
          <span className="hidden sm:inline text-[#C5A059]/40">•</span>
          <span className="hidden sm:flex items-center gap-1.5">{content[1]}</span>
          <span className="hidden md:inline text-[#C5A059]/40">•</span>
          <span className="hidden md:flex items-center gap-1.5">{content[2]}</span>
          <span className="hidden lg:inline text-[#C5A059]/40">•</span>
          <span className="hidden lg:flex items-center gap-1.5">{content[3]}</span>
        </div>
      </div>
    </div>
  );
}
