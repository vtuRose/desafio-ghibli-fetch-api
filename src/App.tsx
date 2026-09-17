import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmList } from "./pages/FilmList";
import { FilmDetails } from "./pages/FilmDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/films/:id" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
