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

const testArray = [1, 2, 3, 4, 5, 6];
console.log(`test array = `, testArray);
console.log(`multiplies the numbers in test array =`, multiplyArrayNumbersTwo(testArray));

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

let { brand, model } = car;
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

console.log('sum = ', addParametersWithRest(10, 20, 30, 40, 50));

console.log("///////////////////////////////////////////////////////////////////////////////////////////");

/* Async-Await, Promise */

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

//fetchDataWithErrorHandling();


// Promise (Request, Response, State of Promise (Pending, Resolve, Reject))

const getData = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Status of promise resolved or fullfilled');
    }, 5000);
  });
}

const getDataError = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Status of promise is rejected');
    }, 5000);
  });
}

console.log('getData() => ', getData());

getData().then((response) => {
  console.log(response);
})


console.log('getDataErr() => ', getDataError());
getDataError().catch((err) => {
  console.log(err);
})

// Reject and Resolve both of them

const getCity = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof city === 'string') {
        resolve('Resolve City Data : ' + city);
      }
      else {
        reject('Enter string value for city');
      }
    }, 7000);
  });
}

getCity('Istanbul')
.then((response) => {
  console.log(response);
})
.catch((err) => {
  console.error(err);
})

// Promise Chain 

const addThree = (number) => {

  return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (typeof number === 'number') {
           resolve(number+3);
        } else {
          reject('Please enter number value');
        }
      },8000);
  });
}

addThree(15)
.then((response)=> {
  console.log(response);
  return response+3;
})
.then((res2)=> {
console.log(res2);
})
.catch(err => console.error('err'));


console.log("///////////////////////////////////////////////////////////////////////////////////////////");

// Fetch Api Text and JSON

const getText = () => {

  fetch('example.txt')
  .then((response) => {
   // console.log(response);
      return response.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
}

getText();


const getJson = () => {

  fetch('example.json')
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData)
    
  })
  .catch((err) => {
    console.error(err);
  })
}

getJson();

const getExternalApi = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
}

getExternalApi();

console.log("///////////////////////////////////////////////////////////////////////////////////////////");

// Fetch and Promise HTTP requests

class Request {
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  post(url, data) {
    return new Promise((resolve, reject)=>{
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })

  }

  put(url, data) {
    return new Promise((resolve, reject)=>{
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })

  }
}

// GET

const req1 = new Request();
let albums;
req1.get('https://jsonplaceholder.typicode.com/albums')
.then((data) => {
  albums = data;
  console.log(albums)
})
.catch(err => console.error(err));

// POST

let obj = {
  "userId": 101,
  "id": 101,
  "title": "Post test"
}
const req2 = new Request();
req2.post('https://jsonplaceholder.typicode.com/albums', obj)
.then(newAlbums => {
  console.log(' new albums = ',newAlbums)
})
.catch(err => console.error(err));

//PUT

const req3 = new Request();
req2.put('https://jsonplaceholder.typicode.com/albums/1', {
  "userId": 1,
  "title": "Put test"
})
.then(updateAlbums => {
  console.log(updateAlbums)
})
.catch(err => console.error(err));

