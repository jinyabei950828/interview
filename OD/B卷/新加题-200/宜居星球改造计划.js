const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []

rl.on("line",line=>{
    if(line==""){
        const matrix = lines.map(arr=>arr.split(" "))
        console.log(getResult(matrix))
        lines.length = 0
    }else{
        lines.push(line)
    }
})

function getResult(matrix){
    const row = matrix.length
    const col = matrix[0].length
    //记录宜居取坐标位置
    let queue = []

    //记录可改造区数量
    let need = 0

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            switch(matrix[i][j]){
                case "YES":
                    queue.push([i,j])
                    break;
                case "NO":
                    need++;
                    break;
            }
        }
    }

    if(queue.length==0)return -1
    if(queue.length==row*col)return 0

    let day = 0
    const offsets = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]

    while(queue.length>0&&need>0){
        const newQueue = []
        for(let [x,y] of queue){
            for(let offset of offsets){
                const newX = x + offset[0]
                const newY = y + offset[1]

                if(newX>=0&&newX<row&&newY>=0&&newY<col&&"NO"==matrix[newX][newY]){
                    matrix[newX][newY] = "YES"
                    newQueue.push([newX,newY])
                    need--
                }
            }
        }
        day++
        queue = newQueue
    }
    if(need ==0)return day
    else return -1
}

