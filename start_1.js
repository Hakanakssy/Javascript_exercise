// document.write("Hello World")
// console.log("hello World")
// console.log({name:"hakan", surname: "aksoy"});
// console.clear();


// let a=5;
// let b=15;
// console.log("Yaptığın şeyler bunlar zaten: "+ (a+b))
// console.clear();

console.log(window); // bu olaya bir gözat

/// alrt (uyarı) popup ile çıktı verme işlemi//
//alert("Canım bu deneme ses yabma")


document.write(""); //bu sayfa içerisinde çıktı almanı sağlar
console.log(""); //konsoldan çıktı almanı sağlar
//alert(""); //chrome alarmından çıktı almanı sağlar bu çocuk tehlikeli aga

//*** ÇOKOMELLİ window>document
/* ÇOKOMELLİ2 window objesi içinde yer alan fonksiyonlara ulaşmadan önce 'window.xxx' yazmaya gerek yoktur fakat document objesi içerisinde yer alan fonksiyonlara ulaşmak için 'documnt.xxx' yazmaya gerek vardır. */

 //VAR - LET - CONST
  /* scope: dşrekt çevirisi kapsam demektir. java ve javascript' te kodların yazıldığı yerdir

  ->Global Scope: bir veriyi, herhangi bir parantezin içerisinde yazmadığımızda ve ona her scope dan ulaşabildiğimizde taşıdığı isim.
  ->Function Scope: bir veriyi, bir fonksiyon içerisinde yazdığımızda ve ona yalnızca o fonksiyon scope' u içerisinde erişebildiğimizde taşıdığı addır.
  ->Block Scope: bir veriyi, örneğin bir döngü(for, while, if-else vb.) içerisinde tanımladığımızda ve ona yalnızca o dar kapsamlı scope içerisinde ulaşbildiğimiz taşıdğı addır.

  */
//!! Java scriptte değişken tanımlarken veri tipini belirtmenize gerek yoktur!!
/* değişken nasıl tanımlanur;
var/let/const veri_adi = deger; */

// var ile tanımlanan her değişken function scope erişimine sahiptir. Yani 'var' ile tanımlanan değer block scope dahi olsa o değere funciton içerisinde istenilen yerden erişlebilir.
// * 'var' Ram bellekte çok fazla yer kaplar.
// * 'let/const' block scope özelliğine sahiptir.

// function Selamcanims() {
//     var selam = 4;

//     if (selam==4) {
//         var selam="bu olay güzel";
//         console.log(selam)
//     } else {
//         console.log(selam)
//     }
// }

// Selamcanims();

/* ________________________________DAY 2______________________________________*/

// var a = 5;       //? bu örnekte bir değişkene birden fazla kere farklı değerler atanarak
// var a = 10;      //? değişken değeri değiştirildi ve 'var' kullanıldığı için sorun oluşmadı
// console.log(a);

// let a = 5;    //? Bu örnekte yukarıdaki işlem yapılmaya çalışıldı fakat 'let' bir veriyi
// let a = 10;   //? birden fazla kez tanımlanmasına izin vermediği için işlem olmadı.
// console.log(a)

  // *TODO
  // *TODO          |    Scope     | Tekrar tanımlama | Değer değiştirme | Hoisting |
  // *TODO    ______|______________|__________________|__________________|__________|
  // *TODO    Var   |   Funciton   |        V         |         V        |     V    |
  // *TODO    ______|______________|__________________|__________________|__________|
  // *TODO    Let   |   Block      |        X         |         V        |     X    |
  // *TODO    ______|______________|__________________|__________________|__________|
  // *TODO    Const |   Block      |        X         |         X        |     X    |
  // *TODO    ______|______________|__________________|__________________|__________|
  // *TODO
  // * Const: (Constant)  sabit anlamına gelir türkçede.
  //? Hoisting nedir? Bir değişken tanımlaması sırasında tanımlanan değişken için hafızada yer açar. Javascriptte yalnızca 'var' şeklinde tanımlanan değerler, kendisinden önce değerle ilgili iş yapılmasına müsaade eder. Yani yalnızca 'var' hoistinge uygundur.

