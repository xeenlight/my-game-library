import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSearch(text);
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
