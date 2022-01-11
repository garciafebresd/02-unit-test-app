import '@testing-library/jest-dom';
//import { getSaludo } from '../../base/02-template-string';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Testing 05-funciones', () => {

    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo should return an object', () => {
        const name = 'Juan';
        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    })


});