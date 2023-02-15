let metin = prompt("Arama yapılacak metni giriniz:");
let sayac=0;
let harf = prompt("Aranacak harfi giriniz:");

    function bul(harf) {
        for (let i = 0; i < metin.length; i++) {
            if (metin.charAt(i).toLowerCase()===harf.toLowerCase()) {
                sayac++
            }
            //toLowerCase metodu metindeki harfleri küçük hale getirir burada ise büyük küçük harf sorunu yaşamamak için kullandık.
        }
        console.log("burada "+sayac+" tane "+harf+" harfi bulunmaktadır.");
        if (sayac==0) {
            console.log("Girdiğiniz harf bu metnin içerisinde bulunmamaktadır.");
        }
    }
    bul(harf);