import { API_KEY, API_URL } from "../settings/settings";

export function getGifs({ keyword } = {}) {
  const endpoint = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(endpoint)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      const { data } = json;
      const gifsData = data.map((singleGif) => {
        const { id, title, images } = singleGif;
        const urlGif = images.downsized_medium.url;
        return { id, title, urlGif };
      });
      return gifsData;
    })
    .catch((err) => console.error(err));
}
