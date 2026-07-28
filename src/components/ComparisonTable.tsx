import { Check, X, ShieldCheck } from 'lucide-react';

interface ComparisonTableProps {
  lang: 'en' | 'ar';
}

export default function ComparisonTable({ lang }: ComparisonTableProps) {
  const content = {
    en: {
      tag: 'THE WATERLESS REVOLUTION',
      title: 'AURA vs Traditional Body Wash',
      sub: 'See why switching to dry powder shower gel is better for your skin, wallet, and planet.',
      colFeature: 'Feature & Impact',
      colAura: 'AURA® Powder',
      colTraditional: 'Traditional Liquid Gel',
      rows: [
        { feature: 'Product Weight per Bottle', aura: '15g Powder Sachet', trad: '500g Heavy Liquid Bottle', auraOk: true },
        { feature: 'Packaging & Waste', aura: '100% Paper Biodegradable Sachet', trad: 'Single-Use Plastic Bottle', auraOk: true },
        { feature: 'Freight CO₂ Emissions', aura: 'Reduced by 80%', trad: 'High Fuel Truck Transport', auraOk: true },
        { feature: 'Travel & Flight Safety', aura: '100% Dry TSA Flight Compliant', trad: 'Risk of Luggage Leakage', auraOk: true },
        { feature: 'Preservatives & Ingredients', aura: 'Zero Synthetic Preservatives', trad: 'High Liquid Chemical Preservatives', auraOk: true },
        { feature: 'Bottle Reuse', aura: 'Keep & Refill Forever', trad: 'Thrown Away Every Month', auraOk: true },
      ]
    },
    ar: {
      tag: 'ثورة العناية بدون مياه',
      title: 'أورا مقابل الشاور جل السائل التقليدي',
      titleHighlight: 'AURA vs. TRADITIONAL',
      sub: 'اكتشف لماذا يعتبر التحول إلى مسحوق أورا الجاف الخيار الأذكى لبشرتك، جيبك، وللكوكب.',
      colFeature: 'وجه المقارنة والتأثير',
      colAura: 'أورا (AURA® Powder)',
      colTraditional: 'الشاور جل السائل التقليدي',
      rows: [
        { feature: 'وزن شحن العبوة (Shipping Weight)', aura: '15 جرام كيس مسحوق جاف', trad: '500 جرام زجاجة سائلة ثقيلة', auraOk: true },
        { feature: 'التلوث والبلاستيك (Packaging & Plastic)', aura: 'أكياس ورق قابلة للتحلل 100%', trad: 'زجاجات بلاستيكية ترمى شهرية', auraOk: true },
        { feature: 'انبعاثات الشحن الكربونية (Carbon Footprint)', aura: 'تخفيض 80% من الانبعاثات', trad: 'انبعاثات شاحنات شحن عالية جداً', auraOk: true },
        { feature: 'سهولة وأمان السفر (Travel Safety)', aura: 'جاف 100% متوافق مع الطيران TSA', trad: 'معرض للتسرب وتلطيخ الحقائب', auraOk: true },
        { feature: 'المواد الحافظة (Preservatives)', aura: 'خالي تماماً من المواد الحافظة', trad: 'مليء بالمواد الحافظة الكيميائية', auraOk: true },
        { feature: 'إعادة الاستخدام (Bottle Longevity)', aura: 'تستخدم العبوة للأبد وتطلب ريفيل', trad: 'تتخلص منها شهرياً في القمامة', auraOk: true },
      ]
    }
  }[lang];

  return (
    <section className="py-24 px-4 sm:px-8 bg-[#F4EFE6] dark:bg-[#2A2928]/60">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#A37F38] dark:text-[#C5A059] text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>{content.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1918] dark:text-white">{content.title}</h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">{content.sub}</p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-[#C5A059]/30 bg-[#FDFBF7] dark:bg-[#1A1918] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#C5A059]/30 bg-[#F4EFE6]/70 dark:bg-[#2A2928]/80 text-[#1A1918] dark:text-white">
                  <th className="p-5 text-start font-bold text-sm sm:text-base">{content.colFeature}</th>
                  <th className="p-5 text-center font-serif font-bold text-base sm:text-lg text-[#C5A059] bg-[#C5A059]/10">{content.colAura}</th>
                  <th className="p-5 text-center font-bold text-sm sm:text-base text-neutral-500">{content.colTraditional}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
                {content.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F4EFE6]/40 dark:hover:bg-[#2A2928]/40 transition-colors">
                    <td className="p-5 font-bold text-[#1A1918] dark:text-white flex items-center gap-2">
                      <span>{row.feature}</span>
                    </td>
                    <td className="p-5 text-center font-bold text-[#1A1918] dark:text-white bg-[#C5A059]/5 border-x border-[#C5A059]/20">
                      <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>{row.aura}</span>
                      </div>
                    </td>
                    <td className="p-5 text-center text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-center justify-center gap-2 text-rose-500/80">
                        <X className="w-4 h-4 shrink-0" />
                        <span>{row.trad}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
