import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Search, Plus, User, FileText, Glasses, Calendar, Settings, ChevronLeft, Check } from 'lucide-react';

export default function OpticaSysApp() {
  const [activeTab, setActiveTab] = useState('patients');

  const patients = [
    { id: 'PT-1001', name: 'كمال محمود', phone: '0551234567', lastVisit: '2023-10-10', doctor: 'د. سمير' },
    { id: 'PT-1002', name: 'فريدة شريف', phone: '0669876543', lastVisit: '2023-10-12', doctor: 'د. ليلى' },
    { id: 'PT-1003', name: 'رياض ناصر', phone: '0770112233', lastVisit: '2023-10-14', doctor: 'د. سمير' },
    { id: 'PT-1004', name: 'أمل خالد', phone: '0555998877', lastVisit: '2023-10-15', doctor: 'د. ليلى' },
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'rtl', display: 'flex' }}>
      
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#ffffff', borderLeft: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #f3f4f6', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#0284c7', padding: '10px', borderRadius: '12px' }}>
            <Eye size={24} color="white" />
          </div>
          <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a', fontWeight: '800' }}>Optica-Sys</h2>
        </div>

        <div style={{ padding: '0 15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: 'patients', label: 'ملفات المرضى', icon: User },
            { id: 'inventory', label: 'مخزون النظارات', icon: Glasses },
            { id: 'sales', label: 'المبيعات والفواتير', icon: FileText },
            { id: 'appointments', label: 'المواعيد', icon: Calendar },
            { id: 'settings', label: 'الإعدادات', icon: Settings },
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} style={{ width: '100%', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: activeTab === item.id ? '#f0f9ff' : 'transparent', color: activeTab === item.id ? '#0284c7' : '#64748b', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: activeTab === item.id ? 'bold' : 'normal', transition: '0.2s' }}>
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #f3f4f6' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>
              <ChevronLeft size={20} /> خروج من النظام
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{ height: '80px', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '12px', padding: '10px 15px', width: '350px' }}>
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="ابحث عن مريض بالاسم أو الهاتف..." style={{ border: 'none', background: 'transparent', outline: 'none', padding: '0 10px', width: '100%', color: '#334155' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0, color: '#0f172a', fontSize: '0.9rem' }}>مركز البصريات الحديث</h4>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>فرع العاصمة</p>
            </div>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#0284c7', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
              MH
            </div>
          </div>
        </div>

        {/* Dashboard Area */}
        <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
          
          {activeTab === 'patients' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ fontSize: '1.8rem', color: '#0f172a', margin: 0 }}>إدارة ملفات المرضى</h1>
                <button style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(2, 132, 199, 0.2)' }}>
                  <Plus size={20} /> إضافة مريض جديد
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
                
                {/* Patients Table */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc', color: '#64748b', fontSize: '0.9rem' }}>
                        <th style={{ padding: '15px 20px' }}>رقم الملف</th>
                        <th style={{ padding: '15px 20px' }}>اسم المريض</th>
                        <th style={{ padding: '15px 20px' }}>رقم الهاتف</th>
                        <th style={{ padding: '15px 20px' }}>آخر زيارة</th>
                        <th style={{ padding: '15px 20px' }}>الطبيب المعالج</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((p, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', cursor: 'pointer', backgroundColor: i === 0 ? '#f0f9ff' : 'transparent' }}>
                          <td style={{ padding: '15px 20px', fontWeight: 'bold', color: '#0284c7' }}>{p.id}</td>
                          <td style={{ padding: '15px 20px', color: '#0f172a', fontWeight: i === 0 ? 'bold' : 'normal' }}>{p.name}</td>
                          <td style={{ padding: '15px 20px', color: '#64748b' }}>{p.phone}</td>
                          <td style={{ padding: '15px 20px', color: '#64748b' }}>{p.lastVisit}</td>
                          <td style={{ padding: '15px 20px', color: '#475569' }}>{p.doctor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Patient Medical Record Preview */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #f1f5f9', padding: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#e0f2fe', color: '#0284c7', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                      ك.م
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#0f172a' }}>كمال محمود</h3>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>ملف: PT-1001</p>
                    </div>
                  </div>

                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
                    <h4 style={{ margin: '0 0 15px 0', color: '#0f172a', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Eye size={18} color="#0284c7" /> قياسات النظر (الحديثة)
                    </h4>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', textAlign: 'center', direction: 'ltr' }}>
                      <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '8px' }}>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '5px' }}>Right Eye (OD)</span>
                        <div style={{ fontWeight: 'bold', color: '#0f172a' }}>-2.50 SPH</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>-0.50 CYL x 180°</div>
                      </div>
                      <div style={{ backgroundColor: '#f8fafc', padding: '10px', borderRadius: '8px' }}>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '5px' }}>Left Eye (OS)</span>
                        <div style={{ fontWeight: 'bold', color: '#0f172a' }}>-2.75 SPH</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>-0.25 CYL x 175°</div>
                      </div>
                    </div>
                  </div>

                  <button style={{ width: '100%', backgroundColor: '#f1f5f9', color: '#0f172a', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '10px' }}>
                    <FileText size={18} /> عرض الفاتورة
                  </button>
                  <button style={{ width: '100%', backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <Glasses size={18} /> طلب نظارة جديدة
                  </button>
                </div>

              </div>
            </>
          )}

          {activeTab !== 'patients' && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', color: '#94a3b8' }}>
              <Eye size={64} style={{ marginBottom: '20px', opacity: 0.5 }} />
              <h2 style={{ margin: 0, color: '#64748b' }}>واجهة العرض الخاصة بالملفات الطبية</h2>
              <p>هذا مجرد نموذج عرضي، يرجى العودة لعلامة تبويب "ملفات المرضى".</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
