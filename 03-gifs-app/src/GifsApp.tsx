import { useState } from "react";

import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs-mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [searchedQueries, setSearchedQueries] = useState([
    "alejandro",
    "eren Jaeger",
    "inuyasha",
  ]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleNewQuery = (query: string) => {
    const newQuery = query.toLocaleLowerCase().trim();
    if (newQuery.length === 0) return;
    !searchedQueries.find((q) => q == newQuery) &&
      setSearchedQueries([newQuery, ...searchedQueries].splice(0,8));
  };
  console.log(searchedQueries);

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
        onGifQuerySend={(value) => handleNewQuery(value)}
      />

      {/* Previous Gifs */}
      <PreviousSearches
        title="Busquedas previas"
        terms={searchedQueries}
        onTermClicked={(term) => handleTermClicked(term)}
      />

      {/* GifList */}
      <GifList gifs={mockGifs} />
    </>
  );
};
