//3. ders
//normalde bu veriller backend'den gelir.
let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:1, productName:"Bardak", quantity:2, unitPrice:30},
    {id:1, productName:"Kalem", quantity:1, unitPrice:20},
    {id:1, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:1, productName:"Kitap", quantity:3, unitPrice:30},
    {id:1, productName:"Pot", quantity:5, unitPrice:150},
]

//map fonksiyonu elenmanları tek tek dolaşır. Elemanlara tek tek takma isim verir. Burdaki takma isim product'tır. Sepeti dolaşır ve her bir product için yazdığımız hareketi yapar. React'te ise tıpkı bunun gibi ul li etiketleriyle yazarız.
console.log("<ul>");
cart.map(product=>{
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>");

//acc = accumulator. Genellikle acc kullanılır.
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total);

//Fiter fonksionuda oldukça fazla kullanılır. bir şeyi aramak için veya filtreleme yapmak için kullanılırız. Genellikle yeni array oluşturmak için kullanılır.
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2);

//durum yönetimine dikkat etmeliyiz = stage management. SPA = singel page application.

//angular ve vue, ekranda bir şey değiştiği zaman orayı yenilemez ama react'da bunu bizim belirtmemiz gerekiyor.
//sepete ekle dediğimizde bu fonksiyon çalışır.

//referans tip gönderdik. Cart'ı yolladığımızda cart'ın bellekteki adresini göndermiş oluruz.
function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart);

//burda ise değer tip var. Değer atanır ve iş biter. Bu yüzden console.log(sayi) çıktısı 10 döner.
let sayi = 10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi);

//Frontend teknolojilerinde bir şeyin referansını değiştirmemiz çok önemli.

