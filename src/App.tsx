import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { FilmList } from "./pages/FilmList";
import { FilmDetails } from "./pages/FilmDetails";

function App() {
  return (
    <>
      <HashRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<FilmList />} />
              <Route path="/films/:id" element={<FilmDetails />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
