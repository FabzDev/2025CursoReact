import { useState } from "react";

interface props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: props) => {
  const [count, setCount] = useState(quantity);

  const handleSum = () => setCount(count + 1);
  const handelSubtract = () => {
    if (count === 0) return; 
    setCount(count - 1)
}
  // const onClickHandler = () => console.log(`click on ${productName}`);

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "350px",
        justifyContent: "space-between",
      }}
    >
      <h2>{productName}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button onClick={handelSubtract}>-1</button>
        <span>{count}</span>
        <button onClick={handleSum}>+1</button>
      </div>
    </section>
  );
};
