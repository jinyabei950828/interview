const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin
})

const lines = []
let m,n;

rl.on('line',line=>{
    lines.push(line)

    if(lines.length===1){
        [m,n] = lines[0].split(" ").map(Number)
    }

    if(m&&lines.length==m+1){
        lines.shift()
        const matrix = lines.map(line=>line.split(" ").map(Number))
        console.log(getResult(matrix,m,n))
        lines.length = 0
    }
})

function getResult(matrix,m,n){
    let count = 0;

    const offsets = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]

    for(let x = 0;x<m;x++){
        for(let y=0;y<n;y++){
            if(matrix[x][y]===1){
                count++;
                continue;
            }

            for(let [offsetX,offsetY] of offsets){
                const newX = x + offsetX
                const newY = y + offsetY

                if(newX>=0&&newX<m&&newY>=0&&newY<n&&matrix[newX][newY]===1){
                    count++;
                    break;
                }
            }
        }
    }
    return count
}