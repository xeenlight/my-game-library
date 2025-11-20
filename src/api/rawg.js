const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export async function searchGames(query) {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&search=${query}`);
  if (!res.ok) throw new Error("Ошибка загрузки игр");
  return await res.json();
}
export async function getGame(id) {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  return await res.json();
}

export async function getScreenshots(id) {
  const res = await fetch(`${BASE_URL}/games/${id}/screenshots?key=${API_KEY}`);
  return await res.json();
}

export async function getVideos(id) {
  const res = await fetch(`${BASE_URL}/games/${id}/movies?key=${API_KEY}`);
  return await res.json();
}
