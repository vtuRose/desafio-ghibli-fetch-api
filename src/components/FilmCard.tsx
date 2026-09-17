import { Link } from "react-router-dom";
import type { Film } from "../types/film";

type FilmCardProps = {
  film: Film;
};

export function FilmCard({ film }: FilmCardProps) {
  return (
    <Link to={`/films/${film.id}`}>
      <div className="border border-black p-1 hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden hover:text-blue-600">
        <img className="w-full h-40 object-cover" src={film.movie_banner} alt={film.title} />
        <h2 className="font-semibold text-center">{film.title}</h2>
      </div>
    </Link>
  );
}
