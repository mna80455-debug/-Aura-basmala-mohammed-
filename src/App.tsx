import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import SlideShowcase from './components/SlideShowcase';
import { Mail, Phone, MapPin, Sparkles, Droplets, Leaf, Award, ArrowRight, ShieldCheck, Microscope, Package, Landmark, ChevronDown, Calculator, FileDown, Trees, Trash2 } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [calcVolume, setCalcVolume] = useState<number>(500); // Default 500ml batch
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Expanded Professional Feature States
  const [ecoPeople, setEcoPeople] = useState<number>(100); // 100 families
  const [ecoMonths, setEcoMonths] = useState<number>(12); // 12 months
  const [simStage, setSimStage] = useState<number>(0); // Active simulator stage (0-3)

  // Sync theme with HTML tag
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

  // Translation Dictionaries
  const translations = {
    en: {
      dir: 'ltr',
      introducing: 'Introducing Aura® Powder',
      headingMain: 'Beyond liquid, we blend',
      headingEmphasized: 'the future.',
      subtitle: 'Innovative powder-to-liquid shower gel and waterless personal care',
      desc: 'Aura® Powder redefines personal hygiene. By removing water from the manufacturing and transport loop, we deliver a premium powder formula that transforms into a rich, nourishing shower gel right in your hands.',
      btnCreator: 'Meet The Creator',
      btnProduct: 'Explore Formulations',
      philosophyTitle: 'The Eco-System',
      card1Title: '100% Waterless Shipping',
      card1Desc: 'Ordinary shower gel is 80% water. By shipping only the active powder ingredients, we eliminate heavy shipping weights and reduce carbon emissions.',
      card2Title: 'Instant Transformation',
      card2Desc: 'Formulated with high-grade Texapon powder (تكسابون بودرة). Add water at home to dissolve the powder instantly into a thick, foaming, and cleansing gel.',
      card3Title: 'Biology-Driven Formula',
      card3Desc: 'Created under scientific food biology guidelines. Dermatologically conscious, pH balanced, and infused with biodegradable agents.',
      
      // Creator
      creatorTitle: 'The Innovator',
      creatorName: 'Basmala Mohammed Mamdouh Hussein',
      standingLabel: 'Academic Standing',
      standingVal: 'Excellent (ممتاز)',
      specLabel: 'Specialization',
      specVal: 'Food Industries (صناعات غذائية)',
      bio1: 'As an eco-conscious researcher specializing in Biology and Food Industries at the Technology College in Matareya and the Technical Industrial Institute in Shobra, I engineered Aura® Powder to solve a fundamental packaging and weight waste issue in personal hygiene.',
      bio2: 'Through this project, I bridged biological safety standards with chemical formulation to design a dry compound that avoids synthetic preservatives, utilizes food-grade surfactants (Texapon powder), and activates with water at home. This work represents a major milestone in my academic career, graduating in 2026.',
      btnContact: 'Contact Me Directly',
      btnDownloadCV: 'Download CV',
      credentialsTitle: 'Education & Credentials',
      college: 'Technology College, Matareya',
      collegeSub: 'Biology Branch - Food Industries Department (شعبة بيولوجي - قسم صناعات غذائية)',
      institute: 'Technical Industrial Institute, Shobra',
      instituteSub: 'Technical Industrial Institute, Shobra',
      gradYear: 'Graduation Year',
      gradYearSub: 'Class of 2026 | Academic Standing: Excellent (ممتاز)',
      thesisLabel: 'Approved Thesis',
      projectLabel: 'Graduation Project 2026',
      
      // Skills
      skillsTitle: 'Laboratory Work',
      skillsHeading: 'Academic & Experimental Skills',
      skillsDesc: 'During the development of Aura® Powder, I conducted extensive lab work to balance biological and chemical properties.',
      skill1Title: 'Formulation Chemistry',
      skill1Desc: 'Balancing the ratio of Texapon powder, foam boosters, and essential oils to achieve a safe dry-powder composition that dissolves instantly in cold and warm water.',
      skill2Title: 'Microbiological Safety',
      skill2Desc: 'Ensuring that the waterless powder remains free from bacterial contamination in storage, and formulating natural preservatives that active when mixed with water.',
      skill3Title: 'Quality & Shelf-Life',
      skill3Desc: 'Testing powder properties under high humidity, evaluating biodegradable sachet barrier materials, and ensuring zero clumping over a 12-month shelf-life.',
      skill4Title: 'Carbon Footprint Audit',
      skill4Desc: 'Conducting sustainability audits showing how eliminating water during shipping reduces weight by 80%, directly translating to an 80% reduction in transport emissions.',
      
      // Feasibility
      feasTitle: 'Comparative Feasibility',
      feasHeading: 'Aura® vs. Traditional Gel',
      feasDesc: 'Key sustainability and chemical advantages compared side-by-side.',
      feasColMetric: 'Metric',
      feasColAura: 'Aura® Powder',
      feasColTrad: 'Traditional Gel',
      feasMetric1: 'Water Content',
      feasAura1: '0% (added by user)',
      feasTrad1: '80% - 90% (heavy to ship)',
      feasMetric2: 'Packaging Type',
      feasAura2: 'Biodegradable paper sachet',
      feasTrad2: 'Single-use plastic bottle',
      feasMetric3: 'Chemical Preservatives',
      feasAura3: 'None (dry-state self-preserving)',
      feasTrad3: 'Synthetic Parabens / Preservatives',
      feasMetric4: 'Shipping Weight',
      feasAura4: '15g (dry concentrate)',
      feasTrad4: '250g - 500g (water weight)',
      feasMetric5: 'Transport CO₂ Footprint',
      feasAura5: '80% Lower emissions',
      feasTrad5: 'Standard High footprint',

      // Glossary
      glosTitle: 'Active Ingredients',
      glosHeading: 'Ingredients Glossary',
      glosDesc: 'A look at the biological and chemical components making up Aura Powder, detailing their scientific roles.',
      ingName1: 'Texapon Powder (تكسابون بودرة)',
      ingRole1: 'Primary Foaming & Cleansing Agent',
      ingDesc1: 'A highly concentrated powder surfactant derived from coconut or palm kernel oil, allowing instant foam creation in waterless formats.',
      ingName2: 'Sodium Bicarbonate (بيكربونات الصوديوم)',
      ingRole2: 'pH Buffer & Gentle Effervescent Agent',
      ingDesc2: 'Maintains dynamic pH stability, ensures formula solubility, and provides gentle, skin-soothing effervescent foaming activation when mixed with water.',
      ingName3: 'Natural Corn Starch (نشا ذرة)',
      ingRole3: 'Anti-Caking Agent & Skin Softener',
      ingDesc3: 'Prevents the powder from clumping during storage under humidity, leaving a powdery smooth, soft texture on the skin after rinsing.',
      ingName4: 'Essential Oils (Lavender / Ocean)',
      ingRole4: 'Therapeutic Aromatics & Hydration',
      ingDesc4: 'Adds premium scents and natural moisturizers without chemical fragrance compounds. Provides antibacterial properties.',

      // Calculator
      calcTitle: 'Interactive Tool',
      calcHeading: 'Formulation Batch Calculator',
      calcDesc: 'Enter your desired bottle volume to calculate the exact ingredient measurements needed to prepare your Aura® Shower Gel batch.',
      calcVolumeLabel: 'Target Volume (ml):',
      calcActivePowder: 'Aura Active Powder',
      calcActivePowderDesc: 'The core dry formula.',
      calcWater: 'Pure Water',
      calcWaterDesc: 'To dissolve the powder.',
      calcTexapon: 'Texapon Surfactant',
      calcTexaponDesc: 'For rich foam generation.',
      calcOils: 'Essential Oils & Fragrance',
      calcOilsDesc: 'For natural color and scent.',
      calcCarbonSaved: 'Shipping Carbon Saved',
      calcCarbonSavedDesc: 'Equivalent CO₂ saved by avoiding shipping water weight.',
      calcTotalYield: 'Total Reconstituted Gel',

      // Eco Dashboard
      ecoTitle: 'Environmental Calculator',
      ecoHeading: 'Eco-Impact Dashboard',
      ecoDesc: 'Calculate the environmental savings if a community switches to Aura® Powder waterless personal care.',
      ecoPeopleLabel: 'Number of Active Users:',
      ecoMonthsLabel: 'Usage Duration (Months):',
      ecoMetric1: 'Plastic Bottles Prevented',
      ecoMetric1Desc: 'Kept out of landfills and oceans.',
      ecoMetric2: 'Shipping Weight Saved',
      ecoMetric2Desc: 'Water removed from the transportation loop.',
      ecoMetric3: 'CO₂ Emissions Reduced',
      ecoMetric3Desc: 'Transport carbon offset achievements.',
      ecoMetric4: 'Trees Planting Equivalent',
      ecoMetric4Desc: 'Number of trees needed to absorb that much CO₂.',

      // Simulator
      simTitle: 'Mixing Simulator',
      simHeading: 'Reconstitution Simulator',
      simDesc: 'Click the stages below to visualize the chemical transformation from dry powder to a luxurious gel.',
      simSt1Name: '01. Dry State',
      simSt1Text: 'Powder is completely stable and dry. No chemical preservatives needed. Shelf life: 2 years.',
      simSt2Name: '02. Hydration',
      simSt2Text: 'Water is added. The Texapon powder particles begin to hydrate and break down, initiating surfactant dissolution.',
      simSt3Name: '03. Viscosity Build',
      simSt3Text: 'Over 5-10 minutes, the polymer network expands, forming a thick, smooth, and homogeneous personal care gel.',
      simSt4Name: '04. Ready Gel',
      simSt4Text: 'Product is fully ready for bath use. Viscous, foaming, and safe for skin usage over a 3-month period.',

      // Products
      prodTitle: 'The Formulation',
      prodHeading: 'Three Scented Variations',
      prodDesc: 'Aura® Powder comes in three beautiful variants, customized with specific essential oils and colors.',
      var1Title: 'Golden Glow (Musk Pomegranate)',
      var1Desc: 'Infused with warm pomegranate and musk aromatic notes. This variant leaves a luxurious, refreshed sheen on the skin.',
      var1Scent: 'Musk Pomegranate',
      var2Title: 'Baby Blue Breeze (Japanese)',
      var2Desc: 'Fresh Japanese cherry blossom scent. Formulated for high refreshment and elegant skin breathing.',
      var2Scent: 'Japanese Cherry Blossom',
      var3Title: 'Violet Velvet (Libre)',
      var3Desc: 'Infused with Libre luxury perfume extracts. Relaxing properties to soothe muscle fatigue and prepare the body for restful sleep.',
      var3Scent: 'Libre Scent',
      
      // Manual
      manualTitle: 'User Manual',
      manualHeading: 'Create Your Gel in Seconds',
      manualDesc: 'Our custom powder-to-liquid system is incredibly easy to prepare. Just add tap water, mix, and the formula activates.',
      step1Title: 'Add Powder',
      step1Desc: 'Pour the concentrated Aura Powder into your reusable container.',
      step2Title: 'Fill with Water',
      step2Desc: 'Fill the bottle with warm tap water to activate the Texapon powder.',
      step3Title: 'Shake & Foam',
      step3Desc: 'Close the bottle, shake for a minute, and watch it turn into a gel!',
      
      // FAQ
      faqTitle: 'Frequently Asked Questions',
      faqHeading: 'Scientific & Product Details',
      faqQ1: 'What are the main active ingredients of Aura Powder?',
      faqA1: 'The primary active surfactant is high-grade Texapon powder, combined with skin-softening biological agents, organic colorants, and natural essential oils.',
      faqQ2: 'How long does the powder last before mixing?',
      faqA2: 'Thanks to the dry, waterless composition, Aura Powder has a shelf life of up to 2 years, keeping ingredients stable without artificial chemical stabilizers.',
      faqQ3: 'What is the environmental benefit?',
      faqA3: 'By shipping powder instead of water, we reduce transport weight by 80%, saving transport emissions. Additionally, reusable bottles reduce single-use plastic waste.',
      
      // Downloads
      dlTitle: 'Technical Files',
      dlHeading: 'Technical Downloads Center',
      dlDesc: 'Download the scientific abstracts and safety datasheets corresponding to Aura Powder.',
      dlFileMain: 'Full Graduation Project PDF',
      dlFileMainDesc: 'Download the complete 57MB graduation project PDF containing all slides and research details.',
      dlBtnMainText: 'Download Full PDF (57MB)',
      dlFile1: 'Research Thesis Abstract',
      dlFile2: 'Material Safety Datasheet (MSDS)',
      dlFile3: 'Product Specifications Sheet',
      dlBtnText: 'Download Abstract',

      // Contact
      contactTitle: 'Reach Us',
      contactHeading: 'Connect Directly',
      contactDesc: 'Feel free to contact me directly via WhatsApp, Phone, or Email for research inquiries, project details, or academic discussions.',
      whatsappTitle: 'WhatsApp',
      whatsappDesc: 'Chat with me instantly',
      callTitle: 'Call',
      callDesc: 'Direct telephone numbers',
      emailTitle: 'Email',
      emailDesc: 'Send a direct message',
      location: 'Based in Cairo, Egypt',
    },
    ar: {
      dir: 'rtl',
      introducing: 'نقدم لكم مشروع Aura® Powder',
      headingMain: 'خلف السائل، نصنع',
      headingEmphasized: 'الأثر والبيئة.',
      subtitle: 'شاور جل بودرة مبتكر وعناية مستدامة خالية من المياه',
      desc: 'يعيد مسحوق Aura® تعريف النظافة الشخصية. من خلال إزالة المياه من عملية التصنيع والشحن، نقدم تركيبة جافة فاخرة تتحول إلى شاور جل غني ومغذٍ بين يديك بمجرد إضافة الماء.',
      btnCreator: 'المبتكر الأكاديمي',
      btnProduct: 'اكتشف التركيبات',
      philosophyTitle: 'المنظومة البيئية',
      card1Title: 'شحن جاف 100٪ بدون مياه',
      card1Desc: 'الشاور جل العادي يتكون من 80% مياه. من خلال شحن المكونات الجافة النشطة فقط، نتخلص من أوزان الشحن الثقيلة ونقلل الانبعاثات الكربونية.',
      card2Title: 'تحول فوري بالماء',
      card2Desc: 'مركب من بودرة التكسابون عالية الجودة (تكسابون بودرة). أضف الماء في المنزل ليذوب المسحوق فوراً ويتحول لجيل رغوي سميك ومنظف.',
      card3Title: 'تركيبة مدعومة بالبيولوجيا',
      card3Desc: 'تم تطويره بناءً على أسس علمية في بيولوجيا الأغذية وصناعتها. آمن على البشرة، متوازن الحموضة (pH)، ومعزز بعوامل قابلة للتحلل.',
      
      // Creator
      creatorTitle: 'المبتكر الأكاديمي',
      creatorName: 'بسملة محمد ممدوح حسين',
      standingLabel: 'التقدير الأكاديمي',
      standingVal: 'ممتاز (Excellent)',
      specLabel: 'التخصص الدقيق',
      specVal: 'صناعات غذائية (قسم بيولوجي)',
      bio1: 'بصفتي باحثة مهتمة بالبيئة ومتخصصة في البيولوجي والصناعات الغذائية في الكلية التكنولوجية بالمطرية والمعهد الفني الصناعي بشبرا، قمت بتطوير Aura® Powder لحل مشكلة استهلاك البلاستيك وأوزان شحن المياه الزائدة.',
      bio2: 'من خلال هذا المشروع، نجحت في دمج معايير السلامة البيولوجية مع التركيب الكيميائي لإنتاج مركب جاف يتجنب المواد الحافظة الثقيلة، ويستخدم مواد رغوية آمنة، ويفعل بالماء في ثوانٍ. يمثل هذا العمل خطوة هامة في مسيرتي الأكاديمية (تخرج 2026).',
      btnContact: 'تواصل معي مباشرة',
      btnDownloadCV: 'تحميل السيرة الذاتية (CV)',
      credentialsTitle: 'التعليم والشهادات الأكاديمية',
      college: 'الكلية التكنولوجية بالمطرية',
      collegeSub: 'شعبة بيولوجي – قسم صناعات غذائية (تخصص كيمياء حيوية وفحص الأغذية)',
      institute: 'المعهد الفني الصناعي بشبرا',
      instituteSub: 'المعهد الفني الصناعي بشبرا (المناهج التكنولوجية المتقدمة)',
      gradYear: 'سنة التخرج والمناقشة',
      gradYearSub: 'دفعة 2026 | التقدير العام: ممتاز',
      thesisLabel: 'مشروع تخرج معتمد',
      projectLabel: 'مشروع التخرج الأكاديمي 2026',
      
      // Skills
      skillsTitle: 'العمل المعملي',
      skillsHeading: 'المهارات الأكاديمية والتجريبية',
      skillsDesc: 'خلال تطوير Aura® Powder، قمت بإجراء تجارب معملية مكثفة لضبط التوازن بين الخواص البيولوجية والكيميائية للمنتج.',
      skill1Title: 'كيمياء وتركيب المستحلبات',
      skill1Desc: 'موازنة نسب التكسابون البودرة، معززات الرغوة، والزيوت الأساسية لإنتاج مسحوق جاف يذوب فوراً في الماء البارد والدافئ دون تكتل.',
      skill2Title: 'السلامة الميكروبيولوجية',
      skill2Desc: 'التأكد من بقاء المسحوق معقماً وخالياً من أي نمو بكتيري أثناء التخزين الطويل، وتطوير مواد حافظة طبيعية تفعل بالماء.',
      skill3Title: 'اختبارات الجودة وفترة الصلاحية',
      skill3Desc: 'قياس ثبات البودرة تحت الرطوبة العالية، واختيار وتصميم عبوات ورقية قابلة للتحلل تضمن صلاحية المنتج لـ 18 شهراً.',
      skill4Title: 'حسابات تقليل الكربون والوزن',
      skill4Desc: 'إجراء دراسة استدامة توضح كيف يؤدي التخلص من شحن المياه لتقليل وزن المنتج بنسبة 80%، وبالتالي تقليل انبعاثات نقل البضائع بنفس النسبة.',
      
      // Feasibility
      feasTitle: 'الجدوى والمقارنة التنافسية',
      feasHeading: 'شاور جل Aura® مقابل الجيل التقليدي',
      feasDesc: 'مقارنة تفصيلية توضح الفوارق البيئية والكيميائية الأساسية بين الابتكارين.',
      feasColMetric: 'المعيار',
      feasColAura: 'بودرة Aura® المبتكرة',
      feasColTrad: 'الشاور جل التقليدي السائل',
      feasMetric1: 'محتوى المياه المشحونة',
      feasAura1: '0% (يضيفه المستخدم في المنزل)',
      feasTrad1: '80% - 90% (مياه يتم شحنها في شاحنات)',
      feasMetric2: 'نوع التغليف',
      feasAura2: 'أكياس ورقية قابلة للتحلل العضوي',
      feasTrad2: 'عبوات بلاستيكية تستخدم لمرة واحدة',
      feasMetric3: 'المواد الحافظة الكيميائية',
      feasAura3: 'خالٍ تماماً (الحالة الجافة تحفظ المنتج)',
      feasTrad3: 'بارابين ومواد حافظة صناعية متعددة',
      feasMetric4: 'وزن الشحن للوحدة',
      feasAura4: '15 جرام (مسحوق مركز فقط)',
      feasTrad4: '250 - 500 جرام (وزن الماء والعبوة)',
      feasMetric5: 'البصمة الكربونية للمواصلات',
      feasAura5: 'أقل بنسبة 80% من الانبعاثات',
      feasTrad5: 'مرتفعة (بسبب الوزن الثقيل للمياه)',

      // Glossary
      glosTitle: 'المواد الفعالة للمشروع',
      glosHeading: 'قاموس المكونات العلمي ودورها الكيميائي',
      glosDesc: 'نظرة أكاديمية مفصلة للمكونات الحيوية والكيميائية التي يتكون منها مسحوق Aura ودور كل منها.',
      ingName1: 'تكسابون بودرة (Texapon Powder)',
      ingRole1: 'المادة الفعالة والمنظفة الأساسية',
      ingDesc1: 'خافض توتر سطحي بودرة مركز للغاية مستخلص من مصادر طبيعية كجوز الهند، يتيح ذوباناً فورياً وتوليد رغوة كثيفة بمجرد إضافة الماء.',
      ingName2: 'بيكربونات الصوديوم (Sodium Bicarbonate)',
      ingRole2: 'موازن الحموضة (pH) وعامل فوران رغوي',
      ingDesc2: 'يساعد في الحفاظ على استقرار درجة الحموضة (pH)، ويسهل ذوبان التركيبة بالماء، كما يساهم كعامل فوران ناعم لتعزيز الرغوة وتلطيف البشرة.',
      ingName3: 'نشا الذرة الطبيعي (Corn Starch)',
      ingRole3: 'مانع لتكتل المسحوق ومحسن لملمس البشرة',
      ingDesc3: 'يمتص الرطوبة الجوية لمنع تكتل البودرة الجافة في العبوات، كما يترك ملمساً حريرياً ناعماً على الجلد بعد غسل الشاور جل.',
      ingName4: 'الزيوت الأساسية العضوية (Essential Oils)',
      ingRole4: 'العلاج العطري والترطيب العميق للبشرة',
      ingDesc4: 'زيوت الخزامى أو نسيم المحيط التي تضيف الرائحة العطرية المميزة وتحسن ترطيب البشرة دون استخدام مركبات عطور اصطناعية مسببة للحساسية.',

      // Calculator
      calcTitle: 'أداة تفاعلية معملية',
      calcHeading: 'حاسبة تركيب نسب المكونات',
      calcDesc: 'أدخلي حجم العبوة المطلوب (بالملليتر) لحساب الوزن الدقيق لكل مكون كيميائي مطلوب لتحضير شاور جل Aura®.',
      calcVolumeLabel: 'الحجم المستهدف للعبوة (مل):',
      calcActivePowder: 'بودرة Aura النشطة',
      calcActivePowderDesc: 'المسحوق الجاف الأساسي.',
      calcWater: 'المياه النقية',
      calcWaterDesc: 'لإذابة المسحوق وتفعيل الرغوة.',
      calcTexapon: 'تكسابون بودرة (عامل الرغوة)',
      calcTexaponDesc: 'لتوليد الرغوة الغنية واللزوجة.',
      calcOils: 'زيوت عطرية ومحسنات طبيعية',
      calcOilsDesc: 'للرائحة واللون والترطيب.',
      calcCarbonSaved: 'تقليل البصمة الكربونية للمواصلات',
      calcCarbonSavedDesc: 'وزن الكربون المكافئ الذي تم توفيره بتجنب شحن المياه.',
      calcTotalYield: 'حجم الشاور جل الكلي الناتج',

      // Eco Dashboard
      ecoTitle: 'حساب الفوائد البيئية',
      ecoHeading: 'لوحة قياس الأثر البيئي الكلي',
      ecoDesc: 'احسبي مقدار التوفير البيئي والحد من البلاستيك والانبعاثات في حال استخدام مجتمعك لشاور جل Aura® الجاف.',
      ecoPeopleLabel: 'عدد المستخدمين / العائلات النشطة:',
      ecoMonthsLabel: 'مدة استخدام المنتج (بالشهور):',
      ecoMetric1: 'عبوات بلاستيكية تم منعها',
      ecoMetric1Desc: 'منع وصولها إلى المكبات والمحيطات.',
      ecoMetric2: 'أوزان شحن تم توفيرها',
      ecoMetric2Desc: 'الاستغناء عن شحن مياه ثقيلة في الحاويات.',
      ecoMetric3: 'تقليل انبعاثات الكربون CO₂',
      ecoMetric3Desc: 'معدل الحد من بصمة عوادم شاحنات النقل.',
      ecoMetric4: 'مكافئ حماية وزراعة أشجار',
      ecoMetric4Desc: 'عدد الأشجار المطلوبة لامتصاص نفس المقدار من الكربون.',

      // Simulator
      simTitle: 'محاكاة علمية تفاعلية',
      simHeading: 'محاكي عملية تفعيل المنتج الكيميائية',
      simDesc: 'اضغطي على المراحل الكيميائية أدناه لمشاهدة دورة تفعيل المسحوق وتحوله لجيل رغوي متماسك.',
      simSt1Name: '01. الحالة الجافة',
      simSt1Text: 'المسحوق جاف تماماً ومستقر كيميائياً. لا توجد مياه لذا لا تنمو البكتيريا. لا حاجة للمواد الحافظة. فترة صلاحية البودرة: سنتين.',
      simSt2Name: '02. التميؤ والذوبان',
      simSt2Text: 'يضاف الماء الفاتر. تبدأ جزيئات تكسابون البودرة بامتصاص الماء والتحلل التدريجي، وتبدأ العوامل المنظفة بالانتشار في السائل.',
      simSt3Name: '03. بناء اللزوجة والقوام',
      simSt3Text: 'خلال 5 إلى 10 دقائق، تتشابك روابط البوليمرات والنشا الطبيعي مشكلة شبكة هلامية متماسكة وناعمة لتعطي قوام الشاور جل الكثيف.',
      simSt4Name: '04. جل جاهز ومكتمل الفعالية',
      simSt4Text: 'المنتج جاهز تماماً للاستعمال الرغوي. لزج، منعش، ذو حموضة متوازنة للبشرة وصالح للاستعمال الآمن لفترة 3 أشهر بعد الخلط.',

      // Products
      prodTitle: 'التركيبة الكيميائية',
      prodHeading: 'ثلاثة تركيبات وروائح مختلفة',
      prodDesc: 'يتوفر Aura® Powder بثلاثة تركيبات مميزة تم تطويرها باستخدام أصباغ حيوية وزيوت عطرية طبيعية.',
      var1Title: 'اللمسة الذهبية (مسك رمان)',
      var1Desc: 'مركب بتركيز عطري يعتمد على المسك والرمان الطبيعي الفاخر. صمم ليمنح بشرتك رائحة منعشة ومستمرة وطبقة ترطيب فائقة النعومة.',
      var1Scent: 'عطر مسك رمان متألق وبشرة ناعمة',
      var2Title: 'نسيم المحيط (جابانيز)',
      var2Desc: 'عطر الورد الياباني (Japanese Cherry Blossom) المنعش. صمم لمنح حيوية ونضارة فائقة وخلايا بشرة تتنفس بعمق.',
      var2Scent: 'عطر جابانيز منعش وحيوية فائقة',
      var3Title: 'مخمل الخزامى (ليبر)',
      var3Desc: 'مستخلص من رائحة عطر ليبر (Libre) الفاخرة المدمجة بالزهور. يساعد على استرخاء العضلات وراحة الجسم والنوم المريح.',
      var3Scent: 'عطر ليبر الفاخر والمهدئ للأعصاب',
      
      // Manual
      manualTitle: 'طريقة التحضير',
      manualHeading: 'حضري شاور جل الخاص بك في ثوانٍ',
      manualDesc: 'طريقة التحضير سهلة وسريعة للغاية، أضيفي الماء للمسحوق فقط وسيتكفل التركيب الكيميائي بالباقي.',
      step1Title: 'إضافة المسحوق',
      step1Desc: 'ضعي مسحوق Aura® الجاف في زجاجتك القابلة لإعادة الاستخدام.',
      step2Title: 'إضافة المياه',
      step2Desc: 'املئي الزجاجة بالماء الفاتر لتنشيط عامل الرغوة (تكسابون بودرة).',
      step3Title: 'الرج والتفعيل',
      step3Desc: 'أغلقي العبوة وقومي برجها لمدة دقيقة حتى تحصلي على قوام الجل الكثيف.',
      
      // FAQ
      faqTitle: 'الأسئلة الشائعة الأكاديمية',
      faqHeading: 'تفاصيل علمية وتقنية حول المشروع',
      faqQ1: 'ما هي المواد الفعالة الأساسية في Aura Powder؟',
      faqA1: 'المادة الرغوية والمنظفة الأساسية هي تكسابون بودرة عالي الجودة، بالإضافة إلى عوامل حيوية لترطيب وتلطيف البشرة وزيوت عطرية وألوان طبيعية.',
      faqQ2: 'ما هي مدة صلاحية البودرة الجافة؟',
      faqA2: 'نظراً لأن التركيبة جافة وخالية من المياه، فإن مسحوق Aura® يظل مستقراً وصالحاً للاستخدام لمدة تصل إلى سنتين دون الحاجة لمواد حافظة كيميائية قوية.',
      faqQ3: 'كيف يحافظ هذا المنتج على البيئة؟',
      faqA3: 'من خلال التخلص من شحن المياه، نقلل من وزن الشحن بنسبة 80%، مما يقلل بشكل مباشر من استهلاك وقود الشاحنات. كما أن العبوات الورقية توفر ملايين الزجاجات البلاستيكية.',
      
      // Downloads
      dlTitle: 'المستندات العلمية',
      dlHeading: 'مركز تحميل التقارير الأكاديمية',
      dlDesc: 'حملي ملخص الأطروحة ونشرات أمان المواد الكيميائية الخاصة بمسحوق شاور جل Aura®.',
      dlFileMain: 'ملف مشروع التخرج الكامل (PDF)',
      dlFileMainDesc: 'حملي كتاب مشروع التخرج الكامل (حجم 57 ميجابايت) الذي يحتوي على كافة الشرائح والبحوث الأكاديمية.',
      dlBtnMainText: 'تحميل كتاب المشروع كاملاً (57MB)',
      dlFile1: 'ملخص رسالة البحث العلمي (Research Abstract)',
      dlFile2: 'نشرة أمان تداول المواد (MSDS)',
      dlFile3: 'ورقة المواصفات الكيميائية للمنتج (Specs Sheet)',
      dlBtnText: 'تحميل المستند PDF',

      // Contact
      contactTitle: 'تواصل مباشر',
      contactHeading: 'اتصل بنا فوراً',
      contactDesc: 'يسعدني تواصلكم معي مباشرة عبر الواتساب، الهاتف، أو البريد الإلكتروني لمناقشة أبحاث الاستدامة، الاستفسارات العلمية، أو التعاون التجاري.',
      whatsappTitle: 'واتساب مباشر',
      whatsappDesc: 'تحدث معي على الواتساب فوراً',
      callTitle: 'اتصال هاتفي',
      callDesc: 'أرقام الهاتف المباشرة',
      emailTitle: 'البريد الإلكتروني',
      emailDesc: 'راسلني عبر الإيميل مباشرة',
      location: 'القاهرة، جمهورية مصر العربية',
    }
  };

  const t = translations[lang];

  // Dynamic Batch Calculations
  const powderRatio = 0.12; // 12% powder
  const waterRatio = 0.82;  // 82% water
  const texaponRatio = 0.05; // 5% Texapon powder
  const oilsRatio = 0.01;    // 1% Oils & scents

  const calcPowder = (calcVolume * powderRatio).toFixed(1);
  const calcWater = (calcVolume * waterRatio).toFixed(1);
  const calcTexapon = (calcVolume * texaponRatio).toFixed(1);
  const calcOils = (calcVolume * oilsRatio).toFixed(1);
  const calcCarbon = (calcVolume * 0.8).toFixed(0); // 0.8g CO2 saved per ml of water saved

  // Dynamic Eco Dashboard Calculations
  const averageGelsPerMonth = 2.5; // Average 2.5 bottles per user/family per month
  const totalBottlesSaved = Math.round(ecoPeople * ecoMonths * averageGelsPerMonth);
  const totalWeightSaved = Math.round(totalBottlesSaved * 0.35); // 350g water weight saved per bottle
  const totalCo2Saved = Math.round(totalWeightSaved * 0.95); // 0.95g CO2 offset per gram of weight saved
  const treesEquivalent = (totalCo2Saved / 22000).toFixed(1); // 1 tree absorbs ~22,000g of CO2 per year

  // Simulator Stage Data
  const simulatorStages = [
    { name: t.simSt1Name, text: t.simSt1Text, color: 'bg-neutral-200 dark:bg-neutral-800' },
    { name: t.simSt2Name, text: t.simSt2Text, color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200' },
    { name: t.simSt3Name, text: t.simSt3Text, color: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200' },
    { name: t.simSt4Name, text: t.simSt4Text, color: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200' },
  ];

  return (
    <div 
      id="home" 
      className="relative min-h-screen w-full overflow-x-hidden bg-white dark:bg-[#070707] text-black dark:text-white transition-colors duration-500 selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-black dark:selection:text-white"
      dir={t.dir}
    >
      
      {/* Navigation */}
      <Navbar 
        onNavClick={handleNavClick} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
      />

      {/* Hero Section */}
      <header className="relative min-h-[95vh] w-full flex flex-col justify-between overflow-hidden">
        {/* Video Background & Overlays */}
        <VideoBackground />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center flex-grow pt-[calc(8rem-75px)] pb-32">
          
          {/* Tagline */}
          <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-100 dark:border-neutral-800 shadow-sm backdrop-blur-md animate-fade-rise">
            <Sparkles className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300">
              {t.introducing}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-7xl md:text-8xl font-display font-normal leading-[0.95] tracking-[-2.46px] text-black dark:text-white max-w-5xl animate-fade-rise">
            {t.headingMain} <span className="italic text-[#6F6F6F] dark:text-neutral-400">{t.headingEmphasized}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl font-display font-light text-[#6F6F6F] dark:text-neutral-400 mt-4 max-w-2xl animate-fade-rise-delay italic">
            "{t.subtitle}"
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#6F6F6F] dark:text-neutral-400 leading-relaxed max-w-2xl mt-8 animate-fade-rise-delay">
            {t.desc}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-rise-delay-2">
            <button
              onClick={() => handleNavClick('creator')}
              className="rounded-full px-12 py-4 text-base font-medium bg-black dark:bg-white text-white dark:text-black hover:scale-103 active:scale-98 transition-all duration-300 shadow-lg shadow-black/10 flex items-center gap-2"
            >
              {t.btnCreator} <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => handleNavClick('product')}
              className="rounded-full px-10 py-4 text-base font-medium bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-800 text-black dark:text-white hover:scale-103 active:scale-98 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 shadow-sm backdrop-blur-sm"
            >
              {t.btnProduct}
            </button>
          </div>
        </div>
      </header>

      {/* The Creator Section (Bio & Credentials) */}
      <section id="creator" className="relative z-10 py-24 bg-white dark:bg-[#0b0b0b] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">
        
        {/* BACKGROUND SLIDE WATERMARK - Highly visible but artistic */}
        <div className={`absolute top-10 ${lang === 'ar' ? 'left-6 md:left-12 rotate-[-6deg]' : 'right-6 md:right-12 rotate-[6deg]'} opacity-[0.22] dark:opacity-[0.12] pointer-events-none select-none hidden md:block scale-95 transition-all duration-500`}>
          <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-xl">
            <img src="/slides/slide2.jpg" alt="Slide Watermark 1" className="w-[340px] lg:w-[460px] h-auto rounded-2xl object-cover" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Bio Card */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.creatorTitle}</span>
              <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white leading-tight">
                {t.creatorName}
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 py-2">
                <div className="flex items-center gap-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Award className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                  <div>
                    <p className="text-xs text-[#6F6F6F] dark:text-neutral-400">{t.standingLabel}</p>
                    <p className="text-sm font-semibold text-black dark:text-white">{t.standingVal}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1">
                  <Leaf className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                  <div>
                    <p className="text-xs text-[#6F6F6F] dark:text-neutral-400">{t.specLabel}</p>
                    <p className="text-sm font-semibold text-black dark:text-white">{t.specVal}</p>
                  </div>
                </div>
              </div>

              <div className="prose text-[#6F6F6F] dark:text-neutral-300 text-sm sm:text-base space-y-4 leading-relaxed">
                <p>{t.bio1}</p>
                <p>{t.bio2}</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="rounded-full px-8 py-3.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                >
                  {t.btnContact}
                </button>
                <a
                  href="/Basmala_Mohammed_CV_Creative.pdf"
                  download="Basmala_Mohammed_CV_Creative.pdf"
                  className="rounded-full px-8 py-3.5 text-sm font-medium bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-800 text-black dark:text-white hover:scale-105 active:scale-95 transition-all duration-300 border border-neutral-200 dark:border-neutral-700 shadow-sm backdrop-blur-sm flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" /> {t.btnDownloadCV}
                </a>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="lg:col-span-5 bg-[#FCFBF7] dark:bg-[#141411] border border-amber-100 dark:border-amber-900/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/5 rounded-bl-full" />
              
              <h3 className="text-2xl font-display font-normal text-black dark:text-white mb-6 border-b border-amber-100 dark:border-neutral-800 pb-4">
                {t.credentialsTitle}
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-700 dark:text-amber-400 h-9 w-9 flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">{t.college}</h4>
                    <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-1">{t.collegeSub}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-700 dark:text-amber-400 h-9 w-9 flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">{t.institute}</h4>
                    <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-1">{t.instituteSub}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-700 dark:text-amber-400 h-9 w-9 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black dark:text-white">{t.gradYear}</h4>
                    <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-1">{t.gradYearSub}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-amber-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-[#6F6F6F] dark:text-neutral-400">{t.projectLabel}</span>
                <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-semibold rounded-full border border-amber-100 dark:border-amber-900/40">
                  {t.thesisLabel}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experimental Laboratory Skills Section */}
      <section className="relative z-10 py-24 bg-neutral-50 dark:bg-[#070707] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">
        
        {/* BACKGROUND SLIDE WATERMARK - Highly visible but artistic */}
        <div className={`absolute bottom-6 ${lang === 'ar' ? 'right-6 md:right-12 rotate-[6deg]' : 'left-6 md:left-12 rotate-[-6deg]'} opacity-[0.22] dark:opacity-[0.12] pointer-events-none select-none hidden md:block scale-95 transition-all duration-500`}>
          <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-xl">
            <img src="/slides/slide5.jpg" alt="Slide Watermark 2" className="w-[340px] lg:w-[460px] h-auto rounded-2xl object-cover" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.skillsTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2">
              {t.skillsHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#6F6F6F] dark:text-neutral-400 max-w-xl mx-auto mt-4">
              {t.skillsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Skill 1 */}
            <div className="p-6 bg-white dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-neutral-200 dark:hover:border-neutral-700">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-xl w-fit mb-6">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{t.skill1Title}</h3>
              <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.skill1Desc}</p>
            </div>

            {/* Skill 2 */}
            <div className="p-6 bg-white dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-neutral-200 dark:hover:border-neutral-700">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-xl w-fit mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{t.skill2Title}</h3>
              <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.skill2Desc}</p>
            </div>

            {/* Skill 3 */}
            <div className="p-6 bg-white dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-neutral-200 dark:hover:border-neutral-700">
              <div className="p-3 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-xl w-fit mb-6">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{t.skill3Title}</h3>
              <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.skill3Desc}</p>
            </div>

            {/* Skill 4 */}
            <div className="p-6 bg-white dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-neutral-200 dark:hover:border-neutral-700">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-xl w-fit mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{t.skill4Title}</h3>
              <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.skill4Desc}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Comparative Feasibility Section (Aura vs Traditional Gel) */}
      <section className="relative z-10 py-24 bg-white dark:bg-[#0b0b0b] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.feasTitle}</span>
            <h2 className="text-4xl font-display font-normal text-black dark:text-white mt-2">
              {t.feasHeading}
            </h2>
            <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 mt-2">{t.feasDesc}</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-950">
            <table className="w-full text-sm text-left border-collapse" dir={t.dir}>
              <thead>
                <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200">
                  <th className="px-6 py-4 font-semibold text-right">{t.feasColMetric}</th>
                  <th className="px-6 py-4 font-semibold text-right">{t.feasColAura}</th>
                  <th className="px-6 py-4 font-semibold text-right text-[#6F6F6F] dark:text-neutral-400">{t.feasColTrad}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-850">
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">{t.feasMetric1}</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium">{t.feasAura1}</td>
                  <td className="px-6 py-4 text-neutral-500">{t.feasTrad1}</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">{t.feasMetric2}</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium">{t.feasAura2}</td>
                  <td className="px-6 py-4 text-neutral-500">{t.feasTrad2}</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">{t.feasMetric3}</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium">{t.feasAura3}</td>
                  <td className="px-6 py-4 text-neutral-500">{t.feasTrad3}</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">{t.feasMetric4}</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium">{t.feasAura4}</td>
                  <td className="px-6 py-4 text-neutral-500">{t.feasTrad4}</td>
                </tr>
                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10">
                  <td className="px-6 py-4 font-medium text-black dark:text-white">{t.feasMetric5}</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium">{t.feasAura5}</td>
                  <td className="px-6 py-4 text-neutral-500">{t.feasTrad5}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Ingredients Glossary Section */}
      <section className="relative z-10 py-24 bg-neutral-50 dark:bg-[#070707] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.glosTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2">
              {t.glosHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#6F6F6F] dark:text-neutral-400 max-w-xl mx-auto mt-4">
              {t.glosDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Ing 1 */}
            <div className="p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
              <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 rounded-xl h-fit flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-black dark:text-white">{t.ingName1}</h4>
                <p className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">{t.ingRole1}</p>
                <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.ingDesc1}</p>
              </div>
            </div>

            {/* Ing 2 */}
            <div className="p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
              <div className="p-3.5 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-xl h-fit flex-shrink-0">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-black dark:text-white">{t.ingName2}</h4>
                <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">{t.ingRole2}</p>
                <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.ingDesc2}</p>
              </div>
            </div>

            {/* Ing 3 */}
            <div className="p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
              <div className="p-3.5 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 rounded-xl h-fit flex-shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-black dark:text-white">{t.ingName3}</h4>
                <p className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">{t.ingRole3}</p>
                <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.ingDesc3}</p>
              </div>
            </div>

            {/* Ing 4 */}
            <div className="p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
              <div className="p-3.5 bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 rounded-xl h-fit flex-shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-black dark:text-white">{t.ingName4}</h4>
                <p className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase">{t.ingRole4}</p>
                <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">{t.ingDesc4}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Product Section */}
      <section id="product" className="relative z-10 py-24 bg-white dark:bg-[#070707] transition-colors duration-500 overflow-hidden">
        
        {/* BACKGROUND SLIDE WATERMARK - Highly visible but artistic */}
        <div className={`absolute top-20 ${lang === 'ar' ? 'left-6 md:left-12 rotate-[-6deg]' : 'right-6 md:right-12 rotate-[6deg]'} opacity-[0.22] dark:opacity-[0.12] pointer-events-none select-none hidden md:block scale-95 transition-all duration-500`}>
          <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-xl">
            <img src="/slides/slide3.jpg" alt="Slide Watermark 3" className="w-[340px] lg:w-[460px] h-auto rounded-2xl object-cover" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.prodTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2">
              {t.prodHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#6F6F6F] dark:text-neutral-400 max-w-xl mx-auto mt-4">
              {t.prodDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Golden Variant */}
            <div className="group relative rounded-2xl overflow-hidden border border-amber-100 dark:border-amber-900/30 bg-[#FCFBF7] dark:bg-[#141411] p-8 hover:shadow-xl hover:border-amber-200 dark:hover:border-amber-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/10 rounded-bl-full group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono text-amber-700 dark:text-amber-400 tracking-wider font-semibold uppercase">Variant 01</span>
              <h3 className="text-2xl font-display font-normal text-black dark:text-white mt-2">{t.var1Title}</h3>
              <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 mt-4 leading-relaxed">{t.var1Desc}</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 block animate-pulse" />
                <span className="text-xs font-medium text-amber-800 dark:text-amber-400">{t.var1Scent}</span>
              </div>
            </div>

            {/* Baby Blue Variant */}
            <div className="group relative rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900/30 bg-[#F7FAFC] dark:bg-[#111314] p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/10 rounded-bl-full group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono text-blue-700 dark:text-blue-400 tracking-wider font-semibold uppercase">Variant 02</span>
              <h3 className="text-2xl font-display font-normal text-black dark:text-white mt-2">{t.var2Title}</h3>
              <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 mt-4 leading-relaxed">{t.var2Desc}</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-400 block animate-pulse" />
                <span className="text-xs font-medium text-blue-800 dark:text-blue-400">{t.var2Scent}</span>
              </div>
            </div>

            {/* Violet Variant */}
            <div className="group relative rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-900/30 bg-[#FAF7FC] dark:bg-[#131114] p-8 hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-700/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200/10 rounded-bl-full group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 tracking-wider font-semibold uppercase">Variant 03</span>
              <h3 className="text-2xl font-display font-normal text-black dark:text-white mt-2">{t.var3Title}</h3>
              <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 mt-4 leading-relaxed">{t.var3Desc}</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-purple-400 block animate-pulse" />
                <span className="text-xs font-medium text-purple-800 dark:text-purple-400">{t.var3Scent}</span>
              </div>
            </div>

          </div>

          {/* Interactive Batch Calculator Section */}
          <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-100 dark:bg-neutral-800 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Input volume */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-xl w-fit flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">{t.calcTitle}</span>
                </div>
                <h3 className="text-3xl font-display font-normal text-black dark:text-white">
                  {t.calcHeading}
                </h3>
                <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed">
                  {t.calcDesc}
                </p>

                <div className="pt-4">
                  <label htmlFor="volume" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                    {t.calcVolumeLabel}
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="range"
                      id="volume"
                      min="100"
                      max="2000"
                      step="50"
                      value={calcVolume}
                      onChange={(e) => setCalcVolume(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-black dark:accent-white my-auto"
                    />
                    <span className="font-mono text-lg font-bold text-black dark:text-white w-20 text-right">
                      {calcVolume}ml
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                    <span>100ml</span>
                    <span>500ml</span>
                    <span>1000ml</span>
                    <span>2000ml</span>
                  </div>
                </div>
              </div>

              {/* Table Outputs */}
              <div className="lg:col-span-7 bg-white dark:bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-lg">
                <div className="space-y-4">
                  
                  {/* Item 1 */}
                  <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-black dark:text-white">{t.calcActivePowder}</h4>
                      <p className="text-xs text-neutral-400">{t.calcActivePowderDesc}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-black dark:text-white">{calcPowder}g</span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-black dark:text-white">{t.calcWater}</h4>
                      <p className="text-xs text-neutral-400">{t.calcWaterDesc}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-black dark:text-white">{calcWater}ml</span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-black dark:text-white">{t.calcTexapon}</h4>
                      <p className="text-xs text-neutral-400">{t.calcTexaponDesc}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-black dark:text-white">{calcTexapon}g</span>
                  </div>

                  {/* Item 4 */}
                  <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <div>
                      <h4 className="text-sm font-semibold text-black dark:text-white">{t.calcOils}</h4>
                      <p className="text-xs text-neutral-400">{t.calcOilsDesc}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-black dark:text-white">{calcOils}g</span>
                  </div>

                  {/* Carbon savings */}
                  <div className="flex justify-between items-center pt-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <div>
                      <h4 className="text-sm">{t.calcCarbonSaved}</h4>
                      <p className="text-xs text-emerald-600/70 dark:text-emerald-400/60 font-normal">{t.calcCarbonSavedDesc}</p>
                    </div>
                    <span className="font-mono text-base font-bold">~ {calcCarbon}g CO₂</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* User Manual Mixing Guide */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-neutral-900 dark:bg-neutral-950 text-white relative overflow-hidden border border-neutral-800 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-neutral-800/40 dark:bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <span className="text-xs uppercase tracking-widest text-[#6F6F6F] font-semibold">{t.manualTitle}</span>
                <h3 className="text-3xl sm:text-4xl font-display font-normal mt-2">
                  {t.manualHeading}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
                  {t.manualDesc}
                </p>
              </div>

              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-800/30 border border-neutral-800 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-mono text-sm font-semibold">1</div>
                  <h4 className="text-base font-semibold">{t.step1Title}</h4>
                  <p className="text-xs text-neutral-400">{t.step1Desc}</p>
                </div>
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-800/30 border border-neutral-800 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-mono text-sm font-semibold">2</div>
                  <h4 className="text-base font-semibold">{t.step2Title}</h4>
                  <p className="text-xs text-neutral-400">{t.step2Desc}</p>
                </div>
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-800/30 border border-neutral-800 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-mono text-sm font-semibold">3</div>
                  <h4 className="text-base font-semibold">{t.step3Title}</h4>
                  <p className="text-xs text-neutral-400">{t.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Eco-Impact Dashboard Section */}
      <section className="relative z-10 py-24 bg-neutral-50 dark:bg-[#0d0d0d] transition-colors duration-500 border-t border-neutral-200 dark:border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.ecoTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2">
              {t.ecoHeading}
            </h2>
            <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 max-w-xl mx-auto mt-4">
              {t.ecoDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-4 bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-250/10 dark:border-neutral-800 shadow-sm space-y-6">
              
              {/* People */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                  {t.ecoPeopleLabel}
                </label>
                <div className="flex gap-4">
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={ecoPeople}
                    onChange={(e) => setEcoPeople(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-black dark:accent-white my-auto"
                  />
                  <span className="font-mono text-base font-bold text-black dark:text-white w-16 text-right">
                    {ecoPeople}
                  </span>
                </div>
              </div>

              {/* Months */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                  {t.ecoMonthsLabel}
                </label>
                <div className="flex gap-4">
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="1"
                    value={ecoMonths}
                    onChange={(e) => setEcoMonths(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-black dark:accent-white my-auto"
                  />
                  <span className="font-mono text-base font-bold text-black dark:text-white w-16 text-right">
                    {ecoMonths}m
                  </span>
                </div>
              </div>

            </div>

            {/* Output Metric Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Metric 1 */}
              <div className="p-6 bg-white dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/80 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl h-fit">
                  <Trash2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500">{t.ecoMetric1}</h4>
                  <p className="font-mono text-2xl font-bold text-black dark:text-white mt-1">{totalBottlesSaved.toLocaleString()}</p>
                  <p className="text-xs text-neutral-400 mt-1">{t.ecoMetric1Desc}</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-6 bg-white dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/80 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-xl h-fit">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500">{t.ecoMetric2}</h4>
                  <p className="font-mono text-2xl font-bold text-black dark:text-white mt-1">{(totalWeightSaved / 1000).toFixed(1)} kg</p>
                  <p className="text-xs text-neutral-400 mt-1">{t.ecoMetric2Desc}</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-6 bg-white dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/80 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 rounded-xl h-fit">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500">{t.ecoMetric3}</h4>
                  <p className="font-mono text-2xl font-bold text-black dark:text-white mt-1">{(totalCo2Saved / 1000).toFixed(1)} kg</p>
                  <p className="text-xs text-neutral-400 mt-1">{t.ecoMetric3Desc}</p>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-6 bg-white dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/80 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl h-fit">
                  <Trees className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500">{t.ecoMetric4}</h4>
                  <p className="font-mono text-2xl font-bold text-black dark:text-white mt-1">{treesEquivalent}</p>
                  <p className="text-xs text-neutral-400 mt-1">{t.ecoMetric4Desc}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Reconstitution Simulator Section */}
      <section className="relative z-10 py-24 bg-white dark:bg-[#070707] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-5xl mx-auto px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.simTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2">
              {t.simHeading}
            </h2>
            <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 max-w-xl mx-auto mt-4">
              {t.simDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Step Selection Buttons */}
            <div className="md:col-span-5 flex flex-row md:flex-col gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-none">
              {simulatorStages.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setSimStage(idx)}
                  className={`w-full text-right px-6 py-4 rounded-xl border text-sm font-medium transition-all duration-300 flex-shrink-0 md:flex-shrink ${
                    idx === simStage
                      ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-md scale-[1.02]'
                      : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-[#6F6F6F] hover:bg-neutral-100 dark:hover:bg-neutral-800/80'
                  }`}
                  dir={t.dir}
                >
                  {stage.name}
                </button>
              ))}
            </div>

            {/* Display Visualizer Screen */}
            <div className="md:col-span-7 p-8 rounded-3xl bg-neutral-50 dark:bg-[#0b0b0b] border border-neutral-250/10 dark:border-neutral-800 min-h-[220px] flex flex-col justify-center relative overflow-hidden transition-all duration-500 shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-100 dark:bg-neutral-900 rounded-bl-full" />
              
              <div className="relative z-10 space-y-4">
                <div className={`px-4 py-1 rounded-full text-xs font-semibold w-fit ${simulatorStages[simStage].color}`}>
                  {simulatorStages[simStage].name}
                </div>
                <p className="text-sm sm:text-base text-[#6F6F6F] dark:text-neutral-300 leading-relaxed font-mono">
                  {simulatorStages[simStage].text}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Slide Showcase Section */}
      <section id="slides" className="relative z-10 py-20 bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
        <SlideShowcase />
      </section>

      {/* FAQ Accordion Section */}
      <section className="relative z-10 py-24 bg-white dark:bg-[#070707] transition-colors duration-500 overflow-hidden">
        
        {/* BACKGROUND SLIDE WATERMARK - Highly visible but artistic */}
        <div className={`absolute top-10 ${lang === 'ar' ? 'left-6 md:left-12 rotate-[6deg]' : 'right-6 md:right-12 rotate-[-6deg]'} opacity-[0.22] dark:opacity-[0.12] pointer-events-none select-none hidden md:block scale-95 transition-all duration-500`}>
          <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-xl">
            <img src="/slides/slide4.jpg" alt="Slide Watermark 4" className="w-[340px] lg:w-[460px] h-auto rounded-2xl object-cover" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.faqTitle}</span>
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2">
              {t.faqHeading}
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900/30 transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full px-6 py-5 flex justify-between items-center text-left font-medium text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                dir={t.dir}
              >
                <span className="text-base sm:text-lg">{t.faqQ1}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === 0 ? 'max-h-40 border-t border-neutral-100 dark:border-neutral-800' : 'max-h-0'
                }`}
              >
                <p className="px-6 py-4 text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed bg-neutral-50/50 dark:bg-neutral-950/20" dir={t.dir}>
                  {t.faqA1}
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900/30 transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-6 py-5 flex justify-between items-center text-left font-medium text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                dir={t.dir}
              >
                <span className="text-base sm:text-lg">{t.faqQ2}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === 1 ? 'max-h-40 border-t border-neutral-100 dark:border-neutral-800' : 'max-h-0'
                }`}
              >
                <p className="px-6 py-4 text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed bg-neutral-50/50 dark:bg-neutral-950/20" dir={t.dir}>
                  {t.faqA2}
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900/30 transition-all duration-300">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full px-6 py-5 flex justify-between items-center text-left font-medium text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                dir={t.dir}
              >
                <span className="text-base sm:text-lg">{t.faqQ3}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === 2 ? 'max-h-40 border-t border-neutral-100 dark:border-neutral-800' : 'max-h-0'
                }`}
              >
                <p className="px-6 py-4 text-sm text-[#6F6F6F] dark:text-neutral-400 leading-relaxed bg-neutral-50/50 dark:bg-neutral-950/20" dir={t.dir}>
                  {t.faqA3}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Technical PDF Downloads Center */}
      <section className="relative z-10 py-24 bg-neutral-50 dark:bg-[#0d0d0d] border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-8 text-center">
          
          <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.dlTitle}</span>
          <h2 className="text-4xl font-display font-normal text-black dark:text-white mt-2">
            {t.dlHeading}
          </h2>
          <p className="text-sm text-[#6F6F6F] dark:text-neutral-400 max-w-xl mx-auto mt-4 mb-12">
            {t.dlDesc}
          </p>

          {/* Main Project PDF Banner Card */}
          <div className="mb-12 p-8 rounded-3xl bg-[#FCFBF7] dark:bg-[#141411] border border-amber-100 dark:border-amber-900/30 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
            <div className={`space-y-2 ${lang === 'ar' ? 'text-right md:text-right' : 'text-left md:text-left'}`}>
              <h3 className="text-2xl font-display font-semibold text-black dark:text-white">{t.dlFileMain}</h3>
              <p className="text-sm text-[#6F6F6F] dark:text-neutral-400">{t.dlFileMainDesc}</p>
            </div>
            <a
              href="/Project Aura Powder 2026.pdf"
              download="Project_Aura_Powder_2026.pdf"
              className="rounded-full px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-md font-medium text-sm flex items-center justify-center gap-2 flex-shrink-0"
            >
              <FileDown className="w-4 h-4" /> {t.dlBtnMainText}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* File 1 */}
            <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center gap-6">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 rounded-2xl w-fit">
                <FileDown className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white">{t.dlFile1}</h4>
                <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-2">Format: PDF | Abstract text overview.</p>
              </div>
              <a
                href="/تقرير_ملخص_البحث_Aura_Powder.pdf"
                download="تقرير_ملخص_البحث_Aura_Powder.pdf"
                className="w-full rounded-full py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" /> {t.dlBtnText}
              </a>
            </div>

            {/* File 2 */}
            <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center gap-6">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit">
                <FileDown className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white">{t.dlFile2}</h4>
                <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-2">Format: PDF | Safety measures datasheets.</p>
              </div>
              <a
                href="/صحيفة_بيانات_السلامة_الكيميائية_Aura_Powder.pdf"
                download="صحيفة_بيانات_السلامة_الكيميائية_Aura_Powder.pdf"
                className="w-full rounded-full py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" /> {t.dlBtnText}
              </a>
            </div>

            {/* File 3 */}
            <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center gap-6">
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 rounded-2xl w-fit">
                <FileDown className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black dark:text-white">{t.dlFile3}</h4>
                <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-2">Format: PDF | Formulation sheet specifications.</p>
              </div>
              <a
                href="/ورقة_المواصفات_الفنية_Aura_Powder.pdf"
                download="ورقة_المواصفات_الفنية_Aura_Powder.pdf"
                className="w-full rounded-full py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" /> {t.dlBtnText}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Reach Us / Contact Section (No input forms, only direct contact buttons!) */}
      <section id="contact" className="relative z-10 py-24 bg-[#FFFFFF] dark:bg-[#070707] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          <span className="text-xs uppercase tracking-widest text-[#6F6F6F] dark:text-neutral-400 font-semibold">{t.contactTitle}</span>
          <h2 className="text-4xl sm:text-5xl font-display font-normal text-black dark:text-white mt-2 mb-4">
            {t.contactHeading}
          </h2>
          <p className="text-[#6F6F6F] dark:text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed">
            {t.contactDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/201141688840?text=Hello%20Basmala%20Mohammed,%20I%20am%20interested%20in%20your%20Aura%20Powder%20Project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-900/50 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.904-6.99C16.458 1.878 13.985 1.05 11.353 1.05c-5.44 0-9.865 4.422-9.869 9.866-.001 1.77.476 3.497 1.38 5.02L1.87 21.945l6.02-1.58-.243-.17z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">{t.whatsappTitle}</h3>
              <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-2 text-center">{t.whatsappDesc}</p>
            </a>

            {/* Direct Phone Call */}
            <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">{t.callTitle}</h3>
              <div className="mt-3 flex flex-col gap-1">
                <a href="tel:+201141688840" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  +20 114 168 8840
                </a>
                <a href="tel:+201064592367" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  +20 106 459 2367
                </a>
              </div>
            </div>

            {/* Direct Email */}
            <a
              href="mailto:bm522363@gmail.com"
              className="flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-sm hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-900/50 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">{t.emailTitle}</h3>
              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-2 hover:underline">{t.emailDesc}</p>
            </a>

          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-[#6F6F6F] dark:text-neutral-400">
            <MapPin className="w-4 h-4 text-neutral-500" />
            <span>{t.location}</span>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white dark:bg-[#070707] transition-colors duration-500 border-t border-neutral-100 dark:border-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-display tracking-tight text-black dark:text-white">Aura<sup>®</sup> Powder</p>
            <p className="text-xs text-[#6F6F6F] dark:text-neutral-400 mt-1">© 2026 Basmala Mohammed. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs text-[#6F6F6F] dark:text-neutral-400">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="hover:text-black dark:hover:text-white hover:underline">Home</a>
            <a href="#creator" onClick={(e) => { e.preventDefault(); handleNavClick('creator'); }} className="hover:text-black dark:hover:text-white hover:underline">Creator</a>
            <a href="#product" onClick={(e) => { e.preventDefault(); handleNavClick('product'); }} className="hover:text-black dark:hover:text-white hover:underline">Product</a>
            <a href="#slides" onClick={(e) => { e.preventDefault(); handleNavClick('slides'); }} className="hover:text-black dark:hover:text-white hover:underline">Slides</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="hover:text-black dark:hover:text-white hover:underline">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
