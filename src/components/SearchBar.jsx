import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = text.trim();
    if (!q) return;

    if (typeof onSearch === "function") {
      onSearch(q);
    } else {
      navigate(`/search?query=${encodeURIComponent(q)}`);
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Введите название игры..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Поиск</button>
      </div>
    </form>
  );
}