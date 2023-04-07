const prompt = require('prompt-sync')();

a = 3; //! değiştir
b = 4;  //! değiştir
hata= 0.0001;
let mutlakHata = Math.abs(a - b);

function f(x) {  //! değiştir
    fx = ((Math.log(x))+x-5);
    return fx;
}

function hataRegulaFalsi() {
    do { // Hata toleransına ulaşılıncaya kadar işlemi tekrarlayalım
        fa = f(a);
        fb = f(b);

        x = (a * fb - b * fa) / (fb - fa);
        fx = f(x);

        if ((fx < 0 && fa > 0) || (fx > 0 && fa < 0)) {
            a = x;
            fa = fx;
        } else {
            b = x;
            fb = fx;
        }
        console.log(`${iterasyon}. iterasyon: \t\ta: ${a}\t\tb: ${b}\t\tkök: ${x}\t\thata: ${mutlakHata}\n`)
        mutlakHata = Math.abs(a - b);
    } while (mutlakHata > hata)

    return x; // Yaklaşık kökü döndürür
}

function adimla() {
   
    const adim = prompt(`Adım sayısını girin: `);
    for (let i = 0; i < adim; i++) {
        fa = f(a);
        fb = f(b);

        x = (a * fb - b * fa) / (fb - fa);
        fx = f(x);

        if ((fx < 0 && fa > 0) || (fx > 0 && fa < 0)) {
            a = x;
            fa = fx;
        } else {
            b = x;
            fb = fx;
        }
        mutlakHata = Math.abs(a - b); //! değiştir
        console.log(`${i + 1}. iterasyon: \t\ta: ${a}\t\tb: ${b}\t\tkök: ${x}\t\thata: ${mutlakHata}\n`)
        // bagilHata = Math.abs((a-b)/a);
        // console.log(`${iterasyon}. iterasyon: \t\ta: ${a}\t\tb: ${b}\t\tkök: ${x}\t\thata: ${bagilHata}\n`)
    }
    x = (a * fb - b * fa) / (fb - fa);
    console.log(`Kök: ${x}`)
}

adimla()
//hataRegulaFalsi()