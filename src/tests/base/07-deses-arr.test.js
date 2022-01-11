import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Testing 07-deses-arr desestructuracion', () => {

    test('retornaArreglo should return an array', () => {
        const [letters, numbers] = retornaArreglo()

        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });

})