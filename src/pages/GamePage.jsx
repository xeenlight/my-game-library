import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame, getScreenshots, getVideos } from "../api/rawg";
import Loader from "../components/loader";
import "../styles/GamePage.scss";
import SearchBar from "../components/SearchBar";

export default function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [screens, setScreens] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function load() {
      const g = await getGame(id);
      const sc = await getScreenshots(id);
      const vd = await getVideos(id);

      setGame(g);
      setScreens(sc.results);
      setVideos(vd.results);
    }

    load();
  }, [id]);

  if (!game) return <Loader/>;

  return (
    <div className="game-page">
        <SearchBar />
        <div className="GameTitle">
            <div className="GameImage">
               <img src={game.background_image} alt={game.name} />
            </div>

            <div className="GameInfo">
              <h2>{game.name}</h2>
              <p>{game.description_raw}</p>
            </div>
        </div>


      <h3>Скриншоты</h3>
      <div className="screenshots">
        {screens.map((s) => (
          <img key={s.id} src={s.image} alt="" />
        ))}
      </div>

      <h3>Видео</h3>
      <div className="videos">
        {videos.map((v) => (
          <video key={v.id} controls width="600">
            <source src={v.data.max} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
}
