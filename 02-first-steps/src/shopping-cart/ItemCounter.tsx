interface props {
    productName: string;
    quantity: number;
}

export const ItemCounter = ({productName, quantity}: props) => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '350px',
            justifyContent: "space-between"
        }}>
        <h2>{productName}</h2>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            }}>
            <button>-1</button>
            <span>{quantity}</span>
            <button>+1</button>
        </div>
        </section>
    )
}