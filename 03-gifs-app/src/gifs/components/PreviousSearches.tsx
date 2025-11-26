interface props {
  title: string;
  gifs?: string[];
}

export const PreviousSearches = ({ title, gifs }: props) => (
  <div className="previous-searches">
    <h2>{title}</h2>
    {gifs && (
      <ul className="previous-searches-list">
        <li>{gifs[0]}</li>
        <li>{gifs[1]}</li>
        <li>{gifs[2]}</li>
      </ul>
    )}
  </div>
);