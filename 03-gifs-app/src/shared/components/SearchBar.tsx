interface props {
  buttonTitle: string;
  placeholder?: string;
  handleNewTerm: (value: string) => void;
}

export const SearchBar = ({ buttonTitle, placeholder = "Buscar", handleNewTerm }: props) => {
  return (
    <div className="search-container">
      <input
        onKeyUp={(e) => {
          e.key == "Enter" ? handleNewTerm(document.querySelector("input")?.value || "Fabio") : "Error";
        }}
        type="text"
        placeholder={placeholder}
      />
      <button onClick={() => handleNewTerm(document.querySelector("input")?.value || "Fabio")}>{buttonTitle}</button>
    </div>
  );
};
