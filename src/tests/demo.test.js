describe('Test group in file demo.test.js', () => {
    test('Strings must be equal', () => {

        // 1. Init
        const message = 'Hola mundo';

        // 2. Stimulus
        const message2 = 'Hola mundo';

        // 3. expect
        expect(message).toBe(message2);

    });
});