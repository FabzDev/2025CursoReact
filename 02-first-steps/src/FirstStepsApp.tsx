import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemCart {
    productName: string;
    quantity: number;
} 

const itemCart: ItemCart[] = [
    {productName:'Nintendo Switch', quantity:1},
    {productName:'Pro Controller', quantity:2},
    {productName:'Super Smash Bros', quantity:1},
    {productName:'Super Mario Bros', quantity:1},
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemCart.map(({productName, quantity}) => (
              <ItemCounter key={productName} productName={productName} quantity={quantity}/>
      ))}
      </>
  );
}
