import { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, MessageCircle, Truck, Check } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  scentName?: string;
  price: number;
  image: string;
  quantity: number;
  type?: 'kit' | 'refill' | 'bundle';
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  lang: 'en' | 'ar';
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  lang
}: CartDrawerProps) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custGov, setCustGov] = useState('Cairo');
  const [custAddress, setCustAddress] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 400;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = subtotal > 0 && !isFreeShipping ? 50 : 0;
  const total = subtotal + shippingCost;

  const text = {
    en: {
      title: 'Shopping Cart',
      empty: 'Your cart is currently empty.',
      explore: 'Explore Collection',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      freeShipping: 'FREE',
      total: 'Total',
      freeShippingBar: (needed: number) => `Add ${needed} EGP more to get FREE Delivery! 🚛`,
      freeShippingQualified: '🎉 You have qualified for FREE Shipping!',
      checkoutBtn: 'Proceed to Checkout via WhatsApp',
      checkoutTitle: 'Express Checkout',
      checkoutSub: 'Enter your delivery details to send your order directly to our WhatsApp team.',
      nameLabel: 'Full Name:',
      phoneLabel: 'Phone Number (WhatsApp):',
      govLabel: 'Governorate:',
      addressLabel: 'Detailed Address:',
      sendWhatsappBtn: 'Send Order Details to WhatsApp 💬',
      paymentMethod: 'Payment: Cash on Delivery (COD)'
    },
    ar: {
      title: 'سلة التسوق (CART)',
      empty: 'سلة التسوق فارغة حالياً.',
      explore: 'استكشف المجموعة',
      subtotal: 'المجموع الفرعي',
      shipping: 'الشحن',
      freeShipping: 'مجاناً 🎁',
      total: 'الإجمالي النهائي',
      freeShippingBar: (needed: number) => `أضف بقيمة ${needed} ج.م للحصول على شحن مجاني 🚛`,
      freeShippingQualified: '🎉 تهانينا! حصلت على شحن مجاني لجميع المحافظات!',
      checkoutBtn: 'متابعة الشراء وإرسال الطلب عبر الواتساب 💬',
      checkoutTitle: 'إتمام الطلب السريع (EXPRESS ORDER)',
      checkoutSub: 'أدخل بيانات التوصيل لإرسال فاتورة الطلب مباشرة لفرق عمل أورا عبر الواتساب.',
      nameLabel: 'الاسم بالكامل:',
      phoneLabel: 'رقم الموبايل (واتساب):',
      govLabel: 'المحافظة:',
      addressLabel: 'العنوان التفصيلي:',
      sendWhatsappBtn: 'تأكيد وإرسال الفاتورة عبر الواتساب 💬',
      paymentMethod: 'طريقة الدفع: الدفع عند الاستلام (Cash on Delivery)'
    }
  }[lang];

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName || !custPhone || !custAddress) {
      alert(lang === 'ar' ? 'برجاء استكمال جميع البيانات الأساسية (الاسم، الهاتف، والعنوان)' : 'Please fill out all required fields');
      return;
    }

    let itemsSummary = items.map(item => `• ${item.name} (${item.quantity}x) = ${item.price * item.quantity} EGP`).join('\n');
    
    const message = `✨ *طلب جديد من متجر AURA Official Store* ✨\n\n` +
      `👤 *الاسم:* ${custName}\n` +
      `📞 *رقم الموبايل:* ${custPhone}\n` +
      `📍 *المحافظة والعنوان:* ${custGov} - ${custAddress}\n\n` +
      `🛍️ *المنتجات المطلوبة:*\n${itemsSummary}\n\n` +
      `💵 *المجموع:* ${subtotal} EGP\n` +
      `🚚 *الشحن:* ${shippingCost === 0 ? 'مجاني' : `${shippingCost} EGP`}\n` +
      `💰 *الإجمالي النهائي:* ${total} EGP\n\n` +
      `💳 *طريقة الدفع:* الدفع عند الاستلام (Cash on Delivery)\n` +
      `شكراً لكم!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/201553543629?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] dark:bg-[#1A1918] text-[#1A1918] dark:text-[#FDFBF7] shadow-2xl flex flex-col justify-between border-l border-[#C5A059]/30">
          
          {/* Header */}
          <div className="p-6 border-b border-[#C5A059]/20 flex justify-between items-center bg-[#F4EFE6] dark:bg-[#2A2928]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h2 className="text-xl font-serif font-bold tracking-wide">{text.title}</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-white text-xs font-bold">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5 text-[#C5A059]" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          {subtotal > 0 && (
            <div className="bg-[#1A1918] text-white text-xs font-bold py-2.5 px-6 flex items-center justify-between border-b border-[#C5A059]/20">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C5A059]" />
                <span>
                  {!isFreeShipping 
                    ? text.freeShippingBar(freeShippingThreshold - subtotal) 
                    : text.freeShippingQualified
                  }
                </span>
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {!showCheckout ? (
              items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-20 h-20 rounded-full bg-[#F4EFE6] dark:bg-[#2A2928] flex items-center justify-center border border-[#C5A059]/30">
                    <ShoppingBag className="w-10 h-10 text-[#C5A059]" />
                  </div>
                  <p className="text-base text-neutral-500 font-medium">{text.empty}</p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-full bg-[#1A1918] dark:bg-[#C5A059] text-white dark:text-[#1A1918] text-xs font-bold tracking-wider uppercase hover:scale-105 transition-all"
                  >
                    {text.explore}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div 
                      key={item.id}
                      className="p-4 rounded-2xl bg-[#F4EFE6] dark:bg-[#2A2928] border border-[#C5A059]/30 flex items-center gap-4 shadow-sm"
                    >
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-[#C5A059]/40 shrink-0" />
                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="text-sm font-bold text-[#1A1918] dark:text-white truncate">{item.name}</h4>
                        <span className="text-xs text-[#C5A059] font-bold block">{item.price} EGP</span>
                        <div className="flex items-center gap-3 pt-1">
                          <div className="flex items-center border border-[#C5A059]/40 rounded-full bg-[#FDFBF7] dark:bg-[#1A1918]">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="px-2 py-0.5 text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:text-[#C5A059]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#1A1918] dark:text-white">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="px-2 py-0.5 text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:text-[#C5A059]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemoveItem(item.id)}
                            className="text-rose-500 hover:text-rose-700 text-xs font-bold"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              /* Express WhatsApp Checkout Form */
              <form onSubmit={handleSendWhatsAppOrder} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-serif font-bold text-[#1A1918] dark:text-white">{text.checkoutTitle}</h3>
                  <p className="text-xs text-neutral-500">{text.checkoutSub}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1918] dark:text-white mb-1">{text.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={custName}
                      onChange={e => setCustName(e.target.value)}
                      placeholder="أدخل اسمك بالكامل"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FDFBF7] dark:bg-[#1A1918] text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1918] dark:text-white mb-1">{text.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      value={custPhone}
                      onChange={e => setCustPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FDFBF7] dark:bg-[#1A1918] text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1918] dark:text-white mb-1">{text.govLabel}</label>
                    <select
                      value={custGov}
                      onChange={e => setCustGov(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FDFBF7] dark:bg-[#1A1918] text-sm focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Cairo">القاهرة (Cairo)</option>
                      <option value="Giza">الجيزة (Giza)</option>
                      <option value="Alexandria">الإسكندرية (Alexandria)</option>
                      <option value="Dakahlia">الدقهلية (Mansoura)</option>
                      <option value="Sharqia">الشرقية</option>
                      <option value="Gharbia">الغربية (Tanta)</option>
                      <option value="Other">باقي المحافظات</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1918] dark:text-white mb-1">{text.addressLabel}</label>
                    <textarea
                      required
                      rows={2}
                      value={custAddress}
                      onChange={e => setCustAddress(e.target.value)}
                      placeholder="المنطقة، الشارع، رقم العمارة والشقة"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FDFBF7] dark:bg-[#1A1918] text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold text-center">
                  💵 {text.paymentMethod}
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="w-1/3 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-bold"
                  >
                    رجوع
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{text.sendWhatsappBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer Summary & Checkout Trigger */}
          {items.length > 0 && !showCheckout && (
            <div className="p-6 border-t border-[#C5A059]/20 bg-[#F4EFE6] dark:bg-[#2A2928] space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>{text.subtotal}</span>
                  <span className="font-bold text-[#1A1918] dark:text-white">{subtotal} EGP</span>
                </div>
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>{text.shipping}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {shippingCost === 0 ? text.freeShipping : `${shippingCost} EGP`}
                  </span>
                </div>
                <div className="pt-2 border-t border-neutral-300 dark:border-neutral-700 flex justify-between text-base font-bold text-[#1A1918] dark:text-white">
                  <span>{text.total}</span>
                  <span className="text-[#C5A059] text-xl font-serif">{total} EGP</span>
                </div>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="w-full py-4 rounded-full bg-[#1A1918] dark:bg-[#C5A059] text-white dark:text-[#1A1918] text-sm font-bold tracking-wider uppercase hover:bg-[#C5A059] dark:hover:bg-[#FDFBF7] transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>{text.checkoutBtn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
