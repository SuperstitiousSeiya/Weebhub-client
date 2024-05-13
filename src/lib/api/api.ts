
import axios from 'axios';
const animeBaseUrl = process.env.BASE_URL + "anime/gogoanime";

const api = axios.create({
  baseURL: animeBaseUrl,
  timeout: 5000, 
});

export async function fetchData(url: string) {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for the caller to handle
  }
}


