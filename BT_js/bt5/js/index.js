let inputNumberStr = window.prompt("Enter a number")
let inputNumber = Number(inputNumberStr)
while(Number.isNaN(inputNumber)){
    let inputNumberStr = window.prompt("Enter a number")
    let inputNumber = Number(inputNumberStr)
}
console.log("inputNumber: ",inputNumber)
function isPrime(inputNumber){
    if(inputNumber <2){
        return false
    }
    for(let i=2;i<inputNumber+1;i++){
        if(inputNumber % i === 0){
            return false
        }
        return true
    }
}
for(let i=0;i<inputNumber+1;i++){
    if(isPrime(i)){
        console.log(i)
    }
}