let boy = Number(prompt("Boyunuzu giriniz.(Metre cinsinden)"));
let kilo = Number(prompt("Kilonuzu giriniz."));

let vki= kilo/(boy*2);

if (vki<18.5) {
    alert("İdeal kilonun altında");
}
else if (24.9>vki && vki>18.5) {
    alert("İdeal kiloda ");
}
else if (29.9>vki && vki>25) {
    alert("İdeal kilonun üstünde");
}
else if (39.9>vki && vki>30) {
    alert("İdeal kilonun çok üstünde (Obez)");
}
else if (vki>40) {
    alert("İdeal kilonun çok üstünde (Morbid Obez)");
}
else{
    alert("sayı girmedin!!!")
}