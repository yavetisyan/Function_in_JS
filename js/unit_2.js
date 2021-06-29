function showSum(elem, x, y) {
  document.querySelector(elem).textContent = x + y;
}

showSum(".out-2", 5, 6);

function showSum2(elem, x, y) {
  elem.textContent = x + y;
}

showSum(".out-1", 5, 6);
const out2 = document.querySelector(".out-2");
showSum2(out2, 5, 9);

function showSum3(x, y, elem = ".out-1") {
  document.querySelector(elem).textContent = x + y;
}

showSum3(10, 70);

function showSumAll() {
  console.log(arguments);

  //let sum = 0;
  //for (let i = 0; i < arguments.length; i++) {
  //  sum += arguments[i];
  //}

  let sum = Array.from(arguments).reduce((accum, item) => (accum += item));
  console.log(sum);
}

showSumAll(4, 5, 6, 20);

function showSumAll2(...args) {
  console.log(args);

  let sum = args.reduce((accum, item) => (accum += item));
  console.log(sum);
}

showSumAll2(4, 5, 6, 20);

//---------------------------------

function showAll(result) {
  document.querySelector(".out-1").innerHTML = `<h1>${result}</h1>`;
}

function showSumAll3(drawFunc, ...num) {
  drawFunc(num.join(" - "));
}

showSumAll3(showAll, 45, 55, 88, 400);
