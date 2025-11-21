import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchGames } from "../api/rawg";
import GameList from "../components/GameList";

export default function SearchGame() {
  const [params] = useSearchParams();
  const query = params.get("query");

  const [games, setGames] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await searchGames(query);
      setGames(data.results);
    }
    load();
  }, [query]);

  return (
    <div>
      <h2>Результаты поиска: {query}</h2>
      <GameList games={games} />
    </div>
  );
}
