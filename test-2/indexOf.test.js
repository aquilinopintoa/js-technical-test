const indexOf = require('./indexOf');

String.prototype.indexOf = indexOf;

test('It should return -1 when the value to search is not found', () => {
    expect(''.indexOf('1')).toBe(-1);
});

test('It Should return index (6) of first occurrence of value to search', () => {
    expect('test-test'.indexOf('est', 3)).toBe(6);
});
