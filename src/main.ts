const isEven = (number: number) => number % 2 === 0;
const isOdd = (number: number) => !isEven(number);

export { isEven, isOdd }