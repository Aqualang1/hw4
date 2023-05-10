// pt1

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// pt2

for (let i = 10; i <= 100; i += 10) {
    console.log(i * 27);
}

// pt3

let N = 320;

for (let i = 1; i <= 100; i++) {
    if (i * i < N) {
        console.log(i);
    }
}

// pt4

let n = +prompt('enter number to check');
let isPrime = true;

if (n <= 1) {
  isPrime = false;
}

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Number " + n + " is prime");
} else {
  console.log("Number " + n + " isn't prime");
}


// pt5

let num = +prompt('enter number');
let searchOfThree = 1;

for (let i = 0; searchOfThree <= num; i++) {
    if (searchOfThree === num) {
        console.log('yes, number of multiplications is ' + i);
        break;
    }
    searchOfThree *= 3;
}

if (searchOfThree > num) {
    console.log('no');
}