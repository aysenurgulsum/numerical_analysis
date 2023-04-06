a = 1; //! değiştir
b = 2; //! değiştir
hata = 0.01; //! değiştir
let iterasyon = 0;
let mutlakHata = Math.abs(a - b);
let bagilHata = Math.abs((a - b) / a);

fa = f(a);
fb = f(b);

function f(x) {  //! değiştir
    fx = ((x**3)+ (4*(x**2))-10);
    return fx;
}

//! mutlak mı bağıl mı
function ikiyeBolmeMutlakHata() {
    do {
        fa = f(a);
        fb = f(b);

        x = (a + b) / 2;
        fx = f(x);

        if ((fx < 0 && fa > 0) || (fx > 0 && fa < 0)) {
            b = x;
        }
        else {
            a = x;
        }

        iterasyon++;

        console.log(`${iterasyon}. iterasyon: \t\ta: ${a}\t\tb: ${b}\t\tkök: ${x}\t\thata: ${mutlakHata}\n`)
        mutlakHata = Math.abs(a - b);
    }while (mutlakHata > hata)

    x = (a + b) / 2; // son alt aralıktaki kökü bulmak için
    console.log(`\nKök değeri: ${x}\tHata: ${hata}`);
}

function ikiyeBolmeBagilHata() {
    do {
        fa = f(a);
        fb = f(b);

        x = (a + b) / 2;
        fx = f(x)

        if ((fx < 0 && fa > 0) || (fx > 0 && fa < 0)) {
            b = x;
        }
        else {
            a = x;
        }

        iterasyon++;

        console.log(`${iterasyon}. iterasyon: \t\ta: ${a}\t\tb: ${b}\t\tkök: ${x}\t\thata: ${bagilHata}\n`)
        bagilHata = Math.abs((a - b) / x);
    }while (bagilHata > hata)

    x = (a + b) / 2; // son alt aralıktaki kökü bulmak için
    console.log(`\nKök değeri: ${x}`)
}
if ((fa * fb) < 0) {
    ikiyeBolmeMutlakHata();
    // ikiyeBolmeBagilHata();
}
else {
    console.log(`Kök yoktur.`)
}
