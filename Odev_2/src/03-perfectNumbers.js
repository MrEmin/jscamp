/*
3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
*/

let total = 0;

for (let i = 0; i <= 1000; i++) {
    for (let j = 1; j <= i; j++) {
        if(i % j == 0){
            total += j;
        }
    }
    
    if(total == (i * 2)){
        console.log(i);
    }
    total = 0;
}