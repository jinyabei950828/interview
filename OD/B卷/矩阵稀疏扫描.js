const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
let m,n;
rl.on("line",(line)=>{
    lines.push(line)
    if(lines.length==1){
        [m,n] = lines[0].split(" ").map(Number)
    }

    if(m&&lines.length==m+1){
        lines.shift()
        const matrix = lines.map((s)=>s.split(" ").map(Number))
        getResult(m,n,matrix)
        lines.length = 0
    }
})

function getResult(m,n,matrix){
    const rowZeroCount = new Array(m).fill(0)
    const colZeroCount = new Array(n).fill(0)

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0){
                rowZeroCount[i]++
                colZeroCount[j]++
            }
        }
    }
    console.log(rowZeroCount.filter(val=>val>=Math.floor(n/2)).length)
    console.log(colZeroCount.filter(val=>val>=Math.floor(m/2)).length)
}