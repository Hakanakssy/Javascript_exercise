let num=Number(prompt("faktoriyel alınacak sayıyı giriniz"));
let sayac=1;
for (let i = 1; i < num; i++) {
    sayac=sayac*i;
}
    console.log("Girdiğin sayının faktoriyeli: "+sayac+"\nGirdiğin sayı: "+num);