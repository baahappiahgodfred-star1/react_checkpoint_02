import { Card, Image } from "react-bootstrap";

let currentAudio = null;
const playSound = (soundURL) => {
  // Stoppe le son précédent s'il y en a un
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  // Lance un nouveau son
  const audio = new Audio(soundURL);
  audio.volume = 0.8;
  audio.play().catch((err) => console.error("Erreur audio :", err));

  // Sauvegarde ce son comme son actuel
  currentAudio = audio;

  // Nettoyage à la fin
  audio.onended = () => {
    currentAudio = null;
  };
};

const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageURL,
  gifURL,
  soundURL,
}) => {
  return (
    <>
      <Card style={{ width: "14rem" }} className="text-center shadow-sm">
        <Card.Img
          variant="top"
          src={imageURL}
          alt={name}
          onMouseOver={(e) => (e.currentTarget.src = gifURL)}
          onMouseOut={(e) => (e.currentTarget.src = imageURL)}
          width="200"
          height="200"
          style={{ cursor: "pointer", transition: "1s ease-in-out" }}
        />
        <Card.Body>
          <Image
            src="/img/sound.jpg"
            onClick={() => playSound(soundURL)}
            width="20"
            height="20"
            style={{ cursor: "pointer" }}
          />
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Team:</strong> {team} <br />
            <strong>Nationality:</strong> {nationality} <br />
            <strong>Jersey:</strong> #{jerseyNumber} <br />
            <strong>Age:</strong> {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Player;
