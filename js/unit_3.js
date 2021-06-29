function f1(x, y) {
  return x + y;
}

function f2() {
  return 5;
}

f2();
console.log(5 + f2());
console.log(11 + 5 + 3 + f1(4, 5));
console.log(f1(6, 7) + f1(4, 5));

function randInt(min, max) {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  return rand;
}

let r = randInt(222, 333);

console.log(r);

console.log(randInt(220, 250));

console.log(f1(100, 200));

document.querySelector(".out-1").textContent = f1(120, 300);
document.querySelector(".out-1").style.background = "rgb(23,156,201)";
document.querySelector(".out-1").style.background = `rgb(
${randInt(0, 255)},
${randInt(0, 255)},
${randInt(0, 255)})`;

console.log(100 * f1(3, 4));

//----------------------

let btn = document.querySelector(".b-3");

btn.addEventListener("click", function () {
  let str = document.querySelector(".i-3");
  let out = document.querySelector(".out-3");

  out.innerHTML = "Hello " + clearText(str.value);
  console.log("Hello " + str.valu);

  str.value = "";
});

function clearText(data) {
  return data.trim().toLowerCase();
}

//----------------------

function indexOfEmul(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
}

let result = indexOfEmul([22, 33, 44, 55], 333);
console.log(result);

//----------------------

let btn4 = document.querySelector(".b-4");
btn4.addEventListener("click", function () {
  let year = document.querySelector(".i-4").value;

  if (isNaN(year)) return alert("Error");
  if (year <= 0) return;

  document.querySelector(".out-4").innerHTML = 2021 - year;
});

//----------------------

console.group("example 5");

const arr5 = [
  [3, 4, 5],
  [6, 7, 8, 2],
];

function t5() {
  let s = 0;
  for (let i = 0; i < arr5.length; i++) {
    s += sum(arr5[i]);
  }
  return s;
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(t5());

console.groupEnd();

// --------------------

console.group("example 6");

function t6() {
  let a = 88;
  return a;
}

console.log(t6());

console.groupEnd();

// --------------------

console.group("example 7");

let arr7 = [
  [3, 4, 5],
  [6, 7, 9],
  [7, 7, 1],
  [2, 2],
];
let evenArr7 = arr7.filter(function (item) {
  return sum(item) % 2 === 0;
});

console.log(evenArr7);

console.groupEnd();

// --------------

function t8() {
  return sum;
}

let s8 = t8();
console.log(s8);

console.log(s8([10, 20, 30]));
