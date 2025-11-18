import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      <ItemCounter productName="Nintendo Switch" quantity={1}/>
      <ItemCounter productName="Pro Controller" quantity={2}/>
      <ItemCounter productName="Super Smash" quantity={1}/>
    </>
  );
}
