import {isEven, isOdd} from './main';

describe('Is Even', () => {
    test('should return true for isEven(0)', () => expect(isEven(0)).toBe(true));
    test('should return false for isEven(1)', () => expect(isEven(1)).toBe(false));
    test('should return true for isEven(2)', () => expect(isEven(2)).toBe(true));
});

describe('Is Odd', () => {
    test('should return false for isOdd(0)', () => expect(isOdd(0)).toBe(false));
    test('should return true for isOdd(1)', () => expect(isOdd(1)).toBe(true));
    test('should return false for isOdd(2)', () => expect(isOdd(2)).toBe(false));
});