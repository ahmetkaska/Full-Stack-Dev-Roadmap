/* 1-) ES6+ JavaScript Features */

/* Arrow Functions */

// Write a function that multiplies the numbers in an array by two and returns a new array.

const multiplyArrayNumbersTwo = (numbersArray) => {
    const newArray = [];
    for (let i = 0; i < numbersArray.length; i++) {
        newArray[i] = numbersArray[i] * 2;
    }
    return newArray;
}

const testArray = [1,2,3,4,5,6];
console.log(`test array = `, testArray);
console.log(`multiplies the numbers in test array =`,  multiplyArrayNumbersTwo(testArray));

console.log("///////////////////////////////////////////////////////////////////////////////////////////");

 // Use an Arrow Function to return the properties of an object.

 const car = new Object();

 car.brand = "Fiat";
 car.price = 3000;
 car.color = "blue";
 car.model = "2012";

const returnPropertiesOfObject = (obj) => {
    return `Brand : ${obj.brand}, Price : ${obj.price}, Color : ${obj.color}`
 }

 console.log(car);
 console.log(returnPropertiesOfObject(car));

 console.log("///////////////////////////////////////////////////////////////////////////////////////////");

 /* Destructing */

 // Extract multiple properties from an object and create a console output.

 let {brand, model} = car;
 console.log(brand, model);

 // Remove the first two elements from an array and assign them to different variables.

 let fruits = ['apple', 'peach', 'strawbery', 'pineapple', 'banana'];
 let [firstFruit, secondFruit] = fruits;

 console.log(`First Fruit : ${firstFruit}, Second Fruit : ${secondFruit}`);

 console.log("///////////////////////////////////////////////////////////////////////////////////////////");


 /* Template Literals */

 // Embed inside an HTML template using dynamic data.

 const link = ' <div> <p style="display:inline">Example Template Literals =></p> <a href="https://www.google.com.tr/" target="_blank" style="color:red"> Google </a></div> ';
 
 document.body.innerHTML += link;

 /* Spread and Rest Operators */

 // Copy an array and add new elements to it.

 let tempArray = [10, 20, 30, 40, 50];

 console.log([...tempArray, 60, 70, 80]);

 // Add the parameters of a function as an array, returning their sum.

 const addParametersWithRest = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
 }

 console.log('sum = ', addParametersWithRest(10,20,30,40,50));

 console.log("///////////////////////////////////////////////////////////////////////////////////////////");

 /* Async-Await */

 // Simulate an API call and print the result to the console.

 const mockApiCallWithError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("API error: Unable to fetch data!");
      }, 2000); 
    });
  };
  
  const fetchDataWithErrorHandling = async () => {
    try {
      console.log("Fetching data...");
      const result = await mockApiCallWithError(); 
      console.log(result);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  
  fetchDataWithErrorHandling();