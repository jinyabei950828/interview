const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let lines = []

rl.on("line",line=>{
    lines.push(line)
    if(lines.length==2){
        const boxes = lines[0].split(",").map(Number)
        const len = parseInt(lines[1])
        console.log(getResult(boxes,len))
        lines.length = 0
    }
})

function getResult(boxes,len){
    const lastIdx = {}
    const find = new Set()
    let ans = -1

    for(let i=0;i<boxes.length;i++){
        const num = boxes[i]

        if(find.has(num))continue;
        if(lastIdx[num]!=undefined&&i-lastIdx[num]<=len){
            find.add(num)
            ans = ans==-1?lastIdx[num]:Math.min(ans,lastIdx[num])
        }else{
            lastIdx[num]= i
        }
    }
    return ans
}