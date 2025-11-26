interface props {
  buttonTitle: string;
  placeholder?: string;
}

export const SearchBar = ({ buttonTitle, placeholder="Buscar" }: props) => (
  <div className="search-container">
    {placeholder ? <input type="text" placeholder={placeholder} /> : <input type="text" />}
    <button>{buttonTitle}</button>
  </div>
);
