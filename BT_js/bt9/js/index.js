let inputNumberStr = window.prompt("Enter a number")
let inputNumber = Number(inputNumberStr)
while(Number.isNaN(inputNumber)){
    let inputNumberStr = window.prompt("Enter a number")
    let inputNumber = Number(inputNumberStr)
}
console.log(inputNumber)

let check = true
for(let i=1;i<inputNumber;i++){
    if((inputNumber%10)%2 ===0){
        check=false
        break;
    }
    if(check){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
}