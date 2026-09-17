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
    <div>
      <img src={film.movie_banner} alt={film.title} />
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <p>Diretor: {film.director}</p>
      <p>Produtor: {film.producer}</p>
      <p>Ano de lançamento: {film.release_date}</p>
      <p>Nota (Rotten Tomatoes): {film.rt_score}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}
