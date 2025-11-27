import { useState } from "react";

import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs-mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
const [searchedTerms, setSearchedTerms] = useState(["Alejandro","Eren Jaeger", "Inuyasha"])

const handleTermClicked = (term: string) => {console.log(term)};
const handleSearchBar = (value: string) => {setSearchedTerms([...searchedTerms, value])};

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* Search */}
      <SearchBar placeholder="Buscar Gifs" buttonTitle="Buscar Gifs" handleNewTerm={handleSearchBar} />

      {/* Previous Gifs */}
      <PreviousSearches title="Busquedas previas" terms={searchedTerms} handleOnClick={(term) => handleTermClicked(term)} />

      {/* GifList */}
      <GifList gifs={mockGifs}/>

    </>
  );
};
