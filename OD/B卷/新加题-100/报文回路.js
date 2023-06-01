const redline = require("readline")

const rl = redline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
let n;

rl.on("line",line=>{
    lines.push(line)

    if(lines.length===1){
        n = lines[0] - 0
    }

    if(n&&lines.length==n+1){
        lines.shift()

        const trans = {}
        lines
            .map((line)=>line.split(" "))
            .forEach((arr)=>{
                const [send,receive] = arr
                if(!trans[send])trans[send] = new Set()
                if(!trans[receive])trans[receive] = new Set()
                trans[send].add(receive)
            })
        console.log(getResult(trans))
        lines.length = 0
    }
})

function getResult(trans){
    for(let send in trans){
        for(let receive of trans[send]){
            if(!trans[receive].has(send))return 'False'
        }
    }
    return 'True'
}