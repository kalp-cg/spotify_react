import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

const cards = [
  {
    imgSrc:
      "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true",
    title: "Weekly Motivation...",
    author: "Ben Ina Scott",
  },
  {
    imgSrc:
      "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true",
    title: "MEDITATION SELF",
    author: "Ibn Hussain Aleem",
  },
  {
    imgSrc:
      "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true",
    title: "Words beyond act...",
    author: "Samuel Scott",
  },
  {
    imgSrc:
      "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true",
    title: "The Alexa Show",
    author: "Adriana Tom",
  },
  {
    imgSrc:
      "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true",
    title: "The Stories of Ma...",
    author: "Lexus",
  },
  {
    imgSrc:
      "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true",
    title: "Motivation Daily b...",
    author: "Georgina Martha",
  },
];

const App = () => {
  return (
    <>
      <div className="dada">
        <div className="slidebar">
          <div className="logo">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true"
              alt=""
            />
          </div>
          <div className="home">
            <div className="forhome">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"
                alt=""
              />
              <span>Home</span>
            </div>
            <div className="forsearch">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"
                alt=""
              />
              <span>Search</span>
            </div>
            <div className="forlib">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"
                alt=""
              />
              <span>Your Library</span>
            </div>
          </div>

          <div>
            <div className="forplaysong">
              <div className="forplay">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"
                  alt=""
                />
                <span>Create Playlist</span>
              </div>
              <div className="forsong">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"
                  alt=""
                />
                <span>Liked Songs</span>
              </div>
              <div className="forep">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"
                  alt=""
                />
                <span>Your Episodes</span>
              </div>
            </div>
          </div>

          <div>
            <div className="forh3">
              <h3>FAV</h3>
              <h3>Daily Mix 1</h3>
              <h3>Discover Weekly</h3>
              <h3>Malayalam</h3>
              <h3>Dance/Electronic Mix</h3>
              <h3>EDM/Popular</h3>
            </div>
          </div>

          <div className="forinstall">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"
              alt=""
            />
            <span>Install App</span>
          </div>
        </div>

        <div className="papa2">
          <div>
            <div className="fornext">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"
                alt=""
              />
            </div>
            <div className="forround">
              <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" 
              />
            </div>
          </div>

          <div className="forh2tag">
            <h2>Good Morning</h2>
          </div>

          <div className="playlist-grid">
            {playlists.map((playlist, index) => (
              <div className="playlist-card" key={index}>
                <img src={playlist.imgSrc} alt={playlist.title} />
                <div className="playlist-title">{playlist.title}</div>
              </div>
            ))}
          </div>

          <div className="foralign">
            <div className="forh2tag">
              <h2>Shows you might like</h2>
            </div>
            <div className="forh3">
              <h3>SEE ALL</h3>
            </div>
          </div>

          <div className="card-container">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <img src={card.imgSrc} alt={card.title} />
                <div className="card-info">
                  <h3>{card.title}</h3>
                  <p>{card.author}</p>
                </div>
              </div>
            ))}
          </div> 
           <div>
            <img
              style={{
                height: "130px",
                width: "1600px",
              }}
              src="../bottom.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
