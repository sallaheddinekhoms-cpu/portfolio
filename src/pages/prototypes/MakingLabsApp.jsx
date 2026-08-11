import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Printer, Scissors, ChevronLeft, Calendar, Plus, Users, Zap, Search } from 'lucide-react';

export default function MakingLabsApp() {
  const [activeTab, setActiveTab] = useState('machines');
  
  const machines = [
    { id: 1, name: 'Prusa i3 MK3S+', type: '3D Printer', status: 'Available', icon: Printer, color: '#10b981' },
    { id: 2, name: 'Creality Ender 3', type: '3D Printer', status: 'In Use', icon: Printer, color: '#f59e0b' },
    { id: 3, name: 'Glowforge Pro', type: 'Laser Cutter', status: 'Available', icon: Scissors, color: '#10b981' },
    { id: 4, name: 'CNC Router 3018', type: 'CNC Machine', status: 'Maintenance', icon: Cpu, color: '#ef4444' },
  ];

  const projects = [
    { id: 1, name: 'Line Follower Robot', author: 'Ahmed', likes: 24, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Smart Irrigation', author: 'Sarah', likes: 56, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Industrial Robotic Arm', author: 'Team Alpha', likes: 112, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'ltr', color: 'white' }}>
      
      {/* Navbar */}
      <div style={{ borderBottom: '1px solid #1e293b', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0b1120' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Zap size={30} color="#06b6d4" />
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800', background: 'linear-gradient(to right, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '2px' }}>
            MAKING LABS
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button onClick={() => setActiveTab('machines')} style={{ background: 'transparent', border: 'none', color: activeTab === 'machines' ? '#06b6d4' : '#64748b', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', paddingBottom: '5px', borderBottom: activeTab === 'machines' ? '2px solid #06b6d4' : 'none' }}>Machines & Equipment</button>
          <button onClick={() => setActiveTab('projects')} style={{ background: 'transparent', border: 'none', color: activeTab === 'projects' ? '#06b6d4' : '#64748b', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', paddingBottom: '5px', borderBottom: activeTab === 'projects' ? '2px solid #06b6d4' : 'none' }}>Members Projects</button>
        </div>
        <div>
          <Link to="/">
            <button style={{ backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155', padding: '8px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <ChevronLeft size={16} /> Go Back
            </button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        
        {activeTab === 'machines' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <div>
                <h2 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>FabLab Space</h2>
                <p style={{ color: '#94a3b8', margin: 0, fontSize: '1.1rem' }}>Book the machine you need for your project now.</p>
              </div>
              <div style={{ backgroundColor: '#1e293b', padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #334155' }}>
                <Search size={18} color="#94a3b8" />
                <input type="text" placeholder="Search for a machine..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '250px' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
              {machines.map(m => (
                <div key={m.id} style={{ backgroundColor: '#1e293b', borderRadius: '20px', padding: '25px', border: '1px solid #334155', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: m.color }}></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ backgroundColor: '#0f172a', padding: '15px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <m.icon size={28} color="#06b6d4" />
                    </div>
                    <span style={{ backgroundColor: `${m.color}20`, color: m.color, padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      {m.status}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '1.3rem' }}>{m.name}</h3>
                  <p style={{ color: '#94a3b8', margin: '0 0 25px 0', fontSize: '0.9rem' }}>{m.type}</p>
                  
                  <button disabled={m.status !== 'Available'} style={{ width: '100%', backgroundColor: m.status === 'Available' ? '#06b6d4' : '#334155', color: m.status === 'Available' ? '#0f172a' : '#94a3b8', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', fontSize: '1rem', cursor: m.status === 'Available' ? 'pointer' : 'not-allowed', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} /> {m.status === 'Available' ? 'Book a Slot' : 'Not Available'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <div>
                <h2 style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>Innovators Projects</h2>
                <p style={{ color: '#94a3b8', margin: 0, fontSize: '1.1rem' }}>Get inspired by the creations of our community.</p>
              </div>
              <button style={{ backgroundColor: '#06b6d4', color: '#0f172a', border: 'none', padding: '12px 25px', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Plus size={20} /> Add Project
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {projects.map(p => (
                <div key={p.id} style={{ backgroundColor: '#1e293b', borderRadius: '20px', overflow: 'hidden', border: '1px solid #334155' }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem' }}>{p.name}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Users size={16} /> Dev: {p.author}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f43f5e', fontWeight: 'bold' }}>❤ {p.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
