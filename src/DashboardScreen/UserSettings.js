import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path as necessary

const UserSettings = () => {
    // Initialize state for user information
    const [user, setUser] = useState({
        id_client: 2, // Default client ID
        email_client: 'michael23@example.com',
        nom_client: 'Mike',
        prenom_client: 'Andrew',
        telephone_client: '123341',
        passe: '',   // Password
        passe2: ''   // Confirm Password
    });

    // State for modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    // State for success alert
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (user.passe !== user.passe2) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        // Show modal confirmation
        setModalMessage('Voulez-vous vraiment modifier vos informations ?');
        setIsModalOpen(true);
    };

    // Confirm modification
    const handleConfirm = async () => {
        setIsModalOpen(false);

        try {
            const response = await fetch('https://talelgym.tn/apipsy/modify_user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_client: user.id_client, // Include the client ID
                    nom_client: user.nom_client, 
                    prenom_client: user.prenom_client, 
                    email_client: user.email_client, 
                    password_client: user.passe,
                    telephone_client: user.telephone_client,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setShowSuccessAlert(true); // Show success alert
                setTimeout(() => setShowSuccessAlert(false), 3000); // Hide alert after 3 seconds
            } else {
                alert(`Erreur: ${result.message}`);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Une erreur est survenue lors de la mise à jour du profil.');
        }
    };

    // Cancel modification
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Modifier le Profil</h4>
                            </div>
                            <div className="content">
                                {showSuccessAlert && (
                                    <div className="alert alert-success" role="alert">
                                        Profil mis à jour avec succès!
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Adresse e-mail</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email_client"
                                                    placeholder="Email"
                                                    value={user.email_client}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Prénom</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="prenom_client"
                                                    placeholder="Prénom"
                                                    value={user.prenom_client}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Nom de famille</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="nom_client"
                                                    placeholder="Nom de famille"
                                                    value={user.nom_client}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Téléphone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="telephone_client"
                                                    placeholder="Téléphone"
                                                    value={user.telephone_client}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Nouveau Mot de passe</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="passe"
                                                    placeholder="Mot de passe"
                                                    value={user.passe}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Confirmer nouveau mot de passe</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="passe2"
                                                    placeholder="Mot de passe"
                                                    value={user.passe2}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-info btn-fill pull-right">Mettre à jour le Profil</button>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                  action="modified"
                    message={modalMessage}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default UserSettings;
