// let vize=Number (prompt());
// console.log(vize);
// let final=Number(prompt());
// console.log(final);

// let ort= (vize*0.4)+(final*0.6);
// console.log(ort);

// if (ort>=50) {
//     console.log("Helal bro geçtin");
// } else {
//     console.log("selam bütünleme");
// }

 function hakan() {
    //console.log("çalışıyor");
    let vize= document.getElementById("vize").value;
    let final= document.getElementById("final").value;

     let ort= (vize*0.4)+(final*0.6);
    //console.log(ort);

    if (ort>=50) {
        //console.log("Helal bro geçtin");
        document.getElementById("sonuc").innerHTML="Notunuz: " + ort +"<br> Geçtiniz tebrikler!!!";
    } else {
        document.getElementById("sonuc").innerHTML="Notunuz: " + ort +"<br> Kaldınız."
    }

    

 }