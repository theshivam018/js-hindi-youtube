const score = 400
console.log(score);

const balance = new Number(100) //new Number is a constructor
console.log(balance);

console.log(balance + score);


console.log(balance.toString().length); //convert into string and then count the length.
console.log(balance.toFixed(2)); //to fixed is used for to know the after decimal value(and its important).


const otherNumber = 123.564
console.log(otherNumber.toPrecision(3)); //toPrecision is used for to know the before decimal value(and its important).

const hundreds = 1000000000000
console.log(hundreds.toLocaleString('en-IN'));

//--------------------------------------------------------Maths--------------------------------------------


console.log(Math);
console.log(Math.abs(-4)); //abs is used for to know the absolute value
console.log(Math.round(2.5)); //round is used for to know the round value
console.log(Math.ceil(2.1)); //ceil is used for to know the upper value(above 2 will be declare as 3)
console.log(Math.floor(2.9)); //floor is used for to know the lower value( below 2 will be declare as 2)

console.log(Math.random()); // random gives the value between (0-1)
console.log(Math.random()*10)+1; // please be simple.
console.log(Math.floor(Math.random() * 10) + 1); //floor is used for to know the lower value( below 2 will be declare as 2)


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min); // for both the value max and min.