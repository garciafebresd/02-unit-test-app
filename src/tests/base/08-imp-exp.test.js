import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Tesing with heroes', () => {

    test('should return a hero by ids', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('should return an undefined if heroe not exist', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toBe(heroeData);
    });

    // toEqual el arreglo filtrado
    // owner
    test('should return only DC heroes', () => {
        const owner = 'DC';
        const heroesFiltered = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroesFiltered).toEqual(heroesData);
    });

    // length = 2
    test('should return only Marvel heroes', () => {
        const owner = 'Marvel';
        const heroesFiltered = getHeroesByOwner(owner)

        expect(heroesFiltered.length).toBe(2);
    });

});