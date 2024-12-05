import react from 'react';
import './App.css';


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

const App3 = () => {
    return (
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
    )
}

export default App3;