

const animeBaseUrl = process.env.NEXT_PUBLIC_BASE_URL + "anime/gogoanime";

export const fetchPopular = async (): Promise<any> => {
  const response = await fetch(`${animeBaseUrl}/popular`);
  const data = await response.json();
  return data;
};

export const getAnimeInfo = async (id: string): Promise<any> => {
  try {
    const response = await fetch(`${animeBaseUrl}/info/${id}`);
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
    const response = await fetch(
      `${animeBaseUrl}/watch/${animeId}-episode-${episodeId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopAiring = async (): Promise<any> => {
  try {
    const response = await fetch(`${animeBaseUrl}/top-airing`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
