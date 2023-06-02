const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on("line",line=>{
    lines.push(line)

    if(lines.length==2){
        const nums = lines[0].split(",").map(Number)
        const bag = lines[1]-0
        console.log(getResult(nums,bag))
        lines.length = 0
    }
})

function getResult(nums,bag){
    const n = nums.length

    const dp = new Array(n+1).fill(0).map(()=>new Array(bag+1).fill(0))
    dp[0][0] = 1

    for(let i = 1;i<=n;i++){
        //接待数
        const num = nums[i-1]
        for(let j=0;j<=bag;j++){
            //实际容量小于可接待数
            if(j<num){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = dp[i-1][j] + dp[i-1][j-num]
            }
        }
    }
    return dp[n][bag]
}

