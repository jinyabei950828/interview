const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
let matrix;

rl.on("line",line=>{
    lines.push(line)

    if(line==""){
        matrix = lines.map(s=>[...s].map(Number))
        console.log(getResult(matrix))
        lines.length = 0
    }
})

let row,col
function getResult(matrix){
    //行数
    row = matrix.length;
    if(row==0)return 0
    col = matrix[0].length
    
    //记录最大价值数
    let ans = 0

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(matrix[i][j]>0){
                ans = Math.max(ans,dfs(i,j))
            }
        }
    }
    return ans
}

const offsets = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
]

function dfs(x,y){
    const stack = [[x,y]]
    let sum = 0

    while(stack.length>0){
        const [x,y] = stack.pop()
        sum+=matrix[x][y]
        matrix[x][y] = 0

        for(let offset of offsets){
            const newX = x + offset[0]
            const newY = y + offset[1]

            if(newX>=0&&newX<row&&newY>=0&&newY<col&&matrix[newX][newY]>0){
                stack.push([newX,newY])
            }
        }
    }
    return sum
}