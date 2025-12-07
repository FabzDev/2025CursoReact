import type { GiphyGif, GiphyResponse } from "../interfaces/giphy-response.interface";
import { giphyApi } from "../api/giphy.api";

export const GetGifResponse = async (query: string) => {
  const response = await giphyApi<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 12
    },
  });

  return response.data.data.map((gifResp: GiphyGif) => ({
    id: gifResp.id,
    title: gifResp.title,
    url: gifResp.images.original.url,
    width: Number(gifResp.images.original.width),
    height: Number(gifResp.images.original.height),
  }));
};
