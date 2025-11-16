
function greeting(name:string):string {
    return `Hi ${name}`
}

const saluteFabio = greeting('Fabio');

const greeting2 = (name: string): string => {
    return `Hello ${name}`
}

const saluteFabio2 = greeting2('Fabio');

// greeting = () => {return 'test'}; # Typescript marca error, pero JavaScript hace la asignación
// greeting2 =  () => {return 'test'}; # Typescript marca error, y JavaScript tambien lanza un error.

console.log({saluteFabio, saluteFabio2});

const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'MrButi'
    }
}

console.log(getUser());


