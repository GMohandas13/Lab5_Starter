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


//tests for isEmail
test('should not start with punctuation', () => {
  expect(isEmail('_email@example.com').toBe(false));
  expect(isEmail('.email@example.com').toBe(false)); 
}); 

test('should contain @ symbol', () => {
  expect(isEmail('email@example.com').toBe(true)); 
  expect(isEmail('email at example.com').toBe(false)); 
});

test('should contain a . after @', () => {
  expect(isEmail('email@example').toBe(false)); 
  expect(isEmail('email@example..com').toBe(false)); 
  expect(isEmail('email@example.com').toBe(true)); 
}); 

test('tld should be 2 or 3 letters long', () => {
  expect(isEmail('email@example.co').toBe(true)); 
  expect(isEmail('email@example.com').toBe(true)); 
  expect(isEmail('email@example.c').toBe(false)); 
  expect(isEmail('email@example.comcom').toBe(false)); 
});