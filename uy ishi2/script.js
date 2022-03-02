let num = +prompt('sonni kirting ');
let toq = 1;
let juft = 0;
for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        juft += i;
    } else {
        toq *= i;
    }
}
document.write(`toq sonlar ko'paytmasi ${toq} <br>`);
document.write(`juft sonlar yig'indisi ${juft} `);