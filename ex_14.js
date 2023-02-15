let s=prompt();

let re=[];
    let calc=-1;
    for (let i=0; i<s.length; i++){
        calc++;
    }

    if (s.charAt(0)==s.charAt(calc)) {
        console.log(`test durumu BAŞARILI: ${s}`);
    } else {
        console.log(`deneme başarısız ${calc}`);
    }
    