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

test('handles new line as a separator', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n2|3|4")).toBe(9);
});

test('throws an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("-1,-2")).toThrow("Negative numbers not allowed: -1, -2");
});


