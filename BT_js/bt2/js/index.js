let inputNumberStr = window.prompt("Enter a number")
let inputNumber = Number(inputNumberStr)
while(Number.isNaN(inputNumber)){
    let inputNumberStr = window.prompt("Enter a number")
    let inputNumber = Number(inputNumberStr)
}
console.log("inputNumber: ",inputNumber)
for(let i=1; i < inputNumber+1; i++){
    console.log(i)
}