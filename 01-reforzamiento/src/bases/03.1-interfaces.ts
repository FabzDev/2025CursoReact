interface Hero {
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address {
    zipcode: Number;
    city: string;
}






const ironman: Hero = {
    firstName: 'Tony',
    lastName: 'Stark',
    address: {
        zipcode:10185,
        city:'New York'
    }
}


console.log({ironman});
