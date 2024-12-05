import React from 'react';
import './App.css';

const playlists = [
    {
      title: "Liked Songs",
      imgSrc:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true",
    },
    {
      title: "Neffex Playlist",
      imgSrc:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true",
    },
    {
      title: "K/ DA",
      imgSrc:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true",
    },
    {
      title: "Dance / Electronic Mix",
      imgSrc:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true",
    },
    {
      title: "Liked Songs",
      imgSrc:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true",
    },
  ];

  
  

const App2 = () => {
    return (
        
        <div className="playlist-grid">
        {playlists.map((playlist, index) => (
          <div className="playlist-card" key={index}>
            <img src={playlist.imgSrc} alt={playlist.title} />
            <div className="playlist-title">{playlist.title}</div>
          </div>
        ))}
      </div>
    )
}

export default App2;