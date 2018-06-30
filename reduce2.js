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

// 