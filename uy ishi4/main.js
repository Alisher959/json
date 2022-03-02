let num = +prompt('nechta son kiritmoqhisiz? ');
let juft = [];
for (let i = 1; i <= num; i++) {
        a = +prompt(`${i}-sonni kiriting `);
        if (a%2==0) {
            juft.push(a);
        }
}
document.write(`ikkiga bo'linadigan sonlar: ${juft}`);