import type { GiphyRandomResponse } from "../data/giphyRandomResp";

const API_KEY = 'NyiyeQOAdV6Tyf0gNAUc9ZzJ6lPcE1O6';

const giphyResponse = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInDOM = (url: string) => {
    const giphyElement = document.createElement('img');
    giphyElement.src = url;
    document.body.append(giphyElement);
}

giphyResponse
    .then(resp => resp.json())
    .then((body: GiphyRandomResponse) => {
        const giphyUrl = body.data.images.original.url;
        createImageInDOM(giphyUrl);
    });

