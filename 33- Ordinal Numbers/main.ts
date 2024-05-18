//  Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  for-loop
for(let oneNumber of numbers){
  let ordinalEnding: string ;
  if (oneNumber === 1){
    ordinalEnding = "st"
  }
  else if (oneNumber === 2){
    ordinalEnding = "nd"
  }
  else if (oneNumber === 3){
    ordinalEnding = "rd"
  }
  else {
    ordinalEnding = "th"
  }
  console.log(`${oneNumber}${ordinalEnding}`);
}

