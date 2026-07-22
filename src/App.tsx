import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import { 
  Mail, Phone, Sparkles, Droplets, Leaf, Award, ArrowRight, 
  ChevronDown, Trees, Trash2, RefreshCw, 
  Plane, Instagram, Facebook, Video, Feather, MapPin
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [calcVolume, setCalcVolume] = useState<number>(120); // Default 120ml bottle
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Eco Calculator
  const [ecoPeople, setEcoPeople] = useState<number>(100);
  const [ecoMonths, setEcoMonths] = useState<number>(12);

  // Sync theme with HTML root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Brand Content Translations
  const t = {
    en: {
      dir: 'ltr',
      heroSubtitle: 'REIMAGINING PERSONAL CARE',
      heroHeading: 'AURA Powder Body Wash',
      heroDesc: 'AURA is a concentrated powder body wash designed to transform into a luxurious shower gel when mixed with water. A lighter, smarter, and more sustainable way to experience personal care.',
      btnExplore: 'Explore Collection',
      btnHowItWorks: 'How It Works',

      // Why AURA
      whyTitle: 'WHY AURA',
      whySub: 'Designed for a Modern, Eco-Conscious Lifestyle',
      why1Title: 'Lightweight',
      why1Desc: 'Only 15g concentrate per sachet instead of carrying heavy liquid bottles.',
      why2Title: 'Refillable',
      why2Desc: 'Keep your aesthetic reusable bottle forever and just order dry sachet refills.',
      why3Title: 'Travel Friendly',
      why3Desc: '100% dry powder. TSA compliant, zero risk of messy bottle leaks in your luggage.',
      why4Title: 'Sustainable',
      why4Desc: 'Zero single-use plastic, 80% reduction in transport CO₂ emissions.',
      why5Title: 'Premium Fragrance',
      why5Desc: 'Crafted with fine essential oil notes for a long-lasting, luxurious shower experience.',
      why6Title: 'Made in Egypt',
      why6Dto: 'Proudly engineered and crafted locally with international quality standards.',

      // Value Propositions
      valTitle: 'A SMARTER SHOWER EXPERIENCE',
      valSub: 'How AURA is Disrupting the Personal Care Industry',
      card1Title: 'Less Water Transport',
      card1Desc: 'Traditional body washes are 80%+ water. AURA eliminates shipping liquid water across cities, reducing transport fuel consumption.',
      card2Title: 'Lightweight Refills',
      card2Desc: 'Compact 15g sachets slip effortlessly into your bathroom cabinet or weekend bag without clutter.',
      card3Title: 'Reusable Bottle',
      card3Desc: 'Buy our signature pump bottle once and refill it endlessly with your favorite AURA scent sachets.',
      card4Title: 'Lower Carbon Footprint',
      card4Desc: 'By eliminating heavy liquid weight, every AURA sachet reduces freight emissions by up to 80%.',

      // How It Works
      howTitle: 'HOW IT WORKS',
      howSub: 'Four Simple Steps to Your Fresh Body Wash',
      step1Title: 'Step 1: Add Powder',
      step1Desc: 'Pour one 15g AURA Powder concentrate sachet into your reusable bottle.',
      step2Title: 'Step 2: Add Water',
      step2Desc: 'Fill the bottle with 120ml of warm tap water.',
      step3Title: 'Step 3: Shake',
      step3Desc: 'Close the pump lid tightly and shake thoroughly for 1 minute.',
      step4Title: 'Step 4: Enjoy',
      step4Desc: 'Watch it transform into a rich, foamy shower gel and enjoy your shower!',

      // Collection
      prodTitle: 'THE AURA COLLECTION',
      prodSub: 'Signature Fragrances Crafted for Every Mood',
      badgeComingSoon: 'COMING SOON',
      prod1Name: 'Libre',
      prod1Desc: 'Luxury perfume extract with warm amber notes and soft floral undertones.',
      prod2Name: 'Japanese Baby',
      prod2Desc: 'Delicate Japanese cherry blossom notes for a fresh, uplifting shower.',
      prod3Name: 'Pomegranate Musk',
      prod3Desc: 'Rich pomegranate fused with velvet musk for a vibrant scent profile.',
      prod4Name: 'Lavender Velvet',
      prod4Desc: 'Soothing French lavender and violet flower notes for calm evening relaxation.',

      // Our Story
      storyTitle: 'OUR STORY',
      storyHeading: 'Reimagining Personal Care From Scratch',
      storyText1: 'Born from the idea of reducing unnecessary water transportation in personal care products.',
      storyText2: 'Traditional shower gels are mostly water in plastic bottles. We reimagined personal care by removing the water weight, eliminating single-use plastic, and engineering a dry powder formula that dissolves instantly at home.',

      // Sustainability
      sustTitle: 'SUSTAINABILITY IMPACT',
      sustSub: 'Calculate Your Plastic & Carbon Savings With AURA',
      calcPeopleLabel: 'Number of Users:',
      calcMonthsLabel: 'Months of Usage:',
      plasticSaved: 'Single-Use Bottles Saved',
      waterSaved: 'Liters of Water Weight Unshipped',
      co2Saved: 'kg Transport CO₂ Reduced',

      // Formulation Calculator
      mixTitle: 'FORMULATION BATCH CALCULATOR',
      mixSub: 'Custom Mix Ratios For Any Bottle Size',
      mixLabel: 'Target Gel Volume (ml):',
      mixPowder: 'AURA Powder Sachet',
      mixWater: 'Warm Water Volume',

      // FAQ
      faqTitle: 'FREQUENTLY ASKED QUESTIONS',
      faqQ1: 'What makes AURA Powder different from liquid shower gel?',
      faqA1: 'AURA comes as a dry 15g powder concentrate. You add water at home to create 120ml of foamy shower gel, eliminating single-use plastic bottles and heavy water shipping emissions.',
      faqQ2: 'How long does the dry sachet last before mixing?',
      faqA2: 'Because AURA is completely dry and waterless, it has a stable shelf life of up to 2 years without synthetic chemical preservatives.',
      faqQ3: 'How long does the gel stay fresh after mixing?',
      faqA3: 'Once hydrated with water, the shower gel stays fresh, foamy, and stable for 3 months of daily use.',
      faqQ4: 'Are AURA products safe for sensitive skin?',
      faqA4: 'Yes! AURA is pH-balanced (5.5) to match natural skin levels, formulated with biological plant-derived cleansers and skin-softening ingredients.',

      // Contact & Footer
      contactTitle: 'GET IN TOUCH',
      contactSub: 'Connect With The AURA Team',
      contactEmail: 'Email Us',
      contactPhone: 'Call / WhatsApp',
      contactLoc: 'Location',
      locVal: 'Cairo, Egypt 🇪🇬',
      followUs: 'Follow AURA',
      rights: '© 2026 AURA Powder Body Wash. All Rights Reserved.',
      madeLocally: 'Designed & Engineered in Egypt 🇪🇬'
    },
    ar: {
      dir: 'rtl',
      heroSubtitle: 'إعادة تعريف العناية الشخصية',
      heroHeading: 'AURA Powder Body Wash',
      heroDesc: 'أورا هو مسحوق مركز للعناية بالجسم يتحول إلى شاور جل فاخر بمجرد خلطه بالماء. طريقة أخف، أذكى، وأكثر استدامة لتجربة العناية الشخصية.',
      btnExplore: 'استكشف المجموعة',
      btnHowItWorks: 'طريقة الاستخدام',

      // Why AURA
      whyTitle: 'لماذا أورا (WHY AURA)',
      whySub: 'مصمم لأسلوب حياة عصري، ذكي، وصديق للبيئة',
      why1Title: 'خفيف الوزن (Lightweight)',
      why1Desc: '15 جرام فقط لكل عبوة مسحوق بدلاً من حمل عبوات سائلة ثقيلة الوزن.',
      why2Title: 'قابل لإعادة الملء (Refillable)',
      why2Desc: 'احتفظ بزجاجتك الفاخرة القابلة لإعادة الاستخدام واطلب عبوات المسحوق الجاف بانتظام.',
      why3Title: 'مناسب للسفر (Travel Friendly)',
      why3Desc: 'مسحوق جاف 100% متوافق مع قوانين الطيران وبدون أي مخاطر لتسرب السوائل في حقيبتك.',
      why4Title: 'مستدام (Sustainable)',
      why4Desc: 'صفر بلاستيك أحادي الاستخدام، وخفض انبعاثات الكربون الناتجة عن الشحن بنسبة 80%.',
      why5Title: 'عطور فاخرة (Premium Fragrance)',
      why5Desc: 'مستخلص من أرقى النوتات العطرية والزيوت الطبيعية لتجربة استحمام راقية ومستمرة.',
      why6Title: 'صنع في مصر (Made in Egypt)',
      why6Dto: 'مصمم ومصنع بحرفية وجودة محلية تضاهي المعايير العالمية.',

      // Value Propositions
      valTitle: 'تجربة استحمام أذكى وأرقى',
      valSub: 'كيف يعيد أورا ابتكار قطاع العناية الشخصية',
      card1Title: 'شحن مياه أقل (Less Water Transport)',
      card1Desc: 'الشاور جل التقليدي يتكون من 80% مياه. أورا يلغي شحن السوائل عبر المدن لتقليل استهلاك الوقود.',
      card2Title: 'عبوات عبوات خفيفة (Lightweight Refills)',
      card2Desc: 'أكياس صغيرة بحجم 15 جرام تتسع بسهولة في خزانتك أو حقيبة سفرك دون أي إشغال للمساحة.',
      card3Title: 'زجاجة متينة قابلة لإعادة الاستخدام (Reusable Bottle)',
      card3Desc: 'اشترِ زجاجة المضخة الفاخرة مرة واحدة فقط وأعد ملأها دائماً برائحتك المفضلة من أورا.',
      card4Title: 'بصمة كربونية أقل (Lower Carbon Footprint)',
      card4Desc: 'من خلال التخلص من أوزان السوائل الثقيلة، يقلل كل كيس أورا انبعاثات الشحن بنسبة تصل إلى 80%.',

      // How It Works
      howTitle: 'طريقة الاستخدام (HOW IT WORKS)',
      howSub: 'أربع خطوات بسيطة للحصول على شاور جل طازج وفاخر',
      step1Title: 'الخطوة 1: أضف المسحوق (Add Powder)',
      step1Desc: 'أفرغ كيس مسحوق أورا المركز (15 جرام) داخل زجاجتك القابلة لإعادة الاستخدام.',
      step2Title: 'الخطوة 2: أضف الماء (Add Water)',
      step2Desc: 'املأ الزجاجة بـ 120 مل من الماء الفاتر.',
      step3Title: 'الخطوة 3: رَجّ العبوة (Shake)',
      step3Desc: 'أغلق الغطاء جيداً وقم برج العبوة لمدة دقيقة واحدة.',
      step4Title: 'الخطوة 4: استمتع (Enjoy)',
      step4Desc: 'شاهد المسحوق يتحول إلى جل رغوي فاخر واستمتع بتجربة استحمام استثنائية!',

      // Collection
      prodTitle: 'مجموعة أورا الفاخرة (THE AURA COLLECTION)',
      prodSub: 'تشكيلة عطور مميزة صممت لترضي جميع الأذواق',
      badgeComingSoon: 'قريباً (COMING SOON)',
      prod1Name: 'ليبر (Libre)',
      prod1Desc: 'خلاصة عطرية فاخرة بنوتات العنبر الدافئ والزهور الفرنسية الراقية.',
      prod2Name: 'جابانيز بيبي (Japanese Baby)',
      prod2Desc: 'لمسات عطر زهر الكرز الياباني المنعش لشاور مليء بالنضارة والحيوية.',
      prod3Name: 'مسك الرمان (Pomegranate Musk)',
      prod3Desc: 'مزيج الرمان الطبيعي الجذاب مع المسك المخملي الفاخر.',
      prod4Name: 'مخمل اللافندر (Lavender Velvet)',
      prod4Desc: 'عبير اللافندر وزهور البنفسج المهدئة للأعصاب للاسترخاء قبل النوم.',

      // Our Story
      storyTitle: 'قصتنا (OUR STORY)',
      storyHeading: 'بداية الفكرة: إعادة ابتكار العناية الشخصية من الصفر',
      storyText1: 'ولدت الفكرة من القضاء على شحن المياه غير الضروري في منتجات العناية الشخصية.',
      storyText2: 'معظم الشاور جل التقليدي عبارة عن مياه في عبوات بلاستيكية. قمنا بإعادة ابتكار المنتج بالكامل: ألغينا وزن الماء، واستغنينا عن العبوات البلاستيكية، وصممنا مسحوقاً جافاً يذوب في ثوانٍ داخل حمامك.',

      // Sustainability
      sustTitle: 'الأثر البيئي والاستدامة',
      sustSub: 'احسب التوفير في البلاستيك والانبعاثات الكربونية مع أورا',
      calcPeopleLabel: 'عدد المستهلكين:',
      calcMonthsLabel: 'عدد أشهر الاستخدام:',
      plasticSaved: 'عبوة بلاستيكية تم التوفير فيها',
      waterSaved: 'لتر مياه تم التخلص من شحنها',
      co2Saved: 'كجم انبعاثات كربونية تم تقليلها',

      // Formulation Calculator
      mixTitle: 'حاسبة نسب الخلط والتفعيل',
      mixSub: 'نسب خلط دقيقة لأي حجم عبوة مستهدف',
      mixLabel: 'حجم العبوة المستهدف (مل):',
      mixPowder: 'كمية مسحوق أورا الجاف',
      mixWater: 'حجم الماء الفاتر المطلوب',

      // FAQ
      faqTitle: 'الأسئلة الشائعة (FAQ)',
      faqQ1: 'ما الذي يجعل مسحوق أورا مختلفاً عن الشاور جل السائل التقليدي؟',
      faqA1: 'أورا يأتي كمسحوق جاف مركز بحجم 15 جرام. تضيف الماء في المنزل لتحصل على 120 مل شاور جل رغوي فاخر، مما يمنع التلوث البلاستيكي وانبعاثات شحن المياه.',
      faqQ2: 'ما هي مدة صلاحية المسحوق الجاف قبل الخلط؟',
      faqA2: 'لأن أورا جاف تماماً وخالٍ من المياه، فهو يتمتع بصلاحية تخزين تصل إلى سنتين دون الحاجة لمواد حافظة كيميائية صناعية.',
      faqQ3: 'كم يدوم الجل طازجاً بعد خلطه بالماء؟',
      faqA3: 'بمجرد الخلط بالماء، يظل الشاور جل طازجاً، لزجاً، وآمناً للاستخدام اليومي لمدة 3 أشهر.',
      faqQ4: 'هل منتجات أورا آمنة على البشرة الحساسة؟',
      faqA4: 'نعم! أورا متوازن درجة الحموضة (pH 5.5) لتطابق البشرة الطبيعية، ومكون من منظفات نباتية ومكونات تنعيم طبيعية.',

      // Contact & Footer
      contactTitle: 'تواصل معنا (CONTACT)',
      contactSub: 'فريق أورا في خدمتك دائماً',
      contactEmail: 'البريد الإلكتروني',
      contactPhone: 'الهاتف / واتساب',
      contactLoc: 'الموقع',
      locVal: 'القاهرة، مصر 🇪🇬',
      followUs: 'تابع أورا على شبكات التواصل',
      rights: '© 2026 AURA Powder Body Wash. جميع الحقوق محفوظة.',
      madeLocally: 'صنع بكل فخر في مصر 🇪🇬'
    }
  }[lang];

  return (
    <div className={`min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 ${t.dir === 'rtl' ? 'font-arabic' : 'font-sans'}`} dir={t.dir}>
      
      {/* Navigation */}
      <Navbar 
        onNavClick={handleNavClick} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6 sm:px-12">
        <VideoBackground />
        
        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
            <span>{t.heroSubtitle}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
            AURA<sup>®</sup> Powder Body Wash
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed">
            {t.heroDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleNavClick('products')}
              className="px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-emerald-950 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>{t.btnExplore}</span>
              <ArrowRight className={`w-5 h-5 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => handleNavClick('how-it-works')}
              className="px-8 py-4 rounded-full bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-800 text-neutral-900 dark:text-white text-base font-semibold border border-neutral-200 dark:border-neutral-700 backdrop-blur-md transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
            >
              {t.btnHowItWorks}
            </button>
          </div>

          {/* Quick Badges Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto text-center border-t border-neutral-200/50 dark:border-neutral-800/50">
            <div className="p-3 rounded-2xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-100 dark:border-neutral-800">
              <span className="block text-xl font-bold text-emerald-700 dark:text-emerald-400">15g</span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Dry Powder Refill</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-100 dark:border-neutral-800">
              <span className="block text-xl font-bold text-emerald-700 dark:text-emerald-400">80%</span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">CO₂ Freight Reduced</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-100 dark:border-neutral-800">
              <span className="block text-xl font-bold text-emerald-700 dark:text-emerald-400">0%</span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Single-Use Plastic</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm border border-neutral-100 dark:border-neutral-800">
              <span className="block text-xl font-bold text-emerald-700 dark:text-emerald-400">2 Years</span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Dry Shelf-Life</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AURA Section */}
      <section id="about" className="py-24 px-6 sm:px-12 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">{t.whyTitle}</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 dark:text-white">{t.whySub}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Why Card 1 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <Feather className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-neutral-950 dark:text-white">{t.why1Title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.why1Desc}</p>
            </div>

            {/* Why Card 2 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <RefreshCw className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-neutral-950 dark:text-white">{t.why2Title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.why2Desc}</p>
            </div>

            {/* Why Card 3 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <Plane className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-neutral-950 dark:text-white">{t.why3Title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.why3Desc}</p>
            </div>

            {/* Why Card 4 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <Leaf className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-neutral-950 dark:text-white">{t.why4Title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.why4Desc}</p>
            </div>

            {/* Why Card 5 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-neutral-950 dark:text-white">{t.why5Title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.why5Desc}</p>
            </div>

            {/* Why Card 6 */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <Award className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-neutral-950 dark:text-white">{t.why6Title}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.why6Dto}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Cards (Less Water Transport) */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">{t.valTitle}</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 dark:text-white">{t.valSub}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-teal-900/10 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">01</div>
              <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.card1Title}</h4>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">{t.card1Desc}</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-teal-900/10 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">02</div>
              <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.card2Title}</h4>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">{t.card2Desc}</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-teal-900/10 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">03</div>
              <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.card3Title}</h4>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">{t.card3Desc}</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-teal-900/10 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">04</div>
              <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.card4Title}</h4>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">{t.card4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS Section */}
      <section id="how-it-works" className="py-24 px-6 sm:px-12 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{t.howTitle}</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-white">{t.howSub}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-800/80 border border-neutral-700 space-y-4 relative">
              <span className="text-5xl font-extrabold text-emerald-400/30">01</span>
              <h4 className="text-xl font-bold text-white">{t.step1Title}</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">{t.step1Desc}</p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-800/80 border border-neutral-700 space-y-4 relative">
              <span className="text-5xl font-extrabold text-emerald-400/30">02</span>
              <h4 className="text-xl font-bold text-white">{t.step2Title}</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">{t.step2Desc}</p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-800/80 border border-neutral-700 space-y-4 relative">
              <span className="text-5xl font-extrabold text-emerald-400/30">03</span>
              <h4 className="text-xl font-bold text-white">{t.step3Title}</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">{t.step3Desc}</p>
            </div>

            <div className="p-8 rounded-3xl bg-neutral-800/80 border border-neutral-700 space-y-4 relative">
              <span className="text-5xl font-extrabold text-emerald-400/30">04</span>
              <h4 className="text-xl font-bold text-white">{t.step4Title}</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">{t.step4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE AURA COLLECTION (Products Section) */}
      <section id="products" className="py-24 px-6 sm:px-12 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">{t.prodTitle}</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 dark:text-white">{t.prodSub}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1: Libre */}
            <div className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-purple-950/20">
                <img src="/brand/prod_libre.jpg" alt="Libre AURA Powder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-extrabold shadow-md">
                  {t.badgeComingSoon}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase">AURA POWDER</span>
                  <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.prod1Name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.prod1Desc}</p>
                </div>
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">15g Sachet + 120ml Bottle</span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Product 2: Japanese Baby */}
            <div className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-sky-950/20">
                <img src="/brand/prod_japanese.jpg" alt="Japanese Baby AURA Powder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-extrabold shadow-md">
                  {t.badgeComingSoon}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-sky-600 dark:text-sky-400 uppercase">AURA POWDER</span>
                  <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.prod2Name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.prod2Desc}</p>
                </div>
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">15g Sachet + 120ml Bottle</span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Product 3: Pomegranate Musk */}
            <div className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-amber-950/20">
                <img src="/brand/prod_pomegranate.jpg" alt="Pomegranate Musk AURA Powder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-extrabold shadow-md">
                  {t.badgeComingSoon}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-amber-600 dark:text-amber-400 uppercase">AURA POWDER</span>
                  <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.prod3Name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.prod3Desc}</p>
                </div>
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">15g Sachet + 120ml Bottle</span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Product 4: Lavender Velvet */}
            <div className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-indigo-950/20">
                <img src="/brand/scent_libre.jpg" alt="Lavender Velvet AURA Powder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-extrabold shadow-md">
                  {t.badgeComingSoon}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">AURA POWDER</span>
                  <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">{t.prod4Name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.prod4Desc}</p>
                </div>
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">15g Sachet + 120ml Bottle</span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY Section */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-neutral-950">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">{t.storyTitle}</span>
          <h3 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 dark:text-white">{t.storyHeading}</h3>
          
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-4xl mx-auto shadow-sm">
            <p className="font-semibold text-xl text-emerald-950 dark:text-emerald-300">"{t.storyText1}"</p>
            <p>{t.storyText2}</p>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY IMPACT Dashboard */}
      <section id="sustainability" className="py-24 px-6 sm:px-12 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{t.sustTitle}</h2>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-white">{t.sustSub}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-emerald-900/40 border border-emerald-700/50 space-y-6">
              <h4 className="text-xl font-bold text-white">Interactive Eco Simulator</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-emerald-200 mb-1">{t.calcPeopleLabel} {ecoPeople}</label>
                  <input 
                    type="range" min="10" max="1000" step="10" value={ecoPeople} 
                    onChange={e => setEcoPeople(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs text-emerald-200 mb-1">{t.calcMonthsLabel} {ecoMonths}</label>
                  <input 
                    type="range" min="1" max="36" step="1" value={ecoMonths} 
                    onChange={e => setEcoMonths(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-emerald-900/30 border border-emerald-800/60 flex flex-col justify-between">
                <Trash2 className="w-8 h-8 text-emerald-400 mb-4" />
                <div>
                  <span className="text-4xl font-extrabold text-white block">{(ecoPeople * ecoMonths * 2).toLocaleString()}</span>
                  <span className="text-xs text-emerald-300 font-medium">{t.plasticSaved}</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-emerald-900/30 border border-emerald-800/60 flex flex-col justify-between">
                <Droplets className="w-8 h-8 text-emerald-400 mb-4" />
                <div>
                  <span className="text-4xl font-extrabold text-white block">{(ecoPeople * ecoMonths * 0.48).toFixed(1)} L</span>
                  <span className="text-xs text-emerald-300 font-medium">{t.waterSaved}</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-emerald-900/30 border border-emerald-800/60 flex flex-col justify-between">
                <Trees className="w-8 h-8 text-emerald-400 mb-4" />
                <div>
                  <span className="text-4xl font-extrabold text-white block">{(ecoPeople * ecoMonths * 0.35).toFixed(1)} kg</span>
                  <span className="text-xs text-emerald-300 font-medium">{t.co2Saved}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULATION BATCH CALCULATOR */}
      <section className="py-24 px-6 sm:px-12 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">{t.mixTitle}</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 dark:text-white">{t.mixSub}</h3>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-8">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                {t.mixLabel} <span className="text-emerald-600 font-bold text-lg">{calcVolume} ml</span>
              </label>
              <input 
                type="range" min="60" max="1000" step="20" value={calcVolume} 
                onChange={e => setCalcVolume(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="p-6 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-center">
                <span className="block text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1">{t.mixPowder}</span>
                <span className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-400">{((calcVolume / 120) * 15).toFixed(1)} g</span>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-center">
                <span className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1">{t.mixWater}</span>
                <span className="text-3xl font-extrabold text-neutral-900 dark:text-white">{calcVolume} ml</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 sm:px-12 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">{t.faqTitle}</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: t.faqQ1, a: t.faqA1 },
              { q: t.faqQ2, a: t.faqA2 },
              { q: t.faqQ3, a: t.faqA3 },
              { q: t.faqQ4, a: t.faqA4 },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-start font-bold text-lg text-neutral-950 dark:text-white flex justify-between items-center gap-4 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed border-t border-neutral-100 dark:border-neutral-800">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="py-20 px-6 sm:px-12 bg-neutral-950 text-white border-t border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Col */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/brand/logo_brand.jpg" alt="AURA Logo" className="w-10 h-10 object-cover rounded-full border border-emerald-500/30" />
                <span className="text-3xl font-display font-bold text-white tracking-wider">AURA<sup>®</sup></span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Concentrated powder body wash designed to transform into a luxurious shower gel when mixed with water.
              </p>
            </div>

            {/* Links Col */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Quick Links</h5>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="hover:text-white transition-colors">About AURA</a></li>
                <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); handleNavClick('how-it-works'); }} className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }} className="hover:text-white transition-colors">The Collection</a></li>
                <li><a href="#sustainability" onClick={(e) => { e.preventDefault(); handleNavClick('sustainability'); }} className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>

            {/* Contact Col */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{t.contactTitle}</h5>
              <div className="space-y-3 text-sm text-neutral-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>info@aurapowder.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+20 100 000 0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{t.locVal}</span>
                </div>
              </div>
            </div>

            {/* Socials Col */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{t.followUs}</h5>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500 transition-all">
                  <Video className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <span>{t.rights}</span>
            <span>{t.madeLocally}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
