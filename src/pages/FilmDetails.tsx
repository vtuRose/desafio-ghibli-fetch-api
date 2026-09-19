import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Film } from "../types/film";
import { fetchFilmById } from "../services/ghibliApi";

export function FilmDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFilm() {
      if (!id) {
        setError("Film ID is missing.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const data = await fetchFilmById(id);
        setFilm(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch film details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadFilm();
  }, [id]);

  if (loading) {
    return <p className="text-text-secondary p-4">Loading...</p>;
  }

  if (error || !film) {
    return <p className="text-error p-4">{error ?? "Film not found."}</p>;
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${film.movie_banner})` }} />

      <div className="fixed inset-0 bg-black/60 z-0" />

      <div className="relative max-w-4xl mx-auto p-3 py-12">
        <div className="bg-surface/90 backdrop-blur-sm rounded-lg p-6 shadow-xl">
          <div className="flex flex-col md:flex-row gap-6">
            <img className="border border-border rounded-lg w-full md:w-80 md:shrink-0 object-cover" src={film.image} alt={film.title} />

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-text-primary">{film.title}</h1>
              <p className="text-text-secondary leading-relaxed italic">{film.description}</p>
              <p className="text-text-primary">
                <span className="font-semibold">Director:</span> {film.director}
              </p>
              <p className="text-text-primary">
                <span className="font-semibold">Producer:</span> {film.producer}
              </p>
              <p className="text-text-primary">
                <span className="font-semibold">Release Date:</span> {film.release_date}
              </p>
              <p className="text-text-primary">
                <span className="font-semibold">Rotten Tomatoes Score:</span> {film.rt_score}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className="fixed bottom-6 right-6 z-50 bg-accent text-white py-3 px-5 rounded-full shadow-lg hover:bg-accent-hover transition-colors">
        Back
      </Link>
    </div>
  );
}
