import { useState } from "react";
import SearchBar from "../components/SearchBar";
import GameList from "../components/GameList";
import { searchGames } from "../api/rawg";

export default function HomePage() {
  const [games, setGames] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchGames(query);
    setGames(data.results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <GameList games={games} />
    </div>
  );
}
