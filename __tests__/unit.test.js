// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//tests for isPhoneNumber
test('phone number should be 7 or 10 digits long', () => {
  expect(isPhoneNumber('9998887777').toBe(true)); 
  expect(isPhoneNumber('456-7890').toBe(true));
});

test('phone number should support parentheses', () => {
  expect(isPhoneNumber('1234567890').toBe(true));
  expect(isPhoneNumber('(123) 456-7890').toBe(true)); 
});

test('phone number should not support letters', () => {
  expect(isPhoneNumber('hi!').toBe(false));
});

test('phone number should not support other lengths', () => {
  expect(isPhoneNumber('123').toBe(false))
  expect(isPhoneNumber('12345678900987654321').toBe(false));
}); 