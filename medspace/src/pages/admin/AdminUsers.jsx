import React, { useState } from 'react';
import { Search, Filter, Check, X, Eye } from 'lucide-react';
import '../../index.css';

const AdminUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const initialUsers = [
    { id: 1, name: 'Amina L.', email: 'amina@med.dz', filiere: 'Médecine', annee: '4ème année', status: 'En attente', date: '04/08/2026' },
    { id: 2, name: 'Karim S.', email: 'karim@pharm.dz', filiere: 'Pharmacie', annee: '2ème année', status: 'En attente', date: '04/08/2026' },
    { id: 3, name: 'Lina M.', email: 'lina@dent.dz', filiere: 'Médecine Dentaire', annee: '3ème année', status: 'Actif', date: '01/08/2026' },
    { id: 4, name: 'Youcef D.', email: 'youcef@med.dz', filiere: 'Médecine', annee: 'Résidanat', status: 'Actif', date: '28/07/2026' },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleApprove = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: 'Actif' } : u));
    setSelectedUser(null);
  };

  return (
    <div className="admin-page fade-in">
      <div className="admin-header-flex">
        <div>
          <h2>Utilisateurs & Inscriptions</h2>
          <p className="text-muted">Gérez les comptes étudiants et validez les paiements.</p>
        </div>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Rechercher un étudiant..." />
        </div>
      </div>

      <div className="card table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom de l'étudiant</th>
              <th>Filière & Année</th>
              <th>Date d'inscription</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <strong>{user.name}</strong>
                  <br/>
                  <small className="text-muted">{user.email}</small>
                </td>
                <td>
                  {user.filiere}
                  <br/>
                  <small className="text-muted">{user.annee}</small>
                </td>
                <td>{user.date}</td>
                <td>
                  <span className={`status-badge ${user.status === 'Actif' ? 'badge-success' : 'badge-warning'}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  {user.status === 'En attente' ? (
                    <button className="btn btn-sm btn-outline" onClick={() => setSelectedUser(user)}>
                      <Eye size={16} style={{marginRight: '4px'}} /> Voir Reçu
                    </button>
                  ) : (
                    <span className="text-muted">Validé</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Receipt Validation */}
      {selectedUser && (
        <div className="modal-overlay">
          <div className="modal-content admin-modal fade-in">
            <div className="modal-header">
              <h3>Validation du Paiement</h3>
              <button className="btn-icon" onClick={() => setSelectedUser(null)}><X size={24} /></button>
            </div>
            <div className="modal-body">
              <p>Étudiant : <strong>{selectedUser.name}</strong> ({selectedUser.filiere})</p>
              <div className="receipt-preview">
                {/* Fake Receipt Image */}
                <div className="fake-receipt">
                  Reçu BaridiMob<br/>
                  Montant: 8000 DZD<br/>
                  Trans: #10928374
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setSelectedUser(null)}>Fermer</button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn" style={{ backgroundColor: 'var(--danger)', color: 'white' }} onClick={() => setSelectedUser(null)}>
                  Rejeter
                </button>
                <button className="btn btn-primary" onClick={() => handleApprove(selectedUser.id)}>
                  <Check size={18} style={{marginRight: '4px'}}/> Approuver
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
