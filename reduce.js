let votes = ["ruby","react","angular","python","react","vue","vue","ruby","python","vanilla js","vanilla js"]

let initialValue = {}

const reducer = votes.reduce((accum, currValue) => {
  if(!accum[currValue]){
    accum[currValue] = 1
  }else {
    accum[currValue] += 1
  }
  return accum
}, {})
