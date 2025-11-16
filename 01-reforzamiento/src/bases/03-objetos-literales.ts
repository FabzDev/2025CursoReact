const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    address: {
        zipcode:'10185',
        city:'New York'
    }
}

// const spiderman = ironman; ## Esto copia la referencia al objeto
// const spiderman = {...ironman}; ## Rompe la referencia pero solo a primer nivel, en el ejemplo anterior, copia la referencia a address
const spiderman = structuredClone(ironman) // ## Esto hace un clon del objeto literal

spiderman.address.city = 'Barranquilla';

console.log({ironman, spiderman});
