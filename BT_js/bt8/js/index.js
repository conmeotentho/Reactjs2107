let inputNumberStr = window.prompt("Enter a number")
let inputNumber = Number(inputNumberStr)
while(Number.isNaN(inputNumber)){
    let inputNumberStr = window.prompt("Enter a number")
    let inputNumber = Number(inputNumberStr)
}
console.log(inputNumber)

let result = 0
for(let i=1;i<=inputNumber;i++){
    let a = i%2
    if(a!=0){
        result += i
    }
}
console.log("tong cac so le la: ",result)