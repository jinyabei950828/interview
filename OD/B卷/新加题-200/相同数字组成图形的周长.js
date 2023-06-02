const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
//n个图形
let n;

rl.on("line",line=>{
    lines.push(line)

    if(lines.length==1){
        n = lines[0] -0
    }

    if(n&&lines.length == n+1){
        lines.shift()
        const tmp = lines.map(line=>line.split(" ").map(Number))
        console.log(getResult(tmp))
        lines.length = 0
    }
})

function getResult(lines){
    const ans = []
    //定义64*64
    const matrix = new Array(64).fill(0).map(()=>new Array(64).fill(0))

    //填充数字
    for(let line of lines){
        const num = line[0]

        for(let i=1;i<line.length;i+=2){
            const x = line[i]
            const y = line[i+1]
            matrix[x][y] = num
        }
    }

    const offsets = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]

    for(let line of lines){
        const num = line[0]
        let p =0

        for(let i=1;i<line.length;i+=2){
            const x = line[i]
            const y = line[i+1]

            for(let [offsetX,offsetY] of offsets){
                const newX = x + offsetX
                const newY = y + offsetY

                if(newX>=0&&newX<64&&newY>=0&&newY<64){
                    //如果不是图形值
                    if(matrix[newX][newY]!=num)p++
                }else{
                    p++
                }
            }
        }
        ans.push(p)
    }
    return ans.join(" ")
}

