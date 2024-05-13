
import { fetchData } from "../api/api";

export function useAnime() {

  const getPopular = async () => {
    const data = await fetchData(`/popular`);
    return data.results;
  };

  const getAnimeInfo = async (id: string) => {
    return await fetchData(`/info/${id}`);
  };

  const getWatchAnime = async (animeId: string, episodeId: string) => {
    return await fetchData(`/watch/${animeId}-episode-${episodeId}`);
  };

  const getTopAiring = async () => {
    const data = await fetchData(`/top-airing`);
    return data.results
  };

  return { getPopular, getAnimeInfo, getWatchAnime, getTopAiring };
}
