const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let lines = []
let k,s

rl.on("line",line=>{
    lines.push(line)
    if(lines.length==2){
        k = parseInt(lines[0])
        s = lines[1]
    }

    if(k&&lines.length==k+2){
        lines.shift()
        lines.shift()
        const command = lines.map(str=>str.split(" "))

        console.log(getResult(s,command))
        lines.length = 0
    }
})

function getResult(s,commands){
    let curIdx = 0
    for(let [type,value] of commands){
        switch(type){
            case "FORWARD":
                curIdx+= parseInt(value)
                curIdx = Math.min(curIdx,s.length)
                break;
            case "BACKWARD":
                curIdx -=parseInt(value)
                curIdx = Math.max(curIdx,0)
                break;
            case "SEARCH-FORWARD":
                const i1 = s.indexOf(value,curIdx)
                if(i1!=-1) curIdx = i1
                break;
            case "SEARCH-BACKWARD":
                const i2 = s.lastIndexOf(value,curIdx)
                if(i2!=-1) curIdx = i2
                break;
            case "INSERT":
                let tmp = [...s]
                tmp.splice(curIdx,0,...value)
                s = tmp.join("")
                curIdx+= value.length
                break;
            case "REPLACE":
                let tmp1 = [...s]
                tmp1.splice(curIdx,value.length,...value)
                s = tmp1.join("")
                break;
            case "DELETE":
                let tmp2 = [...s]
                tmp2.splice(curIdx,parseInt(value))
                s = tmp2.join("")
                break;
        }
    }
    return s
}