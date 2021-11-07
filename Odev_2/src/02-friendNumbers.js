/*
2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
*/

function friendNumber(num1, num2) {
    let num1Total = 0;
    let num2Total = 0;

    for (let i = 1; i < num1; i++) {
        if(num1 % i == 0){
            num1Total += i
        }
    }

    for (let j = 1; j < num2; j++) {
        if(num2 % j == 0){
            num2Total += j
        }
    }

    if(num1Total == num2 && num2Total == num1){
        console.log(num1 + " ve " + num2 + " sayısı arkadaş sayıdır.");
    }else {
        console.log(num1 + " ve " + num2 + " sayısı arkadaş sayı değildir.");
    }
}

friendNumber(220, 284)