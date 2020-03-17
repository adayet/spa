// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
p = (b+c+h)/2
let a = () => p*Math.sqrt((p-b)*(p-c)*(p-h)) ;

console.log(`Pole trójkąta o bokach ${b}, ${c} oraz ${h} wynosi ${a()}.`);