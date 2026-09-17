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
        setError("Failed to fetch film details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadFilm();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !film) {
    return <p>{error ?? "Film not found."}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-3">
      <div className="flex flex-col md:flex-row gap-6">
        <img className="border border-black rounded-lg w-full md:w-80 md:shrink-0 object-cover" src={film.movie_banner} alt={film.title} />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{film.title}</h1>
          <p className="text-gray-700 leading-relaxed italic">{film.description}</p>
          <p>
            <span className="font-semibold">Director:</span> {film.director}
          </p>
          <p>
            <span className="font-semibold">Producer:</span> {film.producer}
          </p>
          <p>
            <span className="font-semibold">Release Date:</span> {film.release_date}
          </p>
          <p>
            <span className="font-semibold">Rotten Tomatoes Score:</span> {film.rt_score}
          </p>
          <Link to="/" className="inline-block w-fit bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
