import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, TrendingUp, AlertTriangle, Box, ChevronLeft, ShoppingCart, Users, Settings, Search, Plus, Download, BarChart2 } from 'lucide-react';

export default function BMStockingApp() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  const stats = [
    { title: 'إجمالي المنتجات', value: '1,245', icon: Box, color: '#3b82f6' },
    { title: 'منتجات منخفضة', value: '23', icon: AlertTriangle, color: '#f59e0b' },
    { title: 'قيمة المخزون', value: '4.5M د.ج', icon: TrendingUp, color: '#10b981' },
    { title: 'طلبيات اليوم', value: '15', icon: ShoppingCart, color: '#8b5cf6' },
  ];

  const inventory = [
    { id: 'PRD-001', name: 'لوحة أم ASUS ROG', category: 'إلكترونيات', quantity: 45, price: '35,000', status: 'جيد' },
    { id: 'PRD-002', name: 'معالج Intel i7 13th', category: 'إلكترونيات', quantity: 12, price: '65,000', status: 'جيد' },
    { id: 'PRD-003', name: 'شاشة Dell 27"', category: 'شاشات', quantity: 4, price: '42,000', status: 'منخفض' },
    { id: 'PRD-004', name: 'لوحة مفاتيح ميكانيكية', category: 'إكسسوارات', quantity: 120, price: '8,500', status: 'جيد' },
    { id: 'PRD-005', name: 'قرص صلب SSD 1TB', category: 'تخزين', quantity: 0, price: '12,000', status: 'نفذ' },
  ];

  return (
    <div style={{ backgroundColor: '#111827', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'rtl', color: '#f3f4f6', display: 'flex' }}>
      
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#1f2937', borderLeft: '1px solid #374151', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #374151', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#3b82f6', padding: '10px', borderRadius: '10px' }}>
            <Package size={24} color="white" />
          </div>
          <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', letterSpacing: '1px' }}>BM Stocking</h2>
        </div>

        <div style={{ padding: '0 15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {[
            { id: 'dashboard', label: 'لوحة القيادة', icon: BarChart2 },
            { id: 'products', label: 'إدارة المنتجات', icon: Box },
            { id: 'orders', label: 'الطلبيات', icon: ShoppingCart },
            { id: 'suppliers', label: 'الموردين', icon: Users },
            { id: 'settings', label: 'الإعدادات', icon: Settings },
          ].map(item => (
            <button key={item.id} onClick={() => setActiveMenu(item.id)} style={{ width: '100%', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: activeMenu === item.id ? '#374151' : 'transparent', color: activeMenu === item.id ? '#60a5fa' : '#9ca3af', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: activeMenu === item.id ? 'bold' : 'normal', transition: '0.2s' }}>
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #374151' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#ef444420', color: '#ef4444', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
              <ChevronLeft size={20} /> خروج من النظام
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        
        {/* Header */}
        <div style={{ height: '70px', backgroundColor: '#1f2937', borderBottom: '1px solid #374151', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px' }}>
          <h1 style={{ fontSize: '1.4rem', margin: 0, fontWeight: 'bold' }}>
            {activeMenu === 'dashboard' ? 'نظرة عامة على المستودع' : 'إدارة المنتجات والمخزون'}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#111827', borderRadius: '8px', padding: '8px 15px', border: '1px solid #374151' }}>
              <Search size={18} color="#6b7280" />
              <input type="text" placeholder="بحث برقم الباركود..." style={{ border: 'none', background: 'transparent', outline: 'none', color: '#f3f4f6', padding: '0 10px', width: '200px' }} />
            </div>
          </div>
        </div>

        {/* Dashboard Area */}
        <div style={{ padding: '30px', overflowY: 'auto', flex: 1 }}>
          {activeMenu === 'dashboard' ? (
            <>
              {/* Stats Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '40px' }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ backgroundColor: '#1f2937', padding: '25px', borderRadius: '16px', border: '1px solid #374151', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ color: '#9ca3af', margin: '0 0 10px 0', fontSize: '0.9rem' }}>{stat.title}</p>
                      <h3 style={{ color: 'white', margin: 0, fontSize: '1.8rem', fontWeight: 'bold' }}>{stat.value}</h3>
                    </div>
                    <div style={{ backgroundColor: `${stat.color}20`, padding: '15px', borderRadius: '12px' }}>
                      <stat.icon size={28} color={stat.color} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Area */}
              <div style={{ backgroundColor: '#1f2937', borderRadius: '16px', border: '1px solid #374151', overflow: 'hidden' }}>
                <div style={{ padding: '20px 25px', borderBottom: '1px solid #374151', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>أحدث حركة المخزون</h3>
                  <button style={{ backgroundColor: '#374151', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <Download size={16} /> تصدير التقرير
                  </button>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#111827', color: '#9ca3af', fontSize: '0.9rem' }}>
                      <th style={{ padding: '15px 25px' }}>كود المنتج</th>
                      <th style={{ padding: '15px 25px' }}>اسم المنتج</th>
                      <th style={{ padding: '15px 25px' }}>التصنيف</th>
                      <th style={{ padding: '15px 25px' }}>الكمية المتوفرة</th>
                      <th style={{ padding: '15px 25px' }}>سعر الوحدة</th>
                      <th style={{ padding: '15px 25px' }}>حالة المخزون</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventory.map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #374151', backgroundColor: i % 2 === 0 ? 'transparent' : '#11182750' }}>
                        <td style={{ padding: '15px 25px', color: '#60a5fa', fontWeight: 'bold' }}>{item.id}</td>
                        <td style={{ padding: '15px 25px', color: 'white' }}>{item.name}</td>
                        <td style={{ padding: '15px 25px', color: '#9ca3af' }}>{item.category}</td>
                        <td style={{ padding: '15px 25px', fontWeight: 'bold', color: item.quantity === 0 ? '#ef4444' : 'white' }}>{item.quantity}</td>
                        <td style={{ padding: '15px 25px', color: '#9ca3af', direction: 'ltr', textAlign: 'right' }}>{item.price} DA</td>
                        <td style={{ padding: '15px 25px' }}>
                          <span style={{ 
                            padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold',
                            backgroundColor: item.status === 'جيد' ? '#10b98120' : item.status === 'منخفض' ? '#f59e0b20' : '#ef444420',
                            color: item.status === 'جيد' ? '#10b981' : item.status === 'منخفض' ? '#f59e0b' : '#ef4444'
                          }}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', color: '#6b7280' }}>
              <Package size={64} style={{ marginBottom: '20px', opacity: 0.5 }} />
              <h2 style={{ margin: 0 }}>يتم عرض لوحة القيادة في هذه المعاينة</h2>
              <p>اضغط على "لوحة القيادة" للعودة.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
