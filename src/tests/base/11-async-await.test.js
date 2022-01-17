import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Testing the request for giphy api (async-await)', () => {

    test('should return an image', async() => {

        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});