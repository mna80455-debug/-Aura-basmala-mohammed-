import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, ShoppingBag, Check } from 'lucide-react';

interface ScentQuizProps {
  lang: 'en' | 'ar';
  onAddToCart: (item: any) => void;
}

export default function ScentQuiz({ lang, onAddToCart }: ScentQuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [added, setAdded] = useState(false);

  const quiz = {
    en: {
      tag: 'SCENT FINDER QUIZ',
      title: 'Discover Your Signature AURA Scent',
      sub: 'Answer 3 quick questions to match your personality with the perfect dry powder fragrance.',
      restart: 'Take Quiz Again',
      addToCart: 'Add Recommended Set to Cart',
      addedText: 'Added to Cart!',
      questions: [
        {
          q: '1. What is your ideal daily shower mood?',
          options: [
            { text: 'Warm, calm evening relaxation', scent: 'libre' },
            { text: 'Fresh, uplifting morning boost', scent: 'japanese' },
            { text: 'Vibrant, luxurious & bold presence', scent: 'pomegranate' }
          ]
        },
        {
          q: '2. Which fragrance notes appeal to you most?',
          options: [
            { text: 'Warm Amber & Soft French Lavender', scent: 'libre' },
            { text: 'Delicate Japanese Cherry Blossoms', scent: 'japanese' },
            { text: 'Rich Natural Pomegranate & Golden Velvet Musk', scent: 'pomegranate' }
          ]
        },
        {
          q: '3. Where is your favorite weekend getaway?',
          options: [
            { text: 'Quiet spa retreat & cozy staycation', scent: 'libre' },
            { text: 'Nature walks, parks & fresh outdoor breeze', scent: 'japanese' },
            { text: 'High-end dining, celebrations & night events', scent: 'pomegranate' }
          ]
        }
      ],
      results: {
        libre: {
          name: 'Libre Purple Full Kit',
          scentName: 'Libre Purple',
          desc: 'Warm Amber & Soft Lavender. Perfect for deep evening relaxation and luxurious calm.',
          image: '/brand/prod_libre.jpg',
          price: 280,
          id: 'libre-full'
        },
        japanese: {
          name: 'Japanese Baby Blue Full Kit',
          scentName: 'Japanese Baby Blue',
          desc: 'Delicate Sakura Cherry Blossom. Ideal for fresh morning energy and uplifting vibes.',
          image: '/brand/prod_japanese.jpg',
          price: 280,
          id: 'japanese-full'
        },
        pomegranate: {
          name: 'Pomegranate Musk Gold Full Kit',
          scentName: 'Pomegranate Musk Gold',
          desc: 'Rich Pomegranate & Velvet Musk. Designed for bold, vibrant elegance and long-lasting luxury.',
          image: '/brand/prod_pomegranate.jpg',
          price: 280,
          id: 'pomegranate-full'
        }
      }
    },
    ar: {
      tag: 'اختبار العطر المناسب (QUIZ)',
      title: 'اكتشف العطر المثالي لشخصيتك',
      titleHighlight: 'FIND YOUR SCENT',
      sub: 'أجب على 3 أسئلة سريعة لنحدد لك العطر الأكثر ملاءمة لمزاجك وأسلوب حياتك.',
      restart: 'إعادة الاختبار',
      addToCart: 'إضافة العطر المقترح للسلة 🛒',
      addedText: 'تمت الإضافة للسلة! ✓',
      questions: [
        {
          q: '1. ما هو جو الاستحمام المفضل لديك؟',
          options: [
            { text: 'استرخاء دافئ وهدوء قبل النوم 🌙', scent: 'libre' },
            { text: 'انتعاش وحيوية ونضارة صباحية 🌸', scent: 'japanese' },
            { text: 'أناقة وفخامة وحضور قوي وملفت ✨', scent: 'pomegranate' }
          ]
        },
        {
          q: '2. أي من النوتات العطرية تجذبك أكثر؟',
          options: [
            { text: 'العنبر الدافئ واللافندر الفرنسي الناعم 💜', scent: 'libre' },
            { text: 'زهور الكرز الياباني (الساكورا) المنعشة 🌸', scent: 'japanese' },
            { text: 'الرمان الطبيعي الجذاب مع المسك الذهبي 🍇', scent: 'pomegranate' }
          ]
        },
        {
          q: '3. كيف تفضل قضاء عطلة نهاية الأسبوع؟',
          options: [
            { text: 'جلسة سبا واستجمام في المنزل 🛋️', scent: 'libre' },
            { text: 'رحلات ونزهات في الطبيعة والأنشطة الخرجية 🌿', scent: 'japanese' },
            { text: 'مناسبات وسهرات فاخرة وأماكن مميزة 🥂', scent: 'pomegranate' }
          ]
        }
      ],
      results: {
        libre: {
          name: 'Libre Purple Full Kit',
          scentName: 'Libre Purple (عنبر ولافندر)',
          desc: 'نوتات العنبر الدافئ واللافندر الفرنسي الناعم. خيارك المثالي للاسترخاء والهدوء الفاخر.',
          image: '/brand/prod_libre.jpg',
          price: 280,
          id: 'libre-full'
        },
        japanese: {
          name: 'Japanese Baby Blue Full Kit',
          scentName: 'Japanese Baby Blue (زهور الكرز)',
          desc: 'نوتات زهر الكرز الياباني المنعشة. خيارك المثالي لبداية يوم مفعمة بالحيوية والنضارة.',
          image: '/brand/prod_japanese.jpg',
          price: 280,
          id: 'japanese-full'
        },
        pomegranate: {
          name: 'Pomegranate Musk Gold Full Kit',
          scentName: 'Pomegranate Musk Gold (رمان ومسك)',
          desc: 'خلاصة الرمان الطبيعي والمسك المخملي الذهبي. خيارك المثالي لحضور جذاب وثابت طوال اليوم.',
          image: '/brand/prod_pomegranate.jpg',
          price: 280,
          id: 'pomegranate-full'
        }
      }
    }
  }[lang];

  const handleSelectOption = (index: number) => {
    const nextAnswers = [...answers, index];
    setAnswers(nextAnswers);
    if (step < quiz.questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(3); // Result step
    }
  };

  const getRecommendedScentKey = () => {
    const counts: Record<string, number> = { libre: 0, japanese: 0, pomegranate: 0 };
    answers.forEach((ansIdx, qIdx) => {
      const scent = quiz.questions[qIdx]?.options[ansIdx]?.scent;
      if (scent) counts[scent] = (counts[scent] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return (sorted[0]?.[0] || 'libre') as 'libre' | 'japanese' | 'pomegranate';
  };

  const resultKey = getRecommendedScentKey();
  const recommendedItem = quiz.results[resultKey];

  const handleAddToCartClick = () => {
    onAddToCart(recommendedItem);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setAdded(false);
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-[#F4EFE6] dark:bg-[#2A2928]/60">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#A37F38] dark:text-[#C5A059] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>{quiz.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1918] dark:text-white">{quiz.title}</h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">{quiz.sub}</p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#FDFBF7] dark:bg-[#1A1918] border border-[#C5A059]/30 shadow-xl relative overflow-hidden">
          {step < 3 ? (
            <div className="space-y-8">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-[#C5A059]">
                <span>Question {step + 1} of 3</span>
                <div className="w-32 h-2 rounded-full bg-[#F4EFE6] dark:bg-[#2A2928] overflow-hidden">
                  <div 
                    className="h-full bg-[#C5A059] transition-all duration-500" 
                    style={{ width: `${((step + 1) / 3) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1A1918] dark:text-white">
                {quiz.questions[step].q}
              </h3>

              <div className="space-y-4">
                {quiz.questions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full p-5 text-start font-bold text-base text-[#1A1918] dark:text-white rounded-2xl border border-[#C5A059]/30 bg-[#FDFBF7] dark:bg-[#1A1918] hover:bg-[#F4EFE6] dark:hover:bg-[#2A2928] hover:border-[#C5A059] transition-all duration-300 flex items-center justify-between group shadow-sm"
                  >
                    <span>{opt.text}</span>
                    <ArrowRight className="w-5 h-5 text-[#C5A059] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Check className="w-4 h-4" />
                <span>Your Ideal Match</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-start">
                <div className="md:col-span-5 flex justify-center">
                  <img 
                    src={recommendedItem.image} 
                    alt={recommendedItem.name} 
                    className="w-full max-w-xs aspect-square object-cover rounded-2xl border border-[#C5A059]/40 shadow-lg"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block">RECOMMENDED FOR YOU</span>
                  <h3 className="text-3xl font-serif font-bold text-[#1A1918] dark:text-white">{recommendedItem.scentName}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{recommendedItem.desc}</p>
                  
                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={handleAddToCartClick}
                      className={`px-8 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center gap-2 ${
                        added 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-[#1A1918] dark:bg-[#C5A059] text-white dark:text-[#1A1918] hover:scale-105'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{added ? quiz.addedText : quiz.addToCart}</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-bold text-neutral-600 dark:text-neutral-400 hover:text-[#1A1918] dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{quiz.restart}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
