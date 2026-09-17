import { HashRouter, Routes, Route } from "react-router-dom";
import { FilmList } from "./pages/FilmList";
import { FilmDetails } from "./pages/FilmDetails";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/films/:id" element={<FilmDetails />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
