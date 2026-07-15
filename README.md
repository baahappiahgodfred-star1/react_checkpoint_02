# ⚽ React Player Cards – Interactive Football Showcase

A **React application** built with **Create React App** and **React Bootstrap**, displaying interactive football player cards.  
Each card includes player details, an animated GIF on hover, and a sound effect when clicking the sound button.

---

## 🚀 Features

- 🎴 Display player information (name, team, nationality, jersey number, age)
- 🖼️ GIF animation on hover
- 🔊 Custom sound effects for each player (e.g., “Siuuu” for Ronaldo)
- 💅 Styled with **React Bootstrap** and inline effects
- 🧩 Modular components (`Player`, `PlayerList`, `Header`, `Footer`)
- 🎧 Prevents sound overlap (stops the previous sound before playing another)

---

## 🧱 Project Structure

public/
├── img/
│ ├── sound.jpg
│ ├── kylian-mbappe.webp
│ ├── ...
├── sounds/
│ ├── kylian-mbappe.mp3
│ ├── lionel-messi.mp3
│ ├── christiano-ronaldo.mp3
│ └── lamine-yamal.mp3
src/
├── components/
│ ├── Player.js
│ ├── PlayerList.js
│ ├── Header.js
│ ├── Footer.js
├── models/
│ └── player.js
├── App.js
├── App.css
└── index.js

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-player-cards.git
   cd react-player-cards
Install dependencies
npm install

Run the app
npm start

The app will open automatically at http://localhost:3000

🧩 Components Overview
🎮 Player.js
Displays a single player card:

Shows player information

Switches to a GIF on hover

Plays a sound when clicking the sound icon

Uses Card and Image from React Bootstrap

🏆 PlayerList.js
Maps through all players from players.js and renders a list of Player components.

📦 players.js
An array of player objects:
{
  name: "Kylian Mbappé",
  team: "Paris Saint-Germain",
  nationality: "France",
  jerseyNumber: 7,
  age: 26,
  imageURL: "/img/kylian-mbappe.webp",
  gifURL: "/img/kylian-mbappe.gif",
  soundURL: "/sounds/kylian-mbappe.mp3"
}

🧱 App.js
Root component that imports Header, PlayerList, and Footer.

🎨 Styling
React Bootstrap used for layout and components

Inline CSS transitions for hover effects

Subtle card shadows and rounded borders

Responsive layout with d-flex and flex-wrap

Example:
<Card.Img
  variant="top"
  src={imageURL}
  alt={name}
  onMouseOver={(e) => (e.currentTarget.src = gifURL)}
  onMouseOut={(e) => (e.currentTarget.src = imageURL)}
  style={{ cursor: "pointer", transition: "1s ease-in-out" }}
/>
🧠 Sound Management
Each player has a unique sound stored in /public/sounds.

Example function:
let currentAudio = null;

const playSound = (soundURL) => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  const audio = new Audio(soundURL);
  audio.volume = 0.8;
  audio.play();
  currentAudio = audio;
  audio.onended = () => (currentAudio = null);
};

📦 Dependencies
React

React Bootstrap

Bootstrap

(Optional) React Icons

Install dependencies:
npm install react-bootstrap bootstrap

And import Bootstrap in index.js:
import 'bootstrap/dist/css/bootstrap.min.css';

👨‍💻 Author
Godfred Appiah Baah
Full Stack Developer — Java, Spring Boot, Angular, React, Laravel
📍 Based in Senegal
