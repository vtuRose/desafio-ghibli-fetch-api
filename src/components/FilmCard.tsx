import { Link } from "react-router-dom";
import type { Film } from "../types/film";

type FilmCardProps = {
  film: Film;
};

export function FilmCard({ film }: FilmCardProps) {
  return (
    <Link to={`/films/${film.id}`}>
      <div className="bg-surface border border-border p-1 hover:bg-accent-hover hover:shadow-lg transition-colors duration-300 rounded-lg overflow-hidden">
        <img className="w-full aspect-2/3 object-cover" src={film.image} alt={film.title} />
        <h2 className="font-semibold text-center text-text-primary p-2">{film.title}</h2>
      </div>
    </Link>
  );
}
