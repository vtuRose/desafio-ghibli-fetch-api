import { HashRouter, Routes, Route } from "react-router-dom";
import { FilmList } from "./pages/FilmList";
import { FilmDetails } from "./pages/FilmDetails";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <>
      <HashRouter>
        <div className="min-h-screen bg-background">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<FilmList />} />
            <Route path="/films/:id" element={<FilmDetails />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
