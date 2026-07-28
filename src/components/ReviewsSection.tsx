import { Star, CheckCircle2, Quote } from 'lucide-react';

interface ReviewsSectionProps {
  lang: 'en' | 'ar';
}

export default function ReviewsSection({ lang }: ReviewsSectionProps) {
  const content = {
    en: {
      tag: 'VERIFIED CUSTOMER EXPERIENCES',
      title: 'Loved by Eco-Conscious Beauties',
      sub: 'Real feedback from customers who transformed their daily shower routine with AURA®.',
      reviews: [
        {
          name: 'Farida M.',
          city: 'Cairo, Egypt',
          scent: 'Libre Purple Full Kit',
          rating: 5,
          text: 'Completely transformed my shower experience! The amber scent lasts all day long and the reusable bottle looks so luxurious in my bathroom.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        },
        {
          name: 'Kareem A.',
          city: 'Alexandria, Egypt',
          scent: 'Japanese Baby Blue Refill',
          rating: 5,
          text: 'The refill sachet concept is brilliant. I travel frequently for work and packing dry powder sachets saved so much space in my bag without leak worries!',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
        },
        {
          name: 'Mariam H.',
          city: 'Giza, Egypt',
          scent: 'Pomegranate Musk Gold Full Kit',
          rating: 5,
          text: 'The pomegranate musk smell is divine! It foams up so richly within a minute of shaking with warm water. Will never go back to plastic bottles.',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
        }
      ]
    },
    ar: {
      tag: 'تجارب العملاء الحقيقية',
      title: 'ماذا يقول عشاق أورا عن تجاربهم؟',
      titleHighlight: 'AURA REVIEWS',
      sub: 'آراء وتقييمات موثقة من زبائننا بعد استخدام الشاور جل الجاف والفورميلا المستدامة.',
      reviews: [
        {
          name: 'فريدة محمود',
          city: 'القاهرة، مصر',
          scent: 'Libre Purple Full Kit',
          rating: 5,
          text: 'غيرت تجربة الشاور بتاعتي تماماً! عطر العنبر بيثبت طول اليوم والعبوة شكلها شيك جداً وراقية في الحمام.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
        },
        {
          name: 'كريم عبد العزيز',
          city: 'الإسكندرية، مصر',
          scent: 'Japanese Baby Blue Refill',
          rating: 5,
          text: 'فكرة عبوات إعادة الملء (Refill) عبقرية! بمر بسفر كتير وبحط أكياس المسحوق الخفيفة في الحقيبة بدون أي خوف من تسرب السوائل.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
        },
        {
          name: 'مريم حسن',
          city: 'الجيزة، مصر',
          scent: 'Pomegranate Musk Gold Full Kit',
          rating: 5,
          text: 'ريحة الرمان مع المسك تجنن! الرغوة غنية وحريرية جداً من أول دقيقة رج بالماء الدافئ. مش هشتروا إزايز بلاستيك تاني أبداً.',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
        }
      ]
    }
  }[lang];

  return (
    <section className="py-24 px-4 sm:px-8 bg-[#FDFBF7] dark:bg-[#1A1918]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#A37F38] dark:text-[#C5A059] text-xs font-bold tracking-widest uppercase">
            <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
            <span>{content.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1A1918] dark:text-white">{content.title}</h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">{content.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.reviews.map((rev, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#F4EFE6] dark:bg-[#2A2928] border border-[#C5A059]/30 shadow-md space-y-6 flex flex-col justify-between relative group hover:border-[#C5A059] transition-all">
              <Quote className="w-10 h-10 text-[#C5A059]/20 absolute top-6 right-6" />
              
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-300 dark:border-neutral-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={rev.avatar} alt={rev.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#C5A059]" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1918] dark:text-white flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    </h4>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 block">{rev.city}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FDFBF7] dark:bg-[#1A1918] text-[10px] font-bold text-[#C5A059] border border-[#C5A059]/20">
                  {rev.scent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
