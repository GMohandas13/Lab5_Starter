// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isHexColor Tests
test('is a valid 3 character hex code ', () => {
  expect(isHexColor('#51F')).toBe(true);
});

test('is a valid 6 character hex code ', () => {
  expect(isHexColor('#0000FF')).toBe(true);
});

test('is an invalid 3 character hex code ', () => {
  expect(isHexColor('#51F9')).toBe(false);
});


test('is an invalid 6 character hex code ', () => {
  expect(isHexColor('#H94ZTF')).toBe(false);
});

//isDate Test
test('is a valid date with with a single digit month', () => {
  expect(isDate('4/18/1970')).toBe(true);
});

test('is a valid date with with a single digit day', () => {
  expect(isDate('10/9/2003')).toBe(true);
});

test('is an invalid date with only last two digits of year', () => {
  expect(isDate('10/9/03')).toBe(false);
});

test('is an invalid date with wrong format', () => {
  expect(isDate('10903')).toBe(false);
});

//isStrongPassword Tests
test('is a valid password - short - alphanumeric', () => {
  expect(isStrongPassword('Gm13')).toBe(true);
});

test('is a valid password - long - alphanumeric', () => {
  expect(isStrongPassword('Iam_Gautam13')).toBe(true);
});

test('is an invalid password - too short', () => {
  expect(isStrongPassword('13')).toBe(false);
});

test('is an invalid password - too long and special chars', () => {
  expect(isStrongPassword('HelloThisPasswordIsLong!')).toBe(false);
});



