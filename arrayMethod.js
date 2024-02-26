// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruit = fruits.toString()
// fruit.join(" * ")
// console.log(fruit)
// fruits.join(" * ")
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const foods = fruits.push("eggs")
// foods.pop()
// console.log(foods, fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruit = fruits.pop();

// console.log(fruits)

const names = ["Banana", "Orange", "Apple", "New Version", "Mango"];
delete names[2];
// console.log(names)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice( 2, 3, "new" );
// console.log(fruits)

// margin add and contact 
// Example (Merging Three Arrays)
const myGirls = ["Cecilie", "Lone", "Email", "New"];
const myBoys = ["Emil", "Tobias", "Linus"];
const third = ["out add", "Tobias", "Linus"];
const my = ["first", "Tobias", "Linus"];
const myChildren = my.concat(myBoys, third, myGirls)
// console.log(myChildren)

// Example (Merging an Array with Values)
const arr1 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat("Peter", "mostofa"); 
// console.log(children)


const first = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
first.copyWithin(2, 0, "mos")
// console.log(first)

// The slice() method slices out a piece of an array into a new array:
const fruitSlice = ["Banana","version", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitSlice.slice(2, 5);
console.log(citrus)