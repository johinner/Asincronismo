let llamados = 1
sum = (num1, num2) => {
return num1 + num2;
}
//console.log(sum(5,5));

function calc(num1, num2, callback){
    return callback(num1, num2);
}
//console.log(calc(5,llamados,sum));

// setInterval(function(){
//     console.log('llamando ' + calc(0, llamados , sum));
//     llamados++
// },2000)

setTimeout(function(){
    console.log('llamando ' + calc(0, llamados , sum));
    llamados++
},2000)
