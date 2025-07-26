import { BrowserRouter, Routes, Route } from "react-router-dom";
import Research from "./pages/Research";
import ResearchFooter from "./components/ResearchFooter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Research />} />
          </Routes>
        </main>
        <ResearchFooter />
      </div>
    </BrowserRouter>
  );
}
