import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, ChevronLeft, Star, Home, User, Bell, X } from 'lucide-react';

export default function BikesApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedBike, setSelectedBike] = useState(null);

  const categories = ['الكل', 'جبلية', 'كهربائية', 'سباق', 'أطفال'];

  const bikes = [
    { id: 1, name: 'Mountain X-Treme', price: 45000, rating: 4.8, image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=400', category: 'جبلية', desc: 'دراجة جبلية احترافية بهيكل من الألومنيوم المقوى ومساعدات أمامية مزدوجة لامتصاص الصدمات القوية.' },
    { id: 2, name: 'City Cruiser V2', price: 28000, rating: 4.5, image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400', category: 'الكل', desc: 'دراجة مدينة خفيفة الوزن مثالية للتنقلات اليومية السريعة والتمارين الصباحية.' },
    { id: 3, name: 'Speedster Pro', price: 65000, rating: 4.9, image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=400', category: 'سباق', desc: 'دراجة سباق ديناميكية بهيكل كربوني فائق الخفة، مصممة لكسر الأرقام القياسية على الطرق المعبدة.' },
    { id: 4, name: 'Eco Rider E-Bike', price: 85000, rating: 4.7, image: 'https://images.unsplash.com/photo-1576435728678-68ce0b622619?auto=format&fit=crop&q=80&w=400', category: 'كهربائية', desc: 'دراجة كهربائية ببطارية طويلة الأمد تدعمك في المرتفعات لتنقل أسهل وأكثر متعة.' },
    { id: 5, name: 'Kiddo Starter', price: 15000, rating: 4.6, image: 'https://images.unsplash.com/photo-1571188654261-2850983d9518?auto=format&fit=crop&q=80&w=400', category: 'أطفال', desc: 'دراجة آمنة جداً للأطفال لتعلم التوازن مع عجلات تدريب قابلة للإزالة.' },
  ];

  const filteredBikes = selectedCategory === 'الكل' ? bikes : bikes.filter(b => b.category === selectedCategory);

  const addToCart = (bike) => {
    setCart([...cart, bike]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      
      {/* Mobile Device Mockup */}
      <div style={{ width: '100%', maxWidth: '400px', height: '800px', backgroundColor: '#ffffff', borderRadius: '40px', overflow: 'hidden', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '8px solid #111' }}>
        
        {/* Dynamic Island */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '30px', backgroundColor: '#111', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 50 }}></div>

        {/* Header */}
        <div style={{ padding: '40px 20px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Link to="/" style={{ color: '#111', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', fontWeight: 'bold' }}>
              <ChevronLeft size={20} /> خروج
            </Link>
          </div>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={24} color="#111" />
            {cart.length > 0 && <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#f97316', color: 'white', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', fontWeight: 'bold' }}>{cart.length}</span>}
          </div>
        </div>

        {/* Main View */}
        {!selectedBike && (
          <div style={{ height: 'calc(100% - 160px)', overflowY: 'auto', padding: '0 20px', direction: 'rtl' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 5px 0', color: '#111' }}>اكتشف</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '300', margin: '0 0 20px 0', color: '#6b7280' }}>أفضل الدراجات</h2>

            {/* Search */}
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f3f4f6', borderRadius: '16px', padding: '12px 16px', marginBottom: '25px' }}>
              <Search size={20} color="#9ca3af" />
              <input type="text" placeholder="ابحث عن دراجتك..." style={{ border: 'none', background: 'transparent', outline: 'none', padding: '0 10px', width: '100%', fontFamily: 'inherit' }} />
            </div>

            {/* Categories */}
            <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '20px', scrollbarWidth: 'none' }}>
              {categories.map((cat, i) => (
                <button key={i} onClick={() => setSelectedCategory(cat)} style={{ padding: '8px 20px', borderRadius: '20px', border: 'none', backgroundColor: selectedCategory === cat ? '#111' : '#f3f4f6', color: selectedCategory === cat ? '#fff' : '#4b5563', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap', transition: '0.3s' }}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Products */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', paddingBottom: '20px' }}>
              {filteredBikes.map(bike => (
                <div key={bike.id} onClick={() => setSelectedBike(bike)} style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f3f4f6', cursor: 'pointer' }}>
                  <div style={{ position: 'relative', height: '120px', marginBottom: '10px' }}>
                    <img src={bike.image} alt={bike.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    <button onClick={(e) => { e.stopPropagation(); }} style={{ position: 'absolute', top: '8px', right: '8px', background: 'white', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      <Heart size={14} color="#ef4444" />
                    </button>
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: '0 0 5px 0', color: '#111' }}>{bike.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <Star size={12} color="#fbbf24" fill="#fbbf24" />
                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{bike.rating}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '800', color: '#f97316', fontSize: '0.9rem', direction: 'ltr' }}>{bike.price} د.ج</span>
                    <button onClick={(e) => { e.stopPropagation(); addToCart(bike); }} style={{ background: '#111', color: 'white', border: 'none', borderRadius: '8px', width: '28px', height: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>+</button>
                  </div>
                </div>
              ))}
              {filteredBikes.length === 0 && <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#9ca3af' }}>لا توجد دراجات في هذا التصنيف.</p>}
            </div>
          </div>
        )}

        {/* Product Details View */}
        {selectedBike && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fff', zIndex: 40, direction: 'rtl', overflowY: 'auto' }}>
            <div style={{ position: 'relative', height: '400px' }}>
              <img src={selectedBike.image} alt={selectedBike.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button onClick={() => setSelectedBike(null)} style={{ position: 'absolute', top: '50px', right: '20px', background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <ChevronLeft size={24} />
              </button>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '30px 30px 0 0', marginTop: '-30px', position: 'relative', zIndex: 41 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>{selectedBike.name}</h1>
                <Star size={20} color="#fbbf24" fill="#fbbf24" />
              </div>
              <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#f97316', margin: '0 0 20px 0', direction: 'ltr', textAlign: 'right' }}>{selectedBike.price} د.ج</p>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 10px 0' }}>التفاصيل:</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '30px' }}>{selectedBike.desc}</p>
              <button onClick={() => { addToCart(selectedBike); setSelectedBike(null); }} style={{ width: '100%', backgroundColor: '#111', color: 'white', border: 'none', padding: '15px', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                أضف إلى السلة
              </button>
            </div>
          </div>
        )}

        {/* Cart Drawer */}
        <div style={{ position: 'absolute', bottom: isCartOpen ? 0 : '-100%', left: 0, width: '100%', height: '80%', backgroundColor: '#fff', borderRadius: '30px 30px 0 0', boxShadow: '0 -10px 40px rgba(0,0,0,0.2)', transition: 'bottom 0.3s ease-in-out', zIndex: 60, padding: '20px', direction: 'rtl', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>سلة المشتريات</h2>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {cart.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#9ca3af' }}>
                <ShoppingCart size={48} style={{ marginBottom: '10px', opacity: 0.5 }} />
                <p>السلة فارغة</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {cart.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#f9fafb', padding: '10px', borderRadius: '12px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>{item.name}</h4>
                      <p style={{ margin: 0, color: '#f97316', fontWeight: 'bold', direction: 'ltr', textAlign: 'right' }}>{item.price} د.ج</p>
                    </div>
                    <button onClick={() => removeFromCart(index)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><X size={16} /></button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span>الإجمالي:</span>
                <span style={{ color: '#f97316', direction: 'ltr' }}>{cartTotal} د.ج</span>
              </div>
              <button style={{ width: '100%', backgroundColor: '#f97316', color: 'white', border: 'none', padding: '15px', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                تأكيد الطلب
              </button>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '70px', backgroundColor: '#fff', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '10px' }}>
          {[
            { id: 'home', icon: Home },
            { id: 'favorites', icon: Heart },
            { id: 'notifications', icon: Bell },
            { id: 'profile', icon: User }
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: activeTab === item.id ? '#f97316' : '#9ca3af' }}>
              <item.icon size={24} />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
