// context

let count = 0;

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let out1 = document.querySelector(".out-1");
let out2 = document.querySelector(".out-2");
let out3 = document.querySelector(".out-3");
let out4 = document.querySelector(".out-4");

//btn1.addEventListener("click", f1);

//const f2 = () => {
//  console.log(count);
//  console.log(this);
//  this.textContent = count;
//  count++;
//};

//btn2.addEventListener("click", f2);

// ------------------
// call

//f1.call(btn1);
//f1.call(btn1);
//f1.call(btn2);

btn1.addEventListener("click", () => {
  f1.call(btn1);
});

function f3(count) {
  console.log(count);
  console.log(this);
  this.textContent = count;
}

btn3.addEventListener("click", () => {
  count++;
  f3.call(btn2, count);
});

function sum1(a, b) {
  this.innerHTML = a + b;
}

btn2.addEventListener("click", () => {
  sum1.call(out1, 9, 4);
  sum1.apply(out2, [15, 9]);
});

// bind

const f4 = f1.bind(out3);

f4();
f4();
f4();

btn4.addEventListener("click", f4);

const sum2 = sum1.bind(out4);
sum2(4, 5);
sum2(4, 15);
