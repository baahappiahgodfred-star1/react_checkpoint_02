import players from "../models/player";
import Player from "./Player";


const PlayerList = () => {
 return (
    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
      {players.map((player, index) => (
        <Player key={index} {...player}  />
      ))}
    </div>
  );
};

export default PlayerList;
