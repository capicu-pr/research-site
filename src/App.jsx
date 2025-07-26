import { BrowserRouter, Routes, Route } from "react-router-dom";
import Research from "./pages/Research";
import ResearchTeam from "./pages/ResearchTeam";
import ResearchCollaborate from "./pages/ResearchCollaborate";
import ResearchAchievements from "./pages/ResearchAchievements";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Research />} />
            <Route path="/team" element={<ResearchTeam />} />
            <Route path="/collaborate" element={<ResearchCollaborate />} />
            <Route path="/achievements" element={<ResearchAchievements />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
