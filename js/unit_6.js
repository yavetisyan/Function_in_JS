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
let out1 = document.querySelector(".out-1");

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
  sum1.call(btn2, 9, 4);
});
