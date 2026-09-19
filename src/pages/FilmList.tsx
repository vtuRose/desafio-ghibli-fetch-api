import { useEffect, useState } from "react";
import type { Film } from "../types/film";
import { fetchFilms } from "../services/ghibliApi";
import { FilmCard } from "../components/FilmCard";

export function FilmList() {
  const [allFilms, setAllFilms] = useState<Film[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFilms() {
      try {
        setLoading(true);
        const data = await fetchFilms();
        const sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
        setAllFilms(sorted);
      } catch (error) {
        setError("Failed to fetch films. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadFilms();
  }, []);

  const visibleFilms = allFilms.slice(0, visibleCount);
  const hasMore = visibleCount < allFilms.length;

  if (loading) {
    return <p className="text-text-secondary p-4">Loading films...</p>;
  }

  if (error) {
    return <p className="text-error p-4">{error}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {visibleFilms.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}

        {hasMore && (
          <button onClick={() => setVisibleCount((prev) => prev + 10)} className="aspect-2/3 flex flex-col items-center justify-center gap-2 bg-surface border border-border rounded-lg hover:bg-surface-hover transition-colors">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-white text-2xl hover:bg-accent-hover transition-colors">+</span>
            <span className="text-text-secondary text-sm">More films</span>
          </button>
        )}
      </div>
    </div>
  );
}
