import { useState } from "react";

import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { GetGifResponse } from "./actions/get-gif-response.action";
import type { Gif } from "./interfaces/gif.interface";

export const GifsApp = () => {
  const [gifList, setGifList] = useState<Gif[]>([]);

  const [searchedQueries, setSearchedQueries] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleGifSearch = async (query: string) => {
    const newQuery = query.toLocaleLowerCase().trim();

    if (newQuery.length === 0) return;

    if (searchedQueries.includes(query)) return;

    setSearchedQueries([newQuery, ...searchedQueries].splice(0, 8));

    const resultGifs = await GetGifResponse(query);

    setGifList(resultGifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar
        placeholder="Buscar Gifs"
        buttonTitle="Buscar Gifs"
        onGifQuerySend={(value) => handleGifSearch(value)}
      />

      {/* Previous Gifs */}
      <PreviousSearches
        title="Busquedas previas"
        terms={searchedQueries}
        onTermClicked={(term) => handleTermClicked(term)}
      />

      {/* GifList */}
      <GifList gifs={gifList} />
    </>
  );
};
