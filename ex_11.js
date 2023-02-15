// // armstrong sayısı basamaklarının küpünün toplamı sayının kendisine eşittir.

// let num= 500;
// let yuzler,kup100,onlar,kup10,birler,kup1, toplam;

//     for (let i = 0; i < num; i++) {
//         yuzler=Math.floor(i/100);
//         kup100=yuzler**3;
//         //console.log(kup100);

//         onlar=Math.floor((i%100)/10);
//         kup10=onlar**3;
//         //console.log(kup10);

//         birler=(i%100)%10;
//         kup1=birler**3;
//         //console.log(kup1);

//         toplam=kup100+kup10+kup1;
//             if (toplam==i) {
//                 console.log("sayı armstrong sayısıdır "+i);
//             }
//     }

let sayi=prompt("sayı gir");
let toplam=0, basamak;

for(let i=0 ; i<sayi.length; i++){
    basamak=sayi.charAt(i);
    //console.log(basamak);
    toplam=toplam+(basamak**3)
    //console.log(toplam);
}
if (toplam==sayi) {
    console.log("Bu sayı armstrong sayısıdır: "+toplam);
}

