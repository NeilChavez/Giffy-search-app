import { API_KEY, API_URL } from "../settings/settings";
export function getSingleGif({ id }) {
  const endpoint = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
  return fetch(endpoint)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      const { data } = json;

      const { id,
        title,
        images,
        import_datetime,
        user: uploadedbyUser } = data;
      const urlGif = images.downsized_medium.url;
      return {
        id,
        title,
        urlGif,
        import_datetime,
        uploadedbyUser
      };
    })
}
