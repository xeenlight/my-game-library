import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import SearchGamePage  from "./pages/SearchGamePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/search" element={<SearchGamePage />} />

      </Routes>
    </div>
  );
}

export default App;
