/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  let cutest = {}; //we need to give cutest a value here
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
    //console.log(cat);
    if (i === 0) {        //if its the first loop
      cutest = cats[i];     
      //console.log(cutest);
    } else {                          //every other loop is not the first loop so we run through this
    if (cat.cuteness > cutest.cuteness) {  //cutest gets declaired but never assigned to anything
      cutest = cat.cuteness;           //it should equal this, here, but... 
    } }
    i++;
  }

  return cutest; //as of now, never gets assigned and retuns undefined
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }