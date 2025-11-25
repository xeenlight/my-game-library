import { Link } from "react-router-dom";

export default function GameList({ games }) {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <div className="game-card" key={game.id}>
          <Link to={`/game/${game.id}`}>
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
             <p className="rating">⭐ {game.rating}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
