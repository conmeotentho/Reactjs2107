let inputNumberStr = window.prompt("Enter a number")
// console.log("inputNumber: ",inputNumberStr)
let inputNumber = Number(inputNumberStr)
// console.log("inputNumber: ",inputNumber)
while(Number.isNaN(inputNumber)){
    let inputNumberStr = window.prompt("Enter a number")
    let inputNumber = Number(inputNumberStr)
}
console.log("inputNumber: ",inputNumber)
if(inputNumber<2){
    console.log(inputNumber," No")
}else if(inputNumber === 2){
    console.log(inputNumber," Yes")
}else{
    let check = false
    for(let i=2;i < Math.sqrt(inputNumber); i++){
        if(inputNumber % i === 0){
            console.log(i)
            check=true
            break;
        }
    }
    if(check){
        console.log(inputNumber," No")
    }
    else{
        console.log(inputNumber," Yes")
    }
}