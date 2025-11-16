import { heroes, Owner, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  return heroes.find((hero) => id == hero.id);
};

console.log(getHeroById(5));

export const getHeroesByOwner = (owner: Owner) => heroes.filter((heroe: Hero) => heroe.owner === owner);


