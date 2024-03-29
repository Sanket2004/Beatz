import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Loader from '../Loader/Loader';

function HomePage() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://saavn.dev/api/search/artists?query=Arijit+Singh')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAlbums(data.data.albums);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(error => {
                console.error('There was a problem fetching data:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    return (
        <div className='albumContainer'>
            <h1>Treanding</h1>
            {loading ? (
                <Loader /> // Display loader while data is being fetched
            ) : (
                <div className="album-list">
                    {albums.map(album => (
                        <div key={album.id} className="album">
                            <img className='albumArt' src={album.image[2].link} alt={album.name} />
                            <h2>{album.name}</h2>
                            {/* <p>Type: {album.type}</p>
                            <p>Language: {album.language}</p> */}
                            <p>
                                Artists: {album.artists.map(artist => artist.name).join(', ')}
                            </p>
                            <div className="playBtn-Container">
                                <a href={album.url} className='playBtn'><i className="ri-play-line"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomePage;
