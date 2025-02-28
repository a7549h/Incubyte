import add from '../stringCalculator';

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number itself for a single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test('returns sum for two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("4,5")).toBe(9);
});

