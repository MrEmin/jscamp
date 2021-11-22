console.log("Merhaba Kodlama.io");

let dolarBugun = 9.30;

let dolarDun = 9.20;
dolarDun = "9.20"

{
    let dolarDun = 9.10
}

console.log(dolarDun);

const euroDun = 11.2
//euroDun = 11

console.log(euroDun);

//array
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");
console.log(konutKredileri);

//3.gün notları
//javascript fonksiyonel bir dildir. Artık javascript'de oop yapısına uygun bir mimariye sahip.
// SOLID prensiplerine uyup, nesne yönelimli proglama ile sürdürülebilir bir alt yapı yapmamız lazım.
//ecmascript ile javascript'e dahil olan fonksiyonlar vardır. 3. derste bunları öğreniyoruz.
//component gerçek hayattaki ekrandır. UserService'i componente dahil ederiz. let userservice = new UserService ile.
//UserService metot havuzudur.
//Class'lar referans tiptir

//4.gün notları
//User temel sınıf (class) gibi, customer ise onun eklentili hali gibi.
//Fake data yaptık
//node modules kullandığımız için import eklendiğinde dosya ismine js uzantısı eklenmiyor, manuel olarak eklememiz lazım.
//