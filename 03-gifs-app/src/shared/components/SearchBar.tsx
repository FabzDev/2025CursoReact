import { useEffect, useRef, useState } from "react";

interface props {
  buttonTitle: string;
  placeholder?: string;
  onGifQuerySend: (value: string) => void;
}

export const SearchBar = ({
  buttonTitle,
  placeholder = "Buscar",
  onGifQuerySend,
}: props) => {
  // const isFirstRender = useRef(true);
  const [gifQuery, setGifQuery] = useState("");

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = true;
    //   return;
    // }
    const timeoutID = setTimeout(() => {
      onGifQuerySend(gifQuery);
      setGifQuery("");
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [gifQuery, onGifQuerySend]);

  const handleGifQuerySend = () => {
    onGifQuerySend(gifQuery);
    setGifQuery("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={gifQuery}
        onChange={(e) => setGifQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleGifQuerySend();
          }
        }}
      />

      <button onClick={handleGifQuerySend}>{buttonTitle}</button>
    </div>
  );
};
