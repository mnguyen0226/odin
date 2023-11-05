// get the result from function
const helloWorld = require('./helloWorld');

// TDD
describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});