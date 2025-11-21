import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import GameList from "../components/GameList";
// ...existing code...
import "../styles/HomePage.scss";

export default function HomePage() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    // перенаправляем на страницу результатов поиска
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="HomePage">
      <SearchBar onSearch={handleSearch} />
      <GameList games={games} />
    </div>
  );
}