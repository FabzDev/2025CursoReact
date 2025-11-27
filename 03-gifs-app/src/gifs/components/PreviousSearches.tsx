interface props {
  title: string;
  terms?: string[];
  handleOnClick: (term:string)=>void
}

export const PreviousSearches = ({ title, terms=[], handleOnClick }: props) => (
  <div className="previous-searches">
    <h2>{title}</h2>
    <ul className="previous-searches-list">
    {terms.map( (term: string) => <li onClick={() => handleOnClick(term)} key={term}>{term}</li> )}
    </ul>
  </div>
);