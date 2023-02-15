// let sayi = Number(prompt("Lütfen çarpacağınız sayıyı giriniz:"));
// let carp = Number(prompt("çarpacağınız sayıyı giriniz"));
let sayi, sonuc, carp = 1;

for (let sayi = 1; sayi <=10; sayi++) {


   for (let carp = 0; carp <= 10; carp++) {
    sonuc=sayi*carp;
    console.log(sayi+" x "+carp+" = "+sonuc);
    
   }
    console.log("___________________");
}