import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Calendar, Settings, Bell, Search, LayoutDashboard, DoorOpen, LogOut, ChevronLeft, Plus, Edit, Trash2 } from 'lucide-react';

export default function HostelsDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'إجمالي الغرف', value: '120', color: '#3b82f6' },
    { title: 'الغرف الشاغرة', value: '45', color: '#10b981' },
    { title: 'النزلاء الحاليون', value: '185', color: '#8b5cf6' },
    { title: 'حجوزات اليوم', value: '12', color: '#f59e0b' },
  ];

  const recentBookings = [
    { id: 'B-1001', name: 'أحمد سعيد', room: '102 (مفردة)', checkIn: '2023-10-15', status: 'مؤكد' },
    { id: 'B-1002', name: 'ياسين محمد', room: '205 (مزدوجة)', checkIn: '2023-10-16', status: 'قيد الانتظار' },
    { id: 'B-1003', name: 'كريم مصطفى', room: '110 (مشتركة)', checkIn: '2023-10-15', status: 'مؤكد' },
    { id: 'B-1004', name: 'عصام الدين', room: '304 (مفردة)', checkIn: '2023-10-17', status: 'مؤكد' },
  ];

  const roomsData = [
    { num: '101', type: 'مفردة', status: 'مشغولة', price: '1500 د.ج' },
    { num: '102', type: 'مزدوجة', status: 'شاغرة', price: '2500 د.ج' },
    { num: '103', type: 'مشتركة (4)', status: 'تنظيف', price: '800 د.ج/سرير' },
    { num: '104', type: 'مفردة', status: 'شاغرة', price: '1500 د.ج' },
    { num: '201', type: 'جناح', status: 'مشغولة', price: '4500 د.ج' },
    { num: '202', type: 'مزدوجة', status: 'شاغرة', price: '2500 د.ج' },
  ];

  const guestsData = [
    { id: 1, name: 'أحمد سعيد', nat: 'جزائري', phone: '0555123456', room: '101', checkIn: '12 أكتوبر' },
    { id: 2, name: 'جون دو', nat: 'فرنسي', phone: '+33612345678', room: '201', checkIn: '10 أكتوبر' },
    { id: 3, name: 'سارة علي', nat: 'تونسية', phone: '+21698765432', room: '103', checkIn: '14 أكتوبر' },
  ];

  return (
    <div className="hostels-container" style={{ backgroundColor: '#f0f9ff', minHeight: '100vh', display: 'flex', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <style>{`
        .hostels-container { flex-direction: row; }
        .hostels-sidebar { width: 280px; border-left: 1px solid #e0f2fe; z-index: 10; box-shadow: 2px 0 10px rgba(0,0,0,0.02); }
        .hostels-topbar { height: 80px; padding: 0 40px; display: flex; justify-content: space-between; align-items: center; }
        .hostels-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .hostels-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
        .hostels-rooms { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .hostels-search { width: 400px; }
        
        @media (max-width: 1200px) {
          .hostels-stats { grid-template-columns: repeat(2, 1fr); }
          .hostels-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .hostels-container { flex-direction: column; }
          .hostels-sidebar { width: 100%; border-left: none; border-bottom: 1px solid #e0f2fe; }
          .hostels-stats { grid-template-columns: 1fr; }
          .hostels-topbar { flex-direction: column; height: auto; gap: 15px; padding: 20px; align-items: stretch; }
          .hostels-search { width: 100%; }
        }
      `}</style>
      
      {/* Sidebar */}
      <div className="hostels-sidebar" style={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', padding: '20px 0' }}>
        <div style={{ padding: '0 20px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#3b82f6', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
            YH
          </div>
          <h2 style={{ fontSize: '1.2rem', margin: 0, color: '#0f172a' }}>بيوت الشباب</h2>
        </div>

        <div style={{ padding: '0 20px', marginBottom: '20px' }}>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'bold', marginBottom: '10px' }}>القائمة الرئيسية</p>
          {[
            { id: 'dashboard', label: 'لوحة القيادة', icon: LayoutDashboard },
            { id: 'rooms', label: 'إدارة الغرف', icon: DoorOpen },
            { id: 'guests', label: 'النزلاء', icon: Users },
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '10px', border: 'none', backgroundColor: activeTab === item.id ? '#eff6ff' : 'transparent', color: activeTab === item.id ? '#3b82f6' : '#64748b', fontWeight: activeTab === item.id ? 'bold' : 'normal', cursor: 'pointer', marginBottom: '5px', transition: '0.2s' }}>
              <item.icon size={20} />
              <span style={{ fontSize: '1rem' }}>{item.label}</span>
            </button>
          ))}
        </div>

        <div style={{ padding: '0 20px', marginTop: 'auto' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px', borderRadius: '10px', border: 'none', backgroundColor: '#fee2e2', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }}>
              <ChevronLeft size={20} /> <span style={{ fontSize: '1rem' }}>عودة للمعرض</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        
      <div style={{ flex: 1, overflowY: 'auto' }}>
        
        {/* Top Navbar */}
        <div className="hostels-topbar" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e0f2fe' }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0, color: '#0f172a' }}>
            {activeTab === 'dashboard' && 'لوحة القيادة (نظرة عامة)'}
            {activeTab === 'rooms' && 'إدارة الغرف'}
            {activeTab === 'guests' && 'سجل النزلاء'}
          </h1>
          <div className="hostels-search" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f9ff', padding: '10px 15px', borderRadius: '10px' }}>
            <Search size={18} color="#94a3b8" style={{ marginLeft: '10px' }} />
            <input type="text" placeholder="بحث عن حجز، نزيل، غرفة..." style={{ border: 'none', background: 'transparent', outline: 'none', padding: '0 10px', width: '100%' }} />
          </div>
            <button style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', position: 'relative' }}>
              <Bell size={20} color="#64748b" />
              <span style={{ position: 'absolute', top: '8px', right: '10px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
            </button>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <>
            <div className="hostels-stats" style={{ marginBottom: '40px' }}>
              {stats.map((stat, i) => (
                <div key={i} style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: `4px solid ${stat.color}` }}>
                  <span style={{ color: '#64748b', fontSize: '1rem', fontWeight: 'bold' }}>{stat.title}</span>
                  <span style={{ color: '#0f172a', fontSize: '2.5rem', fontWeight: '800' }}>{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="hostels-grid">
              <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>أحدث الحجوزات</h3>
                  <button style={{ background: 'transparent', border: 'none', color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer' }}>عرض الكل</button>
                </div>
                
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.9rem' }}>
                      <th style={{ padding: '12px 0' }}>رقم الحجز</th>
                      <th style={{ padding: '12px 0' }}>اسم النزيل</th>
                      <th style={{ padding: '12px 0' }}>الغرفة</th>
                      <th style={{ padding: '12px 0' }}>تاريخ الدخول</th>
                      <th style={{ padding: '12px 0' }}>الحالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '15px 0', fontWeight: 'bold', color: '#0f172a' }}>{booking.id}</td>
                        <td style={{ padding: '15px 0', color: '#334155' }}>{booking.name}</td>
                        <td style={{ padding: '15px 0', color: '#334155' }}>{booking.room}</td>
                        <td style={{ padding: '15px 0', color: '#334155' }}>{booking.checkIn}</td>
                        <td style={{ padding: '15px 0' }}>
                          <span style={{ backgroundColor: booking.status === 'مؤكد' ? '#dcfce7' : '#fef9c3', color: booking.status === 'مؤكد' ? '#166534' : '#854d0e', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ backgroundColor: '#3b82f6', padding: '30px', borderRadius: '16px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.4)' }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem' }}>إضافة حجز جديد</h3>
                  <button style={{ backgroundColor: '#ffffff', color: '#3b82f6', border: 'none', padding: '12px 30px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', marginTop: '10px' }}>+ حجز جديد</button>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '1.2rem', color: '#0f172a' }}>نسبة الإشغال</h3>
                  <div style={{ display: 'flex', alignItems: 'flex-end', height: '150px', gap: '15px' }}>
                    {[60, 80, 40, 90, 70, 100, 50].map((h, i) => (
                      <div key={i} style={{ flex: 1, backgroundColor: i === 5 ? '#3b82f6' : '#e2e8f0', height: `${h}%`, borderRadius: '4px 4px 0 0', position: 'relative' }}>
                        <span style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: '#64748b' }}>{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Rooms View */}
        {activeTab === 'rooms' && (
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
               <h3 style={{ margin: 0, fontSize: '1.2rem' }}>الشبكة الحالية للغرف</h3>
               <button style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer' }}><Plus size={16}/> إضافة غرفة</button>
             </div>
             <div className="hostels-rooms">
               {roomsData.map((room, i) => (
                 <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', backgroundColor: room.status === 'شاغرة' ? '#10b981' : room.status === 'مشغولة' ? '#ef4444' : '#f59e0b' }}></div>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                     <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#0f172a' }}>{room.num}</h2>
                     <span style={{ backgroundColor: '#f1f5f9', color: '#64748b', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem' }}>{room.type}</span>
                   </div>
                   <p style={{ margin: '0 0 10px 0', color: '#64748b', fontSize: '0.9rem' }}>السعر: <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{room.price}</span></p>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ color: room.status === 'شاغرة' ? '#10b981' : room.status === 'مشغولة' ? '#ef4444' : '#f59e0b', fontWeight: 'bold', fontSize: '0.9rem' }}>{room.status}</span>
                     <div style={{ display: 'flex', gap: '5px' }}>
                       <button style={{ background: '#f1f5f9', border: 'none', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}><Edit size={14} color="#64748b"/></button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* Guests View */}
        {activeTab === 'guests' && (
          <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
               <h3 style={{ margin: 0, fontSize: '1.2rem' }}>النزلاء الحاليون</h3>
             </div>
             <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.9rem', backgroundColor: '#f8fafc' }}>
                  <th style={{ padding: '12px 15px' }}>الاسم الكامل</th>
                  <th style={{ padding: '12px 15px' }}>الجنسية</th>
                  <th style={{ padding: '12px 15px' }}>رقم الهاتف</th>
                  <th style={{ padding: '12px 15px' }}>الغرفة</th>
                  <th style={{ padding: '12px 15px' }}>تاريخ الدخول</th>
                  <th style={{ padding: '12px 15px' }}>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {guestsData.map((guest, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '15px', fontWeight: 'bold', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '30px', height: '30px', backgroundColor: '#e0f2fe', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0284c7' }}>{guest.name.charAt(0)}</div>
                      {guest.name}
                    </td>
                    <td style={{ padding: '15px', color: '#334155' }}>{guest.nat}</td>
                    <td style={{ padding: '15px', color: '#334155', direction: 'ltr', textAlign: 'right' }}>{guest.phone}</td>
                    <td style={{ padding: '15px', color: '#0f172a', fontWeight: 'bold' }}>{guest.room}</td>
                    <td style={{ padding: '15px', color: '#334155' }}>{guest.checkIn}</td>
                    <td style={{ padding: '15px' }}>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button style={{ background: '#f1f5f9', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#3b82f6' }} title="تعديل"><Edit size={16} /></button>
                        <button style={{ background: '#fee2e2', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }} title="تسجيل خروج"><LogOut size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
