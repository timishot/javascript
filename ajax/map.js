const numbers = [1, 2, 3, 4, 5];

// Using map to create an array of HTML strings
const htmlArray = numbers.map(number => `<li>${number}</li>`);
console.log(htmlArray.join('\n'))

// Using join to concatenate the array into a single string
