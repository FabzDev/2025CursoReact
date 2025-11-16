import type { GiphyRandomResponse } from "../data/giphyRandomResp";

const API_KEY = "NyiyeQOAdV6Tyf0gNAUc9ZzJ6lPcE1O6";

const createImageInDOM = (url: string) => {
  const giphyElement = document.createElement("img");
  giphyElement.src = url;
  document.body.append(giphyElement);
};

const getRandomGiphyUrl = async () => {
  const giphyResp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const giphyBody: GiphyRandomResponse = await giphyResp.json();
  return giphyBody.data.images.original.url;
};

getRandomGiphyUrl().then(createImageInDOM);
