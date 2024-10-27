import React from 'react';

// Données JSON d'exemple
const accountHistoryData = [
  {
    id: 1,
    action: 'Compte créé',
    date: '2024-01-15',
    status: 'Terminé'
  },
  {
    id: 2,
    action: 'Compte activé',
    date: '2024-01-16',
    status: 'Terminé'
  },
  {
    id: 3,
    action: 'Profil mis à jour',
    date: '2024-01-20',
    status: 'En cours'
  },
  {
    id: 4,
    action: 'Mot de passe changé',
    date: '2024-02-01',
    status: 'Terminé'
  },
];

const History = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4 className="title">Historique du compte</h4>
                <p className="category">Liste des actions effectuées sur votre compte</p>
              </div>
              <div className="content table-responsive table-full-width">
                <table className="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Action</th>
                      <th>Date</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountHistoryData.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.action}</td>
                        <td>{item.date}</td>
                        <td>
                          <span className={`status ${item.status === 'Terminé' ? 'text-success' : 'text-warning'}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