/*
___________Veri Tipleri____________

1- String       "" içerisinde yazılan sayıalr bile string yani metin veri tipidir. Matematiksel işlemler sağlıklı çalışmaz
2- Number       5, 5.0, 5,0 gibi sayılar bu veri tipinde işlem görür
3- Boolean      true, false olarak iki ayrı elemanı vardır. İf-else gibi mantıksal olaylarda kullanılır
4- Null         boş, içerisine veri atanmamış fakat ram bellekte yer açmak için kullanılır çünkü daha sonra veri ataması yapılabilir.
5- Undefined    tanımlanmamış demektir. (Derste çok üstünde durmadı.)
6- Object       {} arasında tanımlanır. //TODO: ( Detaylı anlatımı ilerleyen derslerde gelicek )
7- Function     let/var/const isim= function() {...} şeklinde söz dizimi vardır. //TODO: ( Detaylı anlatımı ilerleyen derslerde g...)

İle Javascriptte toplam 7 (yedi) tane veri tipi vardır.
Bir değerin verin veri tipini görmek için ise;

let isim = "Hakan";
console.log(typeof isim);    şeklinde bir kod parçacığı ile veri tipi öğrenilebilir.    (typeof anahtar kelime!!)


*/

/*
_____________________________DAY 3___________________________________

Aritmetik operatörler:

 +   TOPLAMA
 -   ÇIKARMA
 *   ÇARPMA
 /   BÖLME
 %   MOD
 ++  1 ARTTIR
 --  1 EKSİLT
 **  ÜS ALMA
 = ----------> BU ATAMA OPERATÖRÜ
 ==   EŞİTTİR **console.log(3=="3"); kod parçasında geriye true değeri çevirir çünkü veri tipine bakmaz içerideki değere bakar.
 ===  EŞİTTİR **console.log(3=="3"); kod parçasında geriye false değeri çevirir çünkü hem değere hem de veri tipine bakar.
 +=   KENDİSİNE EKLE
 -=   KENDİSİNDEN EKSİLT
 *=   KENDİSİ İLE ÇARP
 /=   KENDİSİNE BÖL
 %=   KENDİSİNE MODUNU AL
 **=  KENDİSİNİN KUVVETİNİ AL

Mantiksal Operatörler:

 &&: AND (ve)
 ||: OR (ya da)
 !: Değil

Karşılaştırma Operatörleri

 != : eşit değil mi?
 <  : küçüktür
 >  : büyüktür
 >= : büyük eşit
 <= : küçük eşit

ALT + SHİFT + F = KODLARI DOBARLA

        ---------DİYALOG KUTULARI----------

  - Alert
  - Promt :  KULLANICIDAN DEĞER ALIR GERİYE STRİNG OLARAK DÖNDÜRÜR
  - Confirm : tamam VEYA iptal Seçenekleri verir bunlar sırasıyla true ve ya false döndürürler.

  **Üçü de window objesidir. Başına bir şey yazmadan kullanabilirsin.

*/
   // prompt ("İsmini gir:"); burada değeri aldı ama geri döndürmedi
   /*-----*/
      // let ornek= prompt();  burada 1453 değerini girdim ve 
      // alert(typeof ornek);  burada 1453 değerini string olarak döndürdü 
  
//DAY 5      /* __________________ İF - Else _____________________________*/

//if - else syntax
if (null) {
  
}
 else{

 }

// if - else if - if syntax 

if (null) {
  
}

else if (null) {
  
}

else{

}

/*
if= "eğer" sözcüğüne karşılık geliyor diyebiliriz ve tanımladığımız koşula bağlı olarak program if' in block scope unda veya kendisinden sonra gelen komuta devam eder 

else if = 2 den fazla seçenek varsa kullanılır ve kendisinden önce gelen seçenek olumsuz sonuçlandıysa çalışan block scope dur.

else = kendisinden önce bulunan else if veya if koşulunun sağlanmaması halinde çalışan block scope dur.


*/

// çoklu if yapısı syntax 

if (null) {
  
}
if (null) {
  
}
if (null) {
  
}
else {
  
} // bu olayı else if 'den ayıran özelliği kendisinden önce gelen if koşulu pozitif bile olsa program diğer if koşullarını da denetleyerek sağlayanları çalıştıracaktır.

