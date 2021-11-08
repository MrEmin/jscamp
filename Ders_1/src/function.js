function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklenen ürün : " + productName + ", adet : " + quantity);
}

//addToCart()
//addToCart(10, "Yumurta")
addToCart(15)

//Arrow Function
let sayHello = () => {
    console.log("Hello World");
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2");
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

//encapsulation
let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

addToCart3(product1)

//Objeler referans tiptir.
//Referans numaraları eşitlenir ve product2 = product3 aynı veriyi kullanmış olur.
//Burda veri atama yapılmaz. Diğer verinin adresi atanmış olur.
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName);

//Sayısal tipler değer tiptir. Objeler ve arrayler ise referans tiptir. Stack ve Heap
//Değer tiplerde değeri atadığımız zaman olay biter.
//Sayı 1'in değeri eşittir sayı 2'nin değeri olur ve sayı 2'yle olan bağımız kopar. Bu olaya Stack denir.
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi1 = 100
console.log(sayi1);

//parametre yerine farklı bir şey yazarsak console.log(products) bir üstteki global alandaki isime bakar.
//Ama bu şekilde parametre ve console.log() ismi aynıysa, birbiriyle bağlantılıdır.
function addToCart4(products) {
    console.log(products);
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]
addToCart4(products)

function add(bisey,...numbers) { //rest operatörü, rest her zaman fonksiyonun sonuna bırakılır.
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total +numbers[i]
    }
    console.log(total);
    console.log(bisey);
}


add(20,30) //rest 20 ve 30'u array yapıp, numbers isminde kapsüller.
add(20,30,40)
add(20,30,40,50)

//Spread ayrıştırır. Rest toparlar.
let numbers = [30,10,500,600,120]
console.log(numbers);//array
console.log(...numbers);//array'i parçalar. Spread denir
//console.log(Math.max(...numbers));

//Destructuring
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri]] = [
    {name:"İç Anadolu", population : "20M"},
    {name:"Marmara", population : "30M"},
    {name:"Karadeniz", population : "10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

console.log(icAnadolu.name);
console.log(icAnadolu.population);
console.log(icAnadoluSehirleri);
console.log(marmaraSehirleri);

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);

//Ders 3

