const arr1 = [7, 4, 5, 6, 8];

const out1 = document.querySelector(".out-1");
const out2 = document.querySelector(".out-2");
const out3 = document.querySelector(".out-3");
const btn4 = document.querySelector(".btn-4");

function f1(arr, myFunc, block) {
  arr[3] = arr[3] * 2;
  //out1.innerHTML = arr1;
  myFunc(arr.join("*"), block);
}

function showArr(arr, block) {
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += arr[i];
  }
  block.innerHTML = out;
}

f1(arr1, showArr, out1);

// example callback

function squad(item) {
  return item ** 2;
}

//const arr2 = arr1.map(squad);
const arr2 = arr1.map((item) => item ** 2);

console.log(arr2);

showArr(arr2, out3);

// -----------------

btn4.addEventListener("click", () => {
  getUserName(fixUserName);
});

function getUserName(fixFunc) {
  const userName = document.querySelector(".inp");
  console.log(fixFunc(userName.value));
  userName.value = "";
}

function fixUserName(str) {
  return str.trim().toLowerCase();
}

//ancinxron callback function

//async function pageLoader(callback) {
//  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//  callback(data);
//}

//function pageLoader(callback) {
//  fetch("https://jsonplaceholder.typicode.com/todos/1")
//    .then((response) => response.json())
//    .then((json) => callback(json));
//}

//function getAJAX(data) {
//  console.log("Poslal zapros");
//  console.log("Otvet servera");
//  console.log(data);
//}

//pageLoader(getAJAX);

// ad callback

function pageLoader(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log("Poslal zapros");
      console.log("Otvet servera");
      console.log(json);
    });
}

pageLoader();
