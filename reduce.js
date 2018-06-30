const votes = ["ruby","react","angular","python","react","vue","vue","ruby","python","vanilla js","vanilla js"]

// let initialValue = {}

const reducer = votes.reduce((tally, lang) => {
  if(!tally[lang]){
    tally[lang] = 1
    console.log('first pass tally[lang]: ',tally[lang])
  }else {
    tally[lang] = tally[lang] + 1
    console.log('existing tally[lang]: ',tally[lang])
  }
  console.log('tally:', tally)
  return tally
}, {})
