  let sayi =  15  //prompt("onluk sayınızı giriniz");
  let num=sayi;
  let kalan="";
  for (let i = 0; i < sayi; i++) {
    if (num<=0) {
        
        sayi=0;

    }
    else{
        kalan=kalan+" "+String(Math.floor(num%2));
        console.log(kalan);
        num=num/2;
    }
  }
  