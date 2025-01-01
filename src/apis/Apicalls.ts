const apikey: string = '90ad5a06401e40c8fe56a7846944216f';
export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const NowPlayingMoviesApi: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const UpcomingMoviesApi: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const PopularMoviesApi: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
export const SearchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};
export const MovieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
};
export const MovieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};
