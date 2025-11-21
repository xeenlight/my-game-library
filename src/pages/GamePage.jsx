import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGame, getScreenshots, getVideos } from "../api/rawg";

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

  if (!game) return <p>Загрузка...</p>;

  return (
    <div className="game-page">
        <div className="GameTitle">
            <div className="GameImage">
               <img src={game.background_image} alt={game.name} />
            </div>

            <div className="GameInfo">
              <h1>{game.name}</h1>
              <p>{game.description_raw}</p>
            </div>
        </div>


      <h2>Скриншоты</h2>
      <div className="screenshots">
        {screens.map((s) => (
          <img key={s.id} src={s.image} alt="" />
        ))}
      </div>

      <h2>Видео</h2>
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
