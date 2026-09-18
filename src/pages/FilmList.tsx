import { useEffect, useState } from "react";
import type { Film } from "../types/film";
import { fetchFilms } from "../services/ghibliApi";
import { FilmCard } from "../components/FilmCard";

export function FilmList() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFilms() {
      try {
        setLoading(true);
        const data = await fetchFilms();

        const sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
        const firstTen = sorted.slice(0, 10);
        setFilms(firstTen);
      } catch (err) {
        setError("Failed to fetch films. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadFilms();
  }, []);

  if (loading) {
    return <p>Loading films...</p>;
  }

  if (error) {
    return <p className="text-error p-4">{error}</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}
