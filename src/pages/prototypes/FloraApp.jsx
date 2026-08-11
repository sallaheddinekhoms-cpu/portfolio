import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplet, ThermometerSun, Leaf, Activity, ChevronLeft, Settings, Home, Sprout, Bell, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export default function FloraApp() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'rtl', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      
      {/* Mobile Frame Simulation */}
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#1e293b', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '8px solid #334155', display: 'flex', flexDirection: 'column', height: '800px', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ padding: '30px 20px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to right, #10b981, #059669)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex' }}>
              <ChevronLeft size={24} />
            </Link>
            <div>
              <h2 style={{ margin: 0, color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>Flora System</h2>
              <p style={{ margin: 0, color: '#d1fae5', fontSize: '0.8rem' }}>مزرعة مائية ذكية - النظام A</p>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <Bell size={24} color="white" />
            <span style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', backgroundColor: '#ef4444', borderRadius: '50%', border: '2px solid #059669' }}></span>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '100px', backgroundColor: '#0f172a' }}>
          
          {/* Main Status */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 30px 0' }}>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'conic-gradient(#10b981 0% 85%, #334155 85% 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <div style={{ width: '130px', height: '130px', borderRadius: '50%', backgroundColor: '#1e293b', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Sprout size={32} color="#10b981" />
                <h3 style={{ margin: '5px 0 0 0', color: 'white', fontSize: '1.5rem' }}>85%</h3>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>صحة النباتات</span>
              </div>
            </div>
          </div>

          <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '15px' }}>المؤشرات الحيوية</h3>

          {/* Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            
            {/* pH Level */}
            <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '20px', padding: '15px', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Activity size={18} color="#38bdf8" />
                <span style={{ color: '#bae6fd', fontSize: '0.9rem' }}>مستوى الـ pH</span>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'white' }}>6.2</div>
              <div style={{ color: '#10b981', fontSize: '0.8rem', marginTop: '5px' }}>مستقر ومثالي</div>
            </div>

            {/* Temperature */}
            <div style={{ backgroundColor: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', borderRadius: '20px', padding: '15px', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <ThermometerSun size={18} color="#f43f5e" />
                <span style={{ color: '#fecdd3', fontSize: '0.9rem' }}>حرارة الماء</span>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'white' }}>22°C</div>
              <div style={{ color: '#f43f5e', fontSize: '0.8rem', marginTop: '5px' }}>مرتفعة قليلاً (+1)</div>
            </div>

            {/* Water Level */}
            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '20px', padding: '15px', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Droplet size={18} color="#3b82f6" />
                <span style={{ color: '#bfdbfe', fontSize: '0.9rem' }}>مستوى الماء</span>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'white' }}>75%</div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '5px' }}>الخزان الرئيسي</div>
            </div>

            {/* Nutrients */}
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '20px', padding: '15px', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Leaf size={18} color="#10b981" />
                <span style={{ color: '#d1fae5', fontSize: '0.9rem' }}>المغذيات (EC)</span>
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'white' }}>1.8</div>
              <div style={{ color: '#10b981', fontSize: '0.8rem', marginTop: '5px' }}>التركيز ممتاز</div>
            </div>

          </div>

          <h3 style={{ color: 'white', fontSize: '1.1rem', margin: '25px 0 15px 0' }}>التحكم الآلي (Automation)</h3>
          
          <div style={{ backgroundColor: '#1e293b', borderRadius: '20px', padding: '20px', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <span style={{ color: 'white' }}>مضخة الماء</span>
              <div style={{ width: '50px', height: '26px', backgroundColor: '#10b981', borderRadius: '13px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <span style={{ color: 'white' }}>إضاءة النمو (LED)</span>
              <div style={{ width: '50px', height: '26px', backgroundColor: '#334155', borderRadius: '13px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '22px', height: '22px', backgroundColor: '#94a3b8', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }}></div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'white' }}>ضخ المغذيات (أوتوماتيكي)</span>
              <div style={{ width: '50px', height: '26px', backgroundColor: '#10b981', borderRadius: '13px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '22px', height: '22px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
              </div>
            </div>
          </div>

          {/* Crop Progress */}
          <h3 style={{ color: 'white', fontSize: '1.1rem', margin: '25px 0 15px 0' }}>تقدم المحصول</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ backgroundColor: '#1e293b', borderRadius: '15px', padding: '15px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>خس الآيسبرغ (حوض 1)</span>
                <span style={{ color: '#10b981', fontSize: '0.9rem' }}>اليوم 14 / 45</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '31%', height: '100%', backgroundColor: '#10b981', borderRadius: '4px' }}></div>
              </div>
            </div>

            <div style={{ backgroundColor: '#1e293b', borderRadius: '15px', padding: '15px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>ريحان إيطالي (حوض 2)</span>
                <span style={{ color: '#38bdf8', fontSize: '0.9rem' }}>اليوم 28 / 30</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '93%', height: '100%', backgroundColor: '#38bdf8', borderRadius: '4px' }}></div>
              </div>
              <p style={{ margin: '10px 0 0 0', color: '#bae6fd', fontSize: '0.8rem' }}>جاهز للحصاد قريباً!</p>
            </div>
          </div>

          {/* Recent Alerts */}
          <h3 style={{ color: 'white', fontSize: '1.1rem', margin: '25px 0 15px 0' }}>سجل النظام</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', backgroundColor: 'rgba(244, 63, 94, 0.1)', padding: '12px', borderRadius: '12px', borderLeft: '4px solid #f43f5e' }}>
              <AlertTriangle size={20} color="#f43f5e" style={{ marginTop: '2px' }} />
              <div>
                <p style={{ margin: 0, color: 'white', fontSize: '0.95rem' }}>انخفاض مستوى الماء</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
                  <Clock size={12} color="#f43f5e" />
                  <span style={{ color: '#fecdd3', fontSize: '0.8rem' }}>قبل 10 دقائق</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
              <CheckCircle2 size={20} color="#10b981" style={{ marginTop: '2px' }} />
              <div>
                <p style={{ margin: 0, color: 'white', fontSize: '0.95rem' }}>تمت إضافة المغذيات تلقائياً</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
                  <Clock size={12} color="#10b981" />
                  <span style={{ color: '#d1fae5', fontSize: '0.8rem' }}>قبل ساعتين</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', backgroundColor: 'rgba(30, 41, 59, 0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid #334155', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0 10px' }}>
          <button style={{ background: 'transparent', border: 'none', color: '#10b981', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <Home size={24} />
            <span style={{ fontSize: '0.7rem' }}>الرئيسية</span>
          </button>
          <button style={{ background: 'transparent', border: 'none', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <Activity size={24} />
            <span style={{ fontSize: '0.7rem' }}>الإحصائيات</span>
          </button>
          <button style={{ background: 'transparent', border: 'none', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <Sprout size={24} />
            <span style={{ fontSize: '0.7rem' }}>المحصول</span>
          </button>
          <button style={{ background: 'transparent', border: 'none', color: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <Settings size={24} />
            <span style={{ fontSize: '0.7rem' }}>الإعدادات</span>
          </button>
        </div>

      </div>
    </div>
  );
}
