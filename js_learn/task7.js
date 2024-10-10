let n = parseInt(prompt("Введите максимальное число N",100));
for(i=0;i<=n;i++) {
    if(i % 3 == 0){
        console.log('Число'+' '+i+' '+'делится на 3');
    }else if( i % 5 == 0){
        console.log('Число'+' '+i+' '+'делится на 5');     
    }else{
        console.log('Число'+' '+i+' '+'не делится на 3 и на 5')
    }
}