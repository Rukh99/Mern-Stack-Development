 n= 25;

let isPerfectSquare = false;

for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
        isPerfectSquare = true;
        break;
    }
}

if (isPerfectSquare) {
    console.log(`${n} is a perfect square.`);
} else {
    console.log(`${n} is not a perfect square.`);
}