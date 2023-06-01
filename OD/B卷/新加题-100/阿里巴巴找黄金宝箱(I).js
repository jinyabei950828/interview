const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",line=>{
    const arr = line.split(",").map(Number)
    console.log(getResult(arr))
})

function getResult(arr){
    let leftSum = 0
    let rightSum = arr.reduce((a,b)=>a+b) - arr[0]

    if(leftSum ==rightSum)return 0

    for(let i=1;i<arr.length;i++){
        leftSum += arr[i-1]
        rightSum -= arr[i]
        if(leftSum == rightSum)return i
    }

    return -1
}