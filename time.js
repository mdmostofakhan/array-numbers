const time = new Date(2023, 11, 24, 10, 33, 30)
console.log(time )

const timesDate = new Date(2024, 2, 24, 10, 33, 30, 0)
console.log(timesDate)

const d = new Date("October 13, 2014 11:13:00");
console.log(d)

const ds = new Date(99, 11, 24, 10, 33, 0);
document.getElementById("demo").innerHTML= ds;
console.log(ds)

const dString = new Date();
const dates = dString.toISOString();
console.log(dates)