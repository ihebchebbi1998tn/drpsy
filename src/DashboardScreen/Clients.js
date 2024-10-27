import React, { useEffect, useState } from 'react';
import Modal from './Modal'; // Adjust the import path as necessary

const Clients = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');
    const [selectedUserId, setSelectedUserId] = useState(null);
    const key = "38457"; // If this key is for authorization, keep it secure

    // Fetch users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://talelgym.tn/apipsy/get_users.php');
                const data = await response.json();
                if (data.success) {
                    setUsers(data.users);
                } else {
                    console.error("Failed to fetch users");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id_client) => {
        setIsModalOpen(false); // Close the modal
        try {
            const response = await fetch('https://talelgym.tn/apipsy/delete_user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id_client, key }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response from delete user API:', data);

            if (data.success) {
                setUsers(users.filter(user => user.id_client !== id_client));
                setAlertMessage('User deleted successfully!');
                setShowAlert(true);
            } else {
                console.error("Failed to delete user:", data.message);
                setAlertMessage(data.message);
                setShowAlert(true);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setAlertMessage('Failed to delete user. Please try again.');
            setShowAlert(true);
        }
    };

    // Handle user activation
    const handleActivate = async (id_client) => {
        setIsModalOpen(false); // Close the modal
        // Add your activation logic here, similar to delete
        console.log(`Activate user with ID: ${id_client}`);
    };

    // Show confirmation modal before action
    const confirmAction = (id_client, action) => {
        setSelectedUserId(id_client);
        setActionType(action);
        setIsModalOpen(true);
    };

    if (loading) {
        return <div>Loading users...</div>;
    }

    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12"></div>
                    <div className="card">
                        <div className="header">
                            <h4 className="title">User Information</h4>
                            <p className="category">List of registered users</p>
                        </div>
                        <div className="content table-responsive table-full-width">
                            {showAlert && (
                                <div className="alert alert-success" role="alert">
                                    {alertMessage}
                                </div>
                            )}
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Email</th>
                                        <th>Téléphone</th>
                                        <th>Date de création</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id_client}>
                                            <td>{user.id_client}</td>
                                            <td>{user.nom_client}</td>
                                            <td>{user.prenom_client}</td>
                                            <td>{user.email_client}</td>
                                            <td>{user.telephone_client}</td>
                                            <td>{new Date(user.createdat_client).toLocaleDateString()}</td>
                                            <td>{user.user_key === '00000' ? "Inactive" : "Active"}</td>
                                            <td>
                                                {user.user_key === '00000' && (
                                                    <button 
                                                        className="btn btn-success" 
                                                        title="Activate User" 
                                                        onClick={() => confirmAction(user.id_client, 'activate')}
                                                    >
                                                        <i className="pe-7s-check"></i> Activé
                                                    </button>
                                                )}
                                                <button 
                                                    className="btn btn-danger" 
                                                    title="Delete User" 
                                                    onClick={() => confirmAction(user.id_client, 'delete')}
                                                >
                                                    <i className="pe-7s-trash"></i> Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <Modal
                    action={`${actionType === 'delete' ? 'supprimer' : 'activer'} `}
                    message={`Êtes-vous sûr de vouloir ${actionType === 'delete' ? 'supprimer' : 'activer'} cet utilisateur ?`}
                    onConfirm={() => actionType === 'delete' ? handleDelete(selectedUserId) : handleActivate(selectedUserId)}
                    onCancel={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Clients;
