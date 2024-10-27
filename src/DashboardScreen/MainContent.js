import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import Modal from './Modal'; // Import the Modal component
import './Content.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MainContent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true); // Corrected loading state
    const [error, setError] = useState(null); // Error state
    const [showModal, setShowModal] = useState(false); // Modal state
    const [videoToDelete, setVideoToDelete] = useState(null); // ID of video to delete
    const videosPerPage = 6; // 3 videos per row * 2 rows
    const connectedUserId = 1; // Simulated connected user ID

    const fetchVideos = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://talelgym.tn/apipsy/get_videos.php?key=3845755');
            if (response.data.success) {
                const formattedVideos = response.data.data.map(video => ({
                    id: video.id_video,
                    title: video.name_video,
                    description: video.descri_video,
                    videoUrl: `https://talelgym.tn/apipsy/${video.url_video}`,
                    thumbnail: `https://talelgym.tn/apipsy/${video.url_thumbnail}`
                }));
                setVideos(formattedVideos);
            } else {
                throw new Error(response.data.message); // Handle unsuccessful responses
            }
        } catch (error) {
            console.error('Error fetching videos:', error);
            setError(error.message || 'Failed to fetch videos'); // Set error message
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
    const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const handleCloseVideo = () => {
        setSelectedVideo(null);
    };

    const handleDeleteVideo = async () => {
        try {
            const response = await axios.post('https://talelgym.tn/apipsy/delete_video.php', {
                key: '3845755',
                id_video: videoToDelete // Use the stored video ID
            });
            if (response.data.success) {
                fetchVideos(); // Refresh the video list after deletion
                alert('Video deleted successfully!');
            } else {
                alert('Error deleting video: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error deleting video:', error);
        } finally {
            setShowModal(false); // Close the modal
            setVideoToDelete(null); // Reset video to delete
        }
    };

    const openDeleteModal = (id) => {
        setVideoToDelete(id); // Set the video ID to delete
        setShowModal(true); // Show the modal
    };

    const closeDeleteModal = () => {
        setShowModal(false); // Close the modal
        setVideoToDelete(null); // Reset video to delete
    };

    return (
        <div className="content">
            {loading ? (
                <div className="loading">Loading videos...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="video-grid">
                        {currentVideos.map((video) => (
                            <div className="video-card" key={video.id} onClick={() => handleVideoClick(video)}>
                                <div className="thumbnail-container">
                                    <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                                    {/* Delete button (X icon) */}
                                    {connectedUserId === 1 && (
                                        <button 
                                            className="delete-button" 
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent triggering video click
                                                openDeleteModal(video.id); // Open modal for deletion
                                            }}
                                            title="Delete Video"
                                        >
                                            <i className="bi bi-x-circle"></i>
                                        </button>
                                    )}
                                </div>
                                <div className="video-details">
                                    <h5>{video.title}</h5>
                                    <p>{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    {selectedVideo && (
                        <div className="video-overlay" onClick={handleCloseVideo} onContextMenu={(e) => e.preventDefault()}>
                            <div className="video-player-container" onClick={(e) => e.stopPropagation()}>
                                <button className="close-button" onClick={handleCloseVideo}>×</button>
                                <ReactPlayer
                                    url={selectedVideo.videoUrl}
                                    controls
                                    playing
                                    width="100%"
                                    height="100%"
                                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                />
                            </div>
                        </div>
                    )}

                    {showModal && (
                        <Modal 
                            action="supprimer"
                            message="Cette vidéo sera supprimée définitivement. Voulez-vous continuer ?" 
                            onConfirm={handleDeleteVideo} 
                            onCancel={closeDeleteModal} 
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default MainContent;
