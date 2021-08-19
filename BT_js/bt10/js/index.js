let inputNumberStr = window.prompt("Enter a number")
let inputNumber = Number(inputNumberStr)
while (Number.isNaN(inputNumber)) {
    let inputNumberStr = window.prompt("Enter a number")
    let inputNumber = Number(inputNumberStr)
}

const check = (inputNumber) => {
    let temp = inputNumber
    let subnumber = temp
    let reverseNumber = ''
    do {
        subnumber = temp % 10
        temp = Math.floor(temp / 10)
        reverseNumber += subnumber
    } while (temp / 10 !== 0)

    if ((number) === Number(reverseNumber)) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}