import type { CSSProperties } from "react";

const firstName = "Fabio";
const lastName = "Escobar";
const favGames = ["Ragnarok", "TESO", "Elder Ring"];
const activo = true;
const address = {
  zipcode: "40202",
  country: "USA",
};
const addressStyles: CSSProperties = {
  backgroundColor: "#f2d4a1",
  padding: "10px",
  borderRadius: "10px",
};

export function MyAwesomeApp() {
  return (
    <div data-testid="div-app" >
      <h1>{firstName}</h1>
      <h2 data-testid="last-name-title">{lastName}</h2>

      <p>{favGames.join(", ")}</p>

      <h1>{activo ? "Activo" : "Inactivo"}</h1>

      <p style={addressStyles}>{JSON.stringify(address)}</p>
    </div>
  );
}