export const fetchPopular = async (): Promise<any> => {
  const response = await fetch("http://localhost/anime/gogoanime/popular");
  const data = await response.json();
  return data;
};

export const getAnimeInfo = async (id: string): Promise<any> => {
  try {
    const response = await fetch(`http://localhost/anime/gogoanime/info/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWatchAnime = async (
  animeId: string,
  episodeId: string
): Promise<any> => {
  try {
    const response = await fetch(`http://localhost/anime/gogoanime/watch/${animeId}-episode-${episodeId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
