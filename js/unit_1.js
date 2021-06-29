//function testfunc() {
//  const x = 5;
//  const y = 10;
//  console.log(x + y);
//}
//function hello() {
//  testfunc();
//  console.log("Hello");
//}

//function testFunc2() {
//  function t3() {
//    console.log("t 3 function");
//  }
//  t3();
//  console.log("test function -2");
//}

//hello();
//testFunc2();

//---------------------

function unixTime() {
  let time = Math.floor(new Date().getTime());
  console.log(time);
}

unixTime();

function randomInt() {
  const min = 100;
  const max = 200;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}

randomInt();
randomInt();

function randomInt() {
  console.log("random int 555");
}

randomInt();

//console.log(randomInt);

function rand(min, max) {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}

rand(100, 200);

function count() {
  let c = 9;
  c++;
  console.log(c);
}

count();
