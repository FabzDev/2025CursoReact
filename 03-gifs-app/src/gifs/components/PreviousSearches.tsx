interface props {
  title: string;
  gifs?: string[];
}

export const PreviousSearches = ({ title, gifs=[] }: props) => (
  <div className="previous-searches">
    <h2>{title}</h2>
    <ul className="previous-searches-list">
    {gifs.map( (gif: string) => <li>{gif}</li> )}
    </ul>
  </div>
);