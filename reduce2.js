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