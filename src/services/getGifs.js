export function getGifs(endpoint) {
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
