export function getGifById(gifs, id) {
  return gifs.find((singleGif) => singleGif.id === id);
}
