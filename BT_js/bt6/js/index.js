let inputNumberStr = window.prompt("Enter a number")
let inputNumber = Number(inputNumberStr)
while(Number.isNaN(inputNumber)){
    let inputNumberStr= window.prompt("Enter a number")
    let inputNumber = Number(inputNumberStr)
}
console.log("inputNumber: ",inputNumber)

let result=0
for(let i=1;i<=inputNumber;i++){
    result +=i
}
console.log("tong cac so la: ", result)