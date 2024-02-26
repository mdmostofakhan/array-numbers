
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return b - a;
});
console.log(points)


const result = [40, 100, 1, 5, 25, 10];
    result.sort(function(a, b){
    return 0.5 - Math.random()
});
// console.log(result[2])


// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
const max = Math.min(1, 2, 3)
// console.log(max)



function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }

 const results =  myArrayMin(10)
 console.log(results)


 const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a, b){
  return b.type - a.type
});

console.log(cars)