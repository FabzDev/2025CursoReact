
interface Hero {
    key: string;
    name: string;
    age: number;
    rank?: string;
}

const person1: Hero = {
    key: 'ABC123',
    name: 'Eren',
    age: 19,
    rank: 'S'
}

console.log({person1});

const createHero = ({key, name, age, rank}: Hero) => {
    return { 
        heroKey: key,
        personalInfo: {
            name,
            age
        },
        heroRank:rank
    }
}

const hero1 = createHero(person1)

const {heroKey: heroLlave, personalInfo: {name, age}, heroRank} = hero1;

console.log({heroLlave, name, age,heroRank});
