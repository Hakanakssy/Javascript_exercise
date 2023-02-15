const nl = "\n";
let gun = prompt("Günler: " + nl + "1-Pazartesi" + nl + "2-Salı" + nl + "3-Çarşamba" + nl + "4-Perşembe" + nl + "5-Cuma" + nl + "6-Cumartesi" + nl + "7-Pazar");

switch (gun) {
    case "1":
            alert("Pazartesi");
        break;
    case "2":
            alert("Salı");
        break;
    case "3":
            alert("Çarşamba");
        break;
    case "4":
            alert("Perşembe");
        break;
    case "5":
            alert("Cuma");
        break;
    case "6":
            alert("Cumartesi");
        break;
    case "7":
            alert("Pazar");
        break;

    default:
        alert("Bir hafta 7 günden oluşur lütfen yalnızca 1-7 arasında bir değer giriniz!");
        break;
}