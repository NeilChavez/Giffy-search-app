import { API_URL, API_KEY } from "../settings/settings";

export function getTrendingTermSearch() {
  //api.giphy.com/v1/gifs/trending

  const endpoint = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(endpoint)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      const { data } = json;
      return data;
    })
    .catch((err) => console.error(err));
}
