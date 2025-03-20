const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // 2nd number per konsa character hain
console.log(gameName.indexOf('t')); //consay number per aatey hain

const newString = gameName.substring(0, 4)// last number isn't included its the rule of substring
console.log(newString);

const anotherString = gameName.slice(-8, 4) // negative number se count karna start hota hain or reverse mai value milta hain
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // for taking out 20% and replace with (-)

console.log(url.includes('sundar')) //for checking the keywords are there in gmail or not

console.log(gameName.split('-')); //use for separate



//purple colour are the methods of strings