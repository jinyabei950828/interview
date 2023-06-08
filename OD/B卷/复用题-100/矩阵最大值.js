const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
let n 
rl.on("line",line=>{
    lines.push(line)
    if(lines.length==1){
        n = lines[0]-0
    }
    if(n&&lines.length==n+1){
        lines.shift()
        const matrix = lines.map((line)=>line.split(",").map(Number))
        console.log(getResult(n,matrix))
        lines.length = 0
    }
})

function getResult(n,matrix){
    let ans = 0
    for(let i=0;i<matrix.length;i++){
        let max = parseInt(matrix[i].join(""),2)
        for(let j=0;j<n;j++){
            matrix[i].unshift(matrix[i].pop())
            max = Math.max(max,parseInt(matrix[i].join(""),2))
        }
        ans+=max
    }
    return ans
}