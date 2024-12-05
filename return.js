function add1(n1, n2) {
    return n1+n2;
}

function add2(n1, n2) {
    let sum = n1+n2;
    console.log(n1+"+"+n2+"="+sum);
}

let answer = add1(3, 5);
console.log(answer); // Muestra: 8

let answer = add2(3, 5);
console.log(answer);
