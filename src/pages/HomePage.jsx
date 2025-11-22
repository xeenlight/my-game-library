import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import GameList from "../components/GameList"; 
import {
  getPopularGames,
  getTopRatedGames,
  getUpcomingGames,
} from "../api/rawg";

import "../styles/HomePage.scss";

export default function HomePage() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    async function load() {
      const pop = await getPopularGames();
      const top = await getTopRatedGames();
      const soon = await getUpcomingGames();

      setPopular(pop.results);
      setTopRated(top.results);
      setUpcoming(soon.results);
    }

    load();
  }, []);

  return (
    <div className="HomePage">
      <SearchBar />

      <h2>🔥 Популярные игры</h2>
      <GameList games={popular} />

      <h2>⭐ Топ рейтинг</h2>
      <GameList games={topRated} />

      <h2>⏳ Ожидаемые игры</h2>
      <GameList games={upcoming} />
    </div>
  );
}
