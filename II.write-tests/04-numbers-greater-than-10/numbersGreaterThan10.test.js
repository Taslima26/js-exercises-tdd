var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function () {
    //arrange
    let input = [4, 10, 32, 9,'90'];
    let expected = [32,90];
    //act
    let output = largerThanTen(input);

    //assert
    expect(output).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
