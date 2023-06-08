const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on("line",line=>{
    lines.push(line)
    
    if(lines.length==2){
        const steps = lines[0].slice(1,-1).split(",").map(Number)
        const count = parseInt(lines[1])
        console.log(getResult(steps,count))
        lines.length = 0
    }
})

function getResult(steps,count){
    const map = {}

    for(let i=0;i<steps.length;i++){
        const step = steps[i]
        if(!map[step])map[step] = []
        map[step].push(i)
    }
    let minIdxSum = Infinity
    let ans = ''

    for(let step1 in map){
        let step2 = count - step1
        if(map[step2]){
            let idx1 = map[step1][0]
            let idx2 = map[step2][0]
            if(idx1==idx2){
                if(map[step2].length>=2)idx2=map[step2][1]
                else continue
            }
            const idxSum = idx1+idx2
            if(idxSum<minIdxSum){
                minIdxSum = idxSum
                ans = idx1<idx2?`[${step1}, ${step2}]`:`[${step2}, ${step1}]`
            };
        }
    }
    return ans
}