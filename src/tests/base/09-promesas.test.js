import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Testing with promise', () => {

    test('should return an async Hero', (done) => {
        const heroId = 1;
        getHeroeByIdAsync(heroId)
            .then(hero => {

                expect(hero).toBe(heroes[0]);
                done();

            });

    });

    test('should get an error if hero not exist', (done) => {

        const heroId = 10;
        getHeroeByIdAsync(heroId)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                done();

            })
    })

})