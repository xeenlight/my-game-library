const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export async function searchGames(query) {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}&search=${query}`);
  if (!res.ok) throw new Error("Ошибка загрузки игр");
  return await res.json();
}
