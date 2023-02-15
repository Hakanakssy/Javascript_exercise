let bakiye = 15000, dong=5, yat=0;
const nl = "\n";




for (let index = 0; index < dong; index++) {
    dong++;
    let sec = Number(prompt("1-Para Yatırma" + nl + "2-Para Çekme" + nl + "3- Bakiye Görüntüleme" + nl + "4-Çıkış"));
    switch (sec) {
        case 1:
            yat=Number(prompt("Yatıracağınız tutarı giriniz"));
            if (yat<=0 ) {
                alert("Lütfen geçerli bir değer giriniz");
            } else {
                bakiye+=yat;
            }
            break;
        case 2:
            yat=Number(prompt("Yatıracağınız tutarı giriniz"));
            if (yat>=0 ) {
                alert("Lütfen geçerli bir değer giriniz");
            } else {
                bakiye-=yat;
            }
            break;
        case 3:
            alert("Bakiyeniz: "+bakiye);
            break;
        case 4:
            alert("Sistemden Çıkış Yaptınız...");
            index=+dong+15;
            break;
    
        default:
            break;
    }


}