/*
_________________________________DAY 6__________________________________

SWİCH-CASE 
if-else gibi koşul sağlayan durumlarda program akışını yönledirir fakat buradaki fark switch-case koşullu dalanmasında, switch (koşul) ifadesinde yer alan koşulun belirli durumlar var ise kullanırız. Yani dar ve spesifik koşullarımız ve durumlarda kullanırız. Tanımlandığımız koşul durumlarından (null_1, null_2,...) herhangi birisinin sağlanmaması durumunda program default koşulundan akmaya devam edecektir.
!Eğer case lerde break tanımlanmazsa kendinden sonra gelen case' e devam eder bu durumu istemeyiz.

*/

switch (null) {
  case null_1:

    break;

  case null_2:

    break;

  case null_3:

    break;

  default:

    break;
}

/*
_________________________________DAY 7__________________________________

TÜR DÖNÜŞÜMLERİ:

--Bu tipler primitive
String: String(), toString() ile arrayler, number tipler ve boolean tipleri çevrebilir
Number: Number(), parseInt(), parseFloat() ile yalnızca rakamlar çevrilerbilir arrayler çevrilirse NaN hatası alınır. //NaN: Not a Number  
Boolean
Undefined
Null

2 tip dönüşüm var bunlar Number() veya parseInt()
uygulanışı;

*/
let a = "5"; //burada değeri string tipinde tanımladı
console.log(typeof a); //tanımlanan değerin veri tipini görmek için ekrana bastırdık
a=Number(a); // burada Number() kullanarak veri tipini number yaptık
console.log(typeof a); // değiştirdiğimiz veri tipini ekrana bastırdık bu sayede sonucu gördük.

let b = "5"; //burada değeri string tipinde tanımladı
console.log(typeof a); //tanımlanan değerin veri tipini görmek için ekrana bastırdık
a=parseInt(a); // burada parseInt() kullanarak veri tipini number yaptık
console.log(typeof a); // değiştirdiğimiz veri tipini ekrana bastırdık bu sayede sonucu gördük.

/*

--Bu tipler non-primitive
object
function

*/

/* ToolTip:
Kod yazarken gelen hızlı tamamlama kutucuğunda bir komutun üstüne gelince açılan ve kısaca o komutun açılmasını veren büyük bir veli nimettir.
 
Breakpoint (Debugger): debugger anahtar kelimesi ile çalışır ve eklendiği yerden itibaren adım adım işler. Tarayıcı geliştirme panelinde kaynaklar sekmesinden F10 a basılarak komutlar adım adım çalışıtılır.

*/


/* 
___________________________________DÖNGÜLER_____________________________________

1- For
2- While
3- Do-While
4- ForEach (Dizilerde kulllanılır.)


*/
 
// for döngüsü syntax

for (let index = 0; index < array.length; index++) {
  
}

// while döngüsü syntax

while (null) {
  
  //kodlar

  //döngü kırıcı komut. Döngü kırıcı komut sayesinde programın çalışmasını sağlayan döngüyü değiştirerek programın sonsuz döngüye girmesi engellenir.

}

// do while döngüsü syntax

do {
  
} 
while (null); // olay ne olursa olsun bir kere döner !!!!

/* 
BREAK ve CONTİNUE : 

break: döngüyü kıran ve devam eden program

continue: döngüyü 1 defaya mahsus kıran (pas geçme diyebiliriz.) programdır.


*/

/* 
_______________________METODLAR______________________
*/


function isim () {
  //kodlar     
}

isim();
/*
syntax ı yukarıdaki gibidir. yukarıdaki parametsiz ve geriye değer döndürmeyen bir metoddur.
metodlar yukarıda olduğu gibi metod ismi ile çağrılır.
*/

function name(deger1, deger2) {
  console.log(deger1+" "+deger2);
}
name("Hakan","Aksoy");
/*
yukarıda değer girilen "name" adında bir metod oluşturdum. Alt satırda ise metodun ihtiyacı olan değerleri metodu çağırırken verdim ve çıktısını "Hakan Aksoy" olucaktır.

parametre tenımlanırken değişkenler gibi önüne var, let, const değerleri tanımlanmaz  
*/

let donendeger = cube(3);

function cube(sayi) {
  let sonuc=sayi**3;
  return sonuc;
}

/* yukarıda da parametreli ve dönen değerli bir metod yazdım. Burada değer döndüren ise "return" anahtar kelimesi. Return anahtar kelimesinden sonra metod içine yazılan komutlar okunmaz çünkü return kodu bitirir. Geriye değer döndürmeyen metodlara "void" metodlar denir.
 */  