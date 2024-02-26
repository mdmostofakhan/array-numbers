// forEach method 

const numbers = [45, 4, 9, 16, 25];
function myFunction(Value, index, array){
 console.log(Value)
 console.log(index)
 console.log(array)
 console.log("last------------")
}
// numbers.forEach(myFunction)

// The map() method creates a new array by performing a function on each array element.
const numbers1 = [45, 4, 9, 16, 25];

function myFunction(value) {
  return value * 2;
}

const newNumbers = numbers1.map(myFunction)
// console.log(newNumbers)


// The filter() method creates a new array with array elements that pass a test.

const newFilter = [34, 45, 10, 4, 6, 75, 45]
function myFunctions(value, index, array){
    return value > 10;
}
const filters = newFilter.filter(myFunctions)
// console.log(filters)


const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length < 6);
// console.log(result);

// The reduce() method runs a function on each array element to produce (reduce it to) a single
const numReduce = [85, 4, 9, 16, 25];
function myFunctionRe(total, value) {
  return total + value;
}

const reduceNUm = numReduce.reduce(myFunctionRe)
console.log(reduceNUm)


// The every() method checks if all array values pass a test.

const numEvery = [45, 12, 4, 67, 9, 24]

function myFunction(value){
  return value > 1;
}

const totalNum = numEvery.every(myFunction)
// console.log(totalNum) 


// indexof methods
const items = ["items", "cars", "iphone", "texla", "items"]
const itemsName = items.indexOf("iphone")

// console.log(itemsName)

const itemsLast = ["items", "cars", "iphone", "texla", "items"]
const itemsNameLast = itemsLast.lastIndexOf("items")

// console.log(itemsNameLast)


// find methods 
const findNumbers = [21, 14, 25, 34]

function myFunction(value, array, index){
    return value < 20;
}
const findNum = findNumbers.find(myFunction)
console.log(findNum)
