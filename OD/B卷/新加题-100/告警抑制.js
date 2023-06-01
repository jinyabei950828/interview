const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
let n
rl.on("line",(line)=>{
    lines.push(line)

    if(lines.length==1){
        n = lines[0] - 0
    }

    if(n!==undefined&&lines.length==n+2){
        lines.shift()
        const alertLeft = lines.pop().split(" ")
        const relations = lines.map((str)=>str.split(" "))
        console.log(getResult(relations,alertLeft))
        lines.length = 0
    }
})

function getResult(relations,alertList){
    const fa = {}

    for(let [id1,id2] of relations){
        //记录下每个id抑制的集合
        if(!fa[id2])fa[id2] = new Set()
        fa[id2].add(id1)
    }

    const alertSet = new Set(alertList)

    const ans = []
    for(let id2 of alertList){
        //如果没有一直id2的更高级的告警，或者有抑制id2的更高级的告警，但是此高级告警没有出现再alertList列表中
        if(disjoint(alertSet,fa[id2])){
            ans.push(id2)
        }
    }
    return ans.join(" ")
}

function disjoint(set1,set2){
    if(!set1||!set2)return true
    for(let id1 of set1){
        if(set2.has(id1))return false
    }
    return true
}