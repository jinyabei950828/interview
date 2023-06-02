const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on("line",line=>{
    lines.push(line)
    if(lines.length===3){
        const n = lines[0] - 0
        const position = lines[1].split(" ").map(Number)
        const m = lines[2] - 0

        console.log(getResult(n,position,m))
        lines.length = 0
    }
})

function getResult(n,position,m){
    position.sort((a,b)=>a-b)

    let min = 1
    let max = position [n-1]-position[0]
    let ans = 0

    while(min<=max){
        const mid = (min+max)>>1
        if(check(position,m,mid)){
            ans = mid
            min = mid + 1
        }else{
            max = mid -1
        }
    }
    return ans
}

function check(position,m,minDis){
    let count = 1
    let curPos = position[0]

    for(let i=1;i<position.length;i++){
        if(position[i]-curPos>=minDis){
            count++;
            curPos = position[i]
        }
    }
    return count>=m
}