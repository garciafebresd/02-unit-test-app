import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Testing 02-template-string', () => {
   test('getSaludo must return hello and the name', ()=>{

    const name = 'Daniel Garcia';
    const sayHello = getSaludo(name);

    expect(sayHello).toBe('Hello ' + name);
   });

   test('getSaludo must return "Hello Internet" if not set param', () => {
    const sayHello = getSaludo();
    expect(sayHello).toBe('Hello Internet');
   });
});


