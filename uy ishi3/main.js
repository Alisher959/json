// 2. Ixtiyoriy "n" ta sondan iborat arrayi olinsin. Shu arrayning ichidagi nechta juft va nechta toq son borligi aniqlansin.

let num = +prompt('nechta son kiritmoqhisiz? ');
let toq = [];
let juft = [];
for (let i = 1; i <= num; i++) {
        a = +prompt(`${i}-sonni kiriting `);
        if (a%2==0) {
            juft.push(a);
        }else{
            toq.push(a);
        }
}
document.write(`toq sonlar ${toq.length}ta: ${toq} <br>`);
document.write(`juft sonlar ${juft.length}ta: ${juft}`);