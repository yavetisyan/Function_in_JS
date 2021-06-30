function sum(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

let btn1 = document.querySelector(".b1");
let btn2 = document.querySelector(".b2");
let btn3 = document.querySelector(".b3");

btn1.addEventListener("click", function () {
  let res = sum(23, 45);
  console.log(res);
});

btn1.addEventListener("click", () => {
  let res = sum(23, 15);
  console.log(res);
});

//---------------------

btn2.addEventListener("click", function () {
  let res = sum(23, 45);
  console.log(res);

  let res2 = multi(5, 9);
  console.log(res2);
});

btn2.addEventListener("click", () => {
  let res = sum(23, 45);
  console.log(res);

  let res2 = multi(5, 9);
  console.log(res2);
});

// callbak

const ar1 = [4, 5, 6, 7, 8];

function pow2(a) {
  return a ** 2;
}

const res1 = ar1.map(pow2);
console.log(res1);

const res2 = ar1.map(function (a) {
  return a ** 2;
});
console.log(res2);

const res3 = ar1.map((a) => {
  return a ** 2;
});
console.log(res3);

// ------------------------------

const res4 = ar1.map((a) => a ** 2);
console.log(res4);

// ------------------------------
const res5 = ar1.filter((index) => index % 2 === 0);

console.log(res5);

// ------------------------------
// arrow & this

btn3.addEventListener("click", function () {
  console.log(this);
});

btn3.addEventListener("click", () => {
  console.log(this);
});

// ------------------------------
// arrow & arguments

const f1 = (...arg) => {
  console.log(arg);
  console.log("work");
};

f1(99, 100);
