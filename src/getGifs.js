export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/channels/search?api_key=74p8gVrao1uUGYYh01d3Wez8WXi4T7tm&q=${category}&limit=25&offset=0`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.display_name,
    url: img.featured_gif.images.downsized_medium.url,
  }));

  return gifs;
};
