interface props {
  title: string;
  terms?: string[];
  onTermClicked: (term:string)=>void
}

export const PreviousSearches = ({ title, terms=[], onTermClicked }: props) => (
  <div className="previous-searches">
    <h2>{title}</h2>
    <ul className="previous-searches-list">
    {terms.map( (term: string) => <li onClick={() => onTermClicked(term)} key={term}>{term}</li> )}
    </ul>
  </div>
);