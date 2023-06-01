const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
let n;
rl.on("line",line=>{
    lines.push(line)

    if(lines.length==1){
        n = lines[0] - 0
    }

    if(n&&lines.length == n+1){
        lines.shift()

        const arr = lines.map(Number)
        console.log(getResult(n,arr))

        lines.length = 0
    }
})

function  getResult(n,arr){
    //背包承重
    const bag = 1474560/512

    const dp = new Array(n+1).fill(0).map(()=>new Array(bag+1).fill(0))

    for(let i=1;i<=n;i++){
        //物品重量
        const weight = Math.ceil(arr[i-1]/512)
        //物品价值
        const worth = arr[i-1]
        for(let j = 0;j<=bag;j++){
            if(weight>j){
                dp[i][j] =dp[i-1][j]
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weight]+worth)
            }
        }
    }
    return dp[n][bag]
}