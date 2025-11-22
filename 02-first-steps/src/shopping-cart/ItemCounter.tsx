import { useState } from "react";

import "./ItemCounter.css"

interface props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: props) => {
  const [count, setCount] = useState(quantity);

  const handleSum = () => setCount(count + 1);
  const handelSubtract = () => {
    if (count === 1) return; 
    setCount(count - 1)
}
  // const onClickHandler = () => console.log(`click on ${productName}`);

  return (
    <section className="item-section">
      <h2 style={{
            color: count == 1 ? "red" : "#fefefe"
        }}>{productName}</h2>
      <div className="item-row">
        <button onClick={handelSubtract}>-1</button>
        <span>{count}</span>
        <button onClick={handleSum}>+1</button>
      </div>
    </section>
  );
};
