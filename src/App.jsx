import { useState } from "react";
import SearchBar from "./components/SearchBar";
import GameList from "./components/GameList";
import { searchGames } from "./api/rawg";

function App() {
  const [games, setGames] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await searchGames(query);
      setGames(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Моя библиотека игр</h1>
      <SearchBar onSearch={handleSearch} />
      <GameList games={games} />
    </div>
  );
}

export default App;
