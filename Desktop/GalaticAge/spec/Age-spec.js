 import { Age } from './../src/Age.js'

describe('Age', function() {
  it('should take the users age and make in into second', function() {
    let input = new Age(20)
    expect(input.yearToSeconds()).toEqual(631149183.34);
  });
});
