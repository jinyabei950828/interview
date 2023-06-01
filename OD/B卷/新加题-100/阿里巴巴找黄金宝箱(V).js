const readline = require("readline")

const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout 
})

const lines = []

rl.on("line",(line)=>{
    lines.push(line)

    if(lines.length==2){
        const arr = lines[0].split(",").map(Number)
        const k = lines[1] - 0
        console.log(getResult(arr,k))
        lines.length = 0
    }
})

function getResult(arr,k){
    let window_sum = 0

    for(let i=0;i<k;i++){
        window_sum += arr[i]
    }

    let ans = window_sum

    for(let i=1;i<=arr.length-k;i++){
        window_sum -= arr[i-1]
        window_sum += arr[i+k-1]
        ans = Math.max(ans,window_sum)
    }
    return ans
}