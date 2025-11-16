
const API_KEY = 'NyiyeQOAdV6Tyf0gNAUc9ZzJ6lPcE1O6';

const giphyResponse = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

giphyResponse
    .then(resp => resp.json())
    .then(body => {
        const giphyUrl = body.data.images.original.url;
        
        const giphyElement = document.createElement('img');
        giphyElement.src = giphyUrl;
        
        document.body.append(giphyElement);
    });

