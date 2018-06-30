const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount); 
sum // 118.11

// Finding an Average
const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
average // 39.37

// double val
const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
    total.push(amount * 2);
    return total;
  }, []);
  
  doubled // [59.52, 83.7, 93]

//   We could also filter out numbers we don’t want to double by adding an if statement inside our reducer.
const euro = [29.76, 41.85, 46.5];
const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);
above30 // [ 41.85, 46.5 ]

/*  The benefit of using reduce comes into play when you want to map and filter together and you have a lot of data to go over.

If you chain map and filter together you are doing the work twice. You filter every single value and then you map the remaining values. With reduce you can filter and then map in a single pass.

Use map and filter but when you start chaining lots of methods together you now know that it is faster to reduce the data instead.
*/

// Flattening an array of arrays
// We can use reduce to flatten nested amounts into a single array.

// We set the initial value to an empty array and then concatenate the current value to the total.
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// More often than not, information is nested in more complicated ways. For instance, lets say we just want all the colors in the data variable below.
const data = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
  ];

//   We’re going to step through each object and pull out the colours. We do this by pointing amount.c for each object in the array. We then use a forEach loop to push every value in the nested array into out total.
const colors = data.reduce((total, amount) => {
    amount.c.forEach( color => {
        total.push(color);
    })
    return total;
  }, [])
  colors //['blue','green','green','black','orange','blue','green','red']

//   If we only need unique number then we can check to see of the number already exists in total before we push it.
const uniqueColors = data.reduce((total, amount) => {
    amount.c.forEach( color => {
      if (total.indexOf(color) === -1){
       total.push(color);
      }
    });
    return total;
  }, []);
  uniqueColors // [ 'blue', 'red', 'green', 'black', 'orange']

//   Piping with Reduce
// An interesting aspect of the reduce method in JavaScript is that you can reduce over functions as well as numbers and strings.

// Let’s say we have a collection of simple mathematical functions. these functions allow us to increment, decrement, double and halve an amount.

function increment(input) { return input + 1;}
function decrement(input) { return input — 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }
// For whatever reason, we need to increment, then double, then decrement an amount.

/*You could write a function that takes an input, and returns (input + 1) * 2 — 1. The problem is that we know we are going to need to increment the amount three times, then double it, then decrement it, and then halve it at some point in the future. We don’t want to have to rewrite our function every time so we going to use reduce to create a pipeline.

A pipeline is a term used for a list of functions that transform some initial value into a final value. Our pipeline will consist of our three functions in the order that we want to use them.

let pipeline = [increment, double, decrement];
Instead of reducing an array of values we reduce over our pipeline of functions. This works because we set the initial value as the amount we want to transform.
*/

const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 1);
result // 3
// Because the pipeline is an array, it can be easily modified. If we want to decrement something three times, then double it, decrement it , and halve it then we just alter the pipeline.

var pipeline = [
  increment,
  increment,
  increment,
  double,
  decrement,
  halve
];
// The reduce function stays exactly the same.

// Silly Mistakes to avoid
/*If you don’t pass in an initial value, reduce will assume the first item in your array is your initial value. This worked fine in the first few examples because we were adding up a list of numbers.

If you’re trying to tally up fruit, and you leave out the initial value then things get weird. Not entering an initial value is an easy mistake to make and one of the first things you should check when debugging.

Another common mistake is to forget to return the total. You must return something for the reduce function to work. Always double check and make sure that you’re actually returning the value you want.
*/

