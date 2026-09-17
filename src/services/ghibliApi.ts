import type { Film } from "../types/film";

const fetchFilms = async (): Promise<Film[]> => {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: Film[] = await response.json();
  return data;
};

const fetchFilmById = async (id: string): Promise<Film> => {
  const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: Film = await response.json();
  return data;
};

export { fetchFilms, fetchFilmById };
