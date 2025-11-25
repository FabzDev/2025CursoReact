import { mockGifs, type Gif } from "./mock-data/gifs-mock";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el Gif perfecto</p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Buscar Gifs" />
        <button>Buscar Gifs</button>
      </div>

      {/* Previous Gifs */}
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Eren Jaeger</li>
          <li>John Snow</li>
          <li>Inuyasha</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        {mockGifs.map( (gif: Gif) => (
            <div key={gif.id} className="gif-card">
                <img src={gif.url} alt={gif.title} />
                <h3>{gif.title}</h3>
                <p>{gif.width}x{gif.height} (1.5mb)</p>
            </div>
        ))}
      </div>
    </>
  );
};
