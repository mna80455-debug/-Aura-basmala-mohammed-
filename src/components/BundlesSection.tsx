import { ShoppingBag, Check, Tag } from 'lucide-react';
import { useState } from 'react';

interface BundlesSectionProps {
  lang: 'en' | 'ar';
  onAddToCart: (item: any) => void;
}

export default function BundlesSection({ lang, onAddToCart }: BundlesSectionProps) {
  const [addedId, setAddedId] = useState<string | null>(null);

  const content = {
    en: {
      tag: 'EXCLUSIVE VALUE BUNDLES',
      title: 'Bundle & Save Extra',
      sub: 'Get maximum value and complete eco-conscious care with our curated luxury bundles.',
      bestValue: 'MOST POPULAR',
      bestSavings: 'MAX SAVINGS',
      addToCart: 'Pre-Order Bundle 🛒',
      addedText: 'Pre-Ordered! ✓',
      bundles: [
        {
          id: 'bundle-trio-refill',
          badge: 'SAVE 20%',
          badgeColor: 'bg-emerald-600',
          title: 'Trio Scent Refill Pack',
          subTitle: '3x 15g Dry Powder Refill Sachets',
          desc: 'Includes all 3 signature scents: Libre Purple + Japanese Baby Blue + Pomegranate Musk Gold. Keep your bottle refilled forever.',
          price: 360,
          originalPrice: 450,
          image: '/brand/refill_libre.jpg',
          highlights: [
            'Includes 3 Sachet Refills (45g total)',
            'Makes 360ml of Foamy Shower Gel',
            'Saves 3 Plastic Single-Use Bottles',
            'Zero Liquid Weight Shipping'
          ]
        },
        {
          id: 'bundle-deluxe-master',
          badge: 'BEST VALUE - 25% OFF',
          badgeColor: 'bg-[#C5A059]',
          title: 'Deluxe Master Starter Collection',
          subTitle: '1x Reusable Bottle + 3x Refill Sachets',
          desc: 'Our complete ultimate experience. Get our signature pump bottle plus all 3 luxury sachet scents in one discounted box.',
          price: 490,
          originalPrice: 650,
          image: '/brand/logo_brand.jpg',
          highlights: [
            '1 Signature Aesthetic Reusable Bottle',
            '3 Sachet Refills (Libre, Japanese, Pomegranate)',
            'Includes Free Express Shipping',
            'Saves Over 160 EGP vs Individual Items'
          ]
        }
      ]
    },
    ar: {
      tag: 'عروض التوفير الحصرية (BUNDLES)',
      title: 'حزم توفير أورا الفاخرة',
      sub: 'احصل على التوفير الأعلى والتجربة الشاملة الكاملة مع باقاتنا المجهزة بعناية.',
      bestValue: 'الأكثر مبيعاً 🌟',
      bestSavings: 'أعلى توفير 💰',
      addToCart: 'حجز الحزمة مسبقاً (Pre-Order) 🛒',
      addedText: 'تم الحجز مسبقاً! ✓',
      bundles: [
        {
          id: 'bundle-trio-refill',
          badge: 'توفير 20% 💰',
          badgeColor: 'bg-emerald-600',
          title: 'حزمة التوفير الثلاثية (Trio Refill Pack)',
          subTitle: '3 أكياس إعادة ملء جافة 15g لكافة العطور',
          desc: 'تتضمن العطور الثلاثة الفاخرة: Libre Purple + Japanese Baby Blue + Pomegranate Musk Gold. لا تحتاج لشراء زجاجات جديدة بعد الآن.',
          price: 360,
          originalPrice: 450,
          image: '/brand/refill_libre.jpg',
          highlights: [
            'تحتوي على 3 أكياس إعادة ملء (إجمالي 45g)',
            'تمنحك 360 مل من الشاور جل الفاخر',
            'توفر 3 زجاجات بلاستيكية أحادية الاستخدام',
            'شحن خفيف الوزن وصديق للبيئة'
          ]
        },
        {
          id: 'bundle-deluxe-master',
          badge: 'الأكثر مبيعاً - توفير 25% 🌟',
          badgeColor: 'bg-[#C5A059]',
          title: 'الحزمة الشاملة الفاخرة (Deluxe Master Kit)',
          subTitle: '1 عبوة مستدامة + 3 أكياس إعادة ملء جافة',
          desc: 'التجربة الكاملة الأجمل. تتضمن زجاجة أورا المستدامة الفاخرة بالإضافة إلى العطور الثلاثة الكاملة في علبة واحدة بتوفير كبير.',
          price: 490,
          originalPrice: 650,
          image: '/brand/logo_brand.jpg',
          highlights: [
            'زجاجة أورا الفاخرة القابلة لإعادة الاستخدام',
            '3 أكياس مسحوق مركز (جميع العطور 3)',
            'تتضمن شحن سريع مجاني لجميع المحافظات',
            'توفر أكثر من 160 ج.م مقارنة بالشراء المنفصل'
          ]
        }
      ]
    }
  }[lang];

  const handleAddBundle = (bundle: any) => {
    onAddToCart({
      id: bundle.id,
      name: bundle.title,
      scentName: bundle.subTitle,
      price: bundle.price,
      image: bundle.image,
      type: 'bundle'
    });
    setAddedId(bundle.id);
    setTimeout(() => setAddedId(null), 3000);
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-[#FDFBF7] dark:bg-[#1A1918]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#A37F38] dark:text-[#C5A059] text-xs font-bold tracking-widest uppercase">
            <Tag className="w-4 h-4 text-[#C5A059]" />
            <span>{content.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1918] dark:text-white">{content.title}</h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">{content.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.bundles.map((bundle) => (
            <div 
              key={bundle.id}
              className="rounded-3xl bg-[#F4EFE6] dark:bg-[#2A2928] border-2 border-[#C5A059]/40 p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#C5A059] transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold text-white shadow-md uppercase tracking-wider ${bundle.badgeColor}`}>
                    {bundle.badge}
                  </span>
                  <div className="text-end">
                    <span className="text-[#C5A059] text-sm sm:text-base font-extrabold px-3 py-1 rounded-full bg-[#1A1918] dark:bg-[#C5A059] dark:text-[#1A1918] uppercase tracking-wider">
                      {lang === 'ar' ? 'قريباً | SOON' : 'PRE-ORDER'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-5 flex justify-center">
                    <img 
                      src={bundle.image} 
                      alt={bundle.title} 
                      className="w-full max-w-[180px] aspect-square object-cover rounded-2xl border border-[#C5A059]/30 shadow-md group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-3">
                    <h3 className="text-2xl font-serif font-bold text-[#1A1918] dark:text-white">{bundle.title}</h3>
                    <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">{bundle.subTitle}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{bundle.desc}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-neutral-300 dark:border-neutral-700 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  {bundle.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleAddBundle(bundle)}
                  className={`w-full py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                    addedId === bundle.id 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-[#1A1918] dark:bg-[#C5A059] text-white dark:text-[#1A1918] hover:bg-[#C5A059] dark:hover:bg-[#FDFBF7] hover:scale-[1.02]'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{addedId === bundle.id ? content.addedText : content.addToCart}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
