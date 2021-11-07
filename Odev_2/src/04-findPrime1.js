/*
4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/

let counter = 0;
for(let number = 2; number <= 1000; number++)
{
    let control = 0;
    for (let i = 2; i < number; i++)
    {
       if (number % i == 0)
        {
            control = 1;
            break;
        } 
    }
        
    if(control == 0)
    {
        console.log(number+"\n");
        counter++; 
    }
}