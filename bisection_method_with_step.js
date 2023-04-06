const prompt = require('prompt-sync')();

const adim = prompt(`Adım sayısını girin: `);
//e^-x -sinx = 0  --0,1 aralığında
let a = 4 //! değiştir
let b = 4.5 //! değiştir
let x0;

fa = f(a); 
fb = f(b); 

function f(x) {  //! değiştir
    fx = (x - (Math.tan(x)));
    return fx;
}

function adimla() {
    for (let i = 0; i < adim; i++) {
        fa = f(a);
        fb = f(b);

        x = (a + b) / 2;
        fx = f(x);

        if ((fx < 0 && fa > 0) || (fx > 0 && fa < 0)) {
            b = x;
            x0 = a
        }
        else {
            a = x;
            x0 = b;
        }

        mutlakHata = Math.abs(a - b) / (2**i); //! değiştir
        console.log(`${i + 1}. iterasyon: \t\ta: ${a}\t\tb: ${b}\t\tkök: ${x}\t\thata: ${mutlakHata}\n`)

        // bagilHata = Math.abs((a-b)/a);
        // console.log(`${iterasyon}. iterasyon: \t\ta: ${a}\t\tb: ${b}\t\tkök: ${x}\t\thata: ${bagilHata}\n`)
    }
}

if ((fa * fb) < 0) {
    adimla();
    x = (a + b) / 2; // son alt aralıktaki kökü bulmak için
    console.log(`\nKök değeri: ${x}`)
}
else
    console.log(`Kök yoktur.`)
