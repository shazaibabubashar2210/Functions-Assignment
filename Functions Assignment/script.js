Task01
console.log("************Task1**************");
let sum = (num1, num2) => num1 + num2;

let calSum = sum(55, 47);
console.log("Sum = ", calSum);

Task02
console.log("************Task2**************");
let isEven=(num)=>{
    if(num%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
let num=prompt("Enter number to check whether it is even or odd","");
if(isEven(num))
{
    console.log(`Num ${num} is Even`);
}
else{
    console.log(`Number ${num} is Odd`);
}
console.log("************Task3**************");
let reverseString = (str) => {
  console.log("Reverse String is");
  for (let i = str.length; i >= 0; i--) {
    console.log(str[i]);
  }
};
reverseString("Hello How Are you");

console.log("************Task4**************");
let calculateFactorial = (num1) => {
  let fact = 1;
  for (let i = 1; i <= num1; i++) {
    fact = fact * i;
  }
  return fact;
};
let num1 = 5;
console.log(`Factorial of a Number is ${num1} is ${calculateFactorial(num1)}`);

console.log("************Task5**************");
let convertTemperature=(Celsius)=>{
    Fahrenheit = (Celsius * 9/5) + 32;
    return Fahrenheit;
}
let Celcsius=94.5;
console.log(`Temperature in Farhenhiet is ${convertTemperature(Celcsius)}`);

console.log("************Task6**************");
let countVowels = (str) => {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(`Number of vowels in a string is ${countVowels("AeIoU")}`);
