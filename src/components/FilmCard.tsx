import { Link } from "react-router-dom";
import type { Film } from "../types/film";

type FilmCardProps = {
  film: Film;
};

export function FilmCard({ film }: FilmCardProps) {
  return (
    <Link to={`/films/${film.id}`}>
      <div>
        <img src={film.movie_banner} alt={film.title} />
        <h2>{film.title}</h2>
      </div>
    </Link>
  );
}